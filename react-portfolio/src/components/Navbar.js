import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return <div className='header'>
        <Link to='/'>
            <h1>My Portfolio</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/projects'>Project</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='dropdown' onClick={handleClick}>
            {click 
            ? (<FaTimes size={20} style={{color: '#90ee90'}} />) 
            : (<FaBars size={20} style={{color: '#90ee90'}} />)}
        </div>
    </div>
};

export default Navbar