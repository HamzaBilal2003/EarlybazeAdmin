import React from 'react'
import TableCan from '../../../../../globalComponents/table/TableCan'
import Dropdown from '../../../../../globalComponents/Dropdown'
import { time } from 'framer-motion'
import AdminActivityRow from './AdminActivityRow'

const ActivityPortion = ({ name }) => {
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period'
  }
  const handlePeriod = (period) => {
    console.log(period);
  }
  const table_th = [
    'activity',
    'date'
  ]
  const table_tr =[
    {
      activity : 'User registered',
      date : '12-12-25',
      time : '11 : 24 am'
    },
    {
      activity : 'Crpyto balance offer by alex',
      date : '12-12-25',
      time : '11 : 24 am'
    },
    {
      activity : 'Attended to ticket 1234',
      date : '12-12-25',
      time : '11 : 24 am'
    },
  ]
  return (

    <>
      <Dropdown
        options={periodFilter.options}
        placeholder={periodFilter.placeholder}
        onChange={handlePeriod}
        selected={periodFilter.selected}

        // styling
        borderColor={"[#25AE7A]"}
        bgColor='theme-dark'
        roundedValue='full'
        position='left-0'
        paddingY='2'
        gap='4'
      />
      <div className='my-8'>
        <TableCan
          headerTr={table_th}
          dataTr={table_tr}
          TrName={AdminActivityRow}
        />
      </div>
    </>
  )
}

export default ActivityPortion
