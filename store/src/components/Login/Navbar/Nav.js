import React from 'react'
import './Nav.css';
import boot from '../../../assets/boot.jpg';
import { useSelector } from 'react-redux';
import {statecart} from '../../../store/cart';
import {setLogout} from '../../../store/auth';
import { useDispatch } from 'react-redux';
import {setShow } from '../../../store/auth';
import cookies from 'react-cookies';

function Nav() {
  const State=useSelector(statecart);
  const dispatch=useDispatch();
  const handlerLogut=()=>{
    cookies.remove('username');
    cookies.remove('token')
    dispatch(setLogout())
  }
  return (
    <div className='nav section__padding'>
      <ul>
        <li>Home</li>
        <li>Categroies</li>
        <li onClick={()=>dispatch(setShow())}>About</li>
        <li className='Cart' onClick={()=>dispatch(setShow())}>Cart <span>{State.start}</span></li>
        <li onClick={()=>handlerLogut()}>Log out</li>
      </ul>
      <img src={boot} alt='boot' width='100' height='100' />
    </div>
  )
}

export default Nav