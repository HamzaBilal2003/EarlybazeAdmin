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

const TransactionsPortions = () => {
  const periodFilter: FilterConfig = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };
  const currencyFilter: FilterConfig = {
    options: [{ value: 'dlr', name: 'Doller' }],
    selected: 'Currency',
    placeholder: 'Currency',
  };
  const metricsFilter: ChartValue[] = [
    { value: 300, name: 'swap' },
    { value: 1000, name: 'buy users' },
    { value: 200, name: 'withdrwal' },
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
    { name: 'Total Revenue', value: '$25,000' },
    { name: 'swap transactions', value: 2500 },
    { name: 'buy transactions', value: 12000 },
    { name: 'withdrawal TXs', value: 5000 },
    { name: 'send transactions', value: '$25,000' },
    { name: 'receive transactions', value: 2500 },
    { name: 'highest trade', value: 25000 },
    { name: 'most traded wallet', value: 'BTC' },
  ];
  const handlePeriod = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className='flex items-center gap-4'>
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
        <Dropdown
          options={currencyFilter.options}
          placeholder={currencyFilter.placeholder}
          onChange={handlePeriod}
          selected={currencyFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor='theme-dark'
          roundedValue='full'
          position='left-0'
          paddingY='4'
          gap='4'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
        <MetricsChart chartValues={metricsFilter} heading={'transaction matrics'} />
        <StatisticsChart chartData={statisticData} />
      </div>
      <div className='mt-8 rounded-lg p-4 bg-theme-dark'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {detailBoxData.map((item, index) => (
            <DetailBox key={index} heading={item.name} value={item.value} />
          ))}
        </div>
        <Export />
      </div>
    </>
  );
};

export default TransactionsPortions;