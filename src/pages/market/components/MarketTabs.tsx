import React from "react";

interface MarketTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs: string[] = ["All", "In progress", "Completed"];

const MarketTabs: React.FC<MarketTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 text-white my-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md transition-all ${
            activeTab === tab ? "bg-green-500 text-black" : "bg-[#031E11]"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default MarketTabs;