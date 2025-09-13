import React from 'react'
import "./Header.css"
import Logo from './Logo';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='header'>
      <Logo />
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rq">React Query</NavLink>
          </li>
        </ul>
      </div>
      </header>
    </>
  )
}

export default Header;