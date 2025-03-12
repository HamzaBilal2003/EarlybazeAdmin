import React from 'react';

interface ButtonProps {
  navigationName?: string;
  buttonSize?: string;
  textSize?: string;
  hanldefunction?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  navigationName = "view all",
  buttonSize = '',
  textSize = 'lg',
  hanldefunction = () => { console.log('button working from components'); },
}) => {
  return (
    <button
      onClick={hanldefunction}
      className={`bg-theme-dark border text-${textSize} capitalize border-green-800 py-2 px-4 rounded-full text-[#25AE7A] font-bold flex items-center gap-2`}
    >
      {navigationName}
    </button>
  );
};

export default Button;