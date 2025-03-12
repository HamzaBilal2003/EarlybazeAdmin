import React, { useState } from 'react'
import AdminIcon from '../../../assets/icons/Admin.png'
import TotalCard from '../../../globalComponents/TotalCard'
import Filter from '../../../globalComponents/Filter';
import TableCan from '../../../globalComponents/table/TableCan';
import AdminRow from '../components/Admin/AdminRow';
import Dropdown from '../../../globalComponents/Dropdown';
import SearchFilter from '../../../globalComponents/SearchFilter';
import { Link } from 'react-router-dom';

const Admin = () => {
  const dashboard_cardValues = [
    {
      icon: AdminIcon,
      iconBg: "bg-[#2B12B9]",
      heading: "total",
      subheading: "Admins",
      cardValue: "5",
    },
    {
      icon: AdminIcon,
      iconBg: "bg-[#2B12B9]",
      heading: "online",
      subheading: "Admins",
      cardValue: "3",
    },
    {
      icon: AdminIcon,
      iconBg: "bg-[#2B12B9]",
      heading: "offline",
      subheading: "Admins",
      cardValue: "2",
    },
  ];
  const tabs = [
    { value: 'all', name: 'all' },
    { value: 'active', name: 'online' },
    { value: 'inactive', name: 'offline' },
  ]
  const table_th = [
    'name',
    'role',
    'revenue',
    'data joined',
    'Status',
    'more'
  ]
  const table_tr = [
    {
      "id": 1,
      "name": "Alex 1",
      "role": "Admin",
      "amount": "$2,500",
      "date": "01-01-25/03:22 PM",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Alex 2",
      "role": "Admin",
      "amount": "$2,500",
      "date": "01-01-25/03:22 PM",
      "status": "active"
    },
    {
      "id": 3,
      "name": "Alex 3",
      "role": "Admin",
      "amount": "$2,500",
      "date": "01-01-25/03:22 PM",
      "status": "active"
    },
    {
      "id": 4,
      "name": "Alex 4",
      "role": "Admin",
      "amount": "$2,500",
      "date": "01-01-25/03:22 PM",
      "status": "active"
    },
    {
      "id": 5,
      "name": "Alex 5",
      "role": "Super Admin",
      "amount": "$2,500",
      "date": "01-01-25/03:22 PM",
      "status": "active"
    }
  ]
  const [adminData, setAdminData] = useState(table_tr)
  const handleStatus = (status) => {
    console.log(status)
    let filterdata = table_tr.filter(
      item => 
        item.status === status || 
      item.role.toLowerCase().replace(" ", '') === status ||
      item.name.toLowerCase() === status
    );
    // if the filterdata is empty 
    if (filterdata.length === 0) {
      setAdminData(table_tr);
      console.log(adminData)
    } else {
      setAdminData(filterdata);
    }
  }
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period'
  }
  const roleFilter = {
    options: [
      { value: 'superadmin', name: 'Super admin' },
      { value: 'admin', name: 'admin' },
      { value: 'owner', name: 'owner' },
    ],
    selected: 'Role',
    placeholder: 'Role'
  }




  return (
    // #2B12B9
    <div className='mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          dashboard_cardValues.map((item, index) => (
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
          ))
        }
      </div>
      <div className='mt-8 flex items-center justify-between gap-8'>
        <Filter
          tabs={tabs}
          activeTab={'all'}
          handleValue={handleStatus}
        />
        <Link to={'role/management'}><button className='bg-[#25AE7A] py-2 px-4 rounded-lg'>Role Management</button></Link>
      </div>
      <div className='mt-8 flex items-centerc justify-between gap-8 '>
        <div className='flex items-center gap-8'>
          <Dropdown
            options={periodFilter.options}
            placeholder={periodFilter.placeholder}
            onChange={handleStatus}
            selected={periodFilter.selected}

            // styling
            borderColor={"[#25AE7A]"}
            bgColor='theme-dark'
            roundedValue='full'
            position='left-0'
            paddingY='2'
            gap='4'
          />
          <Dropdown
            options={roleFilter.options}
            placeholder={roleFilter.placeholder}
            onChange={handleStatus}
            selected={roleFilter.selected}

            // styling
            borderColor={"[#25AE7A]"}
            bgColor='theme-dark'
            roundedValue='full'
            position='left-0'
            paddingY='2'
            gap='4'
          />
        </div>
        <SearchFilter
          handleFunction={handleStatus}
        />

      </div>
      <div className='mt-8'>
        <TableCan
          headerTr={table_th}
          dataTr={adminData}
          TrName={AdminRow}
        />
      </div>
    </div>
  )
}

export default Admin
