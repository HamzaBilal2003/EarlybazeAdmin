import React from 'react';

interface ActivityRowProps {
  displayData: {
    action: string;
    user: string;
    date: string;
    time: string;
  };
  index: number;
}

const ActivityRow: React.FC<ActivityRowProps> = ({ displayData, index }) => {
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="min-w-[300px] px-4 py-2">{displayData.action}</td>
      <td className="px-4 py-2">{displayData.user}</td>
      <td className="px-4 py-2">
        {displayData.date} / {displayData.time}
      </td>
    </tr>
  );
};

export default ActivityRow;