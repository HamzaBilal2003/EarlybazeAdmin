import React, { useState } from 'react';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';
import ViewNotificationModal from './Notification_UserView';

interface NotificationUserRowProps {
  displayData: {
    name: string;
    notification: string;
    date: string;
    // Add other properties if needed
  };
  index: number;
}

const Notification_UserRow: React.FC<NotificationUserRowProps> = ({ displayData, index }) => {
  const [showDelete, setshowDelete] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const onConfirmDelete = () => {
    console.log("delete successfully");
    setshowDelete(false);
  };

  const onCancelDelete = () => {
    console.log("cancel delete");
    setshowDelete(false);
  };

  return (
    <>
      <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
        <td className='px-4 py-2'>
          <div className='flex items-center gap-4 px-4 py-2'>
            <input type="checkbox" />
            <div className='flex items-center gap-4'>
              <img
                src={`https://randomuser.me/api/portraits/men/22.jpg`}
                alt={displayData.name}
                width="30"
                className='rounded-full'
              />
              <div>
                <h1 className="font-bold">{displayData.name}</h1>
              </div>
            </div>
          </div>
        </td>
        <td className='px-4 py-2'>{displayData.notification}</td>
        <td className='px-4 py-2'>{displayData.date}</td>
        <td className='px-4 py-2 text-center flex gap-4'>
          <button
            onClick={() => setShowViewModal(true)}
            className="border border-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            <i className="bi bi-eye"></i>
          </button>
          <button onClick={() => setshowDelete(true)} className="border border-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
            <i className="bi bi-trash"></i>
          </button>
        </td>
      </tr>
      {showDelete && (
        <ConfirmationPopup
          title="Delete Notification"
          message="Are you sure you want to delete this notification?"
          onConfirm={onConfirmDelete}
          onCancel={onCancelDelete}
        />
      )}
      {showViewModal && (
        <ViewNotificationModal
          closeModal={() => setShowViewModal(false)}
          notification={displayData}
        />
      )}
    </>
  );
};

export default Notification_UserRow;