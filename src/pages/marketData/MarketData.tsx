import React, { useState } from 'react';
import Button from '../../globalComponents/Button';
import SearchFilter from '../../globalComponents/SearchFilter';
import TableCan from '../../globalComponents/table/TableCan';
import { market_data } from '../../dummyData/Data';
import Dropdown from '../../globalComponents/Dropdown';
import MarketRow from './components/MarketRow';

interface MarketDataProps {
  logo?: string;
  name: string;
  symbol: string;
  price: string;
  change_24h: string;
  change_7d: string;
  change_30d: string;
  market_cap: string;
  volume: string;
  supply: string;
}

const MarketData = () => {
  const [FilteredData, setFilteredData] = useState<MarketDataProps[]>(market_data);

  const filterData = (status: string) => {
    console.log('Filter status:', status);

    let filterdata = market_data.filter(
      (item) => item.symbol.toLowerCase() === status.toLowerCase()
    );

    if (filterdata.length === 0) {
      setFilteredData(market_data);
      console.log('No match found, showing all data');
    } else {
      setFilteredData(filterdata);
      console.log('Filtered Data:', filterdata);
    }
  };

  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period',
  };
  const TokenFilter = {
    options: [
      { value: 'all', name: 'All token' },
      { value: 'btc', name: 'btc' },
      { value: 'usdt', name: 'usdt' },
      { value: 'sol', name: 'sol' },
      { value: 'trx', name: 'trx' },
    ],
    selected: '',
    placeholder: 'all Token',
  };

  const token_headerTr = [
    'Name',
    'price',
    '1h%',
    '24h%',
    '7d%',
    'market cap',
    'volume',
    'circulating supply',
    '7 days change',
  ];
  const handleSearch = (value: string) => {
    console.log('Search Value:', value);
    if (value === '') {
      setFilteredData(market_data);
      return false;
    }
    const SearchData = market_data.filter((item) =>
      item.symbol.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(SearchData);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Market Data</h1>
      <div className="mt-[50px] mb-6 flex lg:items-center gap-4 justify-between flex-col-reverse lg:flex-row">
        <div className="flex items-center gap-4">
          <Dropdown
            options={TokenFilter.options}
            placeholder={TokenFilter.placeholder}
            onChange={filterData}
            selected={TokenFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="4"
            gap="4"
          />
          <Dropdown
            options={periodFilter.options}
            placeholder={periodFilter.placeholder}
            onChange={filterData}
            selected={periodFilter.selected}
            borderColor={'[#25AE7A]'}
            bgColor="theme-dark"
            roundedValue="full"
            position="left-0"
            paddingY="4"
            gap="4"
          />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Button navigationName="Export CSV" />
          <SearchFilter handleFunction={handleSearch} />
        </div>
      </div>
      <div>
        <TableCan
          headerTr={token_headerTr}
          dataTr={FilteredData}
          TrName={MarketRow}
        />
      </div>
    </div>
  );
};

export default MarketData;