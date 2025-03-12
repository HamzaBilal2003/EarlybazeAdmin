import React from 'react';
import { Link } from 'react-router-dom';

const AdminChatRow = ({ displayData, index }) => {
    return (
        <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
            <td className='px-4 py-2'>
                <div className='flex items-center gap-4 px-4 py-2'>
                    <input type="checkbox" />
                    <div className='flex items-center gap-4'>
                        <img 
                            src={`https://randomuser.me/api/portraits/${index % 2 !== 0 ? 'women':'men'}/4${index}.jpg`} 
                            alt={displayData.name} 
                            width="30" 
                            className='rounded-full'
                        />
                        <div>
                            <h1 className="font-bold">{displayData.name}</h1>
                        </div>
                    </div>
                </div>
            </td>
            <td className='px-4 py-2'>{displayData.role}</td>
            <td className='px-4 py-2 truncate max-w-xs'>{displayData.lastChat}</td>
            <td className='px-4 py-2'>{displayData.date}</td>
            <td className='px-4 py-2 text-center'>
                <div className={`h-6 w-1 rounded-full ${displayData.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </td>
            <td className='px-4 py-2 text-center'>
                <Link to={`./chat/${displayData.id}`}>
                    <button className="border border-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default AdminChatRow;
