import React, { useState } from 'react';
import MoreDropdown from '../../../../globalComponents/MoreDropdown';
import editIcon from '../../../../assets/icons/edit.png';
import TradeLimitModel from './TradeLimitModel'; // Assuming you have a modal for editing

interface TradeLimitRowProps {
  displayData: {
    tradeType: string;
    limit: number;
    timestamp: string;
    status: 'active' | 'inactive';
    // Add other relevant properties here
    verificationLevel: string;
    type: string;
  };
  index: number;
}

const TradeLimitRow: React.FC<TradeLimitRowProps> = ({ displayData, index }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(displayData);

  const onEdit = () => {
    setEditData(displayData);
    setShowEditModal(true);
  };

  const onSubmit = (updatedData: { type: string; verificationLevel: string; limit: number }) => {
    console.log('Updated data:', updatedData);
    setEditData({
      ...editData,
      tradeType: updatedData.type,
      limit: updatedData.limit,
      verificationLevel: updatedData.verificationLevel,
      type: updatedData.type,
    });
    setShowEditModal(false);
  };

  return (
    <>
      <tr
        className={`hover:bg-green-800 hover:cursor-pointer ${
          index % 2 === 0 ? 'bg-green-950' : ''
        }`}
      >
        <td className="py-2">
          <div className="flex items-center gap-4 px-4 py-2">
            <input type="checkbox" />
            <h1 className="text-white font-semibold">{displayData.tradeType}</h1>
          </div>
        </td>
        <td className="px-4 py-2 text-white">{displayData.limit}</td>
        <td className="px-4 py-2 text-white">{displayData.timestamp}</td>
        <td className="px-4 py-2">
          <div
            className={`w-1 h-8 rounded-full ${
              displayData.status === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <MoreDropdown buttonClass="border-[#25AE7A]" menuClass="bg-[#042619]">
              <div
                onClick={onEdit}
                className="bg-theme-dark-800 text-white p-4 rounded-lg flex items-center gap-2 cursor-pointer min-w-[150px]"
              >
                <img src={editIcon} alt="Edit" className="w-5 h-5" />
                <h1 className="text-nowrap">Edit</h1>
              </div>
            </MoreDropdown>
          </div>
        </td>
      </tr>

      {showEditModal && (
        <TradeLimitModel
          initialValues={{
            type: editData.type,
            verificationLevel: editData.verificationLevel,
            limit: editData.limit,
          }}
          closeModal={() => setShowEditModal(false)}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default TradeLimitRow;