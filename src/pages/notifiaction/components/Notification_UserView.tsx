import React from 'react';
import Overlay from '../../../globalComponents/Overlay';

interface ViewNotificationModalProps {
  closeModal: () => void;
  notification: {
    title: string;
    description: string;
    image?: string;
  };
}

const ViewNotificationModal: React.FC<ViewNotificationModalProps> = ({ closeModal, notification }) => {
  return (
    <Overlay>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[30%] mx-auto'>
        <div className='flex items-center justify-between relative mb-8'>
          <h2 className='text-xl font-bold text-white'>View Notification</h2>
          <button
            className='text-white text-lg'
            onClick={closeModal}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        <div className='flex flex-col gap-8'>
          <div>
            <label className='text-white mb-2 block font-bold'>Title</label>
            <p className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'>
              {notification.title}
            </p>
          </div>

          <div>
            <label className='text-white mb-2 block font-bold'>Description</label>
            <p className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'>
              {notification.description}
            </p>
          </div>

          <div>
            <label className='text-white mb-2 block font-bold'>Image</label>
            {notification.image ? (
              <img
                src={notification.image}
                alt="Notification"
                className='rounded-md border border-[#25AE7A] w-full max-h-60 object-cover'
              />
            ) : (
              <p className="text-gray-400">No image provided</p>
            )}
          </div>

          <button
            onClick={closeModal}
            className='bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold'
          >
            Close
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default ViewNotificationModal;