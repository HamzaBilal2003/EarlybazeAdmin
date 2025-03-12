import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../globalComponents/Overlay';

const ServiceModel = ({ closeModal, onSubmit, initialData }) => {
    const initialValues = initialData || {
        title: ''
    };

    // Validation schema
    const validationSchema = Yup.object({
        title: Yup.string().required('Service is required')
    });

    // Form submission handler
    const handleSubmit = (values) => {
        onSubmit(values);
        closeModal();
    };

    return (
        <Overlay>
            <div className='absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[350px]'>
                <div className='flex items-center gap-4 justify-center relative mb-8'>
                    <h2 className='text-xl font-bold text-white'>
                        {initialData ? 'Edit Service' : 'Set Maintenance'}
                    </h2>
                    <button
                        className='absolute top-1/2 -translate-y-1/2 right-0 text-white text-lg'
                        onClick={closeModal}
                    >
                        <i className="bi bi-x-circle"></i>
                    </button>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col gap-4'>
                            <div>
                                <label className='text-white mb-2 block'>Service name</label>
                                <Field
                                    as='select'
                                    name='title'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                >
                                    <option value='' className='text-white'>Select service</option>
                                    <option value='maintenance' className='text-white'>Maintenance</option>
                                    <option value='repair' className='text-white'>Repair</option>
                                    <option value='inspection' className='text-white'>Inspection</option>
                                </Field>
                                <ErrorMessage
                                    name='title'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>

                            <button
                                type='submit'
                                className='bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold'
                                disabled={isSubmitting}
                            >
                                Proceed
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Overlay>
    );
};

export default ServiceModel;
