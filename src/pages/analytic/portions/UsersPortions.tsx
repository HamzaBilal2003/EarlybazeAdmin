import React from 'react';
import Dropdown from '../../../globalComponents/Dropdown';
import MetricsChart from '../Components/MetricsChart';
import StatisticsChart from '../Components/StatisticsChart';
import DetailBox from '../Components/DetailBox';
import Export from '../Components/Export';

interface DropdownOption {
  value: string;
  name: string;
}

interface FilterConfig {
  options: DropdownOption[];
  selected: string;
  placeholder: string;
}

interface ChartValue {
  value: number;
  name: string;
}

interface StatisticsDataItem {
  month: string;
  value: number;
}

interface DetailBoxData {
  name: string;
  value: string | number;
}

const UsersPortions = () => {
  const periodFilter: FilterConfig = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };
  const metricsFilter: ChartValue[] = [
    { value: 2020, name: 'New users' },
    { value: 1000, name: 'Active users' },
    { value: 300, name: 'Bounced' },
  ];
  const statisticData: StatisticsDataItem[] = [
    { month: 'Jan', value: 120 },
    { month: 'Feb', value: 70 },
    { month: 'Mar', value: 0 },
    { month: 'Apr', value: 200 },
    { month: 'May', value: 90 },
    { month: 'Jun', value: 40 },
    { month: 'Jul', value: 80 },
    { month: 'Aug', value: 150 },
    { month: 'Sep', value: 50 },
  ];
  const detailBoxData: DetailBoxData[] = [
    { name: 'total users', value: 12000 },
    { name: 'new users', value: 2000 },
    { name: 'active users', value: 10000 },
    { name: 'paying users', value: 2000 },
    { name: 'engaged session', value: 260 },
    { name: 'deleted users', value: 20 },
    { name: 'bounced users', value: 120 },
    { name: 'engagement rate', value: '15,000' },
  ];
  const handlePeriod = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Dropdown
        options={periodFilter.options}
        placeholder={periodFilter.placeholder}
        onChange={handlePeriod}
        selected={periodFilter.selected}
        borderColor={'[#25AE7A]'}
        bgColor='theme-dark'
        roundedValue='full'
        position='left-0'
        paddingY='4'
        gap='4'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
        <MetricsChart chartValues={metricsFilter} heading={'Users Metrics'} />
        <StatisticsChart chartData={statisticData} />
      </div>
      <div className='mt-8 rounded-lg p-4 bg-theme-dark'>
        <div className='grid grid-cols-4 gap-2'>
          {detailBoxData.map((item, index) => (
            <DetailBox key={index} heading={item.name} value={item.value} />
          ))}
        </div>
        <Export />
      </div>
    </>
  );
};

export default UsersPortions;