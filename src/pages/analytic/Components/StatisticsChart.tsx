import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Dropdown from "../../../globalComponents/Dropdown";

interface ChartDataItem {
  month: string;
  value: number;
}

interface StatisticsChartProps {
  chartData: ChartDataItem[];
}

const StatisticsChart: React.FC<StatisticsChartProps> = ({ chartData }) => {
  const labels = chartData.map((item) => item.month);
  const dataValue = chartData.map((item) => item.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Statistics",
        data: dataValue,
        backgroundColor: "#2b81ff",
        borderRadius: 4,
        barPercentage: 0.5,
      },
    ],
  };

  const periodFilter = {
    options: [
      { value: "week", name: "This week" },
      { value: "month", name: "This month" },
      { value: "day", name: "Today" },
    ],
    selected: "This month",
    placeholder: "Select a period",
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
          font: {
            family: "Arial",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "#374151",
        },
        ticks: {
          color: "#9ca3af",
          font: {
            family: "Arial",
            size: 12,
          },
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      annotation: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const handlePeriod = (value: string) => {
    console.log(value);
  };

  return (
    <div className="flex flex-col bg-theme-dark text-white p-5 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 style={{ fontSize: "18px", fontWeight: "600", margin: 0 }}>
          Statistics
        </h2>
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={handlePeriod}
          selected={periodFilter.selected}
          borderColor={"[white]"}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
        />
      </div>
      <div style={{ height: "300px", zIndex: 1 }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatisticsChart;