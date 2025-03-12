import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../globalComponents/Overlay';

interface FeesManagementModalProps {
  closeModal: () => void;
  onSubmit: (values: { percentage: number; amount: number; status: string }) => void;
}

const FeesManagementModal: React.FC<FeesManagementModalProps> = ({ closeModal, onSubmit }) => {
  const initialValues = {
    percentage: '',
    amount: '',
    status: '',
  };

  const validationSchema = Yup.object({
    percentage: Yup.number()
      .required('Percentage is required')
      .min(0, 'Percentage cannot be negative'),
    amount: Yup.number().required('Amount is required').min(0, 'Amount cannot be negative'),
    status: Yup.string().required('Status is required'),
  });

  const handleSubmit = (values: { percentage: number; amount: number; status: string }) => {
    onSubmit(values);
    closeModal();
  };

  return (
    <Overlay>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[30%] max-w-lg mx-auto">
        <div className="flex items-center justify-between relative mb-6">
          <h2 className="text-xl font-bold text-white">Fees Management</h2>
          <button className="text-white text-lg" onClick={closeModal}>
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white mb-2 block">Percentage</label>
                <div className="relative">
                  <Field
                    type="text"
                    name="percentage"
                    placeholder="Enter amount"
                    className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">%</span>
                </div>
                <ErrorMessage name="percentage" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="text-white mb-2 block">Amount</label>
                <div className="relative">
                  <Field
                    type="text"
                    name="amount"
                    placeholder="Enter amount in USD"
                    className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">$</span>
                </div>
                <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="text-white mb-2 block">Status</label>
                <Field
                  as="select"
                  name="status"
                  className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                >
                  <option value="">Choose Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Field>
                <ErrorMessage name="status" component="div" className="text-red-500 text-sm mt-1" />
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

export default FeesManagementModal;