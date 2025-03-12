import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../../globalComponents/Dropdown';
import SendNotificationModal from '../../notifiaction/components/in_app_notification/SendNotificationModel';
import NotificationCard from '../../notifiaction/components/in_app_notification/NotificationCard';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  attachment?: string;
}

const AccountNotification = () => {
  const navigate = useNavigate();
  const [showSendModel, setShowSendModel] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Notification | null>(null);

  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

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

  const handleFilter = (value: string) => {
    console.log(value);
  };

  const handleEdit = (notification: Notification) => {
    setEditData(notification);
    setShowSendModel(true);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setNotifications(notifications.filter((notification) => notification.id !== deleteId));
    setShowDeleteConfirmation(false);
  };

  const handleNotificationSubmit = (data: Omit<Notification, 'id' | 'date'>) => {
    if (editData) {
      setNotifications(
        notifications.map((notification) =>
          notification.id === editData.id ? { ...notification, ...data } : notification
        )
      );
      setShowSendModel(false);
      setEditData(null);
      console.log(data, ' : updated values');
    } else {
      setNotifications([
        ...notifications,
        {
          id: notifications.length + 1,
          title: data.title,
          message: data.message,
          date: new Date().toLocaleDateString() + ' / ' + new Date().toLocaleTimeString(),
        },
      ]);
      setShowSendModel(false);
      console.log(data, ' :  values');
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-[80px]">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl text-white"></i>
          </button>
          <h1 className="text-4xl font-bold text-white">Notifications</h1>
        </div>
        <button className="py-2 px-4 text-white bg-[#25AE7A] rounded-lg" onClick={() => setShowSendModel(true)}>
          Send New
        </button>
      </div>

      <div className="mb-8 flex items-center justify-between gap-8">
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={handleFilter}
          selected={periodFilter.selected}
          borderColor={'[#25AE7A]'}
          bgColor="theme-dark"
          roundedValue="full"
          position="left-0"
          paddingY="2"
          gap="4"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
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
      {showSendModel && (
        <SendNotificationModal closeModal={() => setShowSendModel(false)} onSubmit={handleNotificationSubmit} />
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
    </>
  );
};

export default AccountNotification;