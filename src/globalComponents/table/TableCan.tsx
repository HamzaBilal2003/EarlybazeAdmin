import React from "react";
import Viewall_button from "../Viewall_button";

interface TableCanProps<T> {
  heading?: string;
  ButtonName?: string;
  ButtonLink?: string;
  headerTr: string[];
  dataTr: T[];
  TrName: React.ComponentType<any> | ((props: any) => JSX.Element);
  showHeading?: boolean;
  TrPropsName?: Record<string, any>;
}

const TableCan = <T,>({
  heading,
  ButtonName,
  ButtonLink,
  headerTr,
  dataTr,
  TrName,
  showHeading = false,
  TrPropsName = {}
}: TableCanProps<T>) => {
  console.log(dataTr, " : tablecan datetr");
  return (
    <div className="border border-green-800 rounded-lg overflow-y-visible">
      {showHeading && (
        <div className="flex items-center justify-between gap-2 p-4">
          <h1 className="text-xl font-bold chivo capitalize">{heading}</h1>
          <Viewall_button
            navigationLink={ButtonLink}
            navigationName={ButtonName}
          />
        </div>
      )}
      <div className="overflow-x-auto overflow-y-visible rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#01190F] text-white capitalize">
            <tr>
              {headerTr.map((item, index) => (
                <th
                  key={index}
                  className={`p-4 ${
                    item === "Action" ? "text-center" : "text-left"
                  } capitalize`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTr.length > 0 ? (
              dataTr.map((data, index) => {
                if (typeof TrName === 'function') {
                  if (TrName.length > 1) {
                    return <TrName key={index} displayData={data} index={index} {...TrPropsName} />;
                  } else {
                    const TrComponent = TrName;
                    return <TrComponent key={index} displayData={data} index={index} {...TrPropsName} />;
                  }
                } else {
                  return <TrName key={index} displayData={data} index={index} {...TrPropsName} />;
                }
              })
            ) : (
              <tr>
                <td colSpan={headerTr.length} className="text-center py-2 px-4">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCan;