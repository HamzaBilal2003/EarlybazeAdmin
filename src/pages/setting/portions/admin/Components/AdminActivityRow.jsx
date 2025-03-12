import React from 'react'

const AdminActivityRow = ({ displayData, index }) => {
    return (
        <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
            <td className='px-4 py-2'>{displayData.activity}</td>
            <td className='px-4 py-2'>{displayData.date} / {displayData.time}</td>
        </tr>
    )
}

export default AdminActivityRow
