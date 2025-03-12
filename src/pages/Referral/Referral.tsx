import React, { useState } from 'react';
import Filter from '../../globalComponents/Filter';
import ReferralProtion from './portions/ReferralProtion';
import MarketingPortion from './portions/MarketingPortion';

const Referral = () => {
  const [activeTab, setActiveTab] = useState('referral');
  const [portion, setPortion] = useState(<ReferralProtion />);
  const [heading, setHeading] = useState('referral management');

  const tabs = [
    { name: 'referral', value: 'referral management', component: <ReferralProtion /> },
    { name: 'marketing', value: 'marketing', component: <MarketingPortion /> },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const selectedTab = tabs.find((tab) => tab.value === value);
    if (selectedTab) {
      setHeading(value);
      setPortion(selectedTab.component);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <h1 className="text-2xl font-bold capitalize">{heading}</h1>
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

export default Referral;