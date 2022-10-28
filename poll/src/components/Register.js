import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { signUpUser } from '../redux/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [err, setErr] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandle =() => {
    console.log(name, password, {role})
    if(name.length===0||password.length===0){
      setErr(true)
    }
    // dispatch(signUpUser({name, password, role}))
    // navigate('/')
  }
  

  return (
    <div>
        <h2>Register</h2>
        <label htmlFor=''>Username</label><br/>
        <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
        {err && name.length<=0?
        <label>Username can't be empty!</label>:''}<br/><br/>
        <label htmlFor=''>Password</label><br/>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        {err&& password.length<=0? <label>Password can't be empty!</label>:''} <br/><br/>
        <label htmlFor=''>User</label>
        <input type='radio' name='role' value='user' onChange={(e) => setRole(e.target.value)}/><br/>
        <label htmlFor=''>Admin</label>
        <input type='radio' name='role' value='admin' onChange={(e) => setRole(e.target.value)}/><br/><br/>
        <button onClick={registerHandle}>Register</button>
    </div>
  )
}

export default Register