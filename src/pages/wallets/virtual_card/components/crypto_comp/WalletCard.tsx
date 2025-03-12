import React, { useState } from 'react';
import btcIcon from '../../../../../assets/icons/DummyIcon/btc.png';
import MoreDropdown from '../../../../../globalComponents/MoreDropdown';
import AddressModel from '../../../master_card/component/AddressModel';

interface WalletCardProps {
  wallet?: {
    icon?: string;
    asset?: string;
    network?: string;
    balanceBtc?: string;
    balanceUsd?: string;
  };
  isLastNotNeeded?: boolean;
}

const WalletCard: React.FC<WalletCardProps> = ({ wallet = {}, isLastNotNeeded = false }) => {
  const [showAddressModel, setShowAddressModel] = useState(false);
  const addressKey = [
    {
      title: 'ethereum',
      wallet: 'Ethereum',
      key: 'aksdjakdj91829dj1in2d9j29dj12d',
    },
    {
      title: 'ethereum',
      wallet: 'trx',
      key: 'aksdjakdj91829dj1in2d9j29dj12d',
    },
    {
      title: 'ethereum',
      wallet: 'Sol',
      key: 'aksdjakdj91829dj1in2d9j29dj12d',
    },
  ];

  return (
    <div className="bg-theme-dark border relative border-green-950 rounded-lg p-4 text-white shadow-lg">
      <div className="flex items-center gap-4 mb-12">
        <img src={wallet?.icon || btcIcon} alt="Bitcoin" className="h-8 w-8" />
        <div>
          <div className="opacity-50">{wallet?.asset}</div>
          <div className="font-bold">{wallet?.network}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm opacity-50">Balance BTC</div>
          <div>{wallet?.balanceBtc}</div>
        </div>
        <div>
          <div className="text-sm opacity-50">Balance USD</div>
          <div>{wallet?.balanceUsd}</div>
        </div>
      </div>
      <div className="cursor-pointer absolute top-5 right-5">
        <MoreDropdown
          iconClass="bi bi-three-dots-vertical"
          menuClass="bg-theme-dark min-w-[150px]"
          buttonClass="w-8 h-8 border-green-950"
        >
          <div className="bg-theme-light p-4 flex flex-col gap-4">
            <h1 className="text-lg capitalize text-nowrap">Activities</h1>
            <h1 className="text-lg capitalize text-nowrap">fund</h1>
            <h1 className="text-lg capitalize text-nowrap">Freeze</h1>
            <h1 className="text-lg capitalize text-nowrap" onClick={() => setShowAddressModel(true)}>
              View Address
            </h1>
            {isLastNotNeeded ? null : <h1 className="text-lg capitalize text-nowrap">Set Token Status</h1>}
          </div>
        </MoreDropdown>
      </div>
      {showAddressModel && (
        <AddressModel onClose={() => setShowAddressModel(false)} datalist={addressKey} />
      )}
    </div>
  );
};

export default WalletCard;