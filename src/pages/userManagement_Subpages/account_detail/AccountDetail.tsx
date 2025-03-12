import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProfileImg from './components/ProfileImg';
import ProfileDetail from './components/ProfileDetail';
import Dropdown from '../../../globalComponents/Dropdown';
import TableCan from '../../../globalComponents/table/TableCan';
import ActivityRow from './components/ActivityRow';
import EditProfileModal from './components/EditProfileModal';

interface ProfileDetails {
  name: string;
  email: string;
  phone: string;
  status: 'verified' | 'unverified';
  img: string;
  date_joined: string;
  total_amount_in_dollar: string;
  total_amount_in_naira: string;
  backgroundimg?: string;
}

interface Activity {
  message: string;
  timestamp: string;
}

const AccountDetail = () => {
  const [showeditmodel, setshoweditmodel] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  console.log('User IDs:', id);

  const profile_details: ProfileDetails = {
    name: 'John Doe',
    email: 'qamardeenladimeji@gmail.com',
    phone: '07033484845',
    status: 'verified',
    img: 'https://randomuser.me/api/portraits/men/42.jpg',
    date_joined: '12 - 12 - 2021',
    total_amount_in_dollar: '$24,242,242',
    total_amount_in_naira: '₦24,242,242',
  };

  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

  const table_th = ['activity', 'date'];
  const table_td: Activity= [
    {
      message: 'User Registered',
      timestamp: '12-10-24 11:26 AM',
    },
    {
      message: 'Crypto balance was added to $100 by Alex',
      timestamp: '12-10-24 11:24 AM',
    },
    {
      message: 'User changed password',
      timestamp: '12-10-24 11:24 AM',
    },
  ];

  const handleFilter = (value: string) => {
    console.log(value);
  };

  const onSubmit = (values: ProfileDetails) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </div>
          <h1 className="text-4xl ">User Details</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={`/user/management/customer/${profile_details.name}/bank/detail`}
            className="py-2 px-8 bg-green-600 rounded-lg"
          >
            Bank Details
          </Link>
          <button
            onClick={() => setshoweditmodel(true)}
            className="py-2 px-8 bg-green-600 rounded-lg"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-8 w-full mb-8">
        <div className="col-span-12 md:col-span-4">
          <ProfileImg
            name={profile_details.name}
            profileImg={profile_details.img}
            joinDate={profile_details.date_joined}
            backgroundimg={profile_details.backgroundimg}
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <ProfileDetail
            email={profile_details.email}
            phone={profile_details.phone}
            kycStatus={profile_details.status}
            cryptoWallet={profile_details.total_amount_in_dollar}
            nairaWallet={profile_details.total_amount_in_naira}
          />
        </div>
      </div>
      <h1 className="text-2xl chivo-bold mb-8 tracking-widest">Activities</h1>
      <div className="my-8">
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
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={table_td} TrName={ActivityRow} />
      </div>
      {showeditmodel && (
        <EditProfileModal
          closeModal={() => setshoweditmodel(false)}
          values={profile_details}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default AccountDetail;