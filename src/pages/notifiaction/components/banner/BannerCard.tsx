import React from 'react';
import { Link } from 'react-router-dom';
import bgBtc from '../../../../assets/icons/btc_bg.png';

interface BannerCardProps {
  banner: {
    image?: string;
    bannerLink: string;
    date?: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const BannerCard: React.FC<BannerCardProps> = ({ banner, onEdit, onDelete }) => {
  console.log(banner.image);
  return (
    <div className="bg-theme-dark border border-[#25AE7A] rounded-lg flex flex-col gap-4">
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Link to={banner.bannerLink}>
          <img
            src={banner.image ? banner.image : bgBtc}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div className="flex items-center justify-between p-4">
        <p className="text-white text-sm">{banner.date ? banner.date : '01-1-25 / 11:23 AM'}</p>
        <div className="flex gap-4">
          <button
            className="border border-green-900 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
            onClick={onEdit}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="border border-green-900 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
            onClick={onDelete}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;