import React, { useState, ReactNode } from 'react';
import Filter from '../../../globalComponents/Filter';
import CryptoPortion from './components/portions/CryptoPortion';
import NairaPortion from './components/portions/NairaPortion';

interface Tab {
  name: string;
  value: string;
  component: ReactNode;
}

const UserBalance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('crypto'); // Changed default to 'crypto' to match value
  const [portion, setPortion] = useState<ReactNode>(<CryptoPortion />);

  const tabs: Tab[] = [
    { name: 'Crypto', value: 'crypto', component: <CryptoPortion /> },
    { name: 'Naira', value: 'naira', component: <NairaPortion /> },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const selectedTab = tabs.find((tab) => tab.value === value);
    if (selectedTab) {
      setPortion(selectedTab.component);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <h1 className="text-4xl font-bold">Virtual Wallet</h1>
        <Filter
          tabs={tabs.map(tab => ({ name: tab.name, value: tab.value }))} // Pass only name and value to Filter
          activeTab={activeTab}
          handleValue={handleTabChange}
          tabPadding="3"
        />
      </div>
      <div className="mt-8">{portion}</div>
    </>
  );
};

export default UserBalance;