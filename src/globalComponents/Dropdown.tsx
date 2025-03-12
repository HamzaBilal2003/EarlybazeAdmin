import React, { useState } from "react";

interface Option {
  value: string;
  name: string;
}

interface DropdownProps {
  options: Option[];
  selected: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  roundedValue?: string;
  position?: string;
  bgColor?: string;
  borderColor?: string;
  disabled?: boolean;
  paddingY?: string;
  gap?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  placeholder = "Select an option",
  roundedValue = 'lg',
  position = 'right-0',
  bgColor = 'transparent',
  borderColor = 'white',
  disabled = false,
  paddingY = '2',
  gap = '2'
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected || placeholder);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.name);
    onChange(option.value);
    setDropdownOpen(false);
  };

  return (
    <div
      className="relative dropdown w-fit"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        className={`flex items-center gap-${gap} capitalize px-4 py-${paddingY} border border-${borderColor} rounded-${roundedValue} bg-${bgColor} w-fit`}
        disabled={disabled}
      >
        {selectedOption}
        <i className="bi bi-caret-down-fill"></i>
      </button>
      {dropdownOpen && (
        <div className={`absolute z-10 min-w-32 ${position} border border-${borderColor} rounded-lg bg-${bgColor} shadow text-white overflow-hidden`}>
          {options.map((option) => (
            <button
              key={option.value}
              className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-green-300 hover:text-black capitalize"
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                  selectedOption === option.name ? "border-green-400" : "border-gray-500"
                }`}
              >
                {selectedOption === option.name && (
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                )}
              </span>
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;