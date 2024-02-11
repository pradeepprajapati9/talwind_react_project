import './App.css'
import React from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from "./Context/UserContextProvider"
function App() {
  return (
    <>
      <UserContextProvider>
        <h1> operation success</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
