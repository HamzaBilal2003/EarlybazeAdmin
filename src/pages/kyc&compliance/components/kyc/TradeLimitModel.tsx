import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../globalComponents/Overlay';

interface TradeLimitModelProps {
  closeModal: () => void;
  onSubmit: (values: { type: string; verificationLevel: string; limit: number }) => void;
}

const TradeLimitModel: React.FC<TradeLimitModelProps> = ({ closeModal, onSubmit }) => {
  const initialValues = {
    type: '',
    verificationLevel: '',
    limit: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    type: Yup.string().required('Type is required'),
    verificationLevel: Yup.string().required('Verification level is required'),
    limit: Yup.number()
      .typeError('Limit must be a number')
      .required('Limit is required')
      .min(1, 'Limit must be greater than zero'),
  });

  // Form submission handler
  const handleSubmit = (values: { type: string; verificationLevel: string; limit: number }) => {
    onSubmit(values);
    closeModal();
  };

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[30%] max-w-lg mx-auto">
        <div className="flex items-center justify-between relative mb-6">
          <h2 className="text-xl font-bold text-white">KYC Limit</h2>
          <button className="text-white text-lg" onClick={closeModal}>
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white mb-2 block">Type</label>
                <Field
                  as="select"
                  name="type"
                  className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                >
                  <option value="">Select Type</option>
                  <option value="Buy">Buy</option>
                  <option value="Swap">Swap</option>
                  <option value="Send">Send</option>
                  <option value="Withdraw">Withdraw</option>
                </Field>
                <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="text-white mb-2 block">Verification Level</label>
                <Field
                  as="select"
                  name="verificationLevel"
                  className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                >
                  <option value="">Select Level</option>
                  <option value="Unverified">Unverified</option>
                  <option value="Verified">Verified</option>
                  <option value="High Verified">High Verified</option>
                </Field>
                <ErrorMessage
                  name="verificationLevel"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white mb-2 block">Limit in $</label>
                <Field
                  type="text"
                  name="limit"
                  placeholder="Enter limit"
                  className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                />
                <ErrorMessage name="limit" component="div" className="text-red-500 text-sm mt-1" />
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

export default TradeLimitModel;