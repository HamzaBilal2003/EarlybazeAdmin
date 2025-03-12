import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import TableCan from '../../../globalComponents/table/TableCan';
import PayoutRulesRow from '../components/PayoutRulesRow';
import PayoutForm from '../components/PayoutForm';

const PayoutRules = () => {
  const navigate = useNavigate();
  const [isShowFreezeModel, setisShowFreezeModel] = useState(false);

  const onComfirmFreeze = () => {
    alert('account freeze');
    setisShowFreezeModel(false);
  };

  const signupOption = [{ value: 'referral_code', name: 'referral code' }];
  const frequencyoptions = [{ value: 'daily', name: 'Daily' }];
  const walletOptions = [{ value: 'dlr', name: 'Dollar Wallet' }];

  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log(values);
    resetForm();
  };

  const table_th = [
    'User',
    'Details',
    'Accounts exempted',
    'Transactions exempted',
    'Date Created',
    'Status',
    'More',
  ];
  const table_td = [
    {
      id: 1,
      user: 'Rule 1',
      details:
        'User sign up with referral code and trade $20 daily credit users dollar wallet with $2',
      accountsExempted: 250,
      transactionsExempted: 2,
      dateCreated: '01-01-24',
      timeCreated: '11:23 AM',
      status: 'active',
    },
    {
      id: 2,
      user: 'Rule 2',
      details:
        'User sign up with referral code and trade $20 daily credit users dollar wallet with $2',
      accountsExempted: 250,
      transactionsExempted: 2,
      dateCreated: '01-01-24',
      timeCreated: '11:23 AM',
      status: 'active',
    },
  ];

  return (
    <div className="p-8 text-white">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </div>
          <h1 className="text-4xl chivo-bold">Payout Rules</h1>
        </div>
      </div>
      <PayoutForm
        handleSubmit={handleSubmit}
        signupOption={signupOption}
        frequencyoptions={frequencyoptions}
        walletOptions={walletOptions}
      />
      <div className="mt-12 flex items-center justify-between">
        <Button navigationName="Export CSV" />
        <SearchFilter handleFunction={() => {}} />
      </div>

      <div className="mt-8">
        <TableCan
          headerTr={table_th}
          dataTr={table_td}
          TrName={PayoutRulesRow}
          TrPropsName={{
            OnEdit: () => console.log('edit from parent component'),
            OnDelete: () => setisShowFreezeModel(true),
          }}
        />
      </div>
      {isShowFreezeModel && (
        <ConfirmationPopup
          heading="Are you sure you want to delete this rule?"
          confirmColor="bg-red-500"
          closeText="Abort"
          onConfirm={onComfirmFreeze}
          onClose={() => setisShowFreezeModel(false)}
        />
      )}
    </div>
  );
};

export default PayoutRules;