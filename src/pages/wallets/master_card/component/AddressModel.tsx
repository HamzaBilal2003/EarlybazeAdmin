import React from 'react';
import Overlay from '../../../../globalComponents/Overlay';
import btc from '../../../../assets/icons/DummyIcon/btc.png';

interface AddressModelProps {
  onClose: () => void;
  datalist: {
    img?: string;
    title: string;
    wallet: string;
    key: string;
  }[];
}

const AddressModel: React.FC<AddressModelProps> = ({ onClose, datalist }) => {
  return (
    <Overlay>
      <div className="absolute top-10 right-10 rounded-md bg-theme-dark shadow-md shadow-gray-800 min-w-[300px] p-8">
        <div className="flex items-center justify-between mb-4 relative">
          <h2 className="text-xl font-bold text-center w-full">Token Availability</h2>
          <button
            onClick={onClose}
            className="text-2xl absolute top-1/2 transform -translate-y-1/2 right-0"
          >
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
        <p className="my-4">
          These addresses are the individual address of each network under Ethereum blockchain
        </p>
        <div className="flex flex-col gap-4">
          {datalist.map((address, index) => (
            <div
              key={index}
              className="bg-green-950 p-3 mb-2 rounded-md flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img src={address.img || btc} alt="logo" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col gap-2">
                  <h1 className="">{address.title}</h1>
                  <h1 className="opacity-50">{address.wallet}</h1>
                </div>
              </div>
              <div className="key max-w-sm text-nowrap overflow-hidden flex gap-8 items-center">
                {address.key}
                <div className="copy-btn">
                  <button
                    onClick={() => navigator.clipboard.writeText(address.key)}
                    className="text-2xl"
                  >
                    <i className="bi bi-copy"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export default AddressModel;