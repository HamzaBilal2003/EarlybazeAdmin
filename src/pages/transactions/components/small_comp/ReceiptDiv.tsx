import React from 'react';

interface ReceiptDivProps {
  accoutHolder: string;
  amount: string;
  receipt: string | { src: string; size?: number }; // Allow string or object with src and optional size
}

const ReceiptDiv: React.FC<ReceiptDivProps> = ({ accoutHolder, amount, receipt }) => {
  // Function to format file size (Bytes to KB/MB)
  const formatFileSize = (size?: number) => {
    if (!size) return 'Unknown Size';
    const KB = 1024;
    const MB = KB * 1024;
    return size < MB ? `${(size / KB).toFixed(2)} KB` : `${(size / MB).toFixed(2)} MB`;
  };

  // Determine if receipt is an object or a string
  const receiptSrc = typeof receipt === 'string' ? receipt : receipt.src;
  const receiptSize = typeof receipt === 'object' ? receipt.size : undefined;

  return (
    <div className="bg-[#022E1E] rounded-lg p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="opacity-75">Name on Account</span>
        <span>{accoutHolder}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="opacity-75">Amount paid</span>
        <span>N {amount}</span>
      </div>
      <div className="flex items-start justify-between">
        <span className="opacity-75">Receipt</span>
        <div className="flex items-center gap-4 border border-green-900 px-2 p-1 rounded-lg">
          <i className="bi bi-file-text text-2xl"></i>
          <div className="flex flex-col">
            <span className="">Payment Receipt</span>
            <span className="text-sm opacity-75">{formatFileSize(receiptSize)}</span>
          </div>
          <a href={receiptSrc} download>
            <i className="bi bi-download text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDiv;