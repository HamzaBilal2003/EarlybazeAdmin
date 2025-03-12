import React, { useState } from 'react';
import Dropdown from '../../../globalComponents/Dropdown';
import OtherRow from '../components/OtherRow';
import TableCan from '../../../globalComponents/table/TableCan';
import StatusModel from '../components/StatusModel';

interface OtherData {
  ipAddress: string;
  status: string;
  date: string;
  time: string;
}

const Other = () => {
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };

  const Others_th = ['IP Address', 'Status', 'Date'];

  const initialData: OtherData[] = [
    {
      ipAddress: '123.234.234.45',
      status: 'whitelisted',
      date: '12-10-24',
      time: '11:24 AM',
    },
    {
      ipAddress: '123.234.234.46',
      status: 'blacklisted',
      date: '12-10-24',
      time: '11:24 AM',
    },
    {
      ipAddress: '123.234.234.47',
      status: 'whitelisted',
      date: '12-10-24',
      time: '11:24 AM',
    },
  ];

  const [OthersData, setOthersData] = useState<OtherData[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<OtherData | null>(null);

  const StatusFilter = {
    options: [
      {
        value: 'whitelisted',
        name: 'whitelisted',
      },
      {
        value: 'blacklisted',
        name: 'blacklisted',
      },
    ],
    selected: 'whitelisted',
    placeholder: 'whitelisted',
  };

  // Filter data based on IP address
  const filterData = (status: string) => {
    const filteredData = initialData.filter((item) => item.status === status);
    setOthersData(filteredData.length > 0 ? filteredData : initialData);
  };

  // Open modal for adding or updating
  const handleOpenModal = (data: OtherData | null = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  // Handle form submission (add/update)
  const handleSubmit = (newData: OtherData) => {
    if (editData) {
      setOthersData(
        OthersData.map((item) =>
          item.ipAddress === editData.ipAddress ? newData : item
        )
      );
    } else {
      setOthersData([...OthersData, newData]);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Other Security Settings</h1>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <Dropdown
            options={periodFilter.options}
            placeholder={periodFilter.placeholder}
            onChange={filterData}
            selected={periodFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
          <Dropdown
            options={StatusFilter.options}
            placeholder={StatusFilter.placeholder}
            onChange={filterData}
            selected={StatusFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="2"
            gap="4"
          />
        </div>
        <button
          className="py-2 px-4 bg-[#25AE7A] rounded-lg"
          onClick={() => handleOpenModal()}
        >
          Add New
        </button>
      </div>
      <div className="mt-8">
        <TableCan
          headerTr={Others_th}
          dataTr={OthersData}
          TrName={(props) => <OtherRow {...props} onEdit={handleOpenModal} />}
        />
      </div>

      {isModalOpen && (
        <StatusModel
          closeModal={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          initialData={editData}
        />
      )}
    </>
  );
};

export default Other;