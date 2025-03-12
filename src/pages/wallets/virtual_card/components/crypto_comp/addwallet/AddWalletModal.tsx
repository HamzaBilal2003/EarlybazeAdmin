import React, { useState } from 'react';
import Overlay from '../../../../../../globalComponents/Overlay';
import SearchInput from './SearchInput';
import AddingButton from '../../../../../../globalComponents/AddingButton';

interface SubNetwork {
  id: number;
  name: string;
  symbol: string;
  selected: boolean;
}

interface Network {
  id: number;
  name: string;
  symbol: string;
  isExpandable: boolean;
  expanded?: boolean;
  selected: boolean;
  selectedCount?: number;
  subNetworks?: SubNetwork[];
}

interface AddWalletModalProps {
  onClose: () => void;
  onSubmit: (selectedNetworks: Network[]) => void;
}

const AddWalletModal: React.FC<AddWalletModalProps> = ({ onClose, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [networks, setNetworks] = useState<Network[]>([
    {
      id: 1,
      name: 'Ethereum',
      symbol: 'ETH',
      isExpandable: true,
      expanded: false,
      selected: false,
      subNetworks: [
        { id: 11, name: 'Ethereum Mainnet', symbol: 'ETH', selected: true },
        { id: 12, name: 'Arbitrum', symbol: 'ARB', selected: false },
        { id: 13, name: 'Optimism', symbol: 'OP', selected: false },
      ],
    },
    { id: 2, name: 'Tron', symbol: 'TRX', selected: false, isExpandable: false },
    { id: 3, name: 'Arbitrum', symbol: 'ARB', selected: true, isExpandable: false },
    { id: 4, name: 'Solana', symbol: 'SOL', selected: false, isExpandable: false },
    { id: 5, name: 'Solana', symbol: 'SOL', selected: true, isExpandable: false },
    { id: 6, name: 'Solana', symbol: 'SOL', selected: true, isExpandable: false },
  ]);

  const toggleSubNetworkSelection = (parentId: number, subId: number) => {
    setNetworks(
      networks.map((network) => {
        if (network.id === parentId && network.subNetworks) {
          const updatedSubNetworks = network.subNetworks.map((sub) =>
            sub.id === subId ? { ...sub, selected: !sub.selected } : sub
          );
          const selectedCount = updatedSubNetworks.filter((sub) => sub.selected).length;
          return {
            ...network,
            subNetworks: updatedSubNetworks,
            selected: selectedCount > 0,
            selectedCount,
          };
        }
        return network;
      })
    );
  };

  const toggleExpand = (id: number) => {
    setNetworks(
      networks.map((network) => (network.id === id ? { ...network, expanded: !network.expanded } : network))
    );
  };

  const toggleNetworkSelection = (id: number) => {
    setNetworks(
      networks.map((network) => (network.id === id ? { ...network, selected: !network.selected } : network))
    );
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredNetworks = networks.filter((network) =>
    network.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    const selectedNetworks = networks
      .map((network) => ({
        ...network,
        subNetworks: network.subNetworks?.filter((sub) => sub.selected),
      }))
      .filter((network) => network.selected || network.subNetworks?.length);

    console.log('Selected Networks:', selectedNetworks);
    onSubmit(selectedNetworks);
  };

  return (
    <Overlay>
      <div className="bg-theme-dark p-6 rounded-lg text-white w-[450px] absolute top-10 right-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Add Wallet</h2>
          <button onClick={onClose} className="text-2xl">
            ✕
          </button>
        </div>
        <div className="flex gap-4 mb-4">
          <SearchInput onSearch={handleSearch} />
          <AddingButton title="Add" handlefunction={handleSubmit} />
        </div>
        <div className="flex flex-col gap-2">
          {filteredNetworks.map((network) => (
            <div key={network.id}>
              <div
                className={`bg-green-950 p-4 rounded-lg ${
                  network.isExpandable && network.expanded && 'rounded-b-none'
                } flex justify-between items-center`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  <div>
                    <p className="font-semibold">{network.name}</p>
                    <p className="text-sm text-gray-400">{network.symbol}</p>
                  </div>
                </div>
                {network.isExpandable && (
                  <p className="text-gray-400">
                    {network.selectedCount
                      ? `${network.selectedCount} Networks`
                      : `${network.subNetworks?.length} Networks`}
                  </p>
                )}
                {network.isExpandable ? (
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={network.selected}
                      onChange={() => toggleExpand(network.id)}
                      className="w-5 h-5"
                    />
                    <button onClick={() => toggleExpand(network.id)}>
                      <i className={`bi bi-chevron-${network.expanded ? 'up' : 'down'}`}></i>
                    </button>
                  </div>
                ) : (
                  <input
                    type="checkbox"
                    checked={network.selected}
                    onChange={() => toggleNetworkSelection(network.id)}
                    className="w-5 h-5"
                  />
                )}
              </div>
              {network.isExpandable && network.expanded && (
                <div className="p-2 bg-green-900 rounded-lg rounded-t-none flex flex-col gap-2">
                  {network.subNetworks?.map((sub) => (
                    <div
                      key={sub.id}
                      className="bg-green-950 p-3 rounded-lg flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <div>
                          <p className="font-semibold">{sub.name}</p>
                          <p className="text-sm text-gray-400">{sub.symbol}</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={sub.selected}
                        onChange={() => toggleSubNetworkSelection(network.id, sub.id)}
                        className="w-5 h-5"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export default AddWalletModal;