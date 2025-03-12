import React from 'react';

interface TotalCardProps {
  icon: string;
  iconBg: string;
  heading: string;
  subheading: string;
  cardValue: string | number | null;
  cardUnit?: string;
  valueStatus?: boolean | null;
}

const TotalCard: React.FC<TotalCardProps> = ({
  icon,
  iconBg,
  heading,
  subheading,
  cardValue,
  cardUnit,
  valueStatus,
}) => {
  return (
    <div className="bg-theme-dark shadow shadow-[#257355] rounded-lg p-4 relative overflow-hidden chivo-regular">
      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-end overflow-hidden blur-xl">
        <div className={`${iconBg} w-14 h-14 rounded-l flex items-center justify-center `}></div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <div className={`${iconBg} w-14 h-14 rounded-full flex items-center justify-center`}>
            <img src={icon} alt="icon" className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-sm opacity-65 font-bold capitalize">{heading}</h1>
            <h1 className=" font-bold capitalize">{subheading}</h1>
          </div>
        </div>
        <div className="mt-4">
          <div className={`flex ${cardValue ? 'items-end' : 'items-center'} gap-2`}>
            <h1 className="text-3xl font-bold">{cardValue}</h1>
            <div className="flex flex-col justify-between h-full">
              <h1 className="font-bold text-sm">{cardUnit}</h1>
              {valueStatus != null && (
                <div className="border border-[#257355] w-6 h-6 p-4 rounded-lg flex items-center justify-center">
                  {valueStatus ? (
                    <i className="bi bi-arrow-up text-green-500"></i>
                  ) : (
                    <i className="bi bi-arrow-down text-red-500"></i>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;