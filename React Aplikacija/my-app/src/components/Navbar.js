import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
const[click, setClick] =useState(false);
const[button,setButton]=useState(true);
const handleClick = () => setClick(!click);
const closeMobileMenu = ()=> setClick(false);

const showButton = () => {
    if (window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
};
window.addEventListener('resize', showButton);
    return (
     <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                SlavoniaLand <i className="fas fa-bacon"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Naslovnica
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/usluge' className='nav-links' onClick={closeMobileMenu}>
                        Usluge
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/događaji' className='nav-links' onClick={closeMobileMenu}>
                        Događaji
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/o nama' className='nav-links' onClick={closeMobileMenu}>
                        O Nama
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/prijava' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Prijava
                    </Link>
                </li>
             </ul>
             {button && <Button buttonStyle='btn--outline'>Prijava</Button>}
        </div>
    </nav>
     </>
    )
}

export default Navbar
