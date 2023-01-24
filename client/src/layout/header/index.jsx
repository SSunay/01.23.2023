import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'
const Header = () => {
  return (
    <div className='navBar'>
        <div className='logo'><NavLink to={'/'}>NOTARY</NavLink></div>
      <div className='navLinks'>
      <ul><li><NavLink to={'/'}>Home</NavLink></li></ul>
        <ul><li><NavLink to={'/'}>Practice Areas</NavLink></li></ul>
        <ul><li><NavLink to={'/'}>Testimonials</NavLink></li></ul>
        <ul><li><NavLink to={'/'}>About</NavLink></li></ul>
        <ul><li><NavLink to={'/'}>Contact</NavLink></li></ul>
        <ul><li><NavLink to={'/add-pages'}>Add</NavLink></li></ul>
      </div>
    </div>
  )
}

export default Header