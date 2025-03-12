import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Overlay from '../../../globalComponents/Overlay';

interface AssignAgentModalProps {
  closeModal: () => void;
  onSubmit: (values: { agent: string }) => void;
  ticketNumber: string;
  agentOptions: { value: string; name: string }[];
}

const AssignAgentModal: React.FC<AssignAgentModalProps> = ({
  closeModal,
  onSubmit,
  ticketNumber,
  agentOptions,
}) => {
  const initialValues = {
    agent: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    agent: Yup.string().required('Agent selection is required'),
  });

  // Form submission handler
  const handleSubmit = (values: { agent: string }) => {
    onSubmit(values);
    closeModal();
  };

  return (
    <Overlay>
      <div className="absolute top-10 right-10 bg-theme-dark p-8 shadow-lg shadow-gray-950 rounded-xl min-w-[350px] max-w-md mx-auto">
        <div className="flex items-center gap-4 justify-center relative mb-8">
          <h2 className="text-xl font-bold text-white">Ticket {ticketNumber}</h2>
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
                <label className="text-white mb-2 block">Agent Name</label>
                <Field
                  as="select"
                  name="agent"
                  className="p-4 rounded-md bg-[#042619] border-[#25AE7A] text-white border w-full hover:bg-[#1A3D2F]"
                >
                  <option value="" className="bg-[#042619] text-white hover:bg-[#25AE7A]">
                    Select Agent
                  </option>
                  {agentOptions.map((agent, index) => (
                    <option
                      key={index}
                      value={agent.value}
                      className="bg-[#042619] text-white hover:bg-[#25AE7A]"
                    >
                      {agent.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="agent"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-[#25AE7A] py-4 px-4 rounded-lg text-white font-bold"
                disabled={isSubmitting}
              >
                Proceed
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Overlay>
  );
};

export default AssignAgentModal;