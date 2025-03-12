import React, { useState } from 'react';

interface Tab {
  name: string;
  value: string;
}

interface FilterProps {
  tabs: Tab[];
  handleValue: (value: string) => void;
  activeTab: string;
  tabPadding?: string;
}

const Filter: React.FC<FilterProps> = ({ tabs, handleValue, activeTab, tabPadding = '2' }) => {
  const [activeTabs, setactiveTabs] = useState(activeTab);

  const handleTabClick = (tab: Tab) => {
    handleValue(tab.value);
    setactiveTabs(tab.name);
  };

  return (
    <div className="flex items-center bg-theme-dark w-fit rounded-lg">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`capitalize py-${tabPadding} px-8 rounded-lg ${
            activeTabs === tab.name
              ? 'bg-[#00bd78] text-white'
              : 'bg-transparent text-gray-400 hover:text-white transition'
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;