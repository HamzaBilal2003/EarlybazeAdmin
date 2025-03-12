import React from 'react';

interface ReferralCardProps {
  icon?: string;
  title: string;
  subTitle?: string;
  value?: string;
  subText1?: string;
  subText2?: string;
  value1?: string;
  value2?: string;
}

const ReferralCard: React.FC<ReferralCardProps> = ({
  icon,
  title,
  subTitle,
  value,
  subText1,
  subText2,
  value1,
  value2,
}) => {
  return (
    <div className="bg-[#072117] p-6 rounded-lg shadow-md border border-[#25ae7932] min-w-[250px]">
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="flex items-center justify-center p-2 bg-white rounded-full">
            <img src={icon} alt="icon" className="w-8 h-8 rounded-full" />
          </div>
        )}
        <div>
          <h3 className={`${value && 'opacity-50'} text-md font-semibold`}>
            {title}
          </h3>
          <h3 className="text-white text-md font-semibold">{subTitle}</h3>
        </div>
      </div>

      {value ? (
        <p className="text-white text-2xl font-bold">{value}</p>
      ) : (
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-gray-400 text-sm">{subText1}</p>
            <p className="text-white text-lg font-bold">{value1}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">{subText2}</p>
            <p className="text-white text-lg font-bold">{value2}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralCard;