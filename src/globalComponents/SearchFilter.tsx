import React from "react";

interface SearchFilterProps {
  Icon?: React.ReactNode; // Corrected to React.ReactNode
  Placeholder?: string;
  className?: string;
  handleFunction?: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  Icon,
  Placeholder = "Search User",
  className = "text-gray-600",
  handleFunction = () => console.log("search button"),
}) => {
  return (
    <div className={`bg-theme-dark relative py-2 px-2 rounded-lg ${className}`}>
      <i className="bi bi-search text-2xl absolute top-1/2 left-3 transform -translate-y-1/2 block"></i>
      <input
        type="text"
        onChange={(e) => handleFunction(e.target.value)}
        className={`ml-9 bg-transparent pl-2 text-xl outline-none py-1 placeholder:text-gray-600 placeholder:text-base ${className}`}
        placeholder={Placeholder}
      />
    </div>
  );
};

export default SearchFilter;