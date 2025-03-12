import React from 'react'
import Filter from '../../../globalComponents/Filter'
import { useNavigate } from 'react-router-dom';

const Header = ({ title, tabs, activeTab }) => {
    console.log(activeTab);
    const navigate = useNavigate();
    const handleTab = (value) => {
        console.log(value, ' : Header comp');
        navigate(`/Settings/${value}`);
    };    
    return (
        <div className='flex items-center justify-between gap-8'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div>
                <Filter
                    tabs={tabs}
                    activeTab={activeTab}
                    handleValue={handleTab}
                    tabPadding="3"
                />
            </div>
        </div>

    )
}

export default Header
