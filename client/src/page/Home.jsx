import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import "./style/home.css"


function Home() {


  const [data , setDate]=useState([]);
  useEffect(()=>{
      const fetching=async()=>{
          await fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((res)=>res.json())
          .then((data)=>{

              setDate(data);
              console.log(data);
          })


      }

      fetching()

  },[])

  if(!data.length) return <div>Loding...</div>

  return (
    <div>

<div className="back">

<div className="all-one">

<div className="head-two">

<h1><p>the new era of dapps</p></h1>

</div>


<div className="crypto">

<div className="all-crypto">

<div className="btc">
<h1>bitcoin</h1>
<h2>${data[0].current_price}</h2>
</div>

<div className="eth">
<h1>ethereum</h1>
<h2>${data[1].current_price}</h2>
    
</div>

<div className="bnb">

<h1>binance</h1>
<h2>${data[3].current_price}</h2>

</div>



</div>



</div>

</div>

</div>

    </div>
  )
}

export default Home