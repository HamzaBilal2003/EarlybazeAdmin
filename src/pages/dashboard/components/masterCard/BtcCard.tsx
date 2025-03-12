import React from 'react';
import BTC from '../../../../assets/icons/DummyIcon/btc.png';
import { Dashboard_cryptoWallet } from '../../../../dummyData/Data';

interface CryptoWalletItem {
  img?: string;
  crypto_name: string;
  value: string;
}

const BtcCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Dashboard_cryptoWallet.map((item: CryptoWalletItem, index: number) => {
        return (
          <div
            key={index}
            className="bg-[#156E4D] col-span-1 p-4 rounded-lg flex flex-col items-center justify-center"
          >
            <img
              src={item.img ? item.img : BTC}
              alt="btc"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="my-1 font-bold">{item.crypto_name}</h1>
            <h1 className="font-bold">{item.value}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default BtcCard;