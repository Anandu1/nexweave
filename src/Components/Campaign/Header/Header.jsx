import { Button } from '@material-ui/core'
import { Add, Refresh, Sync } from '@material-ui/icons'
import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            {/* <div className="campaignC">
            <h3 className="title">Campaign</h3>
            </div> */}
           <div className="campaign"> Campaign</div>
            <div className="buttonG">
            <Sync className="icon"/>
            <Button style={{height:"40px",marginLeft:"25px",
           }}
             variant="outlined">
                 <Add style={{color: "rgb(58, 12, 87)",height:"15px",marginRight:"10px"}}/>
                Create a new campaign
            </Button>
            </div>
        </div>
    )
}

export default Header
