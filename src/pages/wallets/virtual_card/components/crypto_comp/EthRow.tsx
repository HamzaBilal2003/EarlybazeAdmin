import React from 'react';
import MoreDropdown from '../../../../../globalComponents/MoreDropdown';
import btcIcon from '../../../../../assets/icons/DummyIcon/btc.png';
import AddingButton from '../../../../../globalComponents/AddingButton';

interface EthRowProps {
  displayData?: {
    action?: string;
    icon?: string;
    asset?: string;
    network?: string;
    amount?: string;
    date?: string;
    time?: string;
    status?: boolean;
  };
  index?: number;
}

const EthRow: React.FC<EthRowProps> = ({ displayData = {}, index = 1 }) => {
  return (
    <tr className={`hover:bg-green-800 cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''}`}>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          {displayData?.action}
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={displayData?.icon || btcIcon} alt={displayData?.asset} className="w-10 h-10 rounded-full" />
            <span>{displayData?.asset}</span>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={displayData?.icon || btcIcon} alt={displayData?.network} className="w-10 h-10 rounded-full" />
            <span>{displayData?.network}</span>
          </div>
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
          className={`w-1 h-10 rounded-lg mx-auto bg-${displayData?.status === true ? 'green-500' : 'red-500'}`}
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

export default EthRow;