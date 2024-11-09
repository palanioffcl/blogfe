import React from 'react'
import './index.css';
import LogoutIcon from '@mui/icons-material/Logout';

const TopNav = () => {
    return (
        <div className='Topnav'>
            <div></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input type="text" placeholder="Search Here..."></input>
            </div>
            <div style={{display: 'flex', paddingRight: 15, alignItems: 'center'}}>
                <LogoutIcon/>
            </div>
        </div>
    )
}

export default TopNav;