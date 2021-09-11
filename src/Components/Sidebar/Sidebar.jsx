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
import { useHistory } from "react-router-dom";
import {useState} from 'react'
function Sidebar() {
    const history = useHistory();
    const [active, setActive] = useState("Campaign")
    function handleClick() {
        history.push("/get-started");
        setActive("get-started")
      }
      function handleTemplates() {
        history.push("/templates");
        setActive("templates")
      }
      function handleCampaigns() {
        history.push("/campaign");
        setActive("Campaign")
      }
      function handleIntegrations() {
        history.push("/integrations");
        setActive("integrations")
      }
      function handleManageS() {
        history.push("/manage-settings");
        setActive("manage-settings")
      }
      function handleSettings() {
        history.push("/settings");
        setActive("settings")
      }
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <li 
                 className="sidebarTitle">
                            <NightsStayIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon" />NexWeave
                        </li>
                    <ul className="sidebarList">
                        <div onClick={handleClick}>
                        <li 
                        style={{
                            color:active=="get-started" ? "rgb(58, 12, 87)" : "gray"
                        }}
                        className="sidebarListItem">
                            <HourglassEmptyIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon" />Get Started
                        </li>
                        </div>
                      
                        <li
                          style={{
                            color:active=="templates" ? "rgb(58, 12, 87)" : "gray"
                        }}
                        onClick={handleTemplates}
                         className="sidebarListItem">
                            <GridOnIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon"/>Templates
                        </li>
                        <li
                          style={{
                            color:active=="Campaign" ? "rgb(58, 12, 87)" : "gray"
                        }}
                        onClick={handleCampaigns}
                        className="sidebarListItem">
                            <PeopleOutlineIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon"/>Campaigns
                        </li>
                        <li
                          style={{
                            color:active=="integrations" ? "rgb(58, 12, 87)" : "gray"
                        }}
                        onClick={handleIntegrations}
                         className="sidebarListItem">
                            <SettingsInputCompositeIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon" />Integrations
                        </li>
                        <li
                          style={{
                            color:active=="manage-settings" ? "rgb(58, 12, 87)" : "gray"
                        }}
                        onClick={handleManageS}
                         className="sidebarListItem">
                            <WebIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                             className="sidebarIcon"/>Manage Websites
                        </li>
                        <li
                         style={{
                            color:active=="settings" ? "rgb(58, 12, 87)" : "gray"
                        }}
                        onClick={handleSettings}
                         className="sidebarListItem">
                            <SettingsIcon style={{color:"rgb(58, 12, 87)" ,marginRight:"15px" }}
                            className="sidebarIcon"/>Settings
                        </li>
                    </ul>
                   
                   
                </div>
            </div>
            <div className="card">
                    <CardPro style={{marginTop:"60px",marginLeft:"15px"}}/>
                    </div>
        </div>
    )
}

export default Sidebar
