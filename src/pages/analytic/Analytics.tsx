import React, { useState } from 'react';
import Filter from '../../globalComponents/Filter';
import UsersPortions from './portions/UsersPortions';
import TransactionsPortions from './portions/TransactionsPortions';
import RevenuePortion from './portions/RevenuePortion';

interface Tab {
  name: string;
  value: string;
  component: JSX.Element;
}

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('Users');
  const [portion, setPortion] = useState<JSX.Element>(<UsersPortions />);

  const tabs: Tab[] = [
    { name: 'Users', value: 'users', component: <UsersPortions /> },
    { name: 'Transactions', value: 'transactions', component: <TransactionsPortions /> },
    { name: 'Revenue', value: 'revenue', component: <RevenuePortion /> },
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
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Analytics</h1>
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

export default Analytics;