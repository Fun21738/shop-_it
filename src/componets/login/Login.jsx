import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
export default function Login() {
  return (
    <div className='logins'>
         <input type="text" placeholder='Username' />
        <input type="email" placeholder='Joe@gmail.com' />
        <input type="password" placeholder='password'/>
        <button  
            disabled={!Login}
            className="add-btn2"
            >
              <Link to="/products">
                login</Link></button>
    </div>
  )
}
