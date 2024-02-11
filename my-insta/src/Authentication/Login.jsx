import React, { useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../FireBase"
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const HandleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <div className='login'>
      <h1>instagram</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className='control'
        placeholder='Email'
        value={email}
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="control"
        placeholder='Password'
        value={password}
      />
      <button className="btn" onClick={HandleLogin}>Login</button>
    </div>
  )
}

export default Login