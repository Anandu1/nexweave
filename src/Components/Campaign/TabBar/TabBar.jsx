import { Checkbox } from '@material-ui/core'
import React from 'react'
import './TabBar.css'
function TabBar() {
    return (
        <div className="tabBar">
            <span className="tabFirst">
                All Campaigns
                <hr className="hr"/>
                </span>
            <span className="tabTitle">Quick Campaigns</span>
            <span className="tabTitle">CSV Campaigns</span>
            <span className="tabTitle">URL Override Campaigns</span>
            <div className="check">
            <Checkbox style={{height: "10px"}}/>
            Show Archieved
            </div>
           
        </div>
    )
}

export default TabBar
