import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddingButton from '../../../globalComponents/AddingButton';
import Filter from '../../../globalComponents/Filter';
import ViewWalletPortion_Crypto from './components/portions/ViewWalletPortion_Crypto';
import ViewWalletPortion_Naira from './components/portions/ViewWalletPortion_Naira';

interface Tab {
  name: string;
  value: string;
}

const ViewWallet: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const [showAddWallet, setShowAddWallet] = useState(false);
  const [selectedTab, setSelectedTab] = useState('crypto');

  const tabs: Tab[] = [
    { name: 'crypto', value: 'crypto' },
    { name: 'naira', value: 'naira' },
  ];

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    setShowAddWallet(false); // Ensure modal is closed when switching tabs
  };

  return (
    <>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </div>
          <h1 className="text-4xl font-bold">{username} Wallet</h1>
        </div>

        <div className="flex items-center gap-4">
          {selectedTab !== 'naira' && (
            <AddingButton
              title="Add Wallet"
              buttonClass="py-2"
              handlefunction={() => setShowAddWallet(true)}
            />
          )}
          <Filter
            tabPadding="2"
            tabs={tabs}
            activeTab={selectedTab}
            handleValue={handleTabChange}
          />
        </div>
      </div>

      {selectedTab === 'crypto' ? (
        <ViewWalletPortion_Crypto showAdd={showAddWallet} closeadd={setShowAddWallet} />
      ) : (
        <ViewWalletPortion_Naira />
      )}
    </>
  );
};

export default ViewWallet;