import React from 'react';

interface NetworkListItemProps {
  network: {
    icon: string;
    name: string;
    symbol: string;
    networksAvailable?: string;
    selected: boolean;
  };
  toggleSelection: () => void;
}

const NetworkListItem: React.FC<NetworkListItemProps> = ({ network, toggleSelection }) => {
  return (
    <div className={`flex flex-col bg-green-900 rounded-lg mb-2 overflow-hidden`}>
      {/* Parent Network Row */}
      <div className="flex justify-between items-center p-4 bg-green-800 rounded-lg">
        <div className="flex items-center gap-4">
          <img src={network.icon} alt={network.name} className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{network.name}</span>
            <span className="text-sm text-gray-400">{network.symbol}</span>
          </div>
        </div>

        {/* Network Availability and Selection */}
        <div className="flex items-center gap-4">
          {network.networksAvailable && (
            <span className="text-sm text-gray-400">{network.networksAvailable} Networks</span>
          )}
          <button
            onClick={toggleSelection}
            className={`w-5 h-5 flex items-center justify-center rounded-md ${
              network.selected ? 'bg-green-500' : 'bg-gray-600'
            }`}
          >
            {network.selected && <i className="bi bi-check text-white"></i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkListItem;