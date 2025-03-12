import React from 'react';
import EditIcon from '../../../assets/icons/edit.png';
import delIcon from '../../../assets/icons/delIcon.png';

interface FeeManagementData {
  charge: string;
  percentage: string;
  status: 'active' | 'inactive';
  date: string;
}

interface FeeManagementRowProps {
  displayData: FeeManagementData;
  index: number;
}

const FeeManagementRow: React.FC<FeeManagementRowProps> = ({ displayData, index }) => {
  const onEdit = () => {
    console.log('Edit');
  };
  const onDelete = () => {
    console.log('Delete');
  };
  return (
    <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? 'bg-green-950' : ''}`}>
      <td className="px-4 py-2">
        <div className="flex items-center gap-4 px-4 py-2">
          <input type="checkbox" />
          <div className="flex items-center gap-4">
            <h1>{displayData.charge}</h1>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">{displayData.percentage}</td>
      <td className="px-4 py-2">
        <div
          className={`mx-8 w-1 h-8 bg-${
            displayData.status === 'active' ? 'green' : 'red'
          }-500 rounded-full`}
        ></div>
      </td>
      <td className="px-4 py-2">{displayData.date}</td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            className="border border-[#25AE7A] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold"
            onClick={onEdit}
          >
            <img src={EditIcon} alt="Edit" className="w-5 h-5 object-cover" />
          </button>
          <button
            className="border border-[#25AE7A] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold"
            onClick={onDelete}
          >
            <img src={delIcon} alt="del" className="w-5 h-5 object-cover" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FeeManagementRow;