import React,{ createContext, useReducer} from 'react'
import {Route} from "react-router-dom"
import Home from "./page/Home"
import Form from "./page/Form"
import Login from "./page/Login"
import Logout from "./page/Logout"
import Dapp from "./page/Dapp"
import Dash from "./page/Dash"
import Nav from './page/Nav'

import { initialState ,reducer } from "../src/reducer/UserReducer"


export const UserContext=createContext()
function App() {
  const [state , dispatch]=useReducer(reducer , initialState)

  return (
    <div>
    <UserContext.Provider value={{state , dispatch}}>

<Nav/>
    <Route exact path="/">
      <Home/>
    </Route>

<Route path="/form">
  <Form/>
</Route>

<Route path="/login">
  <Login/>
</Route>

<Route path="/Logout">
  <Logout/>
</Route>
      
      <Route path="/dapp">
        <Dapp/>
      </Route>

      <Route path="/dash">
        <Dash/>
      </Route>
   </UserContext.Provider>
    </div>
  )
}

export default App
