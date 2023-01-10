import React from 'react'
import login from '../../../assets/rocket.png';

function Register() {
  return (
    <div className='login'>
    <form>
      <h1>Sign Up</h1>
      <label>Name:</label><br/>
      <input type='text' required/><br/>
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

export default Register