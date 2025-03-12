import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CvIcon from '../../../assets/icons/ReadCvLogo.png';
import Cardholder from '../../../assets/icons/Cardholder.png';
import TotalCard from '../../../globalComponents/TotalCard';
import Money from '../../../assets/icons/Money.png';
import Filter from '../../../globalComponents/Filter';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import Dropdown from '../../../globalComponents/Dropdown';
import TableCan from '../../../globalComponents/table/TableCan';
import AccountTransactionsRow from './components/rows/AccountTransactionsRow';
import SendTransactionsRow from './components/rows/SendTransactionsRow';
import { table_header_rows, table_body_rows } from './dummyData';
import ReceiveTransactionsRow from './components/rows/ReceiveTransactionsRow';
import BuyTransactionsRow from './components/rows/BuyTransactionsRow';
import SwapTransactionsRow from './components/rows/SwapTransactionsRow';
import WithdrawTransactionsRow from './components/rows/WithdrawTransactionsRow';

interface CardValue {
  icon: string;
  iconBg: string;
  heading: string;
  subheading: string;
  cardValue: string;
  valueStatus: boolean;
  cardUnit?: string;
}

interface FilterOption {
  value: string;
  name: string;
}

interface FilterProps {
  options: FilterOption[];
  selected: string;
  placeholder: string;
}

const AccountTransactions = () => {
  const [tableTh, settableTh] = useState(table_header_rows.all);
  const [tableBodyRow, settableBodyRow] = useState(table_body_rows.all);
  const [bodyRow, setbodyRow] = useState('all');
  const navigate = useNavigate();

  const transactions_cardValues: CardValue[] = [
    {
      icon: CvIcon,
      iconBg: 'bg-[#B95A12]',
      heading: 'total',
      subheading: 'transactions',
      cardValue: '2,000',
      valueStatus: false,
    },
    {
      icon: Cardholder,
      iconBg: 'bg-[#CA1919]',
      heading: 'total',
      subheading: 'wallets',
      cardValue: '10',
      valueStatus: true,
    },
    {
      icon: Money,
      iconBg: 'bg-[#78CA19]',
      heading: 'total',
      subheading: 'revenue',
      cardValue: '5,500',
      valueStatus: true,
      cardUnit: 'USD',
    },
  ];

  const tabs: FilterOption[] = [
    { value: 'all', name: 'all' },
    { value: 'send', name: 'send' },
    { value: 'receive', name: 'receive' },
    { value: 'buy', name: 'buy' },
    { value: 'swap', name: 'swap' },
    { value: 'withdraw', name: 'withdraw' },
  ];

  const periodFilter: FilterProps = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

  const statusFilter: FilterProps = {
    options: [
      { value: 'all', name: 'all' },
      { value: 'successful', name: 'successful' },
      { value: 'processing', name: 'processing' },
      { value: 'failed', name: 'failed' },
    ],
    selected: 'all',
    placeholder: 'all',
  };

  const typeFilter: FilterProps = {
    options: [
      { value: 'all', name: 'all' },
      { value: 'internal', name: 'internal' },
    ],
    selected: 'all',
    placeholder: 'all',
  };

  const handleCategory = (value: string) => {
    if (table_header_rows.hasOwnProperty(value)) {
      settableTh(table_header_rows[value]);
      settableBodyRow(table_body_rows[value] || []);
    }
    setbodyRow(value);
  };

  const handleFilter = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl text-white"></i>
          </button>
          <h1 className="text-4xl font-bold text-white">Transactions</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {transactions_cardValues.map((item, index) => (
          <TotalCard
            key={index}
            icon={item.icon}
            iconBg={item.iconBg}
            heading={item.heading}
            subheading={item.subheading}
            cardValue={item.cardValue}
            cardUnit={item.cardUnit}
            valueStatus={item.valueStatus}
          />
        ))}
      </div>
      <div className="my-8 flex items-center justify-between">
        <Filter tabs={tabs} activeTab={tabs[0].name} handleValue={handleCategory} />
        <div className="flex items-center gap-4">
          <Button navigationName="Export CSV" />
          <SearchFilter handleFunction={handleFilter} />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Dropdown
          options={statusFilter.options}
          placeholder={statusFilter.placeholder}
          onChange={handleFilter}
          selected={statusFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
          gap="4"
        />
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={handleFilter}
          selected={periodFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
          gap="4"
        />
        <Dropdown
          options={typeFilter.options}
          placeholder={typeFilter.placeholder}
          onChange={handleFilter}
          selected={typeFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
          gap="4"
        />
      </div>
      <div className="mt-8">
        <TableCan
          headerTr={tableTh}
          dataTr={tableBodyRow}
          TrName={
            bodyRow === 'all'
              ? AccountTransactionsRow
              : bodyRow === 'send'
              ? SendTransactionsRow
              : bodyRow === 'receive'
              ? ReceiveTransactionsRow
              : bodyRow === 'buy'
              ? BuyTransactionsRow
              : bodyRow === 'swap'
              ? SwapTransactionsRow
              : WithdrawTransactionsRow
          }
        />
      </div>
    </>
  );
};

export default AccountTransactions;