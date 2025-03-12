import React, { useState } from 'react';
import BannerCard from './components/banner/BannerCard';
import UploadBannerModal from './components/banner/UploadBannerModal';
import ConfirmationPopup from '../../globalComponents/ConfirmationPopup';
import { useNavigate } from 'react-router-dom';
import bgBtc from '../../assets/icons/btc_bg.png';
import bgBin from '../../assets/icons/bg_bin.png';
import bg_pink from '../../assets/icons/bg_pk.png';

interface Banner {
  id: number;
  image: string;
  date: string;
  bannerLink: string;
}

const InAppBanners = () => {
  const navigate = useNavigate();
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: 1,
      image: bgBtc,
      date: '01-01-24 / 11:23 AM',
      bannerLink: 'https://example.com',
    },
    {
      id: 2,
      image: bgBin,
      date: '01-02-24 / 11:23 AM',
      bannerLink: 'https://example.com',
    },
    {
      id: 3,
      image: bg_pink,
      date: '01-03-24 / 11:23 AM',
      bannerLink: 'https://example.com',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<Banner | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleAdd = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEdit = (banner: Banner) => {
    setEditData(banner);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setBanners(banners.filter((banner) => banner.id !== deleteId));
    setShowDeleteConfirmation(false);
  };

  const handleSubmit = (data: {
    image: string;
    date: string;
    bannerLink: string;
  }) => {
    if (editData) {
      setBanners(
        banners.map((banner) =>
          banner.id === editData.id ? { ...banner, ...data } : banner
        )
      );
    } else {
      setBanners([...banners, { id: banners.length + 1, ...data }]);
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
          <h1 className="text-4xl font-bold text-white">In-App Banners</h1>
        </div>
        <button
          onClick={handleAdd}
          className="bg-[#25AE7A] px-6 py-3 rounded-lg text-white font-bold"
        >
          Upload New Banner
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {banners.map((banner, index) => (
          <BannerCard
            key={index}
            banner={banner}
            onEdit={() => handleEdit(banner)}
            onDelete={() => handleDelete(banner.id)}
          />
        ))}
      </div>

      {showModal && (
        <UploadBannerModal
          closeModal={() => setShowModal(false)}
          onSubmit={handleSubmit}
          initialData={editData}
        />
      )}

      {showDeleteConfirmation && (
        <ConfirmationPopup
          heading="Are you sure you want to delete this banner?"
          confirmColor="bg-red-500"
          closeText="Cancel"
          onConfirm={confirmDelete}
          onClose={() => setShowDeleteConfirmation(false)}
        />
      )}
    </div>
  );
};

export default InAppBanners;