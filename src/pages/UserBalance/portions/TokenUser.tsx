import React, { useState } from 'react';
import wallet_image from '../../../assets/icons/Wallet.png';
import TotalCard from '../../../globalComponents/TotalCard';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import TableCan from '../../../globalComponents/table/TableCan';
import { useNavigate, useParams } from 'react-router-dom';
import SortDropdown from '../../../globalComponents/SortDropdown';
import TokenHolderTr from '../components/TokenHolderTr';

const TokenUser = () => {
  const { tokenName } = useParams();
  const navigate = useNavigate();

  const dashboard_cardValues = [
    {
      icon: wallet_image,
      iconBg: 'bg-[#CA1919]',
      heading: 'total',
      subheading: 'Wallets',
      cardValue: '120',
      valueStatus: true,
    },
    {
      icon: wallet_image,
      iconBg: 'bg-[#CA1919]',
      heading: 'total Bitcoin',
      subheading: 'Balance in USD',
      cardValue: '1000',
      valueStatus: true,
    },
    {
      icon: wallet_image,
      iconBg: 'bg-[#CA1919]',
      heading: 'total user',
      subheading: 'Balance in NGN',
      cardValue: '27,750',
      valueStatus: true,
    },
  ];

  const sortOptions = [
    { value: 'highest', name: 'Highest' },
    { value: 'lowest', name: 'Lowest' },
  ];
  const tokenData = [
    { name: 'Alucard', balance: '0.00123 BTC', value: '$2,56.34' },
    { name: 'Shawn', balance: '0.00123 BTC', value: '$2,567.34' },
    { name: 'Mary', balance: '0.00123 BTC', value: '$2,00.34' },
    { name: 'Alex', balance: '0.00123 BTC', value: '$2,567.34' },
    { name: 'Adam', balance: '0.00123 BTC', value: '$2,567.34' },
    { name: 'Chris', balance: '0.00123 BTC', value: '$100.34' },
  ];
  const table_th = ['Name', 'Total BTC Balance', 'Total Balance ($)', 'Action'];
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
      <div className="flex items-center gap-4 mb-8">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
        >
          <i className="bi bi-chevron-left text-xl"></i>
        </div>
        <h1 className="text-4xl font-bold">{tokenName} Balance</h1>
      </div>
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
        <TableCan headerTr={table_th} dataTr={sortedData} TrName={TokenHolderTr} />
      </div>
    </>
  );
};

export default TokenUser;