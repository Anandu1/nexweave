import { IconButton } from '@material-ui/core'
import { ExitToApp, NavigateBefore, NavigateNext } from '@material-ui/icons'
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
          <IconButton
           style={{height:"20px",fontSize:"14px",
            backgroundColor:"lightgray",borderRadius:"6px",padding:"15px"}}>
               <ExitToApp />
               Logout
           </IconButton>
           <div className="navigate">
           <div className="result">Showing result 4 of 25</div>
           <IconButton style={{height:"20px",fontSize:"14px", marginRight:"15px",
        backgroundColor:"lightgray",borderRadius:"6px",padding:"15px"}}>
               Prev
               <NavigateBefore />
           </IconButton>
           <div style={{  backgroundColor:"lightgray",borderRadius:"6px",padding:"5px",
           marginRight:"15px"}}
            className="pageNo">1</div>
           <div
           style={{  backgroundColor:"lightgray",borderRadius:"6px",padding:"5px",
            marginRight:"15px"}}
           className="pageNo">2</div>
           <div 
           style={{  backgroundColor:"lightgray",borderRadius:"6px",padding:"5px"
        , marginRight:"15px"}}
           className="pageNo">3</div>
           <IconButton style={{height:"20px",fontSize:"14px",
          backgroundColor:"lightgray",borderRadius:"6px",padding:"15px", marginRight:"15px"}}>
               Next
               <NavigateNext/>
           </IconButton>
           </div>
          
        </div>
    )
}

export default Footer
