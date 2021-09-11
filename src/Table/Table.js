import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css'
import { useEffect,useState } from "react";
import {  Drafts, GetApp, TrendingUp, Videocam } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';

export default function BasicTable() {
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response.body)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  const [data,setData]=useState([]);
  return (
    <TableContainer component={Paper}>
       {/* <div>
       {data.map((item) => {
         return <div>
           {item.username}
           </div>;
       })}
     </div> */}
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="title">
              <Checkbox style={{height:"10px",width:"10px"}}/>
              Campaign Name</TableCell>
            <TableCell align="left" className="title">Status</TableCell>
            <TableCell align="left" className="title">Created at</TableCell>
            <TableCell align="left" className="title">Method</TableCell>
            <TableCell align="left" className="title">Media</TableCell>
            <TableCell align="left" className="title">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.campaign_name}>
  
              <TableCell
              style={{color: "rgb(58, 12, 87)",fontWeight:"600"}}
              align="left" className="campaign">
              <Checkbox style={{height:"10px",width:"10px"}}/>
                {data.campaign_name}</TableCell>
              <TableCell
              align="left"
              className= {data.status}
              >
                <div
                style={{
                  color:data.status=="Success" ? "green" : "red",
                  backgroundColor:"lightgray",borderRadius:"6px",
                  width:"60px",padding:"5px"
                }}
                >
                  {data.status}
                </div>
                </TableCell>
              <TableCell className="date"
               style={{color: "rgb(58, 12, 87)", fontWeight:"600"}}
               align="left">
                {data.created_at}</TableCell>
              <TableCell className="method"
              style={{color: "rgb(58, 12, 87)", fontWeight:"600"}}
               align="left">
                 {data.method}
                 </TableCell>
              <TableCell align="left">
               <div className="media"> <Videocam 
               style={{height:"20px"}}
               />
               {data.Media}
               </div>
                </TableCell>
              <TableCell align="left">
                <div className="actionGroup">
                  <TrendingUp
                   style={{color: "green", backgroundColor:"lightgray"
                   ,borderRadius:"6px",
                  marginLeft:"5px"}}
                   className="actionIcon"/>
                  <GetApp
                    style={{color: "darkcyan", backgroundColor:"lightgray"
                    ,borderRadius:"6px",
                    marginLeft:"5px"
                  }}
                  className="actionIcon"/>
                  <Drafts
                  style={{color: "royalblue",
                   backgroundColor:"lightgray",borderRadius:"6px",
                  marginLeft:"5px"}}
                  className="actionIcon"/>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
