import React from 'react'
import {Card, Typography} from '@material-ui/core'
import './Card.css'
import { NavigateNext } from '@material-ui/icons'
function CardPro() {
    return (
        <div className="card">
            <Card 
            style={{backgroundColor:"rebeccapurple",width:"200px",height:"125px",
            borderRadius:"15px"
        }}>
                <Typography style={{justifyContent:"center", display:"flex",
                fontSize:"18px",fontWeight:"700",color:"white",
                marginTop:"10px"}}>
                    Upgrade to Pro
                </Typography>
                <Typography style={{justifyContent:"center", display:"flex",
                fontSize:"12px",fontWeight:"normal",color:"lightgray",
                marginTop:"10px"}}>
                    <NavigateNext style={{height:"15px"}}/>
                    Read More
                </Typography>
                <div className="circles">
                <div className="circle2">   
                </div>
                <div className="circle1">   
                </div>
                </div>
                
            </Card>
        </div>
    )
}

export default CardPro
