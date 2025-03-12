import React from 'react';
import { Link } from 'react-router-dom';

interface CryptoBalanceRowProps {
  displayData: {
    logo: string;
    name: string;
    symbol: string;
    quantity: string | number;
    balance: string | number;
    value: string | number;
  };
  index: number;
}

const CryptoBalanceRow: React.FC<CryptoBalanceRowProps> = ({ displayData, index }) => {
  return (
    <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''}`}>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4 px-4 py-2">
          <input type="checkbox" />
          <div className="flex items-center gap-4">
            <img src={displayData.logo} alt={displayData.name} width="30" />
            <div>
              <h1>{displayData.symbol}</h1>
              <h1>{displayData.name}</h1>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">{displayData.quantity}</td>
      <td className="px-4 py-2">{displayData.balance}</td>
      <td className="px-4 py-2">{displayData.value}</td>
      <td className="px-4 py-2 text-center">
        <Link to={`./${displayData.name}`}>
          <button className="bg-blue-500 text-white px-4 py-1 rounded">View</button>
        </Link>
      </td>
    </tr>
  );
};

export default CryptoBalanceRow;