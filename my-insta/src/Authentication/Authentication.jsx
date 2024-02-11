import React, { useState } from 'react'
import "./Authentication.css";
import Login from "./Login";
import SignUp from "./SignUp";


const Authentication = () => {
  const [active, setActive] = useState("login")
  const Handlechange = () => {
    setActive(
      active === "login" ? "signup" : "login"
    )
  }
  return (
    <div className='authentication'>
      <div className="auth-left">
        <img src="https://images.unsplash.com/photo-1554331808-4e46e8ee8041?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="imgfluid" />
      </div>
      <div className="auth-right">
        {active === "login" ? (<Login />) : (<SignUp />)}
        <div className="auth-more">
          <span>
            {active === "login" ? (<>
              Don't Have a Account <button onClick={Handlechange}>Sign up</button>
            </>) : (<>
              Have a Account <button onClick={Handlechange}>Login</button>
            </>)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Authentication