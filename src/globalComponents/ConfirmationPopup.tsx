import React from 'react';
import Overlay from './Overlay';
import { motion } from 'framer-motion';

interface ConfirmationPopupProps {
  icon?: string;
  heading?: string;
  confirmText?: string;
  closeText?: string;
  confirmColor?: string;
  closeColor?: string;
  buttonPx?: string;
  buttonPy?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  icon = '⚠️',
  heading = 'Are you sure you want to take this action?',
  confirmText = 'Proceed',
  closeText = 'Close',
  confirmColor = 'bg-green-600',
  closeColor = 'bg-gray-600',
  buttonPx = '6',
  buttonPy = '2',
  onConfirm,
  onClose,
}) => {
  return (
    <Overlay>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed inset-0 flex items-center justify-center z-[1001]"
      >
        <div className="bg-theme-dark p-8 rounded-lg shadow-lg text-center min-w-[350px]">
          <div className="text-4xl mb-4">{icon}</div>
          <h2 className="text-white text-lg mb-6">{heading}</h2>
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              className={`text-white px-${buttonPx} py-${buttonPy} rounded-lg font-bold ${confirmColor}`}
              onClick={onConfirm}
            >
              {confirmText}
            </button>
            <button
              className={`text-white px-${buttonPx} py-${buttonPy} rounded-lg font-bold ${closeColor}`}
              onClick={onClose}
            >
              {closeText}
            </button>
          </div>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default ConfirmationPopup;