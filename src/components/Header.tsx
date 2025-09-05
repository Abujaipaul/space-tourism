
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoSvg from '../assets/shared/logo.svg';

import iconHamburgerUrl from '../assets/shared/icon-hamburger.svg';
import iconCloseUrl from '../assets/shared/icon-close.svg';


const Header: React.FC = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(prev => !prev);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/" onClick={closeNav}>
          <img src={logoSvg} alt="Space Tourism Logo" />
        </Link>
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={navVisible ? 'true' : 'false'}
        onClick={toggleNav}
      >
        
        {navVisible ? (
          <img src={iconCloseUrl} alt="Close Menu Icon" />
        ) : (
          <img src={iconHamburgerUrl} alt="Open Menu Icon" />
        )}
        <span className="sr-only">{navVisible ? 'Close Menu' : 'Open Menu'}</span>
      </button>

      <nav className="main-nav" id="primary-navigation" data-visible={navVisible ? 'true' : 'false'}>
        <ul className="primary-navigation underline-indicators flex">
          <li>
            <NavLink to="/" onClick={closeNav} className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" onClick={closeNav} className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" onClick={closeNav} className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" onClick={closeNav} className={({ isActive }) => isActive ? 'active ff-sans-cond letter-spacing-2' : 'ff-sans-cond letter-spacing-2'}>
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
