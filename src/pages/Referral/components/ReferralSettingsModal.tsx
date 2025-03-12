import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../globalComponents/Overlay';

interface ReferralSettingsModalProps {
  closeModal: () => void;
  onSubmit: (values: { percentage: number; amount: number }) => void;
}

const ReferralSettingsModal: React.FC<ReferralSettingsModalProps> = ({ closeModal, onSubmit }) => {
  const initialValues = {
    percentage: '',
    amount: '',
  };

  const validationSchema = Yup.object({
    percentage: Yup.number()
      .min(0, 'Must be greater than 0')
      .max(100, 'Cannot exceed 100%')
      .required('Percentage is required'),
    amount: Yup.number().min(0, 'Must be greater than 0'),
  });

  const handleSubmit = (values: { percentage: number; amount: number }) => {
    onSubmit(values);
    closeModal();
  };

  return (
    <Overlay>
      <div className='absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[350px] max-w-md mx-auto'>
        <div className='flex items-center gap-4 justify-center relative mb-8'>
          <h2 className='text-xl font-bold text-white'>Referral Settings</h2>
          <button
            className='absolute top-1/2 -translate-y-1/2 right-0 text-white text-xl'
            onClick={closeModal}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        <p className="text-white mb-4">
          For every user referred, the user earns a certain percentage from their total trade amount.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4'>
              <div className="relative">
                <Field
                  type='text'
                  name='percentage'
                  placeholder='Input Percentage'
                  className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full outline-none'
                />
                <span className="absolute right-4 top-4 text-white">%</span>
                <ErrorMessage
                  name='percentage'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>

              <p className="text-white text-center">or</p>

              <div className='mb-2'>
                <Field
                  type='text'
                  name='amount'
                  placeholder='Amount in naira'
                  className='p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full outline-none'
                />
                <ErrorMessage
                  name='amount'
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

export default ReferralSettingsModal;