import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../../globalComponents/Overlay';
import MultipleSelectable from '../../../../globalComponents/MultipleSelectable';

interface SelectExemptionModalProps {
  closeModal: () => void;
  onSubmit: (values: { ruleName: string; exemptionType: string[] }) => void;
  options: { name: string; value: string; img: string }[];
}

const SelectExemptionModal: React.FC<SelectExemptionModalProps> = ({
  closeModal,
  onSubmit,
  options,
}) => {
  // Initial form values
  const initialValues = {
    ruleName: 'Rule 1',
    exemptionType: [],
  };

  // Validation schema
  const validationSchema = Yup.object({
    ruleName: Yup.string().required('Rule name is required'),
    exemptionType: Yup.array()
      .min(1, 'At least one exemption type is required')
      .required('Exemption type is required'),
  });

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-[#042619] p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[400px] max-w-md mx-auto">
        <div className="flex items-center justify-between relative mb-6">
          <h2 className="text-xl font-bold text-white text-center w-full">Select Exemption</h2>
          <button className="text-white text-lg absolute top-0 right-0" onClick={closeModal}>
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
          {({ setFieldValue, isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white mb-2 block">Rule Name</label>
                <Field
                  type="text"
                  name="ruleName"
                  className="p-4 rounded-md bg-[#0a3d2a] border-[#25AE7A] text-white border w-full"
                  disabled
                />
              </div>

              <div>
                <label className="text-white mb-2 block">Exemption Type</label>
                <Field
                  as={MultipleSelectable}
                  name="exemptionType"
                  options={options}
                  heading={'Users'}
                  showSearch={true}
                  handleOptionSelect={(value) => setFieldValue('exemptionType', value)}
                ></Field>
                <ErrorMessage
                  name="exemptionType"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold flex items-center justify-center"
                disabled={isSubmitting}
              >
                Search
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default SelectExemptionModal;