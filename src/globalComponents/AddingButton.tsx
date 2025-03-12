import React from 'react';

interface AddingButtonProps {
  icon?: string;
  handlefunction: () => void;
  title: string;
  buttonClass?: string;
}

const AddingButton: React.FC<AddingButtonProps> = ({
  icon,
  handlefunction,
  title,
  buttonClass = '',
}) => {
  return (
    <button
      onClick={handlefunction}
      className={`bg-[#25AE7A] p-2 px-4 rounded-lg flex items-center gap-2 ${buttonClass}`}
    >
      {icon && <i className={`${icon} 2xl`}></i>}
      <span className='text-white capitalize'>{title}</span>
    </button>
  );
};

export default AddingButton;