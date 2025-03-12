import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../globalComponents/Overlay';

interface UploadBannerModalProps {
  closeModal: () => void;
  onSubmit: (values: { bannerLink: string; image: File | null; imagePreview: string | null }) => void;
  initialData?: { bannerLink: string; image: string | null };
}

const UploadBannerModal: React.FC<UploadBannerModalProps> = ({ closeModal, onSubmit, initialData }) => {
  const initialValues = initialData || {
    bannerLink: '',
    image: null,
    imagePreview: initialData?.image || null,
  };

  const validationSchema = Yup.object({
    bannerLink: Yup.string().url('Invalid URL format').required('Banner link is required'),
    image: Yup.mixed().nullable().required('Image is required'),
  });

  return (
    <Overlay>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[30%] mx-auto'>
        <div className='flex items-center justify-between relative mb-8'>
          <h2 className='text-xl font-bold text-white'>
            {initialData ? 'Edit Banner' : 'Upload Banner'}
          </h2>
          <button className='text-white text-lg' onClick={closeModal}>
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
            <Form className='flex flex-col gap-8'>
              <div>
                <label className='text-white mb-2 block'>Upload Image</label>
                <div className='flex items-center gap-4'>
                  <label className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border cursor-pointer flex items-center justify-center w-full h-40">
                    {values.imagePreview ? (
                      <img
                        src={values.imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="text-center">
                        <i className="bi bi-camera text-2xl"></i>
                        <p className="mt-2 text-sm">Upload Image</p>
                      </div>
                    )}
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0] || null;
                        setFieldValue('image', file);
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => {
                            setFieldValue('imagePreview', reader.result);
                          };
                          reader.readAsDataURL(file);
                        } else {
                          setFieldValue('imagePreview', null);
                        }
                      }}
                    />
                  </label>
                </div>
                <ErrorMessage name='image' component='div' className='text-red-500 text-sm mt-1' />
              </div>

              <div>
                <label className='text-white mb-2 block'>Banner Link</label>
                <Field
                  type='text'
                  name='bannerLink'
                  placeholder='Enter link'
                  className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full outline-none'
                />
                <ErrorMessage name='bannerLink' component='div' className='text-red-500 text-sm mt-1' />
              </div>

              <button
                type='submit'
                className='bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold'
                disabled={isSubmitting}
              >
                {initialData ? 'Update' : 'Send'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default UploadBannerModal;