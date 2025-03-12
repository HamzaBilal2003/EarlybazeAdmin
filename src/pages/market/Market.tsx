import React, { useState } from "react";
import AddingButton from "../../globalComponents/AddingButton";
import MarketStats from "./components/MarketStats";
import MarketTabs from "./components/MarketTabs";
import TableCan from "../../globalComponents/table/TableCan";
import MarketRow from "./components/MarketRow";
import { useNavigate } from "react-router-dom";

interface TableData {
  title: string;
  sent: number;
  openRate: string;
  conversionRate: string;
  bounceRate: string;
  progress: number;
  status: string;
}

const tableData: TableData[] = [
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "25% (134)",
    bounceRate: "25% (134)",
    progress: 75,
    status: "Completed",
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "28% (134)",
    bounceRate: "25% (134)",
    progress: 30,
    status: "In progress",
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "25% (134)",
    bounceRate: "25% (134)",
    progress: -15,
    status: "In progress",
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "26% (134)",
    bounceRate: "25% (134)",
    progress: 100,
    status: "Completed",
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "25% (134)",
    bounceRate: "25% (134)",
    progress: 78,
    status: "All",
  },
];

const tableHeaders: string[] = ["Title", "Sent", "Open Rate", "Conversion Rate", "Bounce Rate", "Progress", "More"];

const Market: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = tableData.filter((item) =>
    activeTab === "All" ? true : item.status === activeTab
  );

  const HandleButton = () => {
    console.log("Button clicked");
    navigate("/market/create");
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl chivo-bold">Newsletters</h1>
        <div>
          <AddingButton icon={"bi bi-plus-lg"} title={"Create New"} handlefunction={HandleButton} />
        </div>
      </div>

      <MarketStats />

      <MarketTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        <TableCan
          heading="Newsletter Campaigns"
          ButtonName="View All"
          ButtonLink="#"
          headerTr={tableHeaders}
          dataTr={filteredData}
          TrName={MarketRow}
        />
      </div>
    </>
  );
};

export default Market;