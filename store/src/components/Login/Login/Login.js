import React from 'react'
import './Login.css'
import login from '../../../assets/rocket.png';
function Login() {
  return (
    <div className='login'>
       <form>
         <h1>Login</h1>
         <label>Email:</label><br/>
         <input type='email' required/><br/>
         <label>Password</label><br/>
         <input type='password' required/><br/>
         <button type='submit'>LOGIN</button>
         <button type='submit' className='reset'>Reset</button>
       </form>
       <img src={login} alt='img'/>
    </div>
  )
}

export default Login
