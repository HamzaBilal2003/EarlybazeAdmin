import React from 'react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import General from './portions/General';
import Admin from './portions/Admin';

const Setting = () => {
    const { SettingPage } = useParams();
    const tabs = [
        { name: 'admin', value: 'admin' },
        { name: 'general', value: 'general' },
    ]
    return (
        <>
            <Header
                title={SettingPage == 'general' ?  "Service under maintenance" : 'Settings'}
                tabs={tabs}
                activeTab={SettingPage}
            />
            {SettingPage == 'general' ? <General/> : <Admin/>}
        </>
    )
}

export default Setting