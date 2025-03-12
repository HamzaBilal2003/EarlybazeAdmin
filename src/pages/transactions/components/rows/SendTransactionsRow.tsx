import React, { useState, useEffect } from 'react';
import BtcIcon from '../../../../assets/icons/DummyIcon/btc.png';
import MoreDropdown from '../../../../globalComponents/MoreDropdown';
import kycDetial from '../../../../assets/icons/kycDetial.png';
import TransactionModal from '../models/TransactionModal';

interface SendTransactionsRowProps {
  displayData?: {
    typeimg?: string;
    username: string;
    transaction_type: string;
    asset: string;
    network: string;
    amount: string;
    amountUSD: string;
    status: 'successful' | 'processing' | 'failed';
    fees?: string;
    feesUSD?: string;
    date: string;
    time: string;
    receivedFrom?: string;
  };
  index?: number;
}

const SendTransactionsRow: React.FC<SendTransactionsRowProps> = ({ displayData = {}, index = 1 }) => {
  const [showDetailModel, setshowDetailModel] = useState(false);
  const [justSubmited, setjustSubmited] = useState(false);

  useEffect(() => {
    if (displayData?.status === 'processing') {
      setjustSubmited(true);
    } else {
      setjustSubmited(false);
    }
  }, [displayData?.status]);

  const transactionDetails = [
    { label: 'Token Name', value: 'Bitcoin', copyable: false },
    { label: 'Network', value: 'Bitcoin', copyable: false },
    { label: 'Amount in BTC', value: '0.00000234 BTC', copyable: false },
    { label: 'Amount in USD', value: '$1,500.23', copyable: false },
    { label: 'Recipient Address', value: '0xdfgjkfkkfn...bkkbm', copyable: true },
    { label: 'TX Hash', value: 'esfjfgnkkfn...bkkbm', copyable: true },
    { label: 'Fees in BTC', value: '0.00000012 BTC', copyable: false },
    { label: 'Fees in USD', value: '$12', copyable: false },
    { label: 'Date', value: '12 - 22 - 24 / 11:22 AM', copyable: false },
  ];

  return (
    <>
      <tr
        className={`hover:bg-green-800 hover:cursor-pointer ${
          index % 2 === 0 ? 'bg-green-950' : ''
        }`}
      >
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <div className="flex items-center gap-2">
              <img
                src={
                  displayData?.typeimg
                    ? displayData.typeimg
                    : `https://randomuser.me/api/portraits/men/44.jpg`
                }
                alt={displayData?.username}
                className="w-8 h-8 rounded-full"
              />
              <span>{displayData?.username}</span>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">{displayData?.transaction_type}</td>
        <td>
          <div className="flex items-center gap-2">
            <img
              src={displayData?.typeimg ? displayData.typeimg : BtcIcon}
              alt={displayData?.network}
              className="w-8 h-8"
            />
            <div className="flex flex-col">
              <span className="text-sm opacity-50">{displayData?.asset}</span>
              <span>{displayData?.network}</span>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <img
              src={displayData?.typeimg ? displayData.typeimg : BtcIcon}
              alt={displayData?.network}
              className="w-8 h-8"
            />
            <span>{displayData?.network}</span>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex flex-col gap-4">
            <span>{displayData?.amount}</span>
            <span>{displayData?.amountUSD}</span>
          </div>
        </td>
        <td className="px-4 py-2">
          <div
            className={`w-1 h-10 rounded-lg mx-auto bg-${
              displayData?.status === 'successful'
                ? 'green-500'
                : displayData?.status === 'processing'
                ? 'yellow-500'
                : 'red-500'
            }`}
          ></div>
        </td>
        <td className="px-4 py-2">
          {displayData?.fees ? (
            <div className="flex flex-col gap-4">
              <span>{displayData?.fees}</span>
              <span>{displayData?.feesUSD}</span>
            </div>
          ) : (
            '-'
          )}
        </td>
        <td className="px-4 py-2 flex flex-col gap-4">
          <span>{displayData?.date}</span>
          <span>{displayData?.time}</span>
        </td>
        <td className="px-4 py-2">
          <MoreDropdown iconClass="bi bi-three-dots-vertical" menuClass="bg-theme-dark min-w-[150px]">
            <div className="bg-theme-light p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2" onClick={() => setshowDetailModel(true)}>
                <img src={kycDetial} alt="more" className="h-5 w-5" />
                <span className="p-0 m-0">View More</span>
              </div>
            </div>
          </MoreDropdown>
        </td>
      </tr>
      {showDetailModel && (
        <TransactionModal
          status={displayData?.status}
          statusName="Transaction Successful"
          options={transactionDetails}
          onClose={() => setshowDetailModel(false)}
        >
          {justSubmited ? (
            <div className="flex items-center justify-between gap-8">
              <button className="bg-green-400 px-12 py-2 rounded-lg flex items-center justify-center gap-2">
                Approve
              </button>
              <button className="bg-red-600 text-white px-12 py-2 rounded-lg">
                Delete
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                <i className="bi bi-printer"></i>Print
              </button>
              <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg">
                Blockchain
              </button>
              <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg">
                Log
              </button>
            </div>
          )}
        </TransactionModal>
      )}
    </>
  );
};

export default SendTransactionsRow;