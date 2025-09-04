// src/components/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoSvg from '../assets/shared/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src={logoSvg} alt="Space Tourism Logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;