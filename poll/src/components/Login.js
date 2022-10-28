import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../redux/authSlice';
import {useNavigate} from 'react-router-dom'

 const Login = () => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  const dispatch = useDispatch();
  const authState = useSelector(state=>state.authSlice)
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(username, pass)
    dispatch(signInUser({username, pass}))
  }
  console.log(authState);

  useEffect (() => {
    if(authState?.token){
      navigate('/')
    }
  },[authState])

   return (
     <div>
        <h2>Login</h2>
        {authState.error}
        <label htmlFor=''>Username</label><br/>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/><br/><br/>
        <label htmlFor=''>Password</label><br/>
        <input type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}/><br/><br/>
        <button type='submit' onClick={handleLogin}>Login</button>
        <p>Do not have an account?</p>
        <a href='/'>Sign Up</a>
     </div>
   )
 }
 
 export default Login