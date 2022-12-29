import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';
// import logo from '../../assets/logo.png'

const Menu = () => {
  return(
 <>
     <p><a href="#home">Home</a></p>
     <p><a href="#wgpt3">About</a></p>
     <p><a href="#possibility">Contact</a></p>
     <p><a href="#features">Blog</a></p>
     <p><a href="#blog">Library</a></p>
 </>
  )
}

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)

 return (
  <div className='gpt3__navbar'>
   <div className='gpt3__navbar-links'>

    <div className='gpt3__navbar-links_logo'>
     <h3>Joe-AI</h3>
    </div>
    <div className='gpt3__navbar-links_container'>
     <Menu />
    </div>
   </div>

   <div className='gpt3__navbar-sign'>
    <p>Sign in</p>
    <button type='button'>SignUp</button>
   </div>

   <div className='gpt3__navbar-menu'>
    {toggleMenu 
      ? <RiCloseLine color='#fff' size={27} onClick= {() => setToggleMenu(false)} />
      : <RiMenu3Line color='#fff' size={27} onClick= {() => setToggleMenu(true)} />
    }
    {toggleMenu && (
     <div className='gpt3__navbar-menu_container scale-up-center'>
      <div className='gpt3__navbar-menu_container-links'>
       <Menu />
        <div className='gpt3__navbar-menu_container-links-sign'>
         <p>Sign in</p>
         <button type='button'>SignUp</button>
        </div>
      </div>
     </div>
    )}
   </div>
  </div>
 )
}
export default Navbar;