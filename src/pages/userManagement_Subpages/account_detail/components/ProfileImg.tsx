import React from 'react';

interface ProfileImgProps {
  name: string;
  profileImg: string;
  joinDate: string;
  backgroundimg?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({
  name,
  profileImg,
  joinDate,
  backgroundimg,
}) => {
  return (
    <div className="relative bg-theme-dark rounded-lg text-white">
      <div className="absolute top-0 z-[1] bg-gradient-to-r from-[#0a3d2a] rounded-lg rounded-b-none to-[#2e5dd8] w-full h-28">
        {backgroundimg && (
          <img
            src={backgroundimg}
            alt="background"
            className="w-full h-full object-cover rounded-lg rounded-b-none"
          />
        )}
      </div>
      <div className="flex items-end gap-4 relative p-4 z-[2] pt-20 pb-8">
        <img
          src={profileImg}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-md text-gray-300">Date joined : {joinDate}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-[3]">
        <i className="bi bi-three-dots-vertical text-white cursor-pointer"></i>
      </div>
    </div>
  );
};

export default ProfileImg;