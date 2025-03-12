import React from 'react';

interface BankCardProps {
  account: {
    id: string | number;
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
  onedit: (account: {
    id: string | number;
    bankName: string;
    accountName: string;
    accountNumber: string;
  }) => void;
  ondelete: (id: string | number) => void;
}

const BankCard: React.FC<BankCardProps> = ({ account, onedit, ondelete }) => {
  return (
    <div key={account.id} className="bg-theme-dark p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-semibold">
          Account {account.id}
        </h2>
        <div className="flex items-center gap-4">
          <i
            className="bi bi-pencil-square text-green-400 text-xl cursor-pointer"
            onClick={() => onedit(account)}
          ></i>
          <i
            className="bi bi-trash text-red-500 text-xl cursor-pointer"
            onClick={() => ondelete(account.id)}
          ></i>
        </div>
      </div>
      <div className="text-white space-y-2 rounded-lg bg-green-950 p-4">
        <div className="flex justify-between">
          <span>Bank name</span>
          <span className="font-semibold">{account.bankName}</span>
        </div>
        <div className="flex justify-between">
          <span>Account name</span>
          <span className="font-semibold">{account.accountName}</span>
        </div>
        <div className="flex justify-between">
          <span>Account Number</span>
          <span className="font-semibold">{account.accountNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default BankCard;