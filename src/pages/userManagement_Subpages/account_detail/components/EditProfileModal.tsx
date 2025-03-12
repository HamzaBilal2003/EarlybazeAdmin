import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../globalComponents/Overlay';

interface EditProfileModalProps {
  closeModal: () => void;
  onSubmit: (values: {
    name: string;
    email: string;
    phone: string;
    password: string;
    profileImage?: File;
  }) => void;
  values?: {
    name: string;
    email: string;
    phone: string;
    password: string;
    profileImage?: File;
  };
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  closeModal,
  onSubmit,
  values,
}) => {
  const initialValues = values || {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .max(20, 'Username must not exceed 20 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Phone number must be between 10-15 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    profileImage: Yup.mixed()
      .test(
        'fileType',
        'Unsupported file format. Only JPG, PNG, JPEG allowed.',
        (value: File | undefined) => {
          if (!value) return true; // Optional field, so no file is valid
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
        }
      )
      .test(
        'fileSize',
        'File size must be less than 2MB.',
        (value: File | undefined) => {
          if (!value) return true; // Optional field, so no file is valid
          return value.size <= 2 * 1024 * 1024; // 2MB size limit
        }
      ),
  });

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-[#042619] p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[400px] mx-auto">
        <div className="flex items-center justify-between relative mb-6">
          <h2 className="text-xl font-bold text-white text-center w-full">
            Edit Profile
          </h2>
          <button
            className="text-white text-lg absolute top-0 right-0"
            onClick={closeModal}
          >
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
          {({ setFieldValue, values, isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex justify-center mb-6">
                <label htmlFor="profileImageUpload" className="cursor-pointer">
                  {values.profileImage ? (
                    <img
                      src={URL.createObjectURL(values.profileImage)}
                      alt="Profile"
                      className="w-20 h-20 rounded-full border-4 border-[#25AE7A] object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-green-700 flex items-center justify-center rounded-full">
                      <i className="bi bi-camera text-white text-2xl"></i>
                    </div>
                  )}
                </label>
                <input
                  id="profileImageUpload"
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    setFieldValue('profileImage', event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage
                  name="profileImage"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Username</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Phone number</label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold"
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