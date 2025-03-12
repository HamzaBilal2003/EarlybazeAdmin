import React from 'react';

interface RecentTransactionData {
  typeimg: string;
  type: string;
  action: string;
  user: string;
  amount: string;
  date: string;
  time: string;
}

interface RecentTransactionTrProps {
  displayData: RecentTransactionData;
  index: number;
}

const RecetTransactionTr: React.FC<RecentTransactionTrProps> = ({ displayData, index }) => {
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="px-4 py-2 ">
        <div className="flex items-center gap-2">
          <img src={displayData.typeimg} alt={displayData.type} className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-sm opacity-50">{displayData.type}</span>
            <span>{displayData.action}</span>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">{displayData.user}</td>
      <td className="px-4 py-2">{displayData.amount}</td>
      <td className="px-4 py-2">
        <div className="flex flex-col">
          <h1 className="text-nowrap">{displayData.date}</h1>
          <h1 className="text-nowrap">{displayData.time}</h1>
        </div>
      </td>
    </tr>
  );
};

export default RecetTransactionTr;