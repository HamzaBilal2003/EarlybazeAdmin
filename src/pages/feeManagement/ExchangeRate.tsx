import React, { useState } from 'react';
import Filter from '../../globalComponents/Filter';
import Header from './components/Header';
import AddingButton from '../../globalComponents/AddingButton';
import Dropdown from '../../globalComponents/Dropdown';
import Button from '../../globalComponents/Button';
import SearchFilter from '../../globalComponents/SearchFilter';
import TableCan from '../../globalComponents/table/TableCan';
import { fee_management_data, FeeManagementData } from '../../dummyData/Data';
import FeeManagementRow from './components/FeeManagementRow';
import ExchangeRateModal from './components/ExchangeRateModal';

const ExchangeRate = () => {
  const [showFeemodel, setshowFeemodel] = useState(false);
  const tabs = [
    { value: 'buy', name: 'buy' },
    { value: 'swap', name: 'swap' },
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
  const currencyFilter = {
    options: [
      { value: 'dlr', name: 'Dollar ($)' },
      { value: 'Naira', name: 'Naira (N)' },
    ],
    selected: 'Currency',
    placeholder: 'Currency',
  };
  const table_th = ['charge', 'percentage', 'status', 'date', 'more'];
  const [fee_management, setfee_management] = useState<FeeManagementData[]>(fee_management_data.send);

  const handleFilter = (value: string) => {
    setfee_management(fee_management_data[value]);
  };
  const onSubmit = (values: { rate: number; status: string }) => {
    console.log(values);
  };
  return (
    <>
      <Header />
      <div className="flex justify-end items-center gap-4 mt-8">
        <AddingButton
          title="Add new fee"
          icon="bi bi-plus"
          handlefunction={() => setshowFeemodel(true)}
        />
      </div>
      <div className="mt-8">
        <Filter tabs={tabs} activeTab={tabs[0].name} handleValue={handleFilter} />
      </div>
      <div className="mt-8 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
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
          <Dropdown
            options={currencyFilter.options}
            placeholder={currencyFilter.placeholder}
            onChange={handleFilter}
            selected={currencyFilter.selected}
            borderColor={'[white]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button navigationName="Export CSV" />
          <SearchFilter Placeholder="Search for fee" handleFunction={handleFilter} />
        </div>
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={fee_management} TrName={FeeManagementRow} />
      </div>
      {showFeemodel && (
        <ExchangeRateModal closeModal={() => setshowFeemodel(false)} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default ExchangeRate;