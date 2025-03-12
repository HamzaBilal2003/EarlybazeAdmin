import React from 'react';
import { Link } from 'react-router-dom';

interface NairaRowProps {
  displayData: {
    logo?: string;
    name: string;
    value: string | number;
  };
  index: number;
}

const NairaRow: React.FC<NairaRowProps> = ({ displayData, index }) => {
  return (
    <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''}`}>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4 px-4 py-2">
          <input type="checkbox" />
          <div className="flex items-center gap-4">
            <img
              src={
                displayData.logo
                  ? displayData.logo
                  : `https://randomuser.me/api/portraits/${index % 2 !== 0 ? 'women' : 'men'}/4${index}.jpg`
              }
              alt={displayData.name}
              width="30"
              className="rounded-full"
            />
            <div>
              <h1>{displayData.name}</h1>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">N {displayData.value}</td>
      <td className="px-4 py-2 text-center">
        <Link to={`./${displayData.name}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">View Account</button>
        </Link>
      </td>
    </tr>
  );
};

export default NairaRow;