import React, { useState } from 'react';
import ticketIcon from '../../assets/icons/ticket.png';
import TotalCard from '../../globalComponents/TotalCard';
import Filter from '../../globalComponents/Filter';
import Dropdown from '../../globalComponents/Dropdown';
import SearchFilter from '../../globalComponents/SearchFilter';
import TableCan from '../../globalComponents/table/TableCan';
import SupportRow from './components/SupportRow';

interface DashboardCard {
  icon: string;
  iconBg: string;
  heading: string;
  subheading: string;
  cardValue: string;
}

interface FilterOption {
  value: string;
  name: string;
}

interface TableData {
  id: number;
  name: string;
  ticket: string;
  service: string;
  priority: string;
  priorityColor: string;
  date: string;
  status: string;
}

const Support = () => {
  const dashboard_cardValues: DashboardCard[] = [
    {
      icon: ticketIcon,
      iconBg: 'bg-[#2B12B9]',
      heading: 'total',
      subheading: 'tickets',
      cardValue: '2,000',
    },
    {
      icon: ticketIcon,
      iconBg: 'bg-[#2B12B9]',
      heading: 'answered',
      subheading: 'tickets',
      cardValue: '1,000',
    },
    {
      icon: ticketIcon,
      iconBg: 'bg-[#2B12B9]',
      heading: 'Unanswered',
      subheading: 'tickets',
      cardValue: '1,000',
    },
  ];

  const tabs: FilterOption[] = [
    { value: 'all', name: 'all' },
    { value: 'ans', name: 'answered' },
    { value: 'unans', name: 'unanswered' },
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

  const priorityFilter = {
    options: [
      { value: 'high', name: 'high' },
      { value: 'critical', name: 'critical' },
      { value: 'normal', name: 'normal' },
      { value: 'medium', name: 'medium' },
      { value: 'low', name: 'low' },
    ],
    selected: 'Priority',
    placeholder: 'Priority',
  };

  const agentFilter = {
    options: [
      { value: 'alex', name: 'Alex' },
      { value: 'john', name: 'John' },
      { value: 'sam', name: 'Sam' },
      { value: 'alexander', name: 'Alexander' },
      { value: 'alfred', name: 'Alfred' },
    ],
    selected: 'agent',
    placeholder: 'Select an agent',
  };

  const table_th = ['name', 'ticket no', 'subject', 'priority', 'Date', 'agent', 'more'];

  const table_td: TableData[] = [
    {
      id: 1,
      name: 'John Doe',
      ticket: '101',
      service: 'Account Inquiry',
      priority: 'High',
      priorityColor: 'bg-red-600',
      date: '01-10-25 / 09:15 AM',
      status: 'unans',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      ticket: '102',
      service: 'Transaction Dispute',
      priority: 'Critical',
      priorityColor: 'bg-red-700',
      date: '01-11-25 / 12:30 PM',
      status: 'unans',
    },
    {
      id: 3,
      name: 'Michael Smith',
      ticket: '103',
      service: 'Loan Request',
      priority: 'Normal',
      priorityColor: 'bg-green-400',
      date: '01-12-25 / 03:45 PM',
      status: 'ans',
    },
    {
      id: 4,
      name: 'Jessica Brown',
      ticket: '104',
      service: 'Credit Card Issue',
      priority: 'Medium',
      priorityColor: 'bg-[#12EA0B]',
      date: '01-13-25 / 06:00 PM',
      status: 'ans',
    },
    {
      id: 5,
      name: 'David Wilson',
      ticket: '105',
      service: 'Password Reset',
      priority: 'Low',
      priorityColor: 'bg-gray-500',
      date: '01-14-25 / 08:20 AM',
      status: 'unans',
    },
  ];

  const [ticketer, setTicketer] = useState<TableData[]>(table_td);

  const handleAnswer = (status: string) => {
    const filterData = table_td.filter(
      (item) =>
        item.status.toLowerCase() === status.toLowerCase() ||
        item.name.toLowerCase() === status.toLowerCase() ||
        item.priority.toLowerCase() === status.toLowerCase()
    );
    setTicketer(filterData.length === 0 ? table_td : filterData);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Support</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {dashboard_cardValues.map((item, index) => (
          <TotalCard
            icon={item.icon}
            iconBg={item.iconBg}
            heading={item.heading}
            subheading={item.subheading}
            cardValue={item.cardValue}
            key={index}
          />
        ))}
      </div>
      <div className="mt-8">
        <Filter tabs={tabs} activeTab={'all'} handleValue={handleAnswer} />
      </div>
      <div className="flex items-center justify-between gap-4 mt-8">
        <div className="flex items-center gap-4">
          <Dropdown
            options={priorityFilter.options}
            placeholder={priorityFilter.placeholder}
            onChange={handleAnswer}
            selected={priorityFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
          <Dropdown
            options={periodFilter.options}
            placeholder={periodFilter.placeholder}
            onChange={handleAnswer}
            selected={periodFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
          <Dropdown
            options={agentFilter.options}
            placeholder={agentFilter.placeholder}
            onChange={handleAnswer}
            selected={agentFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
        </div>
        <SearchFilter handleFunction={handleAnswer} />
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={ticketer} TrName={SupportRow} />
      </div>
    </>
  );
};

export default Support;