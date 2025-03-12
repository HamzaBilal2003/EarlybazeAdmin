import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface AddEditBankModalProps {
  closeModal: () => void;
  values?: {
    id?: string | number;
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
  onSubmit: (values: {
    bankName: string;
    accountName: string;
    accountNumber: string;
  }) => void;
}

const AddEditBankModal: React.FC<AddEditBankModalProps> = ({
  closeModal,
  values,
  onSubmit,
}) => {
  const initialValues = values || {
    bankName: '',
    accountName: '',
    accountNumber: '',
  };

  const validationSchema = Yup.object({
    bankName: Yup.string()
      .min(3, 'Bank name must be at least 3 characters')
      .required('Bank name is required'),
    accountName: Yup.string()
      .min(3, 'Account name must be at least 3 characters')
      .required('Account name is required'),
    accountNumber: Yup.string()
      .matches(/^[0-9]{9,15}$/, 'Account number must be between 9-15 digits')
      .required('Account number is required'),
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#042619] p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-bold">
            {initialValues.id ? 'Edit Bank' : 'Add Bank'}
          </h2>
          <button onClick={closeModal} className="text-white text-2xl">
            &times;
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
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white block mb-2">Bank Name</label>
                <Field
                  type="text"
                  name="bankName"
                  placeholder="Enter bank name"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="bankName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Account Name</label>
                <Field
                  type="text"
                  name="accountName"
                  placeholder="Enter account name"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="accountName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Account Number</label>
                <Field
                  type="text"
                  name="accountNumber"
                  placeholder="Enter account number"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage
                  name="accountNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold"
                disabled={isSubmitting}
              >
                {initialValues.id ? 'Update' : 'Add'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddEditBankModal;