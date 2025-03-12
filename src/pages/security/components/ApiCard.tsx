import React from 'react';
import EditIcon from '../../../assets/icons/edit.png';
import delIcon from '../../../assets/icons/delIcon.png';

interface ApiCardProps {
  heading: string;
  paragraph: string;
  apiKey: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ApiCard: React.FC<ApiCardProps> = ({
  heading,
  paragraph,
  apiKey,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border border-[#25AE7A] bg-dark-theme p-8 rounded-xl flex flex-col gap-4">
      <h1 className="text-xl">{heading}</h1>
      <p className="opacity-50">{paragraph}</p>
      <div className="bg-[#25AE7A] p-4 overflow-auto text-nowrap rounded-xl">
        {apiKey}
      </div>
      <div className="flex justify-end items-center gap-2">
        <button
          className="border border-[#25AE7A] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold"
          onClick={onEdit}
        >
          <img src={EditIcon} alt="Edit" className="w-5 h-5 object-cover" />
        </button>
        <button
          className="border border-[#25AE7A] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold"
          onClick={onDelete}
        >
          <img src={delIcon} alt="del" className="w-5 h-5 object-cover" />
        </button>
      </div>
    </div>
  );
};

export default ApiCard;