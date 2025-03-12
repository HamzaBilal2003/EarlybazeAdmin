import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../globalComponents/Overlay';

interface SendNotificationModalProps {
  closeModal: () => void;
  onSubmit: (values: { title: string; description: string; image: File | null }) => void;
}

const SendNotificationModal: React.FC<SendNotificationModalProps> = ({ closeModal, onSubmit }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const initialValues = {
    title: '',
    description: '',
    image: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.mixed().nullable(),
  });

  const handleSubmit = (values: typeof initialValues) => {
    onSubmit(values);
    console.log(values, " : send Model");
    closeModal();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void) => {
    const file = event.currentTarget.files?.[0] || null;
    setFieldValue('image', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <Overlay>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[30%] mx-auto'>
        <div className='flex items-center justify-between relative mb-8'>
          <h2 className='text-xl font-bold text-white'>Send Notification</h2>
          <button
            className='text-white text-lg'
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
          {({ setFieldValue, isSubmitting }) => (
            <Form className='flex flex-col gap-8'>
              <div>
                <label className='text-white mb-2 block'>Title</label>
                <Field
                  type='text'
                  name='title'
                  placeholder='Enter title'
                  className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full outline-none'
                />
                <ErrorMessage name='title' component='div' className='text-red-500 text-sm mt-1' />
              </div>

              <div>
                <label className='text-white mb-2 block'>Description</label>
                <Field
                  as='textarea'
                  name='description'
                  placeholder='Description'
                  className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full outline-none'
                />
                <ErrorMessage name='description' component='div' className='text-red-500 text-sm mt-1' />
              </div>

              <div>
                <label className='text-white mb-2 block'>Upload image</label>
                <div className='flex items-center gap-4'>
                  <label className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border cursor-pointer">
                    <i className="bi bi-camera text-2xl"></i>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => handleImageChange(event, setFieldValue)}
                    />
                  </label>
                  <ErrorMessage name='image' component='div' className='text-red-500 text-sm mt-1' />
                </div>
                {preview && (
                  <div className='mt-4'>
                    <img
                      src={preview}
                      alt="Preview"
                      className='rounded-md border border-[#25AE7A] max-w-[100px] object-contain p-2'
                    />
                  </div>
                )}
              </div>

              <button
                type='submit'
                className='bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold'
                disabled={isSubmitting}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default SendNotificationModal;