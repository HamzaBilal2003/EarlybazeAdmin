import React, { useState } from 'react';
import Overlay from '../../../../../globalComponents/Overlay';

interface ReasonModalProps {
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

const ReasonModal: React.FC<ReasonModalProps> = ({ onClose, onSubmit }) => {
  const [reason, setReason] = useState('');

  return (
    <Overlay>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-theme-dark p-6 shadow-lg rounded-xl min-w-[35%] max-w-md mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Reason</h2>
          <button className="text-white text-lg" onClick={onClose}>
            <i className="bi bi-x-circle"></i>
          </button>
        </div>

        {/* Input Field */}
        <div className="flex flex-col gap-2">
          <label className="text-white opacity-75">Enter Reason</label>
          <textarea
            className="bg-green-950 text-white p-3 rounded-lg w-full h-24 resize-none"
            placeholder="Reason why transaction was rejected"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => onSubmit(reason)}
          >
            Submit
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default ReasonModal;