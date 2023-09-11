// Navbar.js 
import logo from '../assets/logo-roost.png'
import burger from '../assets/hamburger.svg'

import "../styles/navbar.css"
import { useState } from 'react'

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
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/lodges">Lodges</a>
                    </li>
                    <li>
                        <a href="/rates">Rates</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar