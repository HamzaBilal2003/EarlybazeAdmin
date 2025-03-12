import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';
import BarChart_legend from './BarChart_legend';
import { Dashboard_categoryOptions, dashboard_legends, Dashboard_periodOptions } from '../../../dummyData/Data';
import Dropdown from '../../../globalComponents/Dropdown';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

interface DropdownOption {
  value: string;
  name: string;
}

const BarChart = () => {
  const [selectedCategory, setSelectedCategory] = useState('Users');
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  const fullData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Users',
        data: [200, 100, 50, 220, 80, 120, 60, 150, 40],
        backgroundColor: '#126EB9',
      },
      {
        label: 'Transactions',
        data: [100, 50, 30, 180, 60, 90, 50, 120, 30],
        backgroundColor: '#78CA19',
      },
      {
        label: 'Revenue',
        data: [80, 40, 20, 150, 50, 70, 40, 100, 20],
        backgroundColor: '#B95A12',
      },
      {
        label: 'Wallet',
        data: [50, 20, 10, 100, 30, 50, 20, 70, 10],
        backgroundColor: '#CA1919',
      },
    ],
  };

  const filteredData = {
    labels: fullData.labels,
    datasets: fullData.datasets.filter((dataset) => dataset.label === selectedCategory),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff',
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: '#374151',
        },
      },
    },
  };

  const handleCategoryChange = (option: DropdownOption) => {
    setSelectedCategory(option.name);
  };

  const handlePeriodChange = (option: DropdownOption) => {
    setSelectedPeriod(option.name);
  };

  return (
    <div className="bg-theme-dark rounded-xl p-4 shadow shadow-[#257355]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <div className="flex items-center justify-end gap-4">
          <Dropdown
            options={Dashboard_categoryOptions}
            selected={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="Select Category"
          />
          <Dropdown
            options={Dashboard_periodOptions}
            selected={selectedPeriod}
            onChange={handlePeriodChange}
            placeholder="Select Period"
          />
        </div>
      </div>
      <div>
        <Bar data={filteredData} options={options} />
        <BarChart_legend legendItems={dashboard_legends} />
      </div>
    </div>
  );
};

export default BarChart;