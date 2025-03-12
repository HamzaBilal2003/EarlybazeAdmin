import React, { useState } from 'react';
import Filter from '../../globalComponents/Filter';
import Crypto from './portions/Crypto';
import Naira from './portions/Naira';

const UserBalance = () => {
  const [activeTab, setActiveTab] = useState('Crypto');
  const [portion, setPortion] = useState(<Crypto />);

  const tabs = [
    { name: 'Crypto', value: 'crypto', component: <Crypto /> },
    { name: 'Naira', value: 'naira', component: <Naira /> },
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
        <h1 className="text-2xl font-bold">User Balances</h1>
        <Filter
          tabs={tabs}
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