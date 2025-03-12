import { swap } from "formik"

export const table_header_rows = {
    all: [
        'asset',
        'network',
        'receivong address',
        'amount',
        'status',
        'fee',
        'date',
        'more',
    ],
    send: [
        'all',
        'network',
        'send to',
        'amount',
        'status',
        'fee',
        'date',
        'more',
    ],
    receive: [
        'asset',
        'network',
        'receive from',
        'amount',
        'status',
        'date',
        'more',
    ],
    buy: [
        'asset',
        'network',
        'payment account',
        'quantity',
        'amount paid', ,
        'status',
        'date',
        'more',
    ],
    swap: [
        "Asset Sent",
        "Network",
        "Asset Received",
        "Quantity",
        "Received",
        "Status",
        "Date",
        "More"
    ],
    withdraw: [
        "Asset",
        "Account",
        "Amount",
        "Balance",
        "Fees",
        "Status",
        "Date",
        "More"
    ],

}

export const table_body_rows = {
    all: [
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivingAddress": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivingAddress": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivingAddress": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivingAddress": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivingAddress": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    send: [
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "sendToGmail": "example@gmail.com",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "sendToGmail": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "sendToGmail": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "sendToGmail": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "sendToGmail": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    receive: [
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "example@gmail.com",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "time": "11:23 AM"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "0xdfk...345",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "time": "11:23 AM"
        }
    ],
    buy: [
        {
            "asset": "BTC",
            "network": "Bitcoins",
            "receivedFrom": "Account 1",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountPaid": "$2,500",
            "status": "pending",
            "date": "12 - 22 - 24",
            "time": "11:23 AM",
            "typeimg": "btc.png"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "Account 3",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountPaid": "$2,500",
            "status": "successful",
            "date": "12 - 22 - 24",
            "time": "11:23 AM",
            "typeimg": "btc.png"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "Account 3",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountPaid": "$2,500",
            "status": "failed",
            "date": "12 - 22 - 24",
            "time": "11:23 AM",
            "typeimg": "btc.png"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "Account 1",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountPaid": "$2,500",
            "status": "processing",
            "date": "12 - 22 - 24",
            "time": "11:23 AM",
            "typeimg": "btc.png"
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "receivedFrom": "Account 1",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountPaid": "$2,500",
            "status": "successful",
            "date": "12 - 22 - 24",
            "time": "11:23 AM",
            "typeimg": "btc.png"
        }
    ],
    swap: [
        {
            "id": 1,
            "assetSent": "BTC",
            "network": "Bitcoin",
            "assetReceived": "NGN",
            "quantity": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountReceived": "₦40,000,000",
            "status": "successful",
            "date": "12 - 22 - 24",
            "time": "11:23 AM"
        },
        {
            "id": 2,
            "assetSent": "BTC",
            "network": "Bitcoin",
            "assetReceived": "NGN",
            "quantity": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "amountReceived": "₦40,000,000",
            "status": "processing",
            "date": "12 - 22 - 24",
            "time": "11:23 AM"
        }
    ],
    withdraw: [
        {
            "id": 1,
            "asset": "NGN",
            "network": 'Naira',
            "account": "Account 2",
            "amount": "₦25,000,000",
            "balance": "₦15,000,000",
            "fees": "₦150",
            "status": "successful",
            "date": "12 - 22 - 24",
            "time": "11:23 AM"
        },
        {
            "id": 2,
            "asset": "NGN",
            "network": 'Naira',
            "account": "Account 2",
            "amount": "₦25,000,000",
            "balance": "₦15,000,000",
            "fees": "₦150",
            "status": "processing",
            "date": "12 - 22 - 24",
            "time": "11:23 AM"
        },
        {
            "id": 3,
            "asset": "NGN",
            "account": "Account 2",
            "amount": "₦25,000,000",
            "balance": "₦15,000,000",
            "fees": "₦150",
            "status": "failed",
            "date": "12 - 22 - 24",
            "time": "11:23 AM"
        }
    ],





}