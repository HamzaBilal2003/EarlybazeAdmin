import React, { useState } from 'react';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import TableCan from '../../../globalComponents/table/TableCan';
import Dropdown from '../../../globalComponents/Dropdown';
import ReferralRow from '../components/ReferralRow';
import ReferralSettingsModal from '../components/ReferralSettingsModal';
import ReferralCard from '../components/ReferralCard';
import userIcon from '../../../assets/icons/users.png';
import { Link } from 'react-router-dom';

const MarketPortion = () => {
  const [showModal, setShowModal] = useState(false);

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
      { value: '$', name: 'Dollar ($)' },
      { value: 'N', name: 'Naira (₦)' },
    ],
    selected: 'Currency',
    placeholder: 'Currency',
  };

  const table_th = [
    'Name',
    'No of Referrals',
    'Amount Earned',
    'Amount Withdrawn',
    'Referral Code',
    'More',
  ];

  const table_td = [
    {
      id: 1,
      name: 'Qamardeen',
      referrals: '50',
      earned: '₦789,000',
      balance: '₦789,000',
      referrer: 'Qamardeen 200',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Alex',
      referrals: '50',
      earned: '₦789,000',
      balance: '₦789,000',
      referrer: 'Qamardeen 200',
    },
    {
      id: 3,
      name: 'Sharon',
      referrals: '50',
      earned: '₦789,000',
      balance: '₦789,000',
      referrer: 'Qamardeen 200',
      img: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 4,
      name: 'Bella',
      referrals: '50',
      earned: '₦789,000',
      balance: '₦789,000',
      referrer: 'Qamardeen 200',
    },
    {
      id: 5,
      name: 'Anita',
      referrals: '50',
      earned: '₦789,000',
      balance: '₦789,000',
      referrer: 'Qamardeen 200',
      img: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  ];

  const handleFilter = (value: string) => {
    console.log(value);
  };

  const handleSettingsSubmit = (values: { percentage: number; amount: number }) => {
    console.log('Referral Settings Submitted: ', values);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ReferralCard
          icon={userIcon}
          title="Total"
          subTitle={'Referral Payout'}
          value="$25,000"
        />
        <ReferralCard
          icon={userIcon}
          title="Total"
          subTitle="Sign Up Bonus Payout"
          value="$12,600"
        />
        <ReferralCard
          icon={userIcon}
          title="Total"
          subTitle="users"
          value="3,500"
        />
      </div>
      <div className="flex items-center justify-between my-8">
        <h1 className="text-2xl">Payouts</h1>
        <Link to="marketing/payout/rule">
          <button className="py-2 px-4 text-white bg-[#25AE7A] rounded-lg">
            Set Bonus Rule
          </button>
        </Link>
      </div>

      <div className="mb-8 flex items-center justify-between gap-8">
        <div className="flex items-center gap-8">
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
            options={currencyFilter.options}
            placeholder={currencyFilter.placeholder}
            onChange={handleFilter}
            selected={currencyFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
        </div>
        <div className="flex items-center gap-8">
          <Button navigationName="Export CSV" />
          <SearchFilter handleFunction={handleFilter} />
        </div>
      </div>

      <div className="mt-8">
        <TableCan
          headerTr={table_th}
          dataTr={table_td}
          TrName={ReferralRow}
        />
      </div>

      {showModal && (
        <ReferralSettingsModal
          closeModal={() => setShowModal(false)}
          onSubmit={handleSettingsSubmit}
        />
      )}
    </>
  );
};

export default MarketPortion;