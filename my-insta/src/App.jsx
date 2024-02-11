import React, { useEffect } from 'react'
import "./App.css"
import Homepage from './Pages/Homepage'
import { useDispatch, useSelector } from "react-redux"
import Authentication from "./Authentication/Authentication"
import { auth } from './FireBase'
import { loginuser, setloading } from './Feature/UserSlice'
import { Routes, Route } from "react-router-dom"
import Search from "./Pages/Search.jsx"
import Explore from "./Pages/Explore.jsx"
import Reels from "./Pages/Reels.jsx"
import Message from "./Pages/Message.jsx"
import Notification from "./Pages/Notification.jsx"
import Create from "./Pages/Create.jsx"
import Profile from "./Pages/Profile.jsx"
import SideNav from './Navigation/SideNav.jsx'
import CommenShowfile from './CommenShowfile.jsx'

const App = () => {
  const user = useSelector((state) => state.data.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(
          loginuser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email
          })
        )
        dispatch(setloading(false))
      } else {
        console.log("User Not Logged in")
      }
    })
  }, [])
  return (
    <div>
      {user ? (<CommenShowfile />) : (<Authentication />)}
      <div className="main-section">
        <Routes path='/' element={<SideNav />}>
          <Route path='search' element={<Search />} />
          <Route path='explore' element={<Explore />} />
          <Route path='reels' element={<Reels />} />
          <Route path='message' element={<Message />} />
          <Route path='notification' element={<Notification />} />
          <Route path='create' element={<Create />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
