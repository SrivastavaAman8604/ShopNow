import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container sign">
  <div className="card1">
    <div className="card_title">
      <h1>Welcome Back</h1>
      
    </div>
    <div className="form">
      <form action="/register" method="post">
        <input type="email" name="email" placeholder="Email" id="email" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        <button className="mb-3">Login</button>
        
      </form>
    </div>
    <span>
        Don't Have a account <Link to={'/Signin'}>Sign In</Link>
      </span>
  </div>
</div>
  )
}

export default Login
