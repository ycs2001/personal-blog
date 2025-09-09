// Header.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileNavRef = useRef(null);

    // Toggle mobile menu open/close
    const handleToggle = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Close menu on Esc key press
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isMobileMenuOpen]);

    // Prevent background scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu when clicking outside the nav
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Trap focus within mobile navigation when open
    useEffect(() => {
        const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), \
        textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
        const mobileNav = mobileNavRef.current;
        const focusableElements = mobileNav ? mobileNav.querySelectorAll(focusableElementsString) : [];
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement && lastElement.focus();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement && firstElement.focus();
                    }
                }
            }
        };

        if (isMobileMenuOpen && mobileNav) {
            firstElement && firstElement.focus();
            mobileNav.addEventListener('keydown', handleTabKey);
        }

        return () => {
            if (mobileNav) {
                mobileNav.removeEventListener('keydown', handleTabKey);
            }
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className="header"
            style={{zIndex: isMobileMenuOpen ? 12000 : 10000}} // Dynamically change z-index
        >
            {/* Logo */}
            <div className="logo-container">
                <h1>Nebula M78</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav" aria-label="Main Navigation">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/home">Home</Link></li>
                    <li className="nav__item"><Link to="/about">About</Link></li>
                    <li className="nav__item"><Link to="/blog">Blog</Link></li>
                    <li className="nav__item"><Link to="/add-essay">Add Essay</Link></li>
                    <li className="nav__item"><Link to="/life">My Life</Link></li>
                </ul>
            </nav>

            {/* Mobile Menu Icon */}
            <button
                className="mobile-menu-icon"
                onClick={handleToggle}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
            >
                {isMobileMenuOpen ? <FaTimes/> : <FaBars/>}
            </button>

            {/* Mobile Navigation */}
            <nav
                className={`nav mobile-active ${isMobileMenuOpen ? 'open' : ''}`}
                id="mobile-navigation"
                aria-hidden={!isMobileMenuOpen}
                role="dialog"
                aria-modal="true"
                ref={mobileNavRef}
            >
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/home" onClick={closeMobileMenu}>Home</Link></li>
                    <li className="nav__item"><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                    <li className="nav__item"><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                    <li className="nav__item"><Link to="/add-essay" onClick={closeMobileMenu}>Add Essay</Link></li>
                    <li className="nav__item"><Link to="/life" onClick={closeMobileMenu}>My Life</Link></li>
                </ul>
            </nav>

            {/* Overlay to close the menu when clicking outside */}
            <div
                className={`overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={closeMobileMenu}
                aria-hidden="true"
                tabIndex="-1"
            ></div>
        </header>
    );
};

export default Header;
