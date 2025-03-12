import React from 'react';
import { Link } from 'react-router-dom';

interface ReferralRowProps {
  displayData: {
    img?: string;
    name: string;
    referrals: string;
    earned: string;
    balance: string;
    referrer: string;
  };
  index: number;
}

const ReferralRow: React.FC<ReferralRowProps> = ({ displayData, index }) => {
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="px-4 py-2">
        <div className="flex items-center gap-4 px-4 py-2">
          <input type="checkbox" />
          <div className="flex items-center gap-4">
            <img
              src={
                displayData.img
                  ? displayData.img
                  : `https://randomuser.me/api/portraits/men/1${index}.jpg`
              }
              alt={displayData.name}
              width="30"
              className="rounded-full"
            />
            <div>
              <h1 className="font-bold">{displayData.name}</h1>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">{displayData.referrals}</td>
      <td className="px-4 py-2">{displayData.earned}</td>
      <td className="px-4 py-2">{displayData.balance}</td>
      <td className="px-4 py-2">{displayData.referrer}</td>
      <td className="px-4 py-2 text-center">
        <Link to={displayData.name}>
          <button className="border border-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
            View More
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ReferralRow;