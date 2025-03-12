import walletIcon from '../../../assets/icons/walet.png'
export const cardData = [
    {
        icon: walletIcon,
        iconBg: "bg-[#CA1919]",
        heading: "total",
        subheading: "wallets",
        cardValue: "1,750",
        valueStatus: true,
    },
    {
        icon: walletIcon,
        iconBg: "bg-[#CA1919]",
        heading: "active",
        subheading: "wallets",
        cardValue: "25,000",
        valueStatus: true,
    },
    {
        icon: walletIcon,
        iconBg: "bg-[#CA1919]",
        heading: "inactive",
        subheading: "wallets",
        cardValue: "750",
        valueStatus: true,
    },
]
export const statusFilter = {
    options: [
        { value: 'all', name: 'all' },
        { value: 'active', name: 'active' },
        { value: 'inactive', name: 'inactive' },
        { value: 'frozen', name: 'frozen' },
    ],
    selected: 'all',
    placeholder: 'all'
};
export const tokenFilter = {
    options: [
        { value: 'all', name: 'all' },
        { value: 'btc', name: 'btc' },
        { value: 'trx', name: 'trx' },
        { value: 'sol', name: 'sol' },
    ],
    selected: 'token',
    placeholder: 'all'
};
export const networkFilter = {
    options: [
        { value: 'network', name: 'network' },
        { value: 'bitcoin', name: 'bitcoin' },
    ],
    selected: 'network',
    placeholder: 'all'
};
export const availiabitiyFilter = {
    options: [
        { value: 'available', name: 'available' },
        { value: 'Not available', name: 'Not available' },
    ],
    selected: 'available',
    placeholder: 'all'
};
export const wallet = [
    { asset: "BTC", network: "Bitcoin", balanceBtc: "0.00234", balanceUsd: "23,500" },
    { asset: "ETH", network: "Ethereum", balanceBtc: "0.1367", balanceUsd: "2,700" },
    { asset: "XRP", network: "Ripple", balanceBtc: "500.0", balanceUsd: "10,500" },
    { asset: "LTC", network: "Litecoin", balanceBtc: "1.234", balanceUsd: "12,000" },
    { asset: "BCH", network: "Bitcoin Cash", balanceBtc: "0.5678", balanceUsd: "5,678" },
    { asset: "EOS", network: "EOS.IO", balanceBtc: "2.345", balanceUsd: "1,234" },
    { asset: "ADA", network: "Cardano", balanceBtc: "1000", balanceUsd: "15,000" },
    { asset: "DOT", network: "Polkadot", balanceBtc: "0.8967", balanceUsd: "8,967" },
];
export const tablebody = [
    {
        "asset": "BTC",
        "network": "Bitcoin",
        "status": "successful",
        "date": "12-22-24",
        "time": "11:23 AM",
        'reason': 'Not available, try again in 24 hours',
    },
    {
        "asset": "BTC",
        "network": "Bitcoin",
        "status": "successful",
        "date": "12-22-24",
        "time": "11:23 AM",
        'reason': 'Not available, try again in 24 hours',
    },
    {
        "asset": "BTC",
        "network": "Bitcoin",
        "status": "successful",
        "date": "12-22-24",
        "time": "11:23 AM",
        'reason': 'Not available, try again in 24 hours',
    },
    {
        "asset": "BTC",
        "network": "Bitcoin",
        "status": "successful",
        "date": "12-22-24",
        "time": "11:23 AM",
        'reason': 'Not available, try again in 24 hours',
    },
    {
        "asset": "BTC",
        "network": "Bitcoin",
        "status": "successful",
        "date": "12-22-24",
        "time": "11:23 AM",
        'reason': 'Not available, try again in 24 hours',
    }
]