import React, { useState } from 'react';
import AddingButton from '../../../globalComponents/AddingButton';
import TotalCard from '../../../globalComponents/TotalCard';
import Dropdown from '../../../globalComponents/Dropdown';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import WalletCard from '../virtual_card/components/crypto_comp/WalletCard';
import TableCan from '../../../globalComponents/table/TableCan';
import NairaPortionRow from '../virtual_card/components/naira_comp/NairaPortionRow';
import AddWalletModal from '../virtual_card/components/crypto_comp/addwallet/AddWalletModal';
import {
  tablebody,
  wallet,
  availiabitiyFilter,
  networkFilter,
  tokenFilter,
  statusFilter,
  cardData,
} from './data';
import { MasterCardProps } from './types'; // Import the props interface

const MasterCard: React.FC<MasterCardProps> = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleFilter = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <h1 className="text-4xl font-bold">Master Wallet</h1>
        <AddingButton
          title={'add wallet'}
          buttonClass="px-8 py-2"
          handlefunction={() => setShowWalletModal(true)}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 my-8 mb-20">
        {cardData.map((item, index) => (
          <TotalCard
            icon={item.icon}
            iconBg={item.iconBg}
            heading={item.heading}
            subheading={item.subheading}
            cardValue={item.cardValue}
            valueStatus={item.valueStatus}
            cardUnit={item.cardUnit}
            key={index}
          />
        ))}
      </div>
      <div className="my-8">
        <div className="flex items-center justify-between gap-8 mb-8">
          <Dropdown
            options={statusFilter.options}
            placeholder={statusFilter.placeholder}
            onChange={handleFilter}
            selected={statusFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
          <div className="flex items-center gap-8">
            <Button navigationName="export csv" />
            <SearchFilter handleFunction={handleFilter} />
          </div>
        </div>
        <div className="grid grid-cols-4 my-4 gap-4">
          {wallet.map((item, index) => (
            <WalletCard key={index} wallet={item} />
          ))}
        </div>
      </div>
      <div className="my-8 mt-[80px]">
        <h1 className="text-2xl font-bold">Token Availability</h1>
        <div className="my-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Dropdown
              options={tokenFilter.options}
              placeholder={tokenFilter.placeholder}
              onChange={handleFilter}
              selected={tokenFilter.selected}
              borderColor={'[#25AE7A]'}
              bgColor="theme-dark"
              roundedValue="full"
              position="left-0"
              paddingY="2"
              gap="4"
            />
            <Dropdown
              options={networkFilter.options}
              placeholder={networkFilter.placeholder}
              onChange={handleFilter}
              selected={networkFilter.selected}
              borderColor={'[#25AE7A]'}
              bgColor="theme-dark"
              roundedValue="full"
              position="left-0"
              paddingY="2"
              gap="4"
            />
            <Dropdown
              options={availiabitiyFilter.options}
              placeholder={availiabitiyFilter.placeholder}
              onChange={handleFilter}
              selected={availiabitiyFilter.selected}
              borderColor={'[#25AE7A]'}
              bgColor="theme-dark"
              roundedValue="full"
              position="left-0"
              paddingY="2"
              gap="4"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button navigationName="export csv" />
            <SearchFilter handleFunction={handleFilter} />
          </div>
        </div>
        <div className="my-4">
          <TableCan
            headerTr={['asset', 'network', 'status', 'reason', 'date', 'actions']}
            dataTr={tablebody}
            TrName={NairaPortionRow}
          />
        </div>
      </div>
      {showWalletModal && (
        <AddWalletModal
          onSubmit={handleFilter}
          onClose={() => setShowWalletModal(false)}
        />
      )}
    </>
  );
};

export default MasterCard;