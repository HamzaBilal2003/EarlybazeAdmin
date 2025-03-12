import React from "react";
import ProgressIndicator from "./ProgressIndicator";

interface MarketRowProps {
  displayData: {
    title: string;
    sent: number;
    openRate: string;
    conversionRate: string;
    bounceRate: string;
    progress: number;
  };
}

const MarketRow: React.FC<MarketRowProps> = ({ displayData }) => {
  return (
    <tr className="border-b border-green-800 bg-[#01190F] hover:bg-[#01281A] transition-all">
      <td className="p-4 flex items-center gap-3">
        <input type="checkbox" className="accent-green-500 w-5 h-5 cursor-pointer" />
        <span className="text-white">{displayData.title}</span>
      </td>
      <td className="p-4 text-center text-white">{displayData.sent}</td>
      <td className="p-4 text-center text-white">{displayData.openRate}</td>
      <td className="p-4 text-center text-white">{displayData.conversionRate}</td>
      <td className="p-4 text-center text-white">{displayData.bounceRate}</td>
      <td className="p-4 text-center">
        <ProgressIndicator progress={displayData.progress} />
      </td>
      <td className="p-4 text-center">
        <i className="bi bi-three-dots cursor-pointer text-white text-lg"></i>
      </td>
    </tr>
  );
};

export default MarketRow;