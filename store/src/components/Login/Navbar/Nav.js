import React from 'react'
import './Nav.css';
import boot from '../../../assets/boot.jpg';
function Nav() {
  return (
    <div className='nav section__padding'>
       <ul>
        <li>Home</li>
        <li>Categroies</li>
        <li>About</li>
        <li>Contact</li>
        </ul> 
        <img src={boot} alt='boot' width='100' height='100'/>
    </div>
  )
}

export default Nav