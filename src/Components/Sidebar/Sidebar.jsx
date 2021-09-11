import React from 'react'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import GridOnIcon from '@material-ui/icons/GridOn';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import WebIcon from '@material-ui/icons/Web';
import SettingsIcon from '@material-ui/icons/Settings';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import './Sidebar.css'
import CardPro from '../Campaign/Card/Card';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <li className="sidebarTitle">
                            <NightsStayIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon" />NexWeave
                        </li>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HourglassEmptyIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon" />Get Started
                        </li>
                        <li className="sidebarListItem">
                            <GridOnIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon"/>Templates
                        </li>
                        <li className="sidebarListItem">
                            <PeopleOutlineIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon"/>Campaigns
                        </li>
                        <li className="sidebarListItem">
                            <SettingsInputCompositeIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon" />Integrations
                        </li>
                        <li className="sidebarListItem">
                            <WebIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon"/>Manage Websites
                        </li>
                        <li className="sidebarListItem">
                            <SettingsIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                            className="sidebarIcon"/>Settings
                        </li>
                    </ul>
                   
                   
                </div>
            </div>
            <div className="card">
                    <CardPro style={{marginTop:"60px",marginLeft:"15px",left:"-50px"}}/>
                    </div>
        </div>
    )
}

export default Sidebar
