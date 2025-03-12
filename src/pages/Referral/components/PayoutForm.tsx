import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface PayoutFormProps {
  handleSubmit: (values: any) => void;
  signupOption: { value: string; name: string }[];
  frequencyoptions: { value: string; name: string }[];
  walletOptions: { value: string; name: string }[];
}

const PayoutForm: React.FC<PayoutFormProps> = ({
  handleSubmit,
  signupOption,
  frequencyoptions,
  walletOptions,
}) => {
  const initialValues = {
    signupOption: '',
    tradeAmount: '',
    frequency: '',
    creditType: '',
    creditAmount: '',
  };

  const validationSchema = Yup.object({
    signupOption: Yup.string().required('Required'),
    tradeAmount: Yup.number().required('Required').positive('Amount must be positive'),
    frequency: Yup.string().required('Required'),
    creditType: Yup.string().required('Required'),
    creditAmount: Yup.number().required('Required').positive('Amount must be positive'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>If any of the following rules are met</h1>

          <div className="flex items-center justify-evenly gap-8 bg-theme-dark border border-[#79ec7935] p-4 rounded-lg mt-2">
            <h1>User sign up with</h1>
            <Field
              as="select"
              name="signupOption"
              className="text-white bg-[#042619] rounded-md p-3 w-fit outline-none"
            >
              {signupOption.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Field>
            <h1 className="text-nowrap">and trade</h1>
            <div className="flex items-center gap-4">
              <Field
                type="text"
                name="tradeAmount"
                placeholder="Amount in $"
                className="input-field bg-[#042619] p-3 rounded-md"
              />
              <Field
                as="select"
                name="frequency"
                className="text-white bg-[#042619] rounded-md p-3 w-fit outline-none"
              >
                {frequencyoptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <ErrorMessage
            name="signupOption"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
          <ErrorMessage
            name="tradeAmount"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
          <ErrorMessage
            name="frequency"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <h1 className="mt-8">Perform the following action</h1>

          <div className="flex items-center justify-evenly gap-8 mb-8 bg-theme-dark border border-[#79ec7935] p-4 rounded-lg mt-2">
            <h1>Credit Users</h1>

            <Field
              as="select"
              name="creditType"
              className="text-white bg-[#042619] rounded-md p-3 w-fit outline-none"
            >
              {walletOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Field>

            <h1 className="text-nowrap">Should be credited with</h1>

            <div className="flex items-center gap-4">
              <Field
                type="text"
                name="creditAmount"
                placeholder="Amount in $"
                className="bg-[#042619] p-3 rounded-md text-white border border-[#25AE7A] w-full outline-none"
              />
            </div>
          </div>

          <ErrorMessage
            name="creditType"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
          <ErrorMessage
            name="creditAmount"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#25AE7A] px-14 py-3 rounded-md font-bold"
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PayoutForm;