import React, { useState, useEffect, useRef } from 'react';

interface Option {
  value: string;
  name: string;
}

interface SelectableProps {
  options: Option[];
  heading: string;
  handleOptionSelect: (option: Option) => void;
  style?: string;
}

const Selectable: React.FC<SelectableProps> = ({
  options,
  heading,
  handleOptionSelect,
  style,
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
    console.log(option, ' : From setectable');
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
    <div className="relative text-left w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex items-center gap-2 bg-dark-700 text-white border w-full border-[#25AE7A] px-4 py-2 rounded-lg bg-[#042619] ${style}`}
      >
        <span className="flex items-center gap-2 w-full">
          <span>
            {selectedOption ? (
              <span>{options.find(opt => opt.value === selectedOption)?.name}</span>
            ) : (
              <span className="text-nowrap">{heading}</span>
            )}
          </span>
        </span>
        <i className={`bi bi-chevron-${isOpen ? 'down' : 'right'} pl-2 text-xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-[#042619] border border-gray-500 rounded-lg shadow-lg z-50">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
                  selectedOption === option.value ? 'text-green-400' : 'text-white'
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

export default Selectable;