import React from 'react';

interface ActivityRowProps {
  displayData: {
    message: string;
    timestamp: string;
  };
  index: number;
}

const ActivityRow: React.FC<ActivityRowProps> = ({ displayData, index }) => {
  return (
    <tr
      className={`hover:bg-green-800 ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="px-4 py-3 text-white">{displayData.message}</td>
      <td className="px-4 py-3 text-gray-400">{displayData.timestamp}</td>
    </tr>
  );
};

export default ActivityRow;