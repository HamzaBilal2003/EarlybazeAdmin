import React, { useState } from "react";

const initialPermissions = [
  { name: "Customer", owner: true, admin: true, superAdmin: true },
  { name: "Chat", owner: true, admin: true, superAdmin: true },
  { name: "Transactions", owner: true, admin: true, superAdmin: true },
  { name: "Rates", owner: true, admin: true, superAdmin: true },
  { name: "Log", owner: true, admin: true, superAdmin: true },
  { name: "Support", owner: true, admin: true, superAdmin: true },
  { name: "Referral", owner: true, admin: true, superAdmin: true },
];

const PermissionTable = () => {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [expandedRows, setExpandedRows] = useState({});
  const [search, setSearch] = useState("");

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleCheckbox = (index, role) => {
    setPermissions((prev) =>
      prev.map((perm, i) =>
        i === index ? { ...perm, [role]: !perm[role] } : perm
      )
    );
  };

  const filteredPermissions = permissions.filter((perm) =>
    perm.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#031E11] p-4 rounded-lg text-white w-full">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-3 px-4">
        {/* Search Input */}
        <div className="relative w-[250px]">
          <input
            type="text"
            placeholder="🔍 Permission name"
            className="bg-[#052B16] text-white p-2 rounded-md outline-none w-full pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="bi bi-search absolute left-3 top-3 text-gray-400"></i>
        </div>

        {/* Table Column Headers */}
        <div className="flex items-center gap-12 text-gray-400 text-sm">
          <span>Owner</span>
          <i className="bi bi-three-dots"></i> {/* Settings Icon */}
          <span>Admin</span>
          <i className="bi bi-three-dots"></i>
          <span>Super Admin</span>
          <i className="bi bi-three-dots"></i>
        </div>
      </div>

      {/* Table Body */}
      <div className="mt-2">
        {filteredPermissions.map((perm, index) => (
          <div key={index} className="border-b border-gray-700 py-3 px-4">
            <div className="flex items-center justify-between">
              {/* Permission Name & Expand Icon */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleRow(index)}
              >
                <span className="font-semibold">{perm.name}</span>
                <i
                  className={`bi ${
                    expandedRows[index] ? "bi-chevron-down" : "bi-chevron-right"
                  }`}
                ></i>
              </div>

              {/* Checkboxes for roles */}
              <div className="flex items-center gap-12">
                <input
                  type="checkbox"
                  checked={perm.owner}
                  onChange={() => toggleCheckbox(index, "owner")}
                  className="w-5 h-5 accent-green-500 cursor-pointer"
                />
                <i className="bi bi-three-dots text-gray-400"></i>

                <input
                  type="checkbox"
                  checked={perm.admin}
                  onChange={() => toggleCheckbox(index, "admin")}
                  className="w-5 h-5 accent-green-500 cursor-pointer"
                />
                <i className="bi bi-three-dots text-gray-400"></i>

                <input
                  type="checkbox"
                  checked={perm.superAdmin}
                  onChange={() => toggleCheckbox(index, "superAdmin")}
                  className="w-5 h-5 accent-green-500 cursor-pointer"
                />
                <i className="bi bi-three-dots text-gray-400"></i>
              </div>
            </div>

            {/* Expandable Content (If needed) */}
            {expandedRows[index] && (
              <div className="mt-2 ml-6 text-gray-400 text-sm">
                <p>Additional permissions for {perm.name}...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionTable;
