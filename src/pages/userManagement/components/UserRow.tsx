import React from 'react';
import MoreDropdown from '../../../globalComponents/MoreDropdown';
import Vector from '../../../assets/icons/Vector.png';
import bellIcon from '../../../assets/icons/bell.png';
import { Link } from 'react-router-dom';
import { Wallet, kyc } from '../../../constants/Images';

interface UserRowProps {
  displayData: {
    img?: string;
    name: string;
    email: string;
    phone: string;
    status: 'online' | 'offline';
    id: string | number;
  };
  index: number;
}

const UserRow: React.FC<UserRowProps> = ({ displayData, index }) => {
  const options = [
    {
      navigationLink: '#',
      title: 'View Wallet',
      icon: Wallet,
    },
    {
      navigationLink: '#',
      title: 'Notifications',
      icon: bellIcon,
    },
    {
      navigationLink: '#',
      title: 'KYC Documents',
      icon: kyc,
    },
  ];
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="bg-transparent checked:bg-green-700 w-4 h-4 border-2 border-gray-500 rounded-sm focus:ring-2 focus:ring-green-700"
          />
          <div className="flex items-center gap-2">
            <img
              src={
                displayData.img
                  ? displayData.img
                  : `https://randomuser.me/api/portraits/men/4${index}.jpg`
              }
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
            {displayData.name}
          </div>
        </div>
      </td>
      <td className="px-4 py-2">{displayData.email}</td>
      <td className="px-4 py-2">{displayData.phone}</td>
      <td className="px-4 py-2">
        <div className="w-full p-2 pl-4">
          <div
            className={`h-10 w-1 rounded-sm ${
              displayData.status === 'online' ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
        </div>
      </td>
      <td className="py-2">
        <div className="flex items-center gap-4 w-fit">
          <Link to={`/user/management/customer/${displayData.id}/detail`}>
            <button className="bg-[#25AE7A] px-4 rounded-xl py-2 ">
              Customer Details
            </button>
          </Link>
          <Link
            to={`/user/management/customer/${displayData.id}/transactions`}
            className="bg-[#084B82] px-4 rounded-xl py-2 "
          >
            Transactions
          </Link>
        </div>
      </td>
      <td>
        <MoreDropdown
          iconClass="bi bi-three-dots-vertical"
          menuClass="bg-theme-dark min-w-[300px]"
        >
          <div className="bg-theme-light p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {options.map((item, index) =>
                item.title === 'Notifications' ? (
                  <Link
                    to={`/user/management/customer/${displayData.name}/notifications`}
                    key={index}
                  >
                    <div className="flex items-center text-white gap-4 p-2 rounded-md">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6"
                      />
                      <h1 className="text-lg">{item.title}</h1>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="flex items-center text-white gap-4 p-2 rounded-md cursor-pointer"
                  >
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                    <h1 className="text-lg">{item.title}</h1>
                  </div>
                )
              )}

              <div className="grid grid-cols-2 gap-2">
                <button className="border border-white hover:bg-white hover:text-black  py-2 capitalize rounded-xl text-nowrap">
                  Block user
                </button>
                <button className="border border-white hover:bg-white hover:text-black  py-2 capitalize rounded-xl text-nowrap">
                  delete user
                </button>
              </div>
            </div>
          </div>
        </MoreDropdown>
      </td>
    </tr>
  );
};

export default UserRow;