import React from "react";

interface Stat {
  title: string;
  value: string;
}

const statsData: Stat[] = [
  { title: "Open Rate", value: "75%" },
  { title: "Conversion Rate", value: "10%" },
  { title: "Bounce Rate", value: "45%" },
];

const MarketStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-[#00150D] border border-[#01321A] p-6 rounded-lg text-white shadow-md"
        >
          <h2 className="text-sm font-medium text-gray-400">{stat.title}</h2>
          <p className="text-5xl font-extrabold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketStats;