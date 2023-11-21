// Navbar.js 
import logo from '../assets/logo-roost.png'
import burger from '../assets/hamburger.svg'

import "../styles/navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                <img className='logo' src={logo} alt="the roost logo" />
            </a>
            <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                <img src={burger} alt="Burger menu" />
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <Link to={'/home'}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/lodges'}>
                        <li>Lodges</li>
                    </Link>
                    <Link to={'/rates'}>
                        <li>Rates</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar