import React,{useState,useContext} from 'react'
import {NavLink} from "react-router-dom"
import "./style/nav.css"
import { UserContext } from '../App';

function Nav() {
  const {state , dispatch}= useContext(UserContext);
  const Render=()=>{

    if(state){

      return(

<>

      <NavLink to="/">home</NavLink>
<br />
<br />
<NavLink to="/dapp">dapp</NavLink>
<br />
<br />
<NavLink to="/dash">dash</NavLink>
<br />
<br />
<NavLink to="/logout">logout</NavLink>

{/* //Logout line last row class */}

</>

      )
    }else{

      return(
<>
<NavLink to="/">home</NavLink>
<br />
<br />
<NavLink to="/dapp">dapp</NavLink>
<br />
<br />
<NavLink to="/form">form</NavLink>
<br />
<br />
<NavLink to="/login">login</NavLink>
<br />
<br />

</>

      )
    }

  }

  return (
    <div>
          
      <div className="div-all">


<div className="font">
<i class="fab fa-ethereum"></i>
</div>

<div className="nav">

<Render/>

  </div>
      </div> 
    

{/* 
      last row class line */}
    </div>
  )
}

export default Nav
