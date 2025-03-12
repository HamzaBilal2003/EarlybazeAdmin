import React from 'react';
import Viewall_button from '../../../../globalComponents/Viewall_button';
import BtcCard from './BtcCard';

interface MasterCardProps {
  heading: string;
}

const MasterCard: React.FC<MasterCardProps> = ({ heading }) => {
  return (
    <div>
      <div className="bg-[#25AE7A] p-4 rounded-xl grid grid-cols-1 gap-4 md:grid-cols-12 min-h-60">
        <div className="flex flex-col justify-between md:col-span-4">
          <h1 className="text-2xl font-bold capitalize">{heading}</h1>
          <div className="md:mb-8">
            <h1 className="text-white opacity-50">Total Assets</h1>
            <h1 className="text-4xl font-bold relative w-fit mb-4">
              1,250,00 <span className="text-sm absolute top-0 left-[105%]">USD</span>
            </h1>
            <Viewall_button navigationLink={"#"} navigationName={'view all'} />
          </div>
        </div>
        <div className="md:col-span-8">
          <BtcCard />
        </div>
      </div>
    </div>
  );
};

export default MasterCard;