import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminDetailCard from './Components/AdminDetailCard';
import Filter from '../../../../globalComponents/Filter';
import ActivityPortion from './Components/ActivityPortion';
import ChatPortion from './Components/ChatPortion';
import EditProfileModal from './Components/EditProfileModal';
import ConfirmationPopup from '../../../../globalComponents/ConfirmationPopup';

const AdminDetail = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const adminData = {
        name: username,
        email: 'abcdeofg@gmail.com',
        role: 'Admin',
        dateJoined: '01-01-24 / 11:22 AM',
        profileImage: 'https://randomuser.me/api/portraits/men/75.jpg'
    };

    const [portion, setPortion] = useState(<ActivityPortion />);

    const tabs = [
        { name: 'activity', value: 'activity', component: <ActivityPortion /> },
        { name: 'chats', value: 'chats', component: <ChatPortion /> },
    ];

    const handleTabChange = (value) => {
        const selectedTab = tabs.find((tab) => tab.value === value);
        setPortion(selectedTab.component);
    };

    // Handle edit modal
    const handleEdit = () => {
        setShowEditModal(true);
    };

    // Handle delete confirmation
    const handleDelete = () => {
        setShowDeletePopup(true);
    };

    const confirmDelete = () => {
        console.log('Admin deleted');
        setShowDeletePopup(false);
        navigate(-1);  // Redirect to the previous page after deletion
    };

    return (
        <>
            <div className='flex items-center justify-between gap-4 mb-8'>
                <div className='flex items-center gap-4'>
                    <div onClick={() => navigate(-1)} className='flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]'>
                        <i className="bi bi-chevron-left text-xl"></i>
                    </div>
                    <h1 className='text-4xl font-bold'>Admin Detail</h1>
                </div>
            </div>

            <div className='mb-8'>
                <AdminDetailCard
                    name={adminData.name}
                    email={adminData.email}
                    role={adminData.role}
                    dateJoined={adminData.dateJoined}
                    profileImage={adminData.profileImage}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>

            <div className='mb-8'>
                <Filter
                    tabs={tabs}
                    activeTab={'activity'}
                    handleValue={handleTabChange}
                />
            </div>

            <div className='my-8'>
                {portion}
            </div>

            {/* Edit Profile Modal */}
            {showEditModal && (
                <EditProfileModal
                    closeModal={() => setShowEditModal(false)}
                    onSubmit={(values) => {
                        console.log('Updated Profile:', values);
                        setShowEditModal(false);
                    }}
                    initialData={{
                        username: adminData.name,
                        email: adminData.email,
                        role: adminData.role,
                        password: ''
                    }}
                />
            )}

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <ConfirmationPopup
                    heading="Are you sure you want to delete this admin?"
                    confirmText="Delete"
                    closeText="Cancel"
                    confirmColor="bg-red-600"
                    closeColor="bg-gray-600"
                    onConfirm={confirmDelete}
                    onClose={() => setShowDeletePopup(false)}
                />
            )}
        </>
    );
};

export default AdminDetail;
