import React from 'react';

interface TransactionRowProps {
  displayData: {
    id: number;
    img?: string;
    name: string;
    amount: string;
    transactions: string;
  };
  index: number;
  onDelete: (id: number) => void;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ displayData, index, onDelete }) => {
  return (
    <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
      <td className='px-4 py-2'>
        <div className='flex items-center gap-4 px-4 py-2'>
          <input type="checkbox" />
          <div className='flex items-center gap-4'>
            <img
              src={displayData.img ? displayData.img : `https://randomuser.me/api/portraits/men/${index}.jpg`}
              alt={displayData.name}
              width="30"
              className='rounded-full'
            />
            <div>
              <h1 className="font-bold">{displayData.name}</h1>
            </div>
          </div>
        </div>
      </td>
      <td className='px-4 py-2'>{displayData.amount}</td>
      <td className='px-4 py-2'>{displayData.transactions}</td>
      <td className='px-4 py-2 text-center'>
        <button
          onClick={() => onDelete(displayData.id)}
          className="text-gray-300 hover:text-white border border-green-500 hover:bg-green-500  p-1 px-2 rounded-lg"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;