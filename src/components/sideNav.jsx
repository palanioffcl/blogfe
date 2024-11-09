import React from 'react'
import './index.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Logo from '../assets/icon.png';
import SideNavElement from './SideNavElement';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { useNavigate } from 'react-router-dom';


const SideNav = () => {
    const navigate = useNavigate();
    return (
        <div className='sidenav'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column' }}>
                <img src={Logo} style={{ height: 40 }} />
            </div>
            <div>
                <div onClick={() => navigate("/home")}><SideNavElement icon={<HomeRoundedIcon style={{ fontSize: 35 }} />} /></div>
                <div onClick={() => navigate("/")}><SideNavElement icon={<InboxOutlinedIcon style={{ fontSize: 35 }} />} /></div>
                <div onClick={() => navigate("/blog/new")}><SideNavElement icon={<ChatBubbleOutlineRoundedIcon style={{ fontSize: 35 }} />} /></div>
                <div onClick={() => navigate("/")}><SideNavElement icon={<NotificationsNoneRoundedIcon style={{ fontSize: 35 }} />} /></div>
            </div>


            <div>
                <div style={{ cursor: 'grab' }} onClick={() => navigate("/profile")}><SideNavElement icon={<AccountCircleRoundedIcon style={{ fontSize: 35 }} />} /></div>
            </div>
        </div>
    )
}

export default SideNav;