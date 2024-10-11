import { useRef } from 'react';
import menuOpen from '../assets/icon-menu.svg';
import menuClose from '../assets/icon-close.svg';
import logo from '../assets/logo.svg';
import Cart from './Cart';
import Avatar from './Avatar';

const NavBar = () => {
  const navRef = useRef();

  const handleShowNavbar = () => {
    navRef.current.classList.toggle('opened');
  };

  return (
    <>
      <div className="logo">
        <button
          onClick={handleShowNavbar}
          aria-controls="primary-navigation"
          className="nav-btn nav-btn-open"
          aria-expanded="false"
        >
          <span className="visually-hidden">Menu</span>
          <img src={menuOpen} alt="" aria-hidden="true" />
        </button>

        <a href="#" aria-label="Company Logo">
          <img src={logo} alt="Company Logo" />
        </a>
      </div>

      <div className="nav-wrapper">
        <nav
          ref={navRef}
          className="primary-navigation"
          id="primary-navigation"
        >
          <button
            onClick={handleShowNavbar}
            aria-controls="primary-navigation"
            className="nav-btn nav-btn-close"
            aria-expanded="true"
          >
            <span className="visually-hidden">Menu</span>
            <img src={menuClose} alt="" aria-hidden="true" />
          </button>

          <ul role="list">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <menu>
          <Cart />
          <Avatar />
        </menu>
      </div>
    </>
  );
};

export default NavBar;
