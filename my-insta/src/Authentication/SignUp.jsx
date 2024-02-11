import React, { useState } from 'react'
import "./SignUp.css"
import { auth } from "../FireBase"
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile } from 'firebase/auth';
  
const SignUp = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const HandleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(signInWithEmailAndPassword(auth, email, password).then(
      updateProfile(auth.currentUser, { display: username })
    )
    ).catch((error) => {
      alert(error)
    })
  }
  return (
    <div className='signup'>
      <h1>instagram</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className='control'
        placeholder='Username'
        value={username}
      />
      <input
        type="email"
        className='control'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="control"
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="btn" onClick={HandleSignup}>Sign up</button>
    </div>
  )
}

export default SignUp