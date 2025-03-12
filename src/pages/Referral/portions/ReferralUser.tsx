import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReferralCard from '../components/ReferralCard';
import userIcon from '../../../assets/icons/users.png';
import Dropdown from '../../../globalComponents/Dropdown';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import TableCan from '../../../globalComponents/table/TableCan';
import TransactionRow from '../components/TransactionRow';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';

const ReferralUser = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

  const table_th = ['Name', 'Referral', 'No of Trades', 'More'];

  const [table_tr, setTable_tr] = useState([
    {
      id: 1,
      name: 'Qamardeen',
      amount: '₦789,000',
      transactions: '24',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Alex',
      amount: '₦789,000',
      transactions: '24',
    },
    {
      id: 3,
      name: 'Sharon',
      amount: '₦789,000',
      transactions: '24',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Bella',
      amount: '₦789,000',
      transactions: '24',
    },
    {
      id: 5,
      name: 'Anita',
      amount: '₦789,000',
      transactions: '24',
    },
  ]);

  const handleSearch = (value: string) => {
    console.log(value);
  };

  const confirmDelete = (id: number) => {
    setSelectedUser(id);
    setShowConfirm(true);
  };

  const handleDelete = () => {
    setTable_tr(table_tr.filter((user) => user.id !== selectedUser));
    setShowConfirm(false);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </div>
          <h1 className="text-4xl font-bold">{username} Detail</h1>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <ReferralCard
          icon={userIcon}
          title="Total"
          subTitle={'Referrals'}
          value="5"
        />
        <ReferralCard
          icon={userIcon}
          title="Total"
          subTitle="Earned"
          value="₦45,000"
        />
        <ReferralCard
          title="Sign Up Bonus"
          subText1="Amount"
          subText2="Paid Out"
          value1="$23"
          value2="$10"
        />
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Users Referred</h1>
        <div className="mt-8 flex items-center justify-between gap-8">
          <Dropdown
            options={periodFilter.options}
            placeholder={periodFilter.placeholder}
            onChange={handleSearch}
            selected={periodFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
          <div className="flex  items-center gap-8">
            <Button navigationName="Export CSV" />
            <SearchFilter handleFunction={handleSearch} />
          </div>
        </div>
      </div>
      <div className="">
        <TableCan
          headerTr={table_th}
          dataTr={table_tr}
          TrName={(props) => <TransactionRow {...props} onDelete={confirmDelete} />}
        />
      </div>

      {showConfirm && (
        <ConfirmationPopup
          heading="Are you sure you want to delete this user?"
          confirmText="Delete"
          closeText="Cancel"
          confirmColor="bg-red-600"
          closeColor="bg-gray-600"
          onConfirm={handleDelete}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};

export default ReferralUser;