import React from 'react';

interface ReceiptDivProps {
  accoutHolder: string;
  amount: string;
  receipt: {
    name: string;
    size?: number;
    type: string;
    lastModified: number;
    lastModifiedDate: Date;
  } | string;
}

const ReceiptDiv: React.FC<ReceiptDivProps> = ({ accoutHolder, amount, receipt }) => {
  // Function to format file size (Bytes to KB/MB)
  const formatFileSize = (size?: number): string => {
    if (!size) return 'Unknown Size';
    const KB = 1024;
    const MB = KB * 1024;
    return size < MB ? `${(size / KB).toFixed(2)} KB` : `${(size / MB).toFixed(2)} MB`;
  };

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
            <span className="text-sm opacity-75">
              {typeof receipt === 'object' ? formatFileSize(receipt.size) : '35kb'}
            </span>
          </div>
          {typeof receipt === 'string' ? (
            <a href={receipt} download>
              <i className="bi bi-download text-2xl"></i>
            </a>
          ) : (
            <a
              href={URL.createObjectURL(receipt)}
              download={receipt.name}
            >
              <i className="bi bi-download text-2xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceiptDiv;