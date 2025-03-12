import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../../globalComponents/Overlay';

const EditProfileModal = ({ closeModal, onSubmit, initialData }) => {
    const initialValues = initialData || {
        username: '',
        email: '',
        role: '',
        password: ''
    };

    // Validation schema
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        role: Yup.string().required('Role is required'),
        password: Yup.string().required('Password is required'),
    });

    // Form submission handler
    const handleSubmit = (values) => {
        onSubmit(values);
        closeModal();
    };

    return (
        <Overlay>
            <div className='absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[400px] max-w-md mx-auto'>
                <div className='flex items-center gap-4 justify-center relative mb-8'>
                    <h2 className='text-xl font-bold text-white'>Edit Profile</h2>
                    <button
                        className='absolute top-1/2 -translate-y-1/2 right-0 text-white text-lg'
                        onClick={closeModal}
                    >
                        <i className="bi bi-x-circle"></i>
                    </button>
                </div>

                <div className='flex justify-center mb-6'>
                    <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer'>
                        <i className="bi bi-camera text-white text-2xl"></i>
                    </div>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col gap-4'>
                            <div>
                                <label className='text-white mb-2 block'>Username</label>
                                <Field
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage
                                    name='username'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>

                            <div>
                                <label className='text-white mb-2 block'>Email</label>
                                <Field
                                    type='email'
                                    name='email'
                                    placeholder='Email address'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>

                            <div>
                                <label className='text-white mb-2 block'>Role</label>
                                <Field
                                    as='select'
                                    name='role'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                >
                                    <option value=''>Choose Role</option>
                                    <option value='admin'>Admin</option>
                                    <option value='editor'>Editor</option>
                                    <option value='viewer'>Viewer</option>
                                </Field>
                                <ErrorMessage
                                    name='role'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>

                            <div>
                                <label className='text-white mb-2 block'>Password</label>
                                <Field
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>

                            <button
                                type='submit'
                                className='bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold'
                                disabled={isSubmitting}
                            >
                                Save
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Overlay>
    );
};

export default EditProfileModal;
