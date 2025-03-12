import React from 'react';
import EditIcon from '../../../../../assets/icons/edit.png';
import delIcon from '../../../../../assets/icons/delIcon.png';

const AdminDetailCard = ({ name, email, role, dateJoined, profileImage, onEdit, onDelete }) => {
    return (
        <div className="bg-theme-dark text-white p-6 rounded-lg shadow-md gap-6 border border-[#25ae794f]">
            <div className='flex items-center gap-4'>
                <img
                    src={profileImage || `https://randomuser.me/api/portraits/men/1.jpg`}
                    alt={name}
                    className="w-16 h-16 rounded-full border border-gray-600"
                />
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-gray-400">{email}</p>
                </div>
            </div>
            <div className="flex-1">
                <div className="mt-4 flex justify-between items-end">
                    <div>
                        <div className='grid grid-cols-2 min-w-[300px]'>
                            <h1 className='text-lg opacity-65'><strong>Role :</strong></h1>
                            <h1 className='text-lg'>{role}</h1>
                        </div>
                        <div className='grid grid-cols-2 min-w-[300px]'>
                            <h1 className='text-lg opacity-65'><strong>Date Joined:</strong></h1>
                            <h1 className='text-lg'>{dateJoined}</h1>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className='border border-[#25ae793c] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold'
                            onClick={onEdit}
                        >
                            <img src={EditIcon} alt="Edit" className='w-5 h-5 object-cover' />
                        </button>
                        <button
                            className='border border-[#25ae793c] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold'
                            onClick={onDelete}
                        >
                            <img src={delIcon} alt="Delete" className='w-5 h-5 object-cover' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDetailCard;
