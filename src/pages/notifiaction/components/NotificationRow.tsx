import React from 'react';
import historyClock from '../../../assets/icons/historyClock.png';
import { Link } from 'react-router-dom';

interface NotificationRowProps {
  displayData: {
    name: string;
    notification: string;
    date: string;
    // Add other properties if needed
  };
  index: number;
}

const NotificationRow: React.FC<NotificationRowProps> = ({ displayData, index }) => {
  return (
    <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
      <td className='px-4 py-2'>
        <div className='flex items-center gap-4 px-4 py-2'>
          <input type="checkbox" />
          <div className='flex items-center gap-4'>
            <img
              src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
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
      <td className='px-4 py-2'>{displayData.notification}</td>
      <td className='px-4 py-2'>{displayData.date}</td>
      <td className='px-4 py-2'>
        <div className='flex items-center gap-8'>
          <Link to={displayData.name}>
            <button className="bg-green-600 hover:border hover:bg-transparent hover:border-green-600 text-white px-4 py-2 rounded-xl">
              Send New
            </button>
          </Link>
          <button className="text-white flex items-center justify-center p-1 border rounded-lg">
            <img src={historyClock} alt="history" className='w-6 h-6' />
          </button>
          <button className=" text-white flex items-center justify-center p-1 px-2 border rounded-lg">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default NotificationRow;