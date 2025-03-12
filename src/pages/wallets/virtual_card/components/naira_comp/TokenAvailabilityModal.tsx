import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../../globalComponents/Overlay';
import Selectable from '../../../../../globalComponents/Selectable';

// Validation Schema
const validationSchema = Yup.object({
  token: Yup.string().required('Token is required'),
  network: Yup.string().required('Network is required'),
  status: Yup.string().required('Status is required'),
  reason: Yup.string().when('status', {
    is: 'Unavailable',
    then: Yup.string().required('Reason is required'),
  }),
});

// Options for Selectable Components
const tokenOptions = [
  { value: 'BTC', name: 'Bitcoin' },
  { value: 'ETH', name: 'Ethereum' },
  { value: 'XRP', name: 'Ripple' },
];

const networkOptions = [
  { value: 'Bitcoin', name: 'Bitcoin Network' },
  { value: 'Ethereum', name: 'Ethereum Network' },
  { value: 'Ripple', name: 'Ripple Network' },
];

const statusOptions = [
  { value: 'Available', name: 'Available' },
  { value: 'Unavailable', name: 'Unavailable' },
];

export interface TokenAvailabilityFormData {
  token: string;
  network: string;
  status: string;
  reason: string;
}

interface TokenAvailabilityModalProps {
  onClose: () => void;
  onSubmit: (formData: TokenAvailabilityFormData) => void;
}

const TokenAvailabilityModal: React.FC<TokenAvailabilityModalProps> = ({ onClose, onSubmit }) => {
  return (
    <Overlay>
      <div className="bg-theme-dark p-6 rounded-lg text-white w-[400px] absolute top-10 right-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 relative">
          <h2 className="text-xl font-bold text-center w-full">Token Availability</h2>
          <button onClick={onClose} className="text-2xl absolute top-1/2 transform -translate-y-1/2 right-0">
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{
            token: '',
            network: '',
            status: '',
            reason: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('✅ Submitted Data from token model:', values);
            onSubmit(values);
            resetForm();
            onClose();
          }}
        >
          {({ errors, touched, values, setFieldValue, handleSubmit }) => (
            <Form className="flex flex-col gap-4">
              {/* Token Selection */}
              <div>
                <h1 className="mb-2">Token</h1>
                <Selectable
                  style="mb-2"
                  options={tokenOptions}
                  heading="Select Token"
                  handleOptionSelect={(val) => setFieldValue('token', val)}
                />
                {errors.token && touched.token && <p className="text-red-500 text-xs">{errors.token}</p>}
              </div>

              {/* Network Selection */}
              <div>
                <h1 className="mb-2">Network</h1>
                <Selectable
                  style="mb-2"
                  options={networkOptions}
                  heading="Select Network"
                  handleOptionSelect={(val) => setFieldValue('network', val)}
                />
                {errors.network && touched.network && <p className="text-red-500 text-xs">{errors.network}</p>}
              </div>

              {/* Status Selection */}
              <div>
                <h1 className="mb-2">Status</h1>
                <Selectable
                  style="mb-2"
                  options={statusOptions}
                  heading="Select Status"
                  handleOptionSelect={(val) => setFieldValue('status', val)}
                />
                {errors.status && touched.status && <p className="text-red-500 text-xs">{errors.status}</p>}
              </div>

              {/* Reason Input (Shown only if Unavailable is selected) */}
              {values.status === 'Unavailable' && (
                <div>
                  <h1 className="mb-2">Reason</h1>
                  <Field
                    type="text"
                    name="reason"
                    placeholder="If unavailable, enter reason"
                    className="p-3 bg-green-800 rounded-md w-full outline-none mb-2"
                  />
                  {errors.reason && touched.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
                </div>
              )}

              {/* Save Button */}
              <div className="mt-6">
                <button type="submit" className="py-4 w-full bg-green-600 rounded-lg">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default TokenAvailabilityModal;