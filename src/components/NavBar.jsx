import {useRef} from 'react';
import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import Cart from './Cart';
import Avatar from './Avatar';

const NavBar = () => {
    const navRef = useRef();

    const handleShowNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
      <>
        <div className="logo" aria-label="Company Logo">
          <button
            onClick={handleShowNavbar}
            aria-label="Menu button"
            aria-expanded="false"
          >
            <img src={menuOpen} alt="icon for opening menu" />
          </button>


          <img src={logo} alt="Company Logo" />
        </div>
        <nav ref={navRef}>
          <ul role="list" className="desktop-visible">
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

          <ul role="list">
            <li>
              <Cart />
            </li>
            <li>
              <Avatar />
            </li>
          </ul>
        </nav>

        <nav className="mobile-visible">
          <button onClick={handleShowNavbar}>
            <img src={menuClose} alt="icon for closing menu" />
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
      </>
    );
}

export default NavBar;