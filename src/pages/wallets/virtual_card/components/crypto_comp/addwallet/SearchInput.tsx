import React, { useState, ChangeEvent } from 'react';

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full">
      <i className="absolute left-4 top-1/2 transform -translate-y-1/2 bi bi-search text-gray-400"></i>
      <input
        type="text"
        className="w-full p-3 pl-10 rounded-lg text-white bg-green-950 outline-none border border-green-700 focus:border-green-500 transition"
        placeholder="Search mainnet"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;