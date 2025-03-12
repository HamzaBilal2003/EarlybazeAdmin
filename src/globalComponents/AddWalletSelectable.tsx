import React, { useState, useEffect, useRef } from 'react';

interface Option {
  value: string;
  name: string;
}

interface AddWalletSelectableProps {
  options: Option[];
  heading: string;
  selectedValue: string | null;
  handleOptionSelect: (value: string) => void;
  style?: string;
}

const AddWalletSelectable: React.FC<AddWalletSelectableProps> = ({
  options,
  heading,
  selectedValue,
  handleOptionSelect,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOption = (option: Option) => {
    handleOptionSelect(option.value);
    setIsOpen(false);
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
        onClick={toggleDropdown}
        className={`flex items-center gap-2 bg-dark-700 text-white border w-full border-[#25AE7A] px-4 py-2 rounded-lg bg-[#042619] ${style}`}
      >
        <span className="flex items-center gap-2 w-full">
          <span>
            {selectedValue
              ? options.find((option) => option.value === selectedValue)?.name
              : heading}
          </span>
        </span>
        <i className={`bi bi-chevron-${isOpen ? 'down' : 'right'} pl-2 text-xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-[#042619] border border-gray-500 rounded-lg shadow-lg">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
                  selectedValue === option.value ? 'text-green-400' : 'text-white'
                }`}
                onClick={() => handleOption(option)}
              >
                <input
                  type="radio"
                  checked={selectedValue === option.value}
                  readOnly
                  className="mr-2"
                />
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddWalletSelectable;