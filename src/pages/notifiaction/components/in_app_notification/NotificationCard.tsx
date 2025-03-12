import React from 'react';

interface NotificationCardProps {
  title: string;
  message: string;
  attachment?: string;
  date?: string;
  onEdit: () => void;
  onDelete: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  message,
  attachment,
  date,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border border-[#25AE7A] rounded-lg bg-theme-dark p-6 w-full">
      <h3 className="text-gray-400 font-bold mb-2">Title</h3>
      <p className="text-white mb-4">{title}</p>

      <h3 className="text-gray-400 font-bold mb-2">Message</h3>
      <p className="text-white mb-4">{message}</p>

      <div className="flex items-end justify-around text-gray-300">
        <div className="">
          <h3 className="text-gray-400 font-bold mb-2">Attachment</h3>
          <img
            src={attachment ? attachment : "https://randomuser.me/api/portraits/men/22.jpg"}
            alt="attachment"
            className="w-12 h-12 rounded-md bg-gray-700"
          />
        </div>
        <span>{date ? date : '01-01-25 / 11:23 AM'}</span>
        <div className="flex gap-4">
          <button onClick={onEdit} className="border border-green-900 hover:bg-green-600 text-white px-3 py-2 rounded-md">
            <i className="bi bi-pencil"></i>
          </button>
          <button onClick={onDelete} className="border border-green-900 hover:bg-green-600 text-white px-3 py-2 rounded-md">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;