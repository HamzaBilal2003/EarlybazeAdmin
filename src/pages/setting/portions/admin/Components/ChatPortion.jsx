import React from 'react'
import TableCan from '../../../../../globalComponents/table/TableCan'
import Dropdown from '../../../../../globalComponents/Dropdown'
import AdminActivityRow from './AdminActivityRow'
import AdminChatRow from './AdminChatRow'

const ChatPortion = ({ name }) => {
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
        'name',
        'role',
        'last chat',
        'date',
        'status',
        'more'
    ]
    const table_tr = [
        {
            "id": 1,
            "name": "Alex",
            "role": "Admin",
            "lastChat": "What are you up to now that you....",
            "date": "01-01-25/03:22 PM",
            "status": "active"
        },
        {
            "id": 2,
            "name": "Alex",
            "role": "Admin",
            "lastChat": "What are you up to now that you....",
            "date": "01-01-25/03:22 PM",
            "status": "active"
        },
        {
            "id": 3,
            "name": "Alex",
            "role": "Admin",
            "lastChat": "What are you up to now that you....",
            "date": "01-01-25/03:22 PM",
            "status": "inactive"
        },
        {
            "id": 4,
            "name": "Alex",
            "role": "Admin",
            "lastChat": "What are you up to now that you....",
            "date": "01-01-25/03:22 PM",
            "status": "active"
        }
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
                    TrName={AdminChatRow}
                />
            </div>
        </>
    )
}

export default ChatPortion
