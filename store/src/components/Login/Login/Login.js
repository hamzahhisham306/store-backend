import React, { useEffect } from 'react'
import './Login.css'
import login from '../../../assets/rocket.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base24 from 'base-64';
import cookies from 'react-cookies';
import { setLogin, stateAuth } from '../../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import App from '../../../App';
function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookies.load('token') !== '') {
      dispatch(setLogin())
    }
  }, []);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username: e.target.username.value,
        password: e.target.password.value
      };
      const encode = base24.encode(`${user.username}:${user.password}`);

      const res = await axios.post("http://localhost:4000/login", {}, {
        headers: {
          authorization: `Basic ${encode}`,
        }
      }).then((res) => {
        dispatch(setLogin());
        console.log(res.data)
        cookies.save('username', res.data.username);
        cookies.save('token', res.data.token);
        cookies.save('userId', res.data.id);
      }).catch((err) => console.log(err | err.message));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const state = useSelector(stateAuth);
  return (
    <>
      {!state.isLogin &&
        <div className='App'>
          <div className='login'>
            <form onSubmit={handlerSubmit}>
              <h1>Login</h1>
              <label>username:</label><br />
              <input type='text' required id='username' /><br />
              <label>Password</label><br />
              <input type='password' required id='password' /><br />
              <p>if you do not have account <Link to='/signup'>Sign Up!</Link></p>
              <button type='submit'>LOGIN</button>
              <button type='reset' className='reset'>Reset</button>
            </form>
            <img src={login} alt='img' />
          </div>
        </div>
      }
      {state.isLogin && <App />}
    </>

  )
}

export default Login
