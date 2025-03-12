import React, { useState } from 'react';
import MoreDropdown from '../../../../globalComponents/MoreDropdown';
import EditIcon from '../../../../assets/icons/edit.png';
import delIcon from '../../../../assets/icons/delIcon.png';
import duplicate from '../../../../assets/icons/duplicate.png';
import SelectExemptionModal from './SelectExemptionModal';

interface RuleRowProps {
  displayData: {
    ruleName: string;
    description: string;
    threshold: string;
    level: string;
    timestamp: string;
    time: string;
    status: 'active' | 'inactive';
    exemption: boolean;
  };
  index: number;
}

const RuleRow: React.FC<RuleRowProps> = ({ displayData, index }) => {
  const [showModel, setShowModel] = useState(false);
  const [editData, seteditData] = useState(null);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const options = [
    { name: 'Alucard', value: 'alucard', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Dracula', value: 'dracula', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Belmont', value: 'belmont', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Sypha', value: 'sypha', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ];
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
            <h1 className="text-white font-semibold text-nowrap">{displayData.ruleName}</h1>
          </div>
        </td>
        <td className="px-4 py-2 text-white">{displayData.description}</td>
        <td className="px-4 py-2 text-white">{displayData.threshold}</td>
        <td className="px-4 py-2 text-white">{displayData.level}</td>
        <td className="px-4 py-2 text-white text-nowrap">
          {displayData.timestamp} / {displayData.time}
        </td>
        <td className="px-4 py-2">
          <div
            className={`w-1 h-8 rounded-full ${
              displayData.status === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
        </td>
        <td className="px-4 py-2">
          {displayData.exemption && (
            <button
              onClick={() => setShowModel(true)}
              className="bg-[#25AE7A] py-2 px-4 rounded-lg text-white font-bold"
            >
              Exemptions
            </button>
          )}
        </td>
        <td className="px-4 py-2">
          <MoreDropdown buttonClass="border-[#25AE7A]" menuClass="bg-[#042619]">
            <div className="bg-theme-dark-800 text-white py-4 px-2 flex flex-col gap-4 rounded-lg min-w-[150px]">
              <div className="flex items-center gap-2">
                <img src={EditIcon} alt="edit" className="w-6 h-6 object-cover" />
                <h1 className="text-lg">Edit</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={duplicate} alt="edit" className="w-6 h-6 object-cover" />
                <h1 className="text-lg">Duplicate</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={delIcon} alt="edit" className="w-6 h-6 object-cover" />
                <h1 className="text-lg">Delete</h1>
              </div>
            </div>
          </MoreDropdown>
        </td>
      </tr>
      {showModel && (
        <SelectExemptionModal
          closeModal={() => setShowModel(false)}
          onSubmit={onSubmit}
          options={options}
        />
      )}
    </>
  );
};

export default RuleRow;