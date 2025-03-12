import React from 'react';
import admin from '../../assets/images/admin.png';

interface ProfileProps {
  name?: string;
  img?: string;
}

const Profile: React.FC<ProfileProps> = ({ name = 'Admin', img = admin }) => {
  return (
    <div className='flex items-center gap-4 text-white'>
      <div>
        <h4 className='text-lg'>Hey,</h4>
        <h2 className='text-xl'>{name}</h2>
      </div>
      <img src={img} alt='profile' className='w-14 h-14 rounded-md' />
    </div>
  );
};

export default Profile;