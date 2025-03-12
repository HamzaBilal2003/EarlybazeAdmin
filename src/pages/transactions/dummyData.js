import { swap } from "formik"

export const table_header_rows = {
    all: [
        'username',
        'type',
        'asset',
        'network',
        'amount',
        'status',
        'fees',
        'date',
        'more',
    ],
    send: [
        'username',
        'type',
        'asset',
        'network',
        'amount',
        'status',
        'fees',
        'date',
        'more',
    ],
    receive: [
        'username',
        'type',
        'asset',
        'network',
        'amount',
        'status',
        'fees',
        'date',
        'more',
    ],
    buy: [
        'username',
        'type',
        'asset',
        'network',
        'amount',
        'status',
        'fees',
        'date',
        'more',
    ],
    swap: [
        'username',
        'type',
        'asset',
        'network',
        'amount',
        'status',
        'fees',
        'date',
        'more',
    ],
    withdraw: [
        'username',
        'type',
        'asset',
        'network',
        'amount',
        'status',
        'fees',
        'date',
        'more',
    ],
}


export const table_body_rows = {
    all: [
        {
            "username": 'random user 1',
            "transaction_type": 'send',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 1',
            "transaction_type": 'buy',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 1',
            "transaction_type": 'withdraw',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "pending",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 2',
            "transaction_type": 'swap',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 3',
            "transaction_type": 'send',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "failed",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    send: [
        {
            "username": 'random user 1',
            "transaction_type": 'send',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 2',
            "transaction_type": 'send',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 3',
            "transaction_type": 'send',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    buy: [
        {
            "username": 'random user 1',
            "transaction_type": 'buy',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 2',
            "transaction_type": 'buy',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 3',
            "transaction_type": 'buy',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "failed",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    swap: [
        {
            "username": 'random user 1',
            "transaction_type": 'swap',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 2',
            "transaction_type": 'swap',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "processing",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    receive: [
        {
            "username": 'random user 1',
            "transaction_type": 'swap',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 2',
            "transaction_type": 'swap',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "processing",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ],
    withdraw: [
        {
            "username": 'random user 1',
            "transaction_type": 'withdraw',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "successful",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        },
        {
            "username": 'random user 2',
            "transaction_type": 'withdraw',
            "asset": "BTC",
            "network": "Bitcoin",
            "amount": "0.00234.34 BTC",
            "amountUSD": "$2,500",
            "status": "processing",
            "fees": "0.0000012 BTC",
            "feesUSD": "$13",
            "date": "12-22-24",
            "time": "11:23 AM"
        }
    ]
}
