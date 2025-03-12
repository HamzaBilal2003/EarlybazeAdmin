import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../globalComponents/Overlay';

interface StatusModelProps {
  closeModal: () => void;
  onSubmit: (values: { ipAddress: string; status: string }) => void;
  initialData?: { ipAddress: string; status: string };
}

const StatusModel: React.FC<StatusModelProps> = ({
  closeModal,
  onSubmit,
  initialData,
}) => {
  // Initial form values
  const initialValues = initialData || {
    ipAddress: '',
    status: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    ipAddress: Yup.string()
      .matches(
        /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}$/,
        'Invalid IP Address'
      )
      .required('IP Address is required'),
    status: Yup.string()
      .oneOf(['whitelisted', 'blacklisted'], 'Invalid status')
      .required('Status is required'),
  });

  // Form submission handler
  const handleSubmit = (values: { ipAddress: string; status: string }) => {
    onSubmit(values);
    closeModal();
  };

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[350px]">
        <div className="flex items-center gap-4 justify-center relative mb-8">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit IP Address' : 'Add New IP Address'}
          </h2>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 text-white text-lg"
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
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white mb-2 block">IP Address</label>
                <Field
                  type="text"
                  name="ipAddress"
                  placeholder="123.456.789"
                  className="p-2 rounded-md bg-[#042619] border-[#25AE7A] placeholder:text-white text-white border w-full"
                />
                <ErrorMessage
                  name="ipAddress"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="text-white mb-2 block">Status</label>
                <Field
                  as="select"
                  name="status"
                  className="p-2 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full"
                >
                  <option value="" className="text-white hover:bg-[#25AE7A]">
                    Select Status
                  </option>
                  <option value="whitelisted" className="text-white hover:bg-[#25AE7A]">
                    Whitelisted
                  </option>
                  <option value="blacklisted" className="text-white hover:bg-[#25AE7A]">
                    Blacklisted
                  </option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold"
                disabled={isSubmitting}
              >
                {initialData ? 'Update' : 'Save'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default StatusModel;