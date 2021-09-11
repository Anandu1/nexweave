import { Menu } from '@material-ui/icons'
import React from 'react'
import  './Topbar.css'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';



function Topbar() {
    return (
        <div className="Topbar">
        <div className="howAreYou">
        <Menu className="topbarIcon"/>
       <div className="howAreYouText">
       How are you doing inder ? 
           </div>
        </div>
        <div className="group">
        <div className="webCampaigns">
            <div className="webctext">
                Web Campaigns
            </div>
        </div>
        <div className="webCampaigns">
            <div className="webctext">
                Credits : 200
            </div>
        </div>
        <div className="helpIcon">
            <HelpOutlineIcon/>
        </div>
        <div className="avatar">
        <img className="topAvatar"
           src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"></img>
        </div>
        </div>
       
      
    </div>
    )
}

export default Topbar
