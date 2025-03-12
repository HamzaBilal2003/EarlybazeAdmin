import React, { useState } from 'react';
import Button from '../../globalComponents/Button';
import SearchFilter from '../../globalComponents/SearchFilter';
import Dropdown from '../../globalComponents/Dropdown';
import TableCan from '../../globalComponents/table/TableCan';
import Notification_UserRow from './components/Notification_UserRow';
import { useNavigate } from 'react-router-dom';
import SendNotificationModal from './components/SendNotification';

interface TableData {
  id: number;
  name: string;
  notification: string;
  date: string;
}

const Notification_User = () => {
  const navigate = useNavigate();
  const [showSendModel, setshowSendModel] = useState(false);
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

  const table_th = ['User', 'Message', 'Date', 'More'];

  const table_td: TableData[] = [
    {
      id: 1,
      name: 'Alucard',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 2,
      name: 'Alucard',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 3,
      name: 'Alucard',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 4,
      name: 'Alucard',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 5,
      name: 'Alucard',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
  ];

  const handleFilter = (value: string) => {
    console.log(value);
  };

  const handleNotificationSubmit = (values: any) => {
    console.log(values, ' : notification_user');
  };

  return (
    <>
      <div className='flex items-center justify-between mb-[100px]'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => navigate(-1)}
            className='flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]'
          >
            <i className="bi bi-chevron-left text-xl text-white"></i>
          </button>
          <h1 className='text-4xl font-bold text-white'>Notifications</h1>
        </div>
        <button className='py-2 px-4 text-white bg-[#25AE7A] rounded-lg' onClick={() => setshowSendModel(true)}>
          Send New
        </button>
      </div>

      <div className='mb-8 flex items-center justify-between gap-8 mt-8'>
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={handleFilter}
          selected={periodFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor='theme-dark'
          roundedValue='full'
          position='left-0'
          paddingY='2'
          gap='4'
        />
        <div className='flex items-center gap-8'>
          <Button navigationName='Export CSV' />
          <SearchFilter handleFunction={handleFilter} />
        </div>
      </div>

      <div className='mt-8'>
        <TableCan headerTr={table_th} dataTr={table_td} TrName={Notification_UserRow} />
      </div>
      {showSendModel && (
        <SendNotificationModal
          closeModal={() => setshowSendModel(false)}
          onSubmit={handleNotificationSubmit}
        />
      )}
    </>
  );
};

export default Notification_User;