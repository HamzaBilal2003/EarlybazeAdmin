import React from 'react';
import UniversalBtn from './UniversalBtn';

interface ExportProps {
  Handlepdf?: () => void;
  handlecsv?: () => void;
}

const Export: React.FC<ExportProps> = ({ Handlepdf, handlecsv }) => {
  return (
    <div className='flex justify-end items-center gap-2 w-full my-4 mt-8'>
      <UniversalBtn
        title={'export pdf'}
        className={`bg-[#25AE7A] text-white py-2 px-8 text-sm tracking-wider rounded-lg`}
        handleFunction={Handlepdf}
      />
      <UniversalBtn
        title={'export CSV'}
        className={`bg-[#25AE7A] text-white py-2 px-8 text-sm tracking-wider rounded-lg`}
        handleFunction={handlecsv}
      />
    </div>
  );
};

export default Export;