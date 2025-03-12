import React from 'react';

interface UniversalBtnProps {
  title: string;
  handleFunction?: () => void;
  className?: string;
}

const UniversalBtn: React.FC<UniversalBtnProps> = ({
  title,
  handleFunction,
  className,
}) => {
  return (
    <button className={`capitalize ${className}`} onClick={handleFunction}>
      {title}
    </button>
  );
};

export default UniversalBtn;