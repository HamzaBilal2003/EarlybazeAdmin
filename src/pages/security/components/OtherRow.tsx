import React from 'react';

interface OtherRowProps {
  displayData: {
    ipAddress: string;
    status: string;
    date: string;
    time: string;
  };
  index: number;
  onEdit: (data: {
    ipAddress: string;
    status: string;
    date: string;
    time: string;
  }) => void;
}

const OtherRow: React.FC<OtherRowProps> = ({
  displayData,
  index,
  onEdit,
}) => {
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="px-4 py-2">{displayData.ipAddress}</td>
      <td className="px-4 py-2 pr-[50px]">
        <div className="flex items-center justify-between">
          <div>
            <span className="capitalize">{displayData.status}</span>
            <div
              className={`h-2 w-full mt-1 rounded-full ${
                displayData.status.toLowerCase() !== 'whitelisted'
                  ? 'bg-red-500'
                  : 'bg-gray-400'
              }`}
            ></div>
          </div>
          <button
            onClick={() => onEdit(displayData)}
            className="border border-[#25AE7A] text-[#25AE7A] px-4 py-2 rounded-lg"
          >
            Change Status
          </button>
        </div>
      </td>
      <td className="px-4 py-2">
        {displayData.date} / {displayData.time}
      </td>
    </tr>
  );
};

export default OtherRow;