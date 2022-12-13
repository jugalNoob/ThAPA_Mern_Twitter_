import React,{useState,useEffect} from 'react'
import {NavLink , useHistory} from "react-router-dom"
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'
import Abi from "./ABI.json"
import "./style/dapp.css"




function Dapp() {
  
  const [userData , setUserData]=useState()

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
      setUserData(data)
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
 //web3 start row class

 
 const [webApi , setWebApi]=useState({

  web3:null,
  provider:null
})


useEffect(()=>{

  const Load=async()=>{

    const provider=await detectEthereumProvider();

    if(provider){

      provider.request({method:"eth_requestAccounts"})

      setWebApi({

        web3:new Web3(provider),
        provider
      })
    }else{

      console.error("please install metmask")
    }

  }

  Load();

},[])

console.log(webApi.web3)
  
const [account , setAccount]=useState();
useEffect(()=>{
  const webaccount =async()=>{
const allaccount=await webApi.web3.eth.getAccounts()
setAccount(allaccount[0])
  }
webApi.web3 && webaccount()
})

///UserAdd

const [age , setAge]=useState("");
const [mess , setMess]=useState("");
const UserAdd=async()=>{

  const {web3}=webApi
  var MyContract = new web3.eth.Contract(Abi,"0x82AEDB6B20DA8d9F7A9c15429B2DA85b7e4fE4B5")
  MyContract.methods.Add_Message(age , mess).send({from:account}).then(alert)
}



// /////show address Data

// const [add , setAdd]=useState("")
// const Adder=async()=>{
// const {web3}=webApi
// var MyContract = new web3.eth.Contract(Abi,"0x82AEDB6B20DA8d9F7A9c15429B2DA85b7e4fE4B5")
// MyContract.methods.All_Mess(add).send({from:account}).then(alert())
// }


////////////checkDateWeb3
const [check , setCheck]=useState("")
const Checker=async()=>{
 
  const {web3}=webApi
  var MyContract = new web3.eth.Contract(Abi,"0x82AEDB6B20DA8d9F7A9c15429B2DA85b7e4fE4B5")
  MyContract.methods.CheckMess(check).call({from:account}).then(alert)
  }
  

  //////////////DeleteMessage

  

  const Delete=async()=>{
    const {web3}=webApi
    var MyContract = new web3.eth.Contract(Abi,"0x82AEDB6B20DA8d9F7A9c15429B2DA85b7e4fE4B5")
    MyContract.methods.DeletMess().send({from:account}).then(alert)

  }

///////////////

  return (
    <div>



    {/* start row class line */}

    <div className="all_row">





<div className="account">
<center>
<h1>{account ? account:"not coonect"}</h1>
</center>

</div>



{/* add_MESSAGE row class  */}
<div className="add_mess">
<center>
<input type="number" name="age" id="" onChange={(e)=>setAge(e.target.value)} placeholder="enter_age" />
<br />
<br />
<input type="text" name="mes" id="" onChange={(e)=>setMess(e.target.value)}  placeholder="enter_message" />
<br />
<br />
<input type="submit" onClick={UserAdd} value="submit" id="" />
</center>
</div>







{/* check Detail twitter */}

<div className="check_user">
<center>
<input type="text" name="check" id="" onChange={(e)=>setCheck(e.target.value)}/>
<br />

<input type="submit" onClick={Checker} value="check_Mess"  name="" id="" />
</center>
</div>

{/* Delete row class lin start */}
<br />
<br />
<div className="button_two">
<center>
<button id="delet" onClick={Delete}>Delete_Message</button>
</center>
</div>



</div>




{/* last row class line  */}
  
</div>





  )
}

export default Dapp