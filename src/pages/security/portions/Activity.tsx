import React, { useState } from 'react';
import Dropdown from '../../../globalComponents/Dropdown';
import TableCan from '../../../globalComponents/table/TableCan';
import ActivityRow from '../components/ActivityRow';

const Activity = () => {
  // token filter
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };
  const activaty_th = ['activity', 'agent', 'date'];
  const activaty_td = [
    {
      action: 'Account deleted',
      user: 'Alex',
      date: '12-10-24',
      time: '11:24 AM',
    },
    {
      action: 'Crypto balance was edited to $100',
      user: 'Sharon',
      date: '12-10-24',
      time: '11:24 AM',
    },
    {
      action: "Changed Alucard's password",
      user: 'Debbie',
      date: '12-10-24',
      time: '11:24 AM',
    },
  ];
  const [ActivityData, setActivityData] = useState(activaty_td);
  const agentFilter = {
    options: [],
    selected: 'Agent',
    placeholder: 'Agent',
  };
  activaty_td.forEach((item) => {
    agentFilter.options.push({
      value: item.user,
      name: item.user,
    });
  });
  const filterData = (status: string, filterType: string) => {
    const filteredData = activaty_td.filter((item) => item.user === status);
    if (filteredData.length === 0) {
      setActivityData([]);
    } else {
      setActivityData(filteredData);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Activity Logs</h1>
      <div className="mb-8 flex items-center gap-8">
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={filterData}
          selected={periodFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="4"
          gap="4"
        />
        <Dropdown
          options={agentFilter.options}
          placeholder={agentFilter.placeholder}
          onChange={filterData}
          selected={agentFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="4"
          gap="4"
        />
      </div>
      <div className="">
        <TableCan
          headerTr={activaty_th}
          dataTr={ActivityData}
          TrName={ActivityRow}
        />
      </div>
    </>
  );
};

export default Activity;