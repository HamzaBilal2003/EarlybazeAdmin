import React, { useState } from 'react';
import NotificationCard from './components/in_app_notification/NotificationCard';
import SendNotificationModal from './components/in_app_notification/SendNotificationModel';
import ConfirmationPopup from '../../globalComponents/ConfirmationPopup';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  attachment?: string;
}

const InAppNotifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'The best crypto app',
      message: 'The best crypto app to buy and sell and swap all your favorite tokens',
      date: '01-01-24 / 11:23 AM',
    },
    {
      id: 2,
      title: 'The best crypto app',
      message: 'The best crypto app to buy and sell and swap all your favorite tokens',
      date: '01-01-24 / 11:23 AM',
    },
    {
      id: 3,
      title: 'The best crypto app',
      message: 'The best crypto app to buy and sell and swap all your favorite tokens',
      date: '01-01-24 / 11:23 AM',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<Notification | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleAdd = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEdit = (notification: Notification) => {
    setEditData(notification);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setNotifications(notifications.filter((notification) => notification.id !== deleteId));
    setShowDeleteConfirmation(false);
  };

  const handleSubmit = (data: {
    title: string;
    message: string;
    date: string;
    attachment?: string;
  }) => {
    if (editData) {
      setNotifications(
        notifications.map((notification) =>
          notification.id === editData.id ? { ...notification, ...data } : notification
        )
      );
    } else {
      setNotifications([...notifications, { id: notifications.length + 1, ...data }]);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-[100px]">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl text-white"></i>
          </button>
          <h1 className="text-4xl font-bold text-white">In-App Notifications</h1>
        </div>
        <button onClick={handleAdd} className="bg-[#25AE7A] px-6 py-3 rounded-lg text-white font-bold">
          Send New
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
            attachment={notification.attachment}
            date={notification.date}
            onEdit={() => handleEdit(notification)}
            onDelete={() => handleDelete(notification.id)}
          />
        ))}
      </div>

      {showModal && (
        <SendNotificationModal
          closeModal={() => setShowModal(false)}
          onSubmit={handleSubmit}
          initialData={editData}
        />
      )}

      {showDeleteConfirmation && (
        <ConfirmationPopup
          heading="Are you sure you want to delete this notification?"
          confirmColor="bg-red-500"
          closeText="Cancel"
          onConfirm={confirmDelete}
          onClose={() => setShowDeleteConfirmation(false)}
        />
      )}
    </div>
  );
};

export default InAppNotifications;