import React from 'react';
import AddingButton from '../../../../../globalComponents/AddingButton';

interface NairaRowProps {
  displayData?: {
    action?: string;
    amount?: string;
    date?: string;
    time?: string;
    status?: boolean;
  };
  index?: number;
}

const NairaRow: React.FC<NairaRowProps> = ({ displayData = {}, index = 1 }) => {
  return (
    <tr className={`hover:bg-green-800 cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''}`}>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          {displayData?.action}
        </div>
      </td>
      <td className="px-4 py-2">{displayData?.amount}</td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <span>{displayData?.date}</span> / <span>{displayData?.time}</span>
        </div>
      </td>
      <td className="px-4 py-2">
        <div
          className={`w-1 h-10 rounded-lg mx-auto bg-${
            displayData?.status === true ? 'green-500' : 'red-500'
          }`}
        ></div>
      </td>
      <td className="px-4 py-2">
        <AddingButton
          title={'transactions'}
          buttonClass="px-8 py-2"
          handlefunction={() => console.log('hello world')}
        />
      </td>
    </tr>
  );
};

export default NairaRow;