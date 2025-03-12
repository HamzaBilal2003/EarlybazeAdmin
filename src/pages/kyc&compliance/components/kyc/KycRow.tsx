import React, { useState } from 'react';
import delIcon from '../../../../assets/icons/delIcon.png';
import MoreDropdown from '../../../../globalComponents/MoreDropdown';
import kycDetial from '../../../../assets/icons/kycDetial.png';
import KYCDetailsModal from './KYCDetailsModal';

interface KycRowProps {
  displayData: {
    firstName: string;
    lastName: string;
    dob: string;
    address: string;
    timestamp: string;
    status: 'active' | 'inactive';
    img?: string;
    // Add other relevant properties here
    profilePic: File | string | null;
    frontImage: File | string | null;
    backImage: File | string | null;
    state: string;
    bvn: string;
    documentType: string;
    changeStatus: string;
  };
  index: number;
}

const KycRow: React.FC<KycRowProps> = ({ displayData, index }) => {
  const [editData, seteditData] = useState(displayData);
  const [showDetail, setshowDetail] = useState(false);

  const onDetail = () => {
    setshowDetail(true);
  };

  const onDelete = () => {
    console.log('Delete', displayData.firstName);
  };

  const onSubmit = (values: {
    firstName: string;
    lastName: string;
    dob: Date | null;
    address: string;
    state: string;
    bvn: string;
    documentType: string;
    frontImage: File | null;
    backImage: File | null;
    changeStatus: string;
    profilePic: File | null;
  }) => {
    console.log(values, ' : Updated Data');
    seteditData({
      ...editData,
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob?.toISOString().split('T')[0] || editData.dob,
      address: values.address,
      state: values.state,
      bvn: values.bvn,
      documentType: values.documentType,
      changeStatus: values.changeStatus,
      profilePic: values.profilePic || editData.profilePic,
      frontImage: values.frontImage || editData.frontImage,
      backImage: values.backImage || editData.backImage,
    });
    setshowDetail(false);
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
            <img
              src={displayData.img ? displayData.img : 'https://randomuser.me/api/portraits/men/44.jpg'}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </td>
        <td className="px-4 py-2 text-white">
          <h1 className="text-white font-semibold">
            {displayData.firstName} {displayData.lastName}
          </h1>
        </td>
        <td className="px-4 py-2 text-white">{displayData.dob}</td>
        <td className="px-4 py-2 text-white">{displayData.address}</td>
        <td className="px-4 py-2 text-white whitespace-pre">{displayData.timestamp}</td>
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
                onClick={onDetail}
                className="bg-theme-dark-800 text-white py-4 px-2 rounded-lg min-w-[150px] flex items-center justify-center gap-4"
              >
                <img src={kycDetial} alt="detail" className="w-5 h-5" />
                <h1 className="text-nowrap">View Detail</h1>
              </div>
            </MoreDropdown>
            <button
              className="border border-[#25AE7A] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold"
              onClick={onDelete}
            >
              <img src={delIcon} alt="Delete" className="w-5 h-5 object-cover" />
            </button>
          </div>
        </td>
      </tr>
      {showDetail && (
        <KYCDetailsModal
          initialValues={editData}
          closeModal={() => setshowDetail(false)}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default KycRow;