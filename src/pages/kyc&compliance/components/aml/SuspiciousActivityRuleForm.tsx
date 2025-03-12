import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Selectable from '../../../../globalComponents/Selectable';

interface SuspiciousActivityRuleFormProps {
  onSubmit: (values: {
    transactionType: string;
    condition: string;
    amount: number;
    frequency: string;
    occurrences: number;
    action: string;
    message: string;
  }) => void;
  options: {
    transactionTypes: { label: string; value: string }[];
    conditions: { label: string; value: string }[];
    frequencies: { label: string; value: string }[];
  };
}

const SuspiciousActivityRuleForm: React.FC<SuspiciousActivityRuleFormProps> = ({
  onSubmit,
  options,
}) => {
  // Initial form values
  const initialValues = {
    transactionType: '',
    condition: '',
    amount: '',
    frequency: '',
    occurrences: '',
    action: 'Freeze account',
    message: 'Your account has been flagged for suspicious activity contact an admin',
  };

  // Validation schema
  const validationSchema = Yup.object({
    transactionType: Yup.string().required('Transaction type is required'),
    condition: Yup.string().required('Condition is required'),
    amount: Yup.number()
      .typeError('Amount must be a number')
      .required('Amount is required')
      .min(1, 'Amount must be greater than zero'),
    frequency: Yup.string().required('Frequency is required'),
    occurrences: Yup.number()
      .typeError('Occurrences must be a number')
      .required('Number of times is required')
      .min(1, 'Must be at least 1 occurrence'),
  });

  return (
    <div className="">
      <h2 className="text-white opacity-90 text-base my-2 mb-5">
        If any of the following rules are met
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-4 p-4 bg-theme-dark shadow-md border border-green-900 rounded-lg">
              <div>
                <Field
                  as={Selectable}
                  style={'border-none py-4'}
                  name="transactionType"
                  options={options.transactionTypes}
                  heading="Transaction Type"
                ></Field>
                <ErrorMessage
                  name="transactionType"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  as={Selectable}
                  style={'border-none py-4'}
                  name="condition"
                  options={options.conditions}
                  heading="Condition"
                ></Field>
                <ErrorMessage name="condition" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <Field
                    type="text"
                    name="amount"
                    placeholder="Amount in $"
                    className="p-4 rounded-md mb-2 bg-[#042619] text-white placeholder:text-white w-full"
                  />
                  <ErrorMessage name="amount" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    type="text"
                    name="occurrences"
                    placeholder="No of times"
                    className="p-4 rounded-md mb-2 bg-[#042619] text-white placeholder:text-white w-full"
                  />
                  <ErrorMessage
                    name="occurrences"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <Field
                  as={Selectable}
                  style={'border-none py-4'}
                  name="frequency"
                  options={options.frequencies}
                  heading="Frequency"
                ></Field>
                <ErrorMessage name="frequency" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <h2 className="text-white opacity-90 text-base">Perform the following action</h2>
            <div className="flex gap-4 items-center bg-theme-dark border border-green-900 p-4 rounded-md mb-2">
              <Field
                type="text"
                name="action"
                className="p-4 rounded-md mb-2 bg-[#042619] text-white w-fit"
                disabled
              />
              <span className="text-white text-nowrap">With the message</span>
              <Field
                type="text"
                name="message"
                className="p-4 rounded-md mb-2 bg-[#042619] text-white w-full"
                disabled
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-[100px] rounded-lg text-white font-bold"
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SuspiciousActivityRuleForm;