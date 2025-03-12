import React, { useState } from 'react';
import Overlay from '../../../../globalComponents/Overlay';
import successIcon from '../../../../assets/icons/successIcon.png';
import processing from '../../../../assets/icons/processing.png';
import failed from '../../../../assets/icons/failed.png';

interface TransactionModalProps {
  status: 'successful' | 'processing' | 'failed';
  statusName: string;
  options: { label: string; value: string; copyable?: boolean }[];
  accounts?: {
    account: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
  onClose: () => void;
  children?: React.ReactNode;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  status,
  statusName,
  options,
  accounts,
  onClose,
  children,
}) => {
  const icons = {
    successful: successIcon,
    processing: processing,
    failed: failed,
  };

  const [selectedAccount, setSelectedAccount] = useState(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    alert('Copied to clipboard: ' + value);
  };

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[35%] max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 justify-center relative mb-8">
          <h2 className="text-xl font-bold text-white">Transaction Details</h2>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 text-white text-lg"
            onClick={onClose}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        {/* Status Section */}
        <div className="flex flex-col items-center">
          <img src={icons[status]} alt="Status Icon" className="w-28 h-28 object-contain" />
          <p
            className={`text-${
              status === 'successful' ? 'green-500' : status === 'processing' ? 'yellow-500' : 'red-500'
            } font-semibold mt-2`}
          >
            {statusName}
          </p>
        </div>

        {/* Transaction Details */}
        <div className="bg-[#022E1E] p-4 mt-4 rounded-lg flex flex-col gap-3">
          {options.map((option, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="opacity-75">{option.label}</span>
              <div className="flex items-center gap-2">
                {option.copyable && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(option.value)}
                    className="text-white rounded-md text-xl"
                  >
                    <i className="bi bi-copy"></i>
                  </button>
                )}
                <span className="text-right break-all">{option.value}</span>
              </div>
            </div>
          ))}

          {/* Account Dropdown (If Accounts Exist) */}
          {accounts && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="opacity-75">Account paid to</span>
                <span
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setSelectedAccount(!selectedAccount)}
                >
                  {accounts.account}
                  <i className={`bi bi-chevron-${selectedAccount ? 'down' : 'right'}`}></i>
                </span>
              </div>
              {/* Display Selected Account Details */}
              {selectedAccount && (
                <div className="bg-green-900 p-4 rounded-lg mt-2 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="opacity-75">Bank Name:</span>
                    {accounts.bankName}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="opacity-75">Account Name:</span>
                    {accounts.accountName}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="opacity-75">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(accounts.accountNumber)}
                        className="text-white rounded-md text-xl"
                      >
                        <i className="bi bi-copy"></i>
                      </button>
                      {accounts.accountNumber}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex flex-col gap-4">{children}</div>
      </div>
    </Overlay>
  );
};

export default TransactionModal;