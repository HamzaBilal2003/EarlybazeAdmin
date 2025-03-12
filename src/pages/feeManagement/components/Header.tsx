import React from 'react';
import Filter from '../../../globalComponents/Filter';
import { useLocation, useNavigate } from 'react-router-dom';

interface Tab {
  value: string;
  name: string;
  heading: string;
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getLastSegment = () => {
    const pathArray = location.pathname.split('/').filter((segment) => segment);
    return pathArray.length ? pathArray[pathArray.length - 1] : '';
  };

  const tabs: Tab[] = [
    { value: 'management', name: 'fee management', heading: 'fee management' },
    { value: 'exchangerate', name: 'exchange rate', heading: 'exchange rate' },
    { value: 'minimumtrade', name: 'minimum trade', heading: 'Minimun Trade' },
  ];

  const activeTab = tabs.find((tab) => tab.value === getLastSegment());

  const handleFilterValue = (value: string) => {
    navigate(`/fee/${value}`);
  };

  return (
    <div className="flex items-center justify-between gap-8">
      <h1 className="text-4xl font-bold">Fee Management</h1>
      <Filter
        tabs={tabs}
        activeTab={activeTab?.name || ''}
        handleValue={handleFilterValue}
      />
    </div>
  );
};

export default Header;