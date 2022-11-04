import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'
import logo from '../../assets/logoweb.svg'

const Header = () => {
  return (
    <header className='header'>
        <div className='header__title'>
          <Link to='/'><img className='header__logo' src={logo} alt="Logo" /></Link>
        </div>
        <nav className='header__nav'>
          <div className='header__item'><NavLink className='header__link' to='/login'><i className="fa-regular fa-user"></i></NavLink></div>
          <div className='header__item'><NavLink className='header__link' to='/purchases'><i className="fa-solid fa-bag-shopping"></i></NavLink></div>
          <div className='header__item'><NavLink className='header__link' to='/cart'><i className="fa-brands fa-opencart"></i></NavLink></div>
        </nav>
    </header>
  )
}

export default Header