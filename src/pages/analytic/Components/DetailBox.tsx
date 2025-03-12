import React from 'react';

interface DetailBoxProps {
  heading: string;
  value: string | number;
}

const DetailBox: React.FC<DetailBoxProps> = ({ heading, value }) => {
  return (
    <div className='bg-[#042619] rounded-lg p-8 flex flex-col justify-between items-center min-h-36 gap-4 border-[0.3px] border-[#093826]'>
      <h1 className='text-xl capitalize text-center'>{heading}</h1>
      <h1 className='text-4xl font-bold text-center'>{value}</h1>
    </div>
  );
};

export default DetailBox;