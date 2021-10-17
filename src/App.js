import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import { Checkbox, Select, MenuItem, Tooltip } from '@material-ui/core';

import { Data } from './Data.js';


function App() {
  const [filtereData,setFiltereData]=useState(Data)
  const [filter, setFilter]=useState(true)

  const [gender,setgender]= useState('all')
  const columns = [
    { title: "Gender", field: "gender" },
    { title: "Name", field: "name" },
    { title: "Age", field: "age", },

    { title: "Email", field: "email" }, 
    { title: "Phone", field: 'phone', },
    { title: "Address", field: "address", },
    { title: "Balance", field: "balance", },
    { title: "Likes", field: "likes", },
    { title: "Rating", field: "rating", }


  ] 
 const handleChange=()=>{
   setFilter(!filter)
 }
 useEffect(( )=>{ 
   setFiltereData(gender==='all'?Data:Data.filter(dt=> dt.gender===gender))},[gender])

  return (
    <div className="App">
      <h1 align="center">Filter app</h1>
      <h4 align='center'>RH management</h4>
      
      <MaterialTable
        title="Employee Data"
        data={filtereData}
        columns={columns}
        options={{filtering:filter}}
        actions={[{
          icon:()=><Checkbox
          checked={filter}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'checkbox' }}
        />,
        tooltip:"Hide/Show Filter option",
        isFreeAction:true
        },
        {
          icon:()=><Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          stule={{width:100}}
          value={gender}
          onChange={(e)=>setgender(e.target.value)}
        >
          <MenuItem value={"all"}><em>All</em></MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>,
        tooltip: "Filter gender",
        isFreeAction:true


        }]}


      />
    </div>
  );
}

export default App;
