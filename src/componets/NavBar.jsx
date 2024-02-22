import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Resume from '../assets/about/Marco_Garcia_resume.pdf';
import '../styles/NavBar.css';

function NavBar(){
    return(
        <nav className="horizontal-nav">
            <Link to='/'><img src={Logo} alt="Logo"/></Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link to='/about'>About Me</Link>
                </li>
                {/* Add a new list item for downloading resume with special class */}
                <li className="download-resume">
                    <a href={Resume} download>Download Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
