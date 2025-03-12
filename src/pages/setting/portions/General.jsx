import React, { useState } from 'react';
import ServiceCard from '../components/General/ServiceCard';
import ServiceModel from '../components/General/ServiceModel';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';

const General = () => {
    const [services, setServices] = useState([
        { id: 1, title: 'Swap' },
        { id: 2, title: 'Send' },
        { id: 3, title: 'Withdraw' },
        { id: 4, title: 'Buy' },
        { id: 5, title: 'Receive' },
    ]);

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    // Handle delete service
    const handleDelete = (id) => {
        setSelectedService(id);
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        setServices(services.filter(service => service.id !== selectedService));
        setShowConfirmation(false);
    };

    // Handle edit service
    const handleEdit = (service) => {
        console.log(service)
        setSelectedService(service);
        setShowEditModal(true);
    };

    const handleUpdate = (updatedService) => {
        setServices(services.map(service => 
            service.id === updatedService.id ? updatedService : service
        ));
        setShowEditModal(false);
    };

    return (
        <div className='grid grid-cols-3 gap-8 my-8'>
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    data={service}
                    onEdit={() => handleEdit(service)}
                    onDelete={() => handleDelete(service.id)}
                />
            ))}

            {/* Delete Confirmation Popup */}
            {showConfirmation && (
                <ConfirmationPopup
                    heading="Are you sure you want to delete this service?"
                    confirmText="Delete"
                    closeText="Cancel"
                    confirmColor="bg-red-600"
                    closeColor="bg-gray-600"
                    onConfirm={confirmDelete}
                    onClose={() => setShowConfirmation(false)}
                />
            )}

            {/* Edit Service Modal */}
            {showEditModal && (
                <ServiceModel
                    closeModal={() => setShowEditModal(false)}
                    onSubmit={handleUpdate}
                    initialData={selectedService}
                />
            )}
        </div>
    );
};

export default General;
