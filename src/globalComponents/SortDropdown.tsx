import React, { useState, useEffect, useRef } from 'react';

interface Option {
  value: string;
  name: string;
}

interface SortDropdownProps {
  options: Option[];
  heading: string;
  handleOptionSelect: (option: Option) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  options,
  heading,
  handleOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOption = (option: Option) => {
    setSelectedOption(option.value);
    handleOptionSelect(option);
    setIsOpen(false);
    console.log(selectedOption, ' : From sortDropdown');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-dark-700 text-white border border-[#25AE7A] px-4 py-2 rounded-full"
      >
        <span className="flex items-center gap-2">
          <i className="opacity-50 bi bi-arrow-down-up"></i>
          <span>
            <span className="opacity-50">{heading}</span>
            {selectedOption && (
              <span className="text-[#25AE7A]">
                {' '}
                : {
                  options.find(opt => opt.value === selectedOption)?.name
                }
              </span>
            )}
          </span>
        </span>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'} pl-2 text-xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-theme-dark border border-gray-500 rounded-lg shadow-lg">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
                  selectedOption === option.value
                    ? 'text-green-400'
                    : 'text-white'
                }`}
                onClick={() => handleOption(option)}
              >
                <div
                  className={`p-1 rounded-full ${
                    selectedOption === option.value
                      ? 'border border-green-400'
                      : 'border border-white'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      selectedOption === option.value ? 'bg-green-400' : ''
                    }`}
                  ></div>
                </div>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;