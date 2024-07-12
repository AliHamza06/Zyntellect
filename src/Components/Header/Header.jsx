import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/images/logo.png';
import { Button, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

export default function Header() {
    const navigate = useNavigate();
    const [isNavbarVisible, setNavbarVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef(null);
    const location = useLocation();

    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setNavbarVisible(false);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        if (location.pathname === '/') {
            document.addEventListener('scroll', handleScroll);
        } else {
            document.removeEventListener('scroll', handleScroll);
        }
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    useEffect(() => {
        if (isNavbarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavbarVisible]);

    useEffect(() => {
        setNavbarVisible(false); // Close navbar when navigating to a new page
    }, [location.pathname]);

    return (
        <header className={`navbar_main ${scrolled ? 'scrolled' : ''} ${location.pathname !== '/' ? 'otherStyle' : ''}`}>
            <div className="manageWidth">
                <nav className="navbar navbar-expand-xl mainHeader" ref={navbarRef}>
                    <div className="container-fluid px-sm-3 px-0">
                        <a className="navbar-brand" onClick={() => { navigate('/') }}>
                            <img src={Logo} alt="" className='headerLogo' />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={isNavbarVisible}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                                <MenuSharpIcon />
                            </span>
                        </button>
                        <div
                            className={`collapse navbar-collapse ${isNavbarVisible ? 'visible' : ''}`}
                            id="navbarSupportedContent"
                        >
                            <a className="navbar-brand" href="#">
                                <img src={Logo} alt="" className='headerLogo headerLogo2' />
                            </a>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 listItem">
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => { navigate('/') }}>
                                        <Button className={location.pathname === '/' ? 'activeLink' : ''}>Home</Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => { navigate('/services') }}>
                                        <Button className={location.pathname === '/services' ? 'activeLink' : ''}>Services</Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => { navigate('/industries') }}>
                                        <Button className={location.pathname === '/industries' ? 'activeLink' : 'colorWhite'}>Industries</Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <Button className='colorWhite'>Insights</Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <Button className='colorWhite'>Work</Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <Button className='colorWhite'>About</Button>
                                    </Link>
                                </li>
                            </ul>
                            <div className='contactButton'>
                                <Button className='contactBtn' variant='contained'>Contact us</Button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`overlay ${isNavbarVisible ? 'active' : ''}`} onClick={toggleNavbar}></div>
            </div>
        </header>
    );
}
