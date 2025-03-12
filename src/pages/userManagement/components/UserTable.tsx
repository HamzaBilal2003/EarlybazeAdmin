import React, { useState } from 'react';
import TableCan from '../../../globalComponents/table/TableCan';
import Filter from '../../../globalComponents/Filter';
import { users_table } from '../../../dummyData/Data';
import UserRow from './UserRow';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';

interface User {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  status: 'online' | 'offline';
  img?: string;
}

const UserTable = () => {
  const [usersData, setUsersData] = useState<User[]>(users_table);
  const filterData = (status: string) => {
    let filteredData = users_table.filter((item) => item.status === status);
    if (filteredData.length === 0) {
      setUsersData(users_table);
    } else {
      setUsersData(filteredData);
    }
  };

  const tabs = [
    { name: 'All', value: 'all' },
    { name: 'Online', value: 'online' },
    { name: 'Offline', value: 'offline' },
  ];

  const user_headerTr = ['Name', 'Email', 'Phone', 'Status', 'Action', 'More'];
  const handleSearch = (value: string) => {
    if (value === '') {
      setUsersData(users_table);
      return;
    }
    const filteredData = usersData.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase()) ||
        item.phone.toLowerCase().includes(value.toLowerCase())
    );
    setUsersData(filteredData);
  };
  return (
    <>
      <div className="mt-[50px] mb-6 flex lg:items-center gap-4 justify-between flex-col-reverse lg:flex-row">
        <Filter tabs={tabs} activeTab={tabs[0].name} handleValue={filterData} />
        <div className="flex items-center gap-2 justify-end">
          <Button navigationName="Export CSV" />
          <SearchFilter handleFunction={handleSearch} />
        </div>
      </div>
      <div>
        <TableCan
          headerTr={user_headerTr}
          dataTr={usersData}
          TrName={UserRow}
        />
      </div>
    </>
  );
};

export default UserTable;