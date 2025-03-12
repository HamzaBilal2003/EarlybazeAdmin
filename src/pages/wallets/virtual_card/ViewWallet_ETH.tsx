import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddingButton from '../../../globalComponents/AddingButton';
import Filter from '../../../globalComponents/Filter';
import Wallet from '../../../assets/icons/Wallet.png';
import TotalCard from '../../../globalComponents/TotalCard';
import Dropdown from '../../../globalComponents/Dropdown';
import WalletCard from './components/crypto_comp/WalletCard';
import AddWalletModal from './components/crypto_comp/addwallet/AddWalletModal';
import TableCan from '../../../globalComponents/table/TableCan';
import EthRow from './components/crypto_comp/EthRow';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';

interface TableDataItem {
  action: string;
  asset: string;
  network: string;
  amount: string;
  date: string;
  time: string;
  status: boolean;
}

interface WalletDataItem {
  asset: string;
  network: string;
  balanceBtc: string;
  balanceUsd: string;
}

const ViewWallet_ETH: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const [showAddWallet, setshowAddWallet] = useState(false);
  const [isShowFreezeModel, setisShowFreezeModel] = useState(false);

  const onComfirmFreeze = () => {
    alert('account freeze');
    setisShowFreezeModel(false);
  };

  const tableHeader = ['action', 'token', 'network', 'amount', 'date', 'status', 'more'];

  const tableBody: TableDataItem[] = [
    {
      action: 'swap',
      asset: 'BTC',
      network: 'biticon',
      amount: '$2000',
      date: '30-1-2025',
      time: '2:25 PM',
      status: true,
    },
    {
      action: 'send',
      asset: 'BTC',
      network: 'biticon',
      amount: '$2000',
      date: '30-1-2025',
      time: '2:25 PM',
      status: true,
    },
    {
      action: 'receive',
      asset: 'BTC',
      network: 'biticon',
      amount: '$2000',
      date: '30-1-2025',
      time: '2:25 PM',
      status: true,
    },
    {
      action: 'buy',
      asset: 'BTC',
      network: 'biticon',
      amount: '$2000',
      date: '30-1-2025',
      time: '2:25 PM',
      status: true,
    },
  ];

  const tabs = [
    { name: 'Crypto', value: 'crypto' },
    { name: 'Naira', value: 'naira' },
  ];

  const cardData = [
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'total',
      subheading: 'wallets',
      cardValue: '1,750',
      valueStatus: true,
    },
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'active',
      subheading: 'wallets',
      cardValue: '25,000',
      valueStatus: true,
    },
    {
      icon: Wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'inactive',
      subheading: 'wallets',
      cardValue: '750',
      valueStatus: true,
    },
  ];

  const statusFilter = {
    options: [
      { value: 'all', name: 'all' },
      { value: 'active', name: 'active' },
      { value: 'inactive', name: 'inactive' },
      { value: 'frozen', name: 'frozen' },
    ],
    selected: 'all',
    placeholder: 'all',
  };

  const wallet: WalletDataItem[] = [
    {
      asset: 'ARB',
      network: 'Arbitrum',
      balanceBtc: '0.00234',
      balanceUsd: '23,500',
    },
    {
      asset: 'trx',
      network: 'tron',
      balanceBtc: '500.0',
      balanceUsd: '10,500',
    },
  ];

  const handleCategory = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </div>
          <h1 className="text-4xl font-bold">{username} Wallet</h1>
        </div>
      </div>
      <div className="my-8 border border-green-900 p-8 min-h-60 flex flex-col justify-between rounded-xl">
        <h1 className="capitalize text-4xl">Master Ethereum Wallet</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="opacity-50 text-xl">ETH</h1>
            <h1 className="text-4xl">12</h1>
          </div>
          <div
            className="flex items-center gap-4 px-4 py-2 border rounded-lg cursor-pointer"
            onClick={() => setisShowFreezeModel(true)}
          >
            <i className="bi bi-exclamation-octagon"></i>
            Freeze Wallet
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-2xl font-bold">Network</h1>

        <div className="grid grid-cols-4 gap-8 mt-4">
          {wallet.map((item, index) => (
            <WalletCard key={index} wallet={item} isLastNotNeeded={true} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-2xl font-bold mb-8">Activities</h1>
        <TableCan headerTr={tableHeader} dataTr={tableBody} TrName={EthRow} />
      </div>
      {isShowFreezeModel && (
        <ConfirmationPopup
          heading="Are you sure you want to freeze this wallet?"
          confirmColor="bg-red-500"
          closeText="Cancel"
          onConfirm={onComfirmFreeze}
          onClose={() => setisShowFreezeModel(false)}
        />
      )}
    </>
  );
};

export default ViewWallet_ETH;