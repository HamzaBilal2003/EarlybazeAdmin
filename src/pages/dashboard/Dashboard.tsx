import React from "react";
import TotalCard from "../../globalComponents/TotalCard";
import Usericon_image from "../../assets/icons/User.png";
import Money_image from "../../assets/icons/Money.png";
import transaction_image from "../../assets/icons/ReadCvLogo.png";
import wallet_image from "../../assets/icons/Wallet.png";
import BarChart from "./components/BarChart";
import TableCan from "../../globalComponents/table/TableCan";
import BTC from "../../assets/icons/DummyIcon/btc.png";
import trx from "../../assets/icons/DummyIcon/trx.png";
import usdt from "../../assets/icons/DummyIcon/usdt.png";
import sol from "../../assets/icons/DummyIcon/sol.png";
import MasterCard from "./components/masterCard/MasterCard";
import RecetTransactionTr from "./components/RecetTransactionTr";
import CryptoTr from "./components/CryptoTr";

interface DashboardCard {
  icon: string;
  iconBg: string;
  heading: string;
  subheading: string;
  cardValue: string;
  valueStatus: boolean;
  cardUnit?: string;
}

interface Transaction {
  typeimg: string;
  type: string;
  action: string;
  user: string;
  amount: string;
  date: string;
  time: string;
}

interface CryptoPrice {
  name: string;
  rating: string;
  price: string;
  change: string;
  tokenImg: string;
}

const Dashboard = () => {
  const dashboard_cardValues: DashboardCard[] = [
    {
      icon: Usericon_image,
      iconBg: "bg-[#126EB9]",
      heading: "total",
      subheading: "users",
      cardValue: "25,000",
      valueStatus: false,
    },
    {
      icon: Money_image,
      iconBg: "bg-[#78CA19]",
      heading: "total",
      subheading: "revenue",
      cardValue: "25,000",
      valueStatus: true,
      cardUnit: "USD",
    },
    {
      icon: transaction_image,
      iconBg: "bg-[#B95A12]",
      heading: "total",
      subheading: "Transactions",
      cardValue: "2,000",
      valueStatus: false,
    },
    {
      icon: wallet_image,
      iconBg: "bg-[#CA1919]",
      heading: "total",
      subheading: "Wallets",
      cardValue: "2,000",
      valueStatus: true,
    },
  ];

  const transactions_headerTr: string[] = ["type", "user", "amount", "date"];
  const transactions: Transaction[] = [
    {
      typeimg: BTC,
      type: "BTC",
      action: "Deposit",
      user: "Maleekfrenzy",
      amount: "0.00023 BTC",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: usdt,
      type: "USDT",
      action: "Sending",
      user: "Alex",
      amount: "25,000 USDT",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: sol,
      type: "SOL",
      action: "Receiving",
      user: "Anita",
      amount: "0.00023 SOL",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: trx,
      type: "TRX",
      action: "Swap",
      user: "Zainy",
      amount: "0.00023 TRX",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: BTC,
      type: "BTC",
      action: "Deposit",
      user: "Balla",
      amount: "0.00023 BTC",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
  ];

  const cryptoPrices_headerTr: string[] = ["token", "price", "change"];
  const cryptoPrices_DataTr: CryptoPrice[] = [
    {
      name: "btc",
      rating: "1.88T",
      price: "$95,567.01",
      change: "graph place",
      tokenImg: BTC,
    },
    {
      name: "sol",
      rating: "1.88T",
      price: "$197.01",
      change: "graph place",
      tokenImg: sol,
    },
    {
      name: "usdt",
      rating: "1.88T",
      price: "$1.01",
      change: "graph place",
      tokenImg: usdt,
    },
    {
      name: "trx",
      rating: "1.88T",
      price: "$0.56",
      change: "graph place",
      tokenImg: trx,
    },
    {
      name: "btc",
      rating: "1.88T",
      price: "$95,000",
      change: "graph place",
      tokenImg: BTC,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <h1 className="text-[30px] chivo-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dashboard_cardValues.map((item, index) => (
              <TotalCard
                icon={item.icon}
                iconBg={item.iconBg}
                heading={item.heading}
                subheading={item.subheading}
                cardValue={item.cardValue}
                valueStatus={item.valueStatus}
                cardUnit={item.cardUnit}
                key={index}
              />
            ))}
          </div>
        </div>
        <BarChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
        <div className="md:col-span-7">
          <TableCan
            showHeading={true}
            heading={"recent transactions"}
            headerTr={transactions_headerTr}
            dataTr={transactions}
            TrName={RecetTransactionTr}
            ButtonLink={"#"}
            ButtonName={"view all"}
          />
        </div>
        <div className="md:col-span-5">
          <TableCan
            showHeading={true}
            heading={"Crypto Wallet"}
            headerTr={cryptoPrices_headerTr}
            dataTr={cryptoPrices_DataTr}
            TrName={CryptoTr}
            ButtonLink={"#"}
            ButtonName={"view all"}
          />
        </div>
      </div>

      <div className="mt-14">
        <h1 className="text-2xl font-bold mb-4">Master Wallet</h1>
        <MasterCard heading={"crypto wallet"} />
      </div>
    </>
  );
};

export default Dashboard;