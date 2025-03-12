import React from 'react';
import AddingButton from '../../globalComponents/AddingButton';
import { useNavigate } from 'react-router-dom';
import kycIcon from '../../assets/icons/kycIcon.png';
import TotalCard from '../../globalComponents/TotalCard';
import Filter from '../../globalComponents/Filter';
import Dropdown from '../../globalComponents/Dropdown';
import Button from '../../globalComponents/Button';
import SearchFilter from '../../globalComponents/SearchFilter';
import TableCan from '../../globalComponents/table/TableCan';
import KycRow from './components/kyc/KycRow';

const Kyc = () => {
  const navigate = useNavigate();
  const Trade_button = () => {
    navigate('/kyc&compliance/kyc/Trade/limit');
  };
  const dashboard_cardValues = [
    {
      icon: kycIcon,
      iconBg: 'bg-[#2B12B9]',
      heading: 'total',
      subheading: 'users',
      cardValue: '2,000',
      valueStatus: false,
    },
    {
      icon: kycIcon,
      iconBg: 'bg-[#2B12B9]',
      heading: 'total',
      subheading: 'verified users',
      cardValue: '1,000',
      valueStatus: false,
    },
    {
      icon: kycIcon,
      iconBg: 'bg-[#2B12B9]',
      heading: 'total',
      subheading: 'unverified users',
      cardValue: '1,000',
      valueStatus: false,
    },
  ];
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
  const table_th = ['img', 'first & last name', 'DOB', 'address', 'timestamp', 'status', 'more'];
  const table_td = [
    {
      firstName: 'Qamardeen',
      lastName: 'AbdulMalik',
      dob: '14-07-1980',
      address: 'No 1, abcd street off dcef boulevard Ikeja',
      timestamp: '01 - 01 - 24\n11:23 AM',
      status: 'active',
    },
    {
      firstName: 'Cole',
      lastName: 'Palmer',
      dob: '14-07-1980',
      address: 'No 1, abcd street off dcef boulevard Ikeja',
      timestamp: '01 - 01 - 24\n11:23 AM',
      status: 'active',
    },
    {
      firstName: 'Sam',
      lastName: 'Kerr',
      dob: '14-07-1980',
      address: 'No 1, abcd street off dcef boulevard Ikeja',
      timestamp: '01 - 01 - 24\n11:23 AM',
      status: 'active',
    },
    {
      firstName: 'Guro',
      lastName: 'Reiten',
      dob: '14-07-1980',
      address: 'No 1, abcd street off dcef boulevard Ikeja',
      timestamp: '01 - 01 - 24\n11:23 AM',
      status: 'active',
    },
    {
      firstName: 'Adebisi',
      lastName: 'Lateefat',
      dob: '14-07-1980',
      address: 'No 1, abcd street off dcef boulevard Ikeja',
      timestamp: '01 - 01 - 24\n11:23 AM',
      status: 'active',
    },
  ];

  const hanldeFilter = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <h1 className="text-4xl font-bold">KYC</h1>
        <AddingButton title="Trade Limit" handlefunction={Trade_button} />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <div className="mt-8">
        <Filter tabs={tabs} activeTab={tabs[0].name} handleValue={hanldeFilter} />
      </div>
      <div className="flex items-center justify-between mt-8 gap-8">
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={hanldeFilter}
          selected={periodFilter.selected}
          borderColor={'[white]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
        />
        <div className="flex items-center gap-4">
          <Button navigationName="export csv" />
          <SearchFilter handleFunction={hanldeFilter} />
        </div>
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={table_td} TrName={KycRow} />
      </div>
    </>
  );
};

export default Kyc;