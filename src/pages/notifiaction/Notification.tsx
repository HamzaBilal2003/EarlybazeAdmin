import React, { useState } from 'react';
import Button from '../../globalComponents/Button';
import SearchFilter from '../../globalComponents/SearchFilter';
import Dropdown from '../../globalComponents/Dropdown';
import TableCan from '../../globalComponents/table/TableCan';
import NotificationRow from './components/NotificationRow';
import { Link } from 'react-router-dom';

interface TableData {
  id: number;
  name: string;
  notification: string;
  date: string;
}

const Notification = () => {
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

  const table_th = ['Name', 'Last Notification', 'Date', 'More'];

  const table_td: TableData[] = [
    {
      id: 1,
      name: 'Alucard',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 2,
      name: 'Alex',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 3,
      name: 'Susan',
      notification: 'Your transfer of 10 btc was successful',
      date: '01 - 01 - 24 / 11:23 AM',
    },
    {
      id: 4,
      name: 'Sasha',
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

  return (
    <>
      <div className='flex items-center justify-between mb-[100px]'>
        <h1 className='text-4xl chivo-bold'>Notifications</h1>
        <div className='flex items-center justify-end gap-4'>
          <Link to={'Banners'}>
            <button className='py-2 px-4 text-white bg-[#25AE7A] rounded-lg'>In-App Banner</button>
          </Link>
          <Link to={'inapp'}>
            <button className='py-2 px-4 text-white bg-[#25AE7A] rounded-lg'>In-App Notification</button>
          </Link>
        </div>
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
        <TableCan headerTr={table_th} dataTr={table_td} TrName={NotificationRow} />
      </div>
    </>
  );
};

export default Notification;