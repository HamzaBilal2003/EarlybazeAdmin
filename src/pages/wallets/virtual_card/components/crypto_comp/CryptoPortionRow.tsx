import React from 'react';
import { Link } from 'react-router-dom';
import MoreDropdown from '../../../../../globalComponents/MoreDropdown';
import btcIcon from '../../../../../assets/icons/DummyIcon/btc.png';

interface CryptoPortionRowProps {
  displayData?: {
    id?: number;
    profileimg?: string;
    name?: string;
    walletCount?: number;
    walletCountImages?: string[];
    totalFunds?: string;
    mostActive?: string;
    status?: 'online' | 'offline';
  };
  index?: number;
}

const CryptoPortionRow: React.FC<CryptoPortionRowProps> = ({ displayData = {}, index = 1 }) => {
  return (
    <tr className={`hover:bg-green-800 cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''}`}>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          <div className="flex items-center gap-2">
            <img
              src={displayData?.profileimg || 'https://randomuser.me/api/portraits/men/44.jpg'}
              alt={displayData?.name}
              className="w-10 h-10 rounded-full"
            />
            <span>{displayData?.name}</span>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          {displayData?.walletCount}
          {displayData?.walletCountImages ? (
            <div className="flex -space-x-3 items-center">
              {displayData?.walletCountImages.map((image, index) => (
                <img src={image} alt="wallet image" className="w-10 h-10 rounded-full" key={index} />
              ))}
            </div>
          ) : (
            <div className="flex -space-x-3 items-center">
              <img src={btcIcon} alt="demo image" className="w-10 h-10 rounded-full" />
              <img src={btcIcon} alt="demo image" className="w-10 h-10 rounded-full" />
              <img src={btcIcon} alt="demo image" className="w-10 h-10 rounded-full" />
            </div>
          )}
        </div>
      </td>
      <td className="px-4 py-2">{displayData?.totalFunds}</td>
      <td className="px-4 py-2">{displayData?.mostActive}</td>
      <td className="px-4 py-2">
        <div
          className={`w-1 h-10 rounded-lg mx-auto bg-${
            displayData?.status === 'online' ? 'green-500' : 'red-500'
          }`}
        ></div>
      </td>
      <td className="py-2 w-fit">
        <div className="flex items-center justify-center gap-4 w-full">
          <Link
            to={`/wallet/virtual/${displayData?.name}/details`}
            className="bg-[#25AE7A] px-4 rounded-xl py-2 text-white"
          >
            View Wallet
          </Link>
          <Link
            to={`/user/management/customer/${displayData?.id}/detail`}
            className="bg-[#084B82] px-4 rounded-xl py-2 text-white"
          >
            User Account
          </Link>
        </div>
      </td>
      <td className="px-4 py-2">
        <MoreDropdown iconClass="bi bi-three-dots-vertical" menuClass="bg-theme-dark min-w-[150px]">
          <div className="bg-theme-light p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-nowrap">
              <i className="bi bi-exclamation-octagon"></i>
              Freeze Wallet
            </div>
          </div>
        </MoreDropdown>
      </td>
    </tr>
  );
};

export default CryptoPortionRow;