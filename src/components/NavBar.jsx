import {useRef} from 'react';
import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-close.svg";
import Cart from './Cart';
import Avatar from './Avatar';

const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <>
            <nav ref={navRef}>
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

                <ul role="list">
                    <li>
                        <Cart />
                    </li>
                    <li>
                        <Avatar />
                    </li>
                </ul>

                <button onClick={showNavbar}>
                    <img src={menuClose} alt="icon for closing menu"/>
                </button>
            </nav>

            <button onClick={showNavbar}>
                <img src={menuOpen} alt="icon for opening menu" />
            </button>
        </>
    )
}

export default NavBar;