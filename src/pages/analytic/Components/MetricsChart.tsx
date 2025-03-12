import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

interface ChartValue {
  name: string;
  value: number;
}

interface MetricsChartProps {
  chartValues: ChartValue[];
  heading: string;
}

const MetricsChart: React.FC<MetricsChartProps> = ({ chartValues, heading }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF0000', '#2D18CB', '#11ACE0'],
        hoverBackgroundColor: ['#FF5D5D', '#5D5DFF', '#5DE4FF'],
        borderWidth: 0,
      },
    ],
  });

  const total = chartValues.reduce((acc, val) => {
    return acc + val.value;
  }, 0);

  useEffect(() => {
    const updatedData = {
      labels: chartValues.map((item) => item.name),
      datasets: [
        {
          data: chartValues.map((item) => item.value),
          backgroundColor: ['#FF0000', '#2D18CB', '#11ACE0'],
          hoverBackgroundColor: ['#FF5D5D', '#5D5DFF', '#5DE4FF'],
          borderWidth: 0,
        },
      ],
    };

    setData(updatedData);
  }, [chartValues]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    cutout: '70%',
    maintainAspectRatio: false,
  };

  Chart.register({
    id: 'centerText',
    beforeDraw(chart) {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.restore();

      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';

      const text = total.toString();
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillStyle = 'white';
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  });

  return (
    <div className='bg-theme-dark p-5 rounded-lg'>
      <div className='flex gap-[50px]'>
        <div>
          <h2 className='text-2xl mb-4 capitalize'>{heading}</h2>
          <p className='text-xl'>Total = {total}</p>
          <div className='flex flex-col gap-4 mt-4'>
            {data.labels.map((label, index) => (
              <div key={index} className='flex items-center gap-4'>
                <div
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                  className='w-6 h-6 rounded-lg'
                ></div>
                <div>
                  <h1 className='text-sm opacity-50 capitalize'>{label}</h1>
                  <p className='text-2xl'>{data.datasets[0].data[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='h-[300px]'>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MetricsChart;