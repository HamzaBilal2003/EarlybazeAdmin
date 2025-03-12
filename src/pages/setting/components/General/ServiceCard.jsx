import React from 'react'
import EditIcon from '../../../../assets/icons/edit.png';
import delIcon from '../../../../assets/icons/delIcon.png';


const ServiceCard = ({ data,onEdit , onDelete}) => {
    return (
        <div className='p-4 bg-theme-dark rounded-lg shadow-md shadow-[#ffffff11] flex items-center justify-between gap-8'>
            <h1 className='text-lg capitalize'>{data.title}</h1>
            <div className='flex justify-end items-center gap-2'>
                <button
                    className='border border-[#25ae793c] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold'
                    onClick={onEdit}
                >
                    <img src={EditIcon} alt="Edit" className='w-5 h-5 object-cover' />
                </button>
                <button
                    className='border border-[#25ae793c] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold'
                    onClick={onDelete}
                >
                    <img src={delIcon} alt="del" className='w-5 h-5 object-cover' />
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
