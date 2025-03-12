import React from 'react';
import TableCan from '../../../globalComponents/table/TableCan';
import RuleRow from './aml/RuleRow';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import SuspiciousActivityRuleForm from './aml/SuspiciousActivityRuleForm';

const AmlMonitoring = () => {
  const table_th = [
    'name',
    'Details',
    'account excempted',
    'transactions excempted',
    'date created',
    'status',
    'more',
  ];
  const table_td = [
    {
      ruleName: 'Rule 1',
      description: 'If swap transaction is greater than $5,000 daily, freeze account',
      threshold: 250,
      level: 2,
      timestamp: '01-01-24',
      time: '11:23 AM',
      status: 'active',
      exemption: true,
    },
    {
      ruleName: 'Rule 1',
      description: 'If swap transaction is greater than $5,000 daily, freeze account',
      threshold: 250,
      level: 2,
      timestamp: '01-01-24',
      time: '11:23 AM',
      status: 'active',
      exemption: true,
    },
  ];
  const handleFilter = (value: string) => {
    console.log(value);
  };
  const options = {
    transactionTypes: [
      {
        name: 'Swap Transaction',
        value: 'swap_transaction',
      },
      {
        name: 'Buy',
        value: 'buy',
      },
      {
        name: 'Send',
        value: 'send',
      },
      {
        name: 'Receive',
        value: 'receive',
      },
      {
        name: 'Withdrawal',
        value: 'withdrawal',
      },
    ],
    conditions: [
      {
        name: 'Is greater than',
        value: 'greater_than',
      },
      {
        name: 'Is less than',
        value: 'less_than',
      },
      {
        name: 'Is equal to',
        value: 'equal_to',
      },
    ],
    frequencies: [
      {
        name: 'Daily',
        value: 'daily',
      },
      {
        name: 'Monthly',
        value: 'monthly',
      },
      {
        name: 'Custom',
        value: 'custom',
      },
    ],
    defaultMessage: 'Your account has been flagged for suspicious activity contact an admin',
  };

  return (
    <>
      <h1 className="text-4xl font-bold">AML Monitoring</h1>
      <div className="my-10">
        <SuspiciousActivityRuleForm onSubmit={handleFilter} options={options} />
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-end gap-8">
          <Button navigationName="Export CSV" />
          <SearchFilter Placeholder="Search Rule" handleFunction={handleFilter} />
        </div>
      </div>
      <div className="mt-8">
        <TableCan headerTr={table_th} dataTr={table_td} TrName={RuleRow} />
      </div>
    </>
  );
};

export default AmlMonitoring;