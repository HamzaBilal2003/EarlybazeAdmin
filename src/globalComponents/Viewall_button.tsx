import React from 'react';
import { Link } from 'react-router-dom';

interface ViewallButtonProps {
  navigationLink?: string;
  navigationName?: string;
  buttonSize?: string;
}

const Viewall_button: React.FC<ViewallButtonProps> = ({
  navigationLink = '#',
  navigationName = "view all",
  buttonSize = '',
}) => {
  return (
    <Link to={navigationLink}>
      <button className='bg-theme-dark border capitalize border-green-800 py-2 px-4 rounded-full text-green-600 font-bold flex items-center gap-2'>
        {navigationName} <i className="bi bi-arrow-up-right"></i>
      </button>
    </Link>
  );
};

export default Viewall_button;