import React from 'react';
import Wallet from '../../../../../assets/icons/Wallet.png';
import TotalCard from '../../../../../globalComponents/TotalCard';
import Dropdown from '../../../../../globalComponents/Dropdown';
import Button from '../../../../../globalComponents/Button';
import SearchFilter from '../../../../../globalComponents/SearchFilter';
import TableCan from '../../../../../globalComponents/table/TableCan';
import CryptoPortionRow from '../crypto_comp/CryptoPortionRow';

interface CardData {
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

interface Filter {
  options: FilterOption[];
  selected: string;
  placeholder: string;
}

interface TableData {
  id: number;
  name: string;
  walletCount: number;
  totalFunds: string;
  mostActive: string;
  status: string;
}

const CryptoPortion: React.FC = () => {
  const cardData: CardData[] = [
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'total',
      subheading: 'wallets',
      cardValue: '1,750',
      valueStatus: true,
    },
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'active',
      subheading: 'wallets',
      cardValue: '25,000',
      valueStatus: true,
    },
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'inactive',
      subheading: 'wallets',
      cardValue: '750',
      valueStatus: true,
    },
  ];

  const statusFilter: Filter = {
    options: [
      { value: 'all', name: 'all' },
      { value: 'active', name: 'active' },
      { value: 'inactive', name: 'inactive' },
      { value: 'frozen', name: 'frozen' },
    ],
    selected: 'all',
    placeholder: 'all',
  };

  const tableHeaders = ['Name', 'No of Wallets', 'Total Funds', 'Most Active', 'Status', 'Action', 'More'];

  const tableBodys: TableData[] = [
    {
      id: 1,
      name: 'Alucard',
      walletCount: 24,
      totalFunds: '$12,500',
      mostActive: 'BTC',
      status: 'online',
    },
    {
      id: 2,
      name: 'Alex',
      walletCount: 24,
      totalFunds: '$12,500',
      mostActive: 'BTC',
      status: 'online',
    },
    {
      id: 3,
      name: 'Susan',
      walletCount: 24,
      totalFunds: '$12,500',
      mostActive: 'BTC',
      status: 'online',
    },
    {
      id: 4,
      name: 'Sharon',
      walletCount: 24,
      totalFunds: '$12,500',
      mostActive: 'BTC',
      status: 'offline',
    },
    {
      id: 5,
      name: 'Adam',
      walletCount: 24,
      totalFunds: '$12,500',
      mostActive: 'BTC',
      status: 'online',
    },
    {
      id: 6,
      name: 'Peter',
      walletCount: 24,
      totalFunds: '$12,500',
      mostActive: 'BTC',
      status: 'offline',
    },
  ];

  const handleFilter = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((item, index) => (
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
        ))}
      </div>
      <div className="flex items-center justify-between gap-8 my-8 mt-20">
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
        <div className="flex items-center gap-4">
          <Button navigationName="export CSV" />
          <SearchFilter handleFunction={handleFilter} />
        </div>
      </div>
      <div className="">
        <TableCan headerTr={tableHeaders} dataTr={tableBodys} TrName={CryptoPortionRow} />
      </div>
    </>
  );
};

export default CryptoPortion;