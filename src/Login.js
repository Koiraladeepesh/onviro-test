import React, { useState, useEffect, useContext } from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import { AuthenticationContext } from './AuthenticationContextApi';

function Login() {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();
  const userInfo=localStorage.getItem("user-info")
  const {setLogged, isLoggedIn}=useContext(AuthenticationContext)

  function login(e)
  {
    e.preventDefault()
    const credentials={username, password};
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then((data)=>{
    localStorage.setItem("user-info",JSON.stringify(data))
    setLogged(true)
    navigate("/product")
    
    }).catch((error)=>{
        alert(error)
    })
  }


  if(isLoggedIn){
    return <Navigate to="/product"/>
  }


  return (
    <div>
      <form onSubmit={login}>
        <h1>Login Page</h1>
        {/* <p>Name<input type="text" /></p> */}
        <p>Username<input type="text" placeholder='username'
        onChange={(e)=>setUsername(e.target.value)}/></p>
        <p>Password<input type="password" placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}/></p>
        <button type='submit'> Login </button>
      </form>
    </div>
  )
}

export default Login