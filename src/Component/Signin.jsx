import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
import {Signup} from './Login'

function Signin() {
  return (
   <div className="container sign">
  <div className="card1">
    <div className="card_title">
      <h1>Create Account</h1>
      
    </div>
    <div className="form">
      <form action="/register" method="post">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="UserName"
        />
        <input type="email" name="email" placeholder="Email" id="email" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        <button className='mb-3'>Sign Up</button>
        <span className='my-4'>
        Already have an account? <Link to={'/Login'}>Sign In</Link>
      </span>
      </form>
    </div>
  </div>
</div>

  )
}

export default Signin
