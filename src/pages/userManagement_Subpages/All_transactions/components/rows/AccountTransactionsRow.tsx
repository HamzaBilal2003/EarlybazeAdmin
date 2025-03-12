import React, { useEffect, useState } from 'react';
import BtcIcon from '../../../../../assets/icons/DummyIcon/btc.png';
import MoreDropdown from '../../../../../globalComponents/MoreDropdown';
import ReasonModal from '../models/ReasonModal';
import TransactionModal from '../models/TransactionModal';
import ReceiptDiv from '../small_comp/ReceiptDiv';
import successIcon from '../../../../../assets/icons/successIcon.png';
import kycDetial from '../../../../../assets/icons/kycDetial.png';

interface AccountTransactionsRowProps {
  displayData: {
    typeimg?: string;
    type?: string;
    asset?: string;
    network?: string;
    receivingAddress?: string;
    sendToGmail?: string;
    amount: string;
    amountUSD: string;
    status: string;
    fees?: string;
    feesUSD?: string;
    date: string;
    time: string;
  };
  index: number;
}

const AccountTransactionsRow: React.FC<AccountTransactionsRowProps> = ({
  displayData,
  index,
}) => {
  const [showDetailModel, setShowDetailModel] = useState(false);
  const [reasonModel, setreasonModel] = useState(false);
  const [justSubmited, setjustSubmited] = useState(false);

  useEffect(() => {
    if (displayData?.status === 'pending') {
      setjustSubmited(true);
    } else {
      setjustSubmited(false);
    }
  }, [displayData?.status]);
  const handleReasonSubmit = (value: string) => {
    setreasonModel(false);
    console.log(value, displayData);
  };
  return (
    <>
      <tr
        className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''
          }`}
      >
        <td className="px-4 py-2 ">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <div className="flex items-center gap-2">
              <img
                src={displayData.typeimg ? displayData.typeimg : BtcIcon}
                alt={displayData.type || 'BTC'}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="text-sm opacity-50">{displayData.asset}</span>
                <span>{displayData.network}</span>
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">{displayData.network}</td>
        <td className="px-4 py-2">
          {displayData.receivingAddress || displayData.sendToGmail}
        </td>
        <td className="px-4 py-2">
          <div className="flex flex-col gap-4">
            <span>{displayData.amount}</span>
            <span>{displayData.amountUSD}</span>
          </div>
        </td>
        <td className="px-4 py-2">
          <div
            className={`w-1 h-10 rounded-lg mx-auto bg-${displayData.status === 'success' ? 'green-500' : 'red-600'
              }`}
          ></div>
        </td>
        {displayData.fees && (
          <td className="px-4 py-2">
            <div className="flex flex-col gap-4">
              <span>{displayData.fees}</span>
              <span>{displayData.feesUSD}</span>
            </div>
          </td>
        )}
        <td className="px-4 py-2 flex flex-col gap-4">
          <span>{displayData.date}</span>
          <span>{displayData.time}</span>
        </td>
        <td className="px-4 py-2">
          <MoreDropdown iconClass="bi bi-three-dots-vertical" menuClass="bg-theme-dark min-w-[150px]">
            <div className="bg-theme-light p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2" onClick={() => setShowDetailModel(true)}>
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
          options={[]}
          accounts={{
            // id: '1',
            account: 'account 1',
            bankName: 'Access Bank',
            accountName: 'EarlyBase',
            accountNumber: '123456789',
          }}
          onClose={() => setShowDetailModel(false)}
        >
          <ReceiptDiv
            accoutHolder={'qamardeen abdul malik'}
            amount={'123456789'}
            receipt={successIcon}
          />
          {justSubmited ? (
            <div className="flex items-center justify-between gap-8">
              <button className="bg-green-400 px-12 py-2 rounded-lg flex items-center justify-center gap-2">
                Approve
              </button>
              <button
                onClick={() => setreasonModel(true)}
                className="bg-red-600 text-white px-12 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                <i className="bi bi-printer"></i>Print
              </button>
              <button className="w-full border border-red-600 text-red-600 px-4 py-2 rounded-lg">
                Delete
              </button>
              <button className="w-full border text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                <i className="bi bi-file-text"></i>Log
              </button>
            </div>
          )}
        </TransactionModal>
      )}

      {reasonModel && (
        <ReasonModal onClose={() => setreasonModel(false)} onSubmit={handleReasonSubmit} />
      )}
    </>
  );
};

export default AccountTransactionsRow;