import React, { useState } from 'react';
import ApiCard from '../components/ApiCard';
import SecurityModel from '../components/SecurityModel';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';

interface ApiData {
  heading: string;
  paragraph: string;
  apiKey: string;
}

const Apis = () => {
  const [apisData, setApisData] = useState<ApiData[]>([
    {
      heading: 'Coinmarket cap',
      paragraph: 'Get real-time crypto data from CoinMarket or CoinGecko',
      apiKey: 'jsd12938dy12u3dhi13u8dh19h82dh12hd8',
    },
    {
      heading: 'API Key 2',
      paragraph: 'Get real-time crypto data from CoinMarket or CoinGecko',
      apiKey: 'jsd12938dy12u3dhi13u8dh19h82dh12hd9',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<ApiData | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Open modal for adding or editing
  const handleOpenModal = (data: ApiData | null = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  // Handle form submission (Add/Edit API)
  const handleSubmit = (newData: ApiData) => {
    if (editData) {
      setApisData(
        apisData.map((api) => (api.apiKey === editData.apiKey ? newData : api))
      );
    } else {
      setApisData([...apisData, newData]);
    }
    setIsModalOpen(false);
  };

  // Handle delete confirmation popup
  const handleDeleteConfirmation = (apiKey: string) => {
    setDeleteTarget(apiKey);
    setShowPopup(true);
  };

  // Confirm delete function
  const handleConfirmDelete = () => {
    setApisData(apisData.filter((api) => api.apiKey !== deleteTarget));
    setShowPopup(false);
  };

  // Close delete confirmation popup
  const handleClosePopup = () => {
    setDeleteTarget(null);
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <ConfirmationPopup
          icon="⚠️"
          heading="Do you want to delete this API?"
          confirmText="Yes, Delete"
          closeText="Cancel"
          confirmColor="bg-red-600"
          closeColor="bg-gray-600"
          buttonPx="6"
          buttonPy="3"
          onConfirm={handleConfirmDelete}
          onClose={handleClosePopup}
        />
      )}

      {isModalOpen && (
        <SecurityModel
          closeModal={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          initialData={editData}
        />
      )}

      <div className="flex items-center gap-4 justify-between mb-8">
        <h1 className="text-2xl font-bold">APIS</h1>
        <button
          className="bg-[#25AE7A] py-2 px-8 rounded-lg"
          onClick={() => handleOpenModal()}
        >
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {apisData.map((data, index) => (
          <ApiCard
            key={index}
            heading={data.heading}
            paragraph={data.paragraph}
            apiKey={data.apiKey}
            onEdit={() => handleOpenModal(data)}
            onDelete={() => handleDeleteConfirmation(data.apiKey)}
          />
        ))}
      </div>
    </>
  );
};

export default Apis;