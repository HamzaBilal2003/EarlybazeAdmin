import React from 'react';
import MoreDropdown from '../../../globalComponents/MoreDropdown';

interface PayoutRulesRowProps {
  displayData: {
    user: string;
    details: string;
    accountsExempted: string;
    transactionsExempted: string;
    dateCreated: string;
    status: 'active' | 'inactive';
  };
  index: number;
  OnEdit: () => void;
  OnDelete: () => void;
}

const PayoutRulesRow: React.FC<PayoutRulesRowProps> = ({
  displayData,
  index,
  OnEdit,
  OnDelete,
}) => {
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${
        index % 2 === 0 ? 'bg-green-950' : ''
      }`}
    >
      <td className="px-4 py-2 text-nowrap">{displayData.user}</td>
      <td className="px-4 py-2 min-w-[300px]">{displayData.details}</td>
      <td className="px-4 py-2 text-nowrap text-center">
        {displayData.accountsExempted}
      </td>
      <td className="px-4 py-2 text-nowrap text-center">
        {displayData.transactionsExempted}
      </td>
      <td className="px-4 py-2 text-nowrap">{displayData.dateCreated}</td>
      <td className="px-4 py-2">
        <div
          className={`h-6 w-1 rounded-full mx-auto ${
            displayData.status === 'active'
              ? 'bg-green-500'
              : 'bg-red-500'
          }`}
        ></div>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <button className="bg-[#25AE7A] text-white px-4 py-2 rounded-lg">
            Exemptions
          </button>
          <MoreDropdown menuClass="min-w-[150px] bg-theme-dark p-2">
            <div className="flex flex-col gap-2">
              <button
                onClick={OnEdit}
                className="cursor-pointer text-white py-2 px-4 text-left hover:bg-green-950 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={OnDelete}
                className="cursor-pointer text-white py-2 px-4 text-left hover:bg-green-950 rounded-lg"
              >
                Delete
              </button>
            </div>
          </MoreDropdown>
        </div>
      </td>
    </tr>
  );
};

export default PayoutRulesRow;