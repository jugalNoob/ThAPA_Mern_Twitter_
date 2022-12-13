import React from 'react'

 import { useState,useContext } from 'react'
 import { UserContext } from '../App';
 import "./style/login.css"

import {NavLink,useHistory} from "react-router-dom"


function Login() {
  const {state , dispatch}= useContext(UserContext);


    const history=useHistory()
  const [user , setUser]=useState({
    email:"",
    password:"",
  });

  const hangfle=(e)=>{
    e.preventDefault();
    console.log(e)
  let name=e.target.name
  let value=e.target.value
  setUser({...user,[name]:value})
  }

  const Date=async(e)=>{
    e.preventDefault();
       //////////////////////
///////////////password line appp
    if (!user.password) {
     alert("please enter your password")
    } else if (user.password.length < 5) {
     alert("minemum 5 letter")
    } else if (user.password.length > 10) {
        console.log("welcome ")
    }
    ////////////////////////////
/////////////////method POST ///LINe
const { email , password }=user;

const users=await fetch("/Login",{
  method:"POST",
  headers:{
  "Content-Type": "application/json",
  },
  body:JSON.stringify({

  email,
  password,
  })
  })      
  const res=await users.json();
  if(users.status === 400 || !res){
      window.alert("enter your form ")
  }else{
   dispatch({type:'user' , payload:true})
      alert("is complete")
      history.push("/dapp")
  }
//////////////last row method cclass row line
  }

  return (
    <div>
        {/* first row class line start  */}
        <div className="sign_in">
        <div className="signin">
  <div className="head-two">
  <h1>sign_up</h1>
 
   
    </div>
<center>


<form method='POST'>

<input type="email" name="email" required autoComplete="off" value={user.email} onChange={hangfle} placeholder="enter your passwprd" id="" />
<br />
<br />
<input type="password" name="password" required autoComplete="off" value={user.password} onChange={hangfle} placeholder="enter your password" id="" />
<br />
<br />
{/* <input type="submit" value="register" onClick={Date} name="" id="" /> */}
<button className='btn'  onClick={Date}>login</button>
</form>
<br />
<br />
<p>you have already account? <NavLink to="/dapp">dapp</NavLink></p>
</center>
</div>
</div>
{/* last row class line start */}
    </div>
  )
}

export default Login


