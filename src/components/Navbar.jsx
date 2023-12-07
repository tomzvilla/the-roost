// Navbar.js 
import logo from '../assets/outfittersLogo.png'
import burger from '../assets/hamburger.svg'

import "../styles/navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const { t } = useTranslation()

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
                        <li>{t('navigation.home')}</li>
                    </Link>
                    <Link to={'/lodges'}>
                        <li>{t('navigation.lodges')}</li>
                    </Link>
                    <Link to={'/rates'}>
                        <li>{t('navigation.rates')}</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>{t('navigation.contact')}</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar