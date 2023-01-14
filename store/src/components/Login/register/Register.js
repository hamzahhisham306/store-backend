import React from 'react'
import login from '../../../assets/rocket.png';
import axios from 'axios';
function Register() {
const handlerSubmit=async(e)=>{
  e.preventDefault();
 const user={
  username:e.target.name.value,
  email:e.target.email.value,
  password:e.target.password.value
 };
 await axios.post('http://localhost:4000/user',user).then((res)=>{
  console.log(res.data);
 }).catch((e)=>console.log(e|e.message));
 e.target.reset();
}
  return (
    <div className='App'>
    <div className='login'>
    <form onSubmit={handlerSubmit}>
      <h1>Sign Up</h1>
      <label>Name:</label><br/>
      <input type='text' required id='name'/><br/>
      <label>Email:</label><br/>
      <input type='email' required id='email'/><br/>
      <label>Password</label><br/>
      <input type='password' required id='password'/><br/>
      <button type='submit'>LOGIN</button>
      <button type='reset' className='reset' >Reset</button>
    </form>
    <img src={login} alt='img'/>
 </div>
 </div>
    )
}

export default Register