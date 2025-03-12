import React, { useState } from 'react';
import BtcIcon from '../../../../../assets/icons/DummyIcon/btc.png';
import MoreDropdown from '../../../../../globalComponents/MoreDropdown';
import kycDetial from '../../../../../assets/icons/kycDetial.png';
import TransactionModal from '../models/TransactionModal';
import ReceiptDiv from '../small_comp/ReceiptDiv';
import successIcon from '../../../../../assets/icons/successIcon.png';
import ReasonModal from '../models/ReasonModal';

const SwapTransactionsRow = ({ displayData, index }) => {
    const [showDetailModel, setshowDetailModel] = useState(false);
    const [reasonModel, setReasonModel] = useState(false);
    const [justSubmited, setJustSubmited] = useState(false);

    const transactionDetails = [
        { label: "Token Name", value: displayData.assetSent },
        { label: "Network", value: displayData.network },
        { label: "Amount in BTC", value: displayData.quantity },
        { label: "Amount in USD", value: displayData.amountUSD },
        { label: "Date", value: `${displayData.date} / ${displayData.time}` },
    ];

    const handleReasonSubmit = (reason) => {
        setReasonModel(false);
        console.log("Reason Submitted:", reason);
    };

    return (
        <>
            <tr className={`hover:bg-green-800 cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
                <td className="px-4 py-2 ">
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <div className='flex items-center gap-2'>
                            <img src={displayData.assetSentIcon || BtcIcon} alt={displayData.assetSent} className="w-8 h-8" />
                            <div className='flex flex-col'>
                                <span className='text-sm opacity-50'>{displayData.assetSent}</span>
                                <span>{displayData.network}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-2">{displayData.network}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                    <img src={displayData.assetReceivedIcon || BtcIcon} alt={displayData.assetReceived} className="w-8 h-8" />
                    <span>{displayData.assetReceived}</span>
                </td>
                <td className="px-4 py-2">
                    <span>{displayData.quantity}</span>
                    <span>{displayData.amountUSD}</span>
                </td>
                <td className="px-4 py-2">{displayData.amountReceived}</td>
                <td className="px-4 py-2">
                    <div className={`w-1 h-10 rounded-lg mx-auto bg-${displayData.status === 'successful' ? 'green-500' : displayData.status === 'processing' ? 'yellow-500' : 'red-500'}`}></div>
                </td>
                <td className="px-4 py-2">
                    <span>{displayData.date}</span>
                    <span>{displayData.time}</span>
                </td>
                <td className='px-4 py-2'>
                    <MoreDropdown iconClass="bi bi-three-dots-vertical" menuClass="bg-theme-dark min-w-[150px]">
                        <div className="bg-theme-light p-4 flex flex-col gap-4">
                            <div className="flex items-center gap-2" onClick={() => setshowDetailModel(true)}>
                                <img src={kycDetial} alt="more" className='h-5 w-5' />
                                <span className='p-0 m-0'>View More</span>
                            </div>
                        </div>
                    </MoreDropdown>
                </td>
            </tr>

            {showDetailModel && (
                <TransactionModal
                    status={displayData.status}
                    statusName="Transaction Successful"
                    options={transactionDetails}
                    accounts={{ id: "1", bankName: "Access Bank", accountName: "EarlyBase", accountNumber: "123456789" }}
                    onClose={() => setshowDetailModel(false)}
                >
                    <ReceiptDiv
                        accoutHolder={'Qamardeen Abdul Malik'}
                        amount={'₦40,000,000'}
                        receipt={successIcon}
                    />
                    {justSubmited ? (
                        <div className='flex items-center justify-between gap-8'>
                            <button className="bg-green-400 px-12 py-2 rounded-lg">Approve</button>
                            <button onClick={() => setReasonModel(true)} className="bg-red-600 text-white px-12 py-2 rounded-lg">Delete</button>
                        </div>
                    ) : (
                        <div className='grid grid-cols-3 gap-4'>
                            <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg flex items-center justify-center gap-2"><i className="bi bi-printer"></i>Print</button>
                            <button className="w-full border border-red-600 text-red-600 px-4 py-2 rounded-lg">Delete</button>
                            <button className="w-full border text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"><i className="bi bi-file-text"></i>Log</button>
                        </div>
                    )}
                </TransactionModal>
            )}

            {reasonModel && (
                <ReasonModal onClose={() => setReasonModel(false)} onSubmit={handleReasonSubmit} />
            )}
        </>
    );
};

export default SwapTransactionsRow;
