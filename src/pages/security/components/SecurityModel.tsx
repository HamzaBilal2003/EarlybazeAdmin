import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../globalComponents/Overlay';

interface SecurityModelProps {
  closeModal: () => void;
  onSubmit: (values: { heading: string; paragraph: string; apiKey: string }) => void;
  initialData?: { heading: string; paragraph: string; apiKey: string };
}

const SecurityModel: React.FC<SecurityModelProps> = ({
  closeModal,
  onSubmit,
  initialData,
}) => {
  // Define initial values
  const initialValues = initialData || {
    heading: '',
    paragraph: '',
    apiKey: '',
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    heading: Yup.string()
      .min(3, 'Heading must be at least 3 characters')
      .required('API Heading is required'),
    paragraph: Yup.string()
      .min(10, 'Description must be at least 10 characters')
      .required('API Description is required'),
    apiKey: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, 'API Key must contain only letters and numbers')
      .min(15, 'API Key must be at least 15 characters long')
      .required('API Key is required'),
  });

  // Form submission handler with confirmation
  const handleSubmit = (values: {
    heading: string;
    paragraph: string;
    apiKey: string;
  }) => {
    onSubmit(values);
    closeModal();
  };

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[350px]">
        <div className="flex items-center gap-4 justify-center relative mb-8">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit API' : 'Add New API'}
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
                <Field
                  type="text"
                  name="heading"
                  placeholder="API Heading"
                  className="p-2 rounded-md bg-[#042619] border-[#25AE7A] placeholder:text-white text-white border  w-full"
                />
                <ErrorMessage
                  name="heading"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="paragraph"
                  placeholder="API Description"
                  className="p-2 rounded-md bg-[#042619] border-[#25AE7A] placeholder:text-white text-white border  w-full"
                />
                <ErrorMessage
                  name="paragraph"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="apiKey"
                  placeholder="API Key"
                  className="p-2 rounded-md  text-white border bg-[#042619] border-[#25AE7A] placeholder:text-white w-full"
                />
                <ErrorMessage
                  name="apiKey"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold"
                disabled={isSubmitting}
              >
                {initialData ? 'Update API' : 'Save'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default SecurityModel;