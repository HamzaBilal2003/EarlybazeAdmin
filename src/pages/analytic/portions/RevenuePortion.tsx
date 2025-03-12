import React, { useState } from 'react';
import Dropdown from '../../../globalComponents/Dropdown';
import MetricsChart from '../Components/MetricsChart';
import StatisticsChart from '../Components/StatisticsChart';
import DetailBox from '../Components/DetailBox';
import Export from '../Components/Export';
import Filter from '../../../globalComponents/Filter';
import Money_image from '../../../assets/icons/Money.png';
import TotalCard from '../../../globalComponents/TotalCard';

interface Tab {
  name: string;
  value: string;
}

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

interface RevenueCardValue {
  icon: string;
  iconBg: string;
  heading: string;
  subheading: string;
  cardValue: string;
  valueStatus: boolean;
  cardUnit: string;
}

const RevenuePortion = () => {
  const [RevenueCheck, setRevenueCheck] = useState(false);
  const tabs: Tab[] = [
    { name: 'all', value: 'all' },
    { name: 'cerdit', value: 'cerdit' },
    { name: 'debit', value: 'debit' },
  ];
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
    { name: 'swap revenue', value: 2500 },
    { name: 'buy revenue', value: 12000 },
    { name: 'withdrawal Users', value: 5000 },
    { name: 'total referral payout', value: '$5,000' },
    { name: 'total signup bonus payout', value: '$5,000' },
  ];
  const revenue_cardValues: RevenueCardValue[] = [
    {
      icon: Money_image,
      iconBg: 'bg-[#78CA19]',
      heading: 'total',
      subheading: 'revenue',
      cardValue: '5,500',
      valueStatus: true,
      cardUnit: 'USD',
    },
    {
      icon: Money_image,
      iconBg: 'bg-[#78CA19]',
      heading: 'referral',
      subheading: 'payouts',
      cardValue: '25,000',
      valueStatus: true,
      cardUnit: 'USD',
    },
    {
      icon: Money_image,
      iconBg: 'bg-[#78CA19]',
      heading: 'sign up bonus',
      subheading: 'payouts',
      cardValue: '25,000',
      valueStatus: true,
      cardUnit: 'USD',
    },
  ];
  const handlePeriod = (value: string) => {
    if (value === 'debit') {
      setRevenueCheck(true);
    }
    console.log(value, '(function of tabs)');
  };

  return (
    <>
      <div className='flex items-center gap-4'>
        <Filter tabs={tabs} handleValue={handlePeriod} />
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
          gap='2'
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
          gap='2'
        />
      </div>
      {!RevenueCheck && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <MetricsChart chartValues={metricsFilter} heading={'Revenue Metrics'} />
          <StatisticsChart chartData={statisticData} />
        </div>
      )}
      {RevenueCheck && (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {revenue_cardValues.map((revenue, index) => (
            <TotalCard
              key={index}
              icon={revenue.icon}
              iconBg={revenue.iconBg}
              heading={revenue.heading}
              subheading={revenue.subheading}
              cardValue={revenue.cardValue}
              valueStatus={revenue.valueStatus}
              cardUnit={revenue.cardUnit}
            />
          ))}
        </div>
      )}
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

export default RevenuePortion;