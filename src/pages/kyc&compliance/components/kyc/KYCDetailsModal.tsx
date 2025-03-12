import React,{useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../globalComponents/Overlay';
import Selectable from '../../../../globalComponents/Selectable';

const KYCDetailsModal = ({ closeModal, initialValues, onSubmit }) => {
    console.log(initialValues, '  : initialValues');
    const [profilePreview, setProfilePreview] = useState(initialValues.profilePic || null);

    // Updated validation schema to match date format
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[a-zA-Z]+$/, 'First Name must contain only letters')
            .min(2, 'First Name must be at least 2 characters')
            .max(50, 'First Name must not exceed 50 characters')
            .required('First Name is required'),

        lastName: Yup.string()
            .matches(/^[a-zA-Z]+$/, 'Last Name must contain only letters')
            .min(2, 'Last Name must be at least 2 characters')
            .max(50, 'Last Name must not exceed 50 characters')
            .required('Last Name is required'),

        dob: Yup.date()
            .required('Date of Birth is required'),

        address: Yup.string()
            .min(10, 'Address must be at least 10 characters')
            .max(255, 'Address must not exceed 255 characters')
            .required('Address is required'),

        state: Yup.string()
            .oneOf(['Lagos', 'Abuja'], 'Please select a valid state')
            .required('State is required'),

        bvn: Yup.string()
            .matches(/^\d{10}$/, 'BVN must be exactly 10 digits')
            .required('BVN is required'),

        documentType: Yup.string()
            .oneOf(['International Passport', 'National ID'], 'Please select a valid document type')
            .required('Document Type is required'),

        frontImage: Yup.mixed()
            .required('Front Image is required'),

        backImage: Yup.mixed()
            .required('Back Image is required'),

        changeStatus: Yup.string()
            .oneOf(['Pending', 'Approved'], 'Please select a valid status')
            .required('Status is required'),
        profilePic: Yup.mixed()
            .required('Profile picture is required')
            .test('fileSize', 'File size should be less than 2MB', value => {
                return value && value.size <= 2 * 1024 * 1024;
            })
            .test('fileType', 'Only JPG and PNG files are allowed', value => {
                return value && ['image/jpeg', 'image/png'].includes(value.type);
            }),
        });
        useEffect(() => {
            console.log(initialValues.frontImage , ' : frontimage checking');
        }, [initialValues])
        
        

    return (
        <Overlay>
            <div className='absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[350px] max-w-md mx-auto'>
                <div className='flex items-center justify-between relative mb-6'>
                    <h2 className='text-xl font-bold text-white text-center w-full'>KYC Details</h2>
                    <button className='absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-lg' onClick={closeModal}>
                        <i className="bi bi-x-circle"></i>
                    </button>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        onSubmit(values);
                        closeModal();
                    }}
                >
                    {({ setFieldValue, isSubmitting }) => (
                        <Form className='flex flex-col gap-4'>
                            <div className='flex justify-center mb-4'>
                                <div className='w-20 h-20 bg-[#042619] flex items-center justify-center rounded-full relative overflow-hidden'>
                                    {profilePreview ? (
                                        <img
                                            src={profilePreview}
                                            alt="Profile"
                                            className='w-full h-full rounded-full object-cover'
                                        />
                                    ) : (
                                        <i className="bi bi-camera text-white text-3xl"></i>
                                    )}
                                    <input
                                        type='file'
                                        accept="image/*"
                                        capture="user"
                                        className='absolute inset-0 opacity-0 cursor-pointer'
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            setFieldValue('profilePic', file);
                                            setProfilePreview(URL.createObjectURL(file));
                                        }}
                                    />
                                </div>
                                <ErrorMessage name='profilePic' component='div' className='text-red-500 text-sm mt-1' />
                            </div>
                            <div>
                                <label className='text-white block mb-2'>First Name</label>
                                <Field
                                    type='text'
                                    name='firstName'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage name='firstName' component='div' className='text-red-500 text-sm mt-1' />
                            </div>

                            <div>
                                <label className='text-white block mb-2'>Last Name</label>
                                <Field
                                    type='text'
                                    name='lastName'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage name='lastName' component='div' className='text-red-500 text-sm mt-1' />
                            </div>

                            <div>
                                <label className='text-white block mb-2'>Date of Birth</label>
                                <Field
                                    type='date'
                                    name='dob'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage name='dob' component='div' className='text-red-500 text-sm mt-1' />
                            </div>

                            <div>
                                <label className='text-white block mb-2'>Address</label>
                                <Field
                                    type='text'
                                    name='address'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage name='address' component='div' className='text-red-500 text-sm mt-1' />
                            </div>
                            <div>
                                <label className='text-white block mb-2'>State</label>
                                <Field
                                    as={Selectable}
                                    name='state'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                    options={[
                                        { name: 'Lagos', value: 'Lagos' },
                                        { name: 'Abuja', value: 'Abuja' }
                                    ]}
                                    heading='Select State'
                                    handleOptionSelect={(value) => setFieldValue('state', value)}
                                >
                                </Field>
                                <ErrorMessage name='state' component='div' className='text-red-500 text-sm mt-1' />
                            </div>
                            <div>
                                <label className='text-white block mb-2'>BVN</label>
                                <Field
                                    type='text'
                                    name='bvn'
                                    className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full'
                                />
                                <ErrorMessage name='bvn' component='div' className='text-red-500 text-sm mt-1' />
                            </div>

                            <div>
                                <label className='text-white block mb-2'>Document Type</label>
                                <Field
                                    as={Selectable}
                                    name='documentType'
                                    options={[
                                        { name: 'International Passport', value: 'International Passport' },
                                        { name: 'National ID', value: 'National ID' }
                                    ]}
                                    heading='Select Document Type'
                                    handleOptionSelect={(value) => setFieldValue('documentType', value)}
                                />
                                <ErrorMessage name='documentType' component='div' className='text-red-500 text-sm mt-1' />
                            </div>

                            <div className='flex flex-col w-fit'>
                                <label className='text-white block mb-2'>Document Image</label>
                                <div className='flex items-center gap-4 w-full'>

                                    {/* Front Image Upload and Download */}
                                    <div className='bg-[#042619] border border-[#25AE7A] rounded-lg flex items-center gap-4 p-4 w-full'>
                                        <i className="bi bi-file-earmark-text text-white text-2xl"></i>
                                        <div className='text-white'>
                                            <p className='text-sm'>Front Image</p>
                                            <p className='text-xs text-gray-400 text-nowrap'>
                                                {typeof initialValues.frontImage === 'string'
                                                    ? '35Kb'
                                                    : initialValues.frontImage
                                                        ? `${(initialValues.frontImage.size / 1024).toFixed(1)} Kb`
                                                        : 'No file chosen'}
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            name='frontImage'
                                            id="frontImageUpload"
                                            onChange={(event) => setFieldValue('frontImage', event.currentTarget.files[0])}
                                        />
                                        <label htmlFor="frontImageUpload" className='ml-auto cursor-pointer'>
                                            <i className="bi bi-upload text-white text-2xl"></i>
                                        </label>
                                        {initialValues.frontImage && (
                                            <a
                                                href={typeof initialValues.frontImage === 'string'
                                                    ? initialValues.frontImage
                                                    : URL.createObjectURL(initialValues.frontImage)}
                                                download="Front_Image"
                                                className='cursor-pointer'
                                            >
                                                <i className="bi bi-download text-white text-2xl"></i>
                                            </a>
                                        )}
                                    </div>

                                    {/* Back Image Upload and Download */}
                                    <div className='bg-[#042619] border border-[#25AE7A] rounded-lg flex items-center gap-4 p-4 w-full'>
                                        <i className="bi bi-file-earmark-text text-white text-2xl"></i>
                                        <div className='text-white'>
                                            <p className='text-sm'>Back Image</p>
                                            <p className='text-xs text-gray-400 text-nowrap'>
                                                {typeof initialValues.backImage === 'string'
                                                    ? '35Kb'
                                                    : initialValues.backImage
                                                        ? `${(initialValues.backImage.size / 1024).toFixed(1)} Kb`
                                                        : 'No file chosen'}
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            name='backImage'
                                            id="backImageUpload"
                                            onChange={(event) => setFieldValue('backImage', event.currentTarget.files[0])}
                                        />
                                        <label htmlFor="backImageUpload" className='ml-auto cursor-pointer'>
                                            <i className="bi bi-upload text-white text-2xl"></i>
                                        </label>
                                        {initialValues.backImage && (
                                            <a
                                                href={typeof initialValues.backImage === 'string'
                                                    ? initialValues.backImage
                                                    : URL.createObjectURL(initialValues.backImage)}
                                                download="Back_Image"
                                                className='cursor-pointer'
                                            >
                                                <i className="bi bi-download text-white text-2xl"></i>
                                            </a>
                                        )}
                                    </div>

                                </div>
                            </div>




                            <div>
                                <label className='text-white block mb-2'>Change Status</label>
                                <Field
                                    as={Selectable}
                                    name='changeStatus'
                                    options={[
                                        { name: 'Pending', value: 'Pending' },
                                        { name: 'Approved', value: 'Approved' }
                                    ]}
                                    heading='Select Status'
                                    handleOptionSelect={(value) => setFieldValue('changeStatus', value)}
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

export default KYCDetailsModal;
