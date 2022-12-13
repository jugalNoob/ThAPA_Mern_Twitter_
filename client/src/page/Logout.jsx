import React,{useEffect,useContext} from 'react'
import { UserContext } from '../App';
import {useHistory} from "react-router-dom"

function Logout() {
  const {state , dispatch}= useContext(UserContext);

  const history=useHistory();
  

  useEffect(()=>{

    fetch("/logout",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }).then((res)=>{

      dispatch({type:"user" , payload:false})
      history.push("/login" , {replace:true});

      if(res.status===200){
        const error=new Error(res.error);
        throw error;
      }
    }).catch((err)=>{

      console.log(err)
    })

  })

  return (
    <div>
      <h1>LogOut</h1>
    </div>
  )
}

export default Logout
