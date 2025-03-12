import React, { useState } from 'react';
import AddingButton from '../../globalComponents/AddingButton';
import { useNavigate } from 'react-router-dom';
import Filter from '../../globalComponents/Filter';
import Dropdown from '../../globalComponents/Dropdown';
import Button from '../../globalComponents/Button';
import SearchFilter from '../../globalComponents/SearchFilter';
import TableCan from '../../globalComponents/table/TableCan';
import TradeLimitRow from './components/kyc/TradeLimitRow';
import TradeLimitModel from './components/kyc/TradeLimitModel';

const TradeLimit = () => {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const onEdit = () => {
    setShowEditModal(true);
  };
  const tabs = [
    { value: 'all', name: 'all' },
    { value: 'verified', name: 'verified' },
    { value: 'unverified', name: 'unverified' },
  ];
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };
  const table_th = ['trade type', 'limit', 'timestamp', 'Status', 'more'];
  const table_td = [
    {
      tradeType: 'Buy',
      limit: '$2,000',
      timestamp: '01-01-24 11:23 AM',
      status: 'active',
      moreOptions: true,
    },
    {
      tradeType: 'Swap',
      limit: '$2,000',
      timestamp: '01-01-24 11:23 AM',
      status: 'active',
      moreOptions: true,
    },
    {
      tradeType: 'Send',
      limit: '$2,000',
      timestamp: '01-01-24 11:23 AM',
      status: 'active',
      moreOptions: true,
    },
    {
      tradeType: 'Withdraw',
      limit: '$2,000',
      timestamp: '01-01-24 11:23 AM',
      status: 'active',
      moreOptions: true,
    },
  ];

  const handleFilter = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigate(-1)}
            className="bi bi-chevron-left cursor-pointer text-xl rounded-lg border border-green-900 p-1 px-2 m-0"
          ></i>
          <h1 className="text-4xl font-bold pb-1">Trade Limits</h1>
        </div>
        <AddingButton title={'trade limits'} handlefunction={onEdit} />
      </div>
      <div className="mt-[100px]">
        <Filter tabs={tabs} activeTab={tabs[0].name} handleValue={handleFilter} />
      </div>
      <div className="flex items-center justify-between gap-8 mt-8">
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={handleFilter}
          selected={periodFilter.selected}
          borderColor={'[white]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
        />
        <div className="flex items-center gap-8">
          <Button navigationName="Export CSV" />
          <SearchFilter Placeholder="Search Users" handleFunction={handleFilter} />
        </div>
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={table_td} TrName={TradeLimitRow} />
      </div>
      {showEditModal && (
        <TradeLimitModel
          initialValues={editData}
          closeModal={() => setShowEditModal(false)}
          onSubmit={(updatedData) => {
            console.log('Updated data:', updatedData);
            setShowEditModal(false);
          }}
        />
      )}
    </>
  );
};

export default TradeLimit;