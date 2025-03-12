import React from 'react';
import TotalCard from '../../../../../globalComponents/TotalCard';
import Dropdown from '../../../../../globalComponents/Dropdown';
import WalletCard from '../crypto_comp/WalletCard';
import AddWalletModal from '../crypto_comp/addwallet/AddWalletModal';
import { walet } from '../../../../../constants/Images';

interface CardData {
  icon: string;
  iconBg: string;
  heading: string;
  subheading: string;
  cardValue: string;
  valueStatus: boolean;
}

interface FilterOption {
  value: string;
  name: string;
}

interface Filter {
  options: FilterOption[];
  selected: string;
  placeholder: string;
}

interface WalletItem {
  asset: string;
  network: string;
  balanceBtc: string;
  balanceUsd: string;
}

interface ViewWalletPortion_CryptoProps {
  showAdd: boolean;
  closeadd: (show: boolean) => void;
}

const ViewWalletPortion_Crypto: React.FC<ViewWalletPortion_CryptoProps> = ({ showAdd, closeadd }) => {
  const cardData: CardData[] = [
    { icon: walet, iconBg: 'bg-[#CA1919]', heading: 'Total', subheading: 'Wallets', cardValue: '1,750', valueStatus: true },
    { icon: walet, iconBg: 'bg-[#CA1919]', heading: 'Active', subheading: 'Wallets', cardValue: '25,000', valueStatus: true },
    { icon: walet, iconBg: 'bg-[#CA1919]', heading: 'Inactive', subheading: 'Wallets', cardValue: '750', valueStatus: true },
  ];

  const statusFilter: Filter = {
    options: [
      { value: 'all', name: 'All' },
      { value: 'active', name: 'Active' },
      { value: 'inactive', name: 'Inactive' },
      { value: 'frozen', name: 'Frozen' },
    ],
    selected: 'all',
    placeholder: 'All',
  };

  const wallet: WalletItem[] = [
    { asset: 'BTC', network: 'Bitcoin', balanceBtc: '0.00234', balanceUsd: '23,500' },
    { asset: 'ETH', network: 'Ethereum', balanceBtc: '0.1367', balanceUsd: '2,700' },
    { asset: 'XRP', network: 'Ripple', balanceBtc: '500.0', balanceUsd: '10,500' },
    { asset: 'LTC', network: 'Litecoin', balanceBtc: '1.234', balanceUsd: '12,000' },
    { asset: 'BCH', network: 'Bitcoin Cash', balanceBtc: '0.5678', balanceUsd: '5,678' },
    { asset: 'EOS', network: 'EOS.IO', balanceBtc: '2.345', balanceUsd: '1,234' },
    { asset: 'ADA', network: 'Cardano', balanceBtc: '1000', balanceUsd: '15,000' },
    { asset: 'DOT', network: 'Polkadot', balanceBtc: '0.8967', balanceUsd: '8,967' },
  ];

  const handleCategory = (value: string) => {
    console.log('Filter Applied:', value);
  };

  return (
    <>
      <div className="my-8 grid grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <TotalCard
            key={index}
            icon={item.icon}
            iconBg={item.iconBg}
            heading={item.heading}
            subheading={item.subheading}
            cardValue={item.cardValue}
            valueStatus={item.valueStatus}
          />
        ))}
      </div>

      <div className="my-8">
        <Dropdown
          options={statusFilter.options}
          placeholder={statusFilter.placeholder}
          onChange={handleCategory}
          selected={statusFilter.selected}
          borderColor="[#25AE7A]"
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
          gap="4"
        />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {wallet.map((item, index) => (
          <WalletCard key={index} wallet={item} />
        ))}
      </div>

      {showAdd && (
        <AddWalletModal
          onSubmit={(data) => {
            console.log('Wallet Added:', data);
            closeadd(false);
          }}
          onClose={() => closeadd(false)}
        />
      )}
    </>
  );
};

export default ViewWalletPortion_Crypto;