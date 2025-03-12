import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TableCan from "../../../../../globalComponents/table/TableCan";
import Dropdown from "../../../../../globalComponents/Dropdown";
import NairaRow from "../naira_comp/NairaRow";

interface TableDataItem {
  action: string;
  amount: string;
  date: string;
  time: string;
  status: boolean;
}

interface FilterOption {
  value: string;
  name: string;
}

interface Filter {
  options: FilterOption[];
  selected: string;
  placeholder: string;
}

const ViewWalletPortion_Naira: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const tableHeader = ["action", "amount", "date", "status", "more"];

  const tableBody: TableDataItem[] = [
    {
      action: "withdraw",
      amount: "$2000",
      date: "30-1-2025",
      time: "2:25 PM",
      status: true,
    },
    {
      action: "withdraw",
      amount: "$2000",
      date: "30-1-2025",
      time: "2:25 PM",
      status: true,
    },
    {
      action: "withdraw",
      amount: "$2000",
      date: "30-1-2025",
      time: "2:25 PM",
      status: true,
    },
  ];

  const periodFilter: Filter = {
    options: [
      { value: "monthly", name: "This month" },
      { value: "weekly", name: "This week" },
      { value: "yearly", name: "This year" },
    ],
    selected: "This Month",
    placeholder: "This Month",
  };

  const actionFilter: Filter = {
    options: [
      { value: "all", name: "all" },
      { value: "buy", name: "buy" },
      { value: "receive", name: "receive" },
      { value: "swap", name: "swap" },
      { value: "withdraw", name: "withdraw" },
    ],
    selected: "all",
    placeholder: "all",
  };

  const handleCategory = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="my-8 border border-green-900 p-8 min-h-60 flex flex-col justify-between rounded-xl bg-[#084B82]">
        <h1 className="capitalize text-2xl chivo-bold ">Naira Wallet</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-6">
            <h1 className="opacity-50 text-xl chivo-bold ">NGN</h1>
            <h1 className="text-6xl chivo-bold ">25,000,000</h1>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 border rounded-lg">
            <i className="bi bi-exclamation-octagon"></i>
            Freeze Wallet
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-2xl font-bold mb-8">Activities</h1>
        <div className="mb-8 flex items-center gap-8">
          <Dropdown
            options={actionFilter.options}
            placeholder={actionFilter.placeholder}
            onChange={handleCategory}
            selected={actionFilter.selected}
            borderColor={"[#25AE7A]"}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
          <Dropdown
            options={periodFilter.options}
            placeholder={periodFilter.placeholder}
            onChange={handleCategory}
            selected={periodFilter.selected}
            borderColor={"[#25AE7A]"}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
        </div>
        <TableCan headerTr={tableHeader} dataTr={tableBody} TrName={NairaRow} />
      </div>
    </>
  );
};

export default ViewWalletPortion_Naira;