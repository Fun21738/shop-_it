import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='logins'>
        <p>welcome back to our website</p>
         <input type="text" placeholder='Username' />
        <input type="email" placeholder='Joe@gmail.com' />
        <input type="password" placeholder='password'/>
        <button><Link to="/products">login</Link></button>
    </div>
  )
}