

  import React,{useState} from 'react'
import {NavLink ,useHistory} from "react-router-dom"
import "./style/form.css"
function Form() {
  const history=useHistory()
  const [user , setUser]=useState({
    name:"",
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
  

  const Date = async (e) => {
    e.preventDefault();
   if (!user.password) {
     alert("please enter your password")
    } else if (user.password.length < 5) {
     alert("minemum 5 letter")
    } else if (user.password.length > 10) {
        console.log("welcome ")
    }
    //////////
    const { name, email, password} = user;

    const res = await fetch("/Signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, email,password
        })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");
        alert("please enter the valid signup");

    } else {
        history.push("/login")
        console.log("data added");

    }
}
  
  return (
    <div>
    <div className="sign">

   
      <div className="signup">
      <div className="head-one">
    
      <h1>create new account</h1>
     
      </div>
      <center>
       

        <form method='POST'>
<input type="text" name="name" required  autoComplete="off" value={user.name} onChange={hangfle} placeholder="enter your name" id="" />
<br />
<br />
<input type="email" name="email" required autoComplete="off" value={user.email} onChange={hangfle} placeholder="enter your email" id="" />
<br />
<br />
<input type="password" name="password" required autoComplete="off" value={user.password} onChange={hangfle} placeholder="enter your password" id="" />
<br />
<br />
{/* <input type="submit" value="register" onClick={Date} name="" id="" /> */}

<button className='btn'  onClick={Date}>signup</button>

<h3>already login <NavLink to="/login">:login</NavLink></h3>
</form>
        </center>
      </div>
    </div>
    </div>
  
  )
}
export default Form