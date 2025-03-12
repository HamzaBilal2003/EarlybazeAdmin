import React, { useState } from 'react';
import Wallet from '../../../assets/icons/Wallet.png';
import TotalCard from '../../../globalComponents/TotalCard';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import TableCan from '../../../globalComponents/table/TableCan';
import { useNavigate } from 'react-router-dom';
import SortDropdown from '../../../globalComponents/SortDropdown';
import NairaRow from '../components/NairaRow';

const TokenUser = () => {
  const navigate = useNavigate();

  const dashboard_cardValues = [
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'total user',
      subheading: 'Naira Wallets',
      cardValue: '500',
      valueStatus: true,
    },
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'total user',
      subheading: 'Balance',
      cardValue: 'N120,000,000',
    },
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'total user',
      subheading: 'Naira Wallet Transactions',
      cardValue: '2,575',
      valueStatus: true,
    },
  ];

  const sortOptions = [
    { value: 'highest', name: 'Highest' },
    { value: 'lowest', name: 'Lowest' },
  ];
  const tokenData = [
    { name: 'Alucard', balance: '0.00123 BTC', value: '2,56.34' },
    { name: 'Shawn', balance: '0.00123 BTC', value: '2,567.34' },
    { name: 'Mary', balance: '0.00123 BTC', value: '2,00.34' },
    { name: 'Alex', balance: '0.00123 BTC', value: '2,567.34' },
    { name: 'Adam', balance: '0.00123 BTC', value: '2,567.34' },
    { name: 'Chris', balance: '0.00123 BTC', value: '100.34' },
  ];
  const table_th = ['Name', 'Total Balance (N)', 'Action'];
  const [sortedData, setSortedData] = useState(tokenData);

  const handleSort = (sort: string) => {
    console.log(sort, ': from parent components');
    const sortedData = [...tokenData];
    if (sort === 'highest') {
      sortedData.sort(
        (a, b) =>
          parseFloat(b.value.replace('$', '').replace(',', '')) -
          parseFloat(a.value.replace('$', '').replace(',', ''))
      );
    } else if (sort === 'lowest') {
      sortedData.sort(
        (a, b) =>
          parseFloat(a.value.replace('$', '').replace(',', '')) -
          parseFloat(b.value.replace('$', '').replace(',', ''))
      );
    }
    setSortedData(sortedData);
  };
  const handleSearch = (search: string) => {
    console.log(search);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dashboard_cardValues.map((item, index) => {
          return (
            <TotalCard
              icon={item.icon}
              iconBg={item.iconBg}
              heading={item.heading}
              subheading={item.subheading}
              cardValue={item.cardValue}
              valueStatus={item.valueStatus}
              cardUnit={item.cardUnit}
              key={index}
            />
          );
        })}
      </div>
      <div className="mt-[80px] flex justify-between items-center gap-8">
        <SortDropdown
          options={sortOptions}
          heading={'Sort'}
          handleOptionSelect={handleSort}
        />
        <div className="flex items-center gap-8">
          <Button navigationName="Export CSV" />
          <SearchFilter handleFunction={handleSearch} />
        </div>
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={sortedData} TrName={NairaRow} />
      </div>
    </>
  );
};

export default TokenUser;