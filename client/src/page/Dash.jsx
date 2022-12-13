import React,{useState,useEffect} from 'react'
import {NavLink , useHistory} from "react-router-dom"

import "./style/dash.css"

function Dash() {
  const [data , setDatat]=useState("")
  const history=useHistory();
  const callAbout=async()=>{

    try {
      const res=await fetch("/Cont",{
method:"GET",
headers:{
  Accept:"application/json",
  "Content-Type": "application/json",
},
credentials:"include"

      })

      const data=await res.json()
      console.log(data)
      setDatat(data)
      if(!res.status===200){
        const error=new Error(res.error)
        throw error;
      }
      

    } catch (error) {

      console.log(error)
      history.push("/login")
     
      
    }

  }
  useEffect(()=>{
    callAbout()
  },[])
 
  return (
    <div>
{/* start row class line start */}


<div className="dash-all">

  <div className="dash-info">

    <div className="dash-na">

<h1>user information</h1>

<h2>name: {data.name}</h2>
<h2>email: {data.email}</h2>
      
    </div>
  </div>
</div>





{/* 
last row class line row */}
    </div>
  )
}

export default Dash