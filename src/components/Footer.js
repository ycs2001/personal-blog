import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import GitHub icon

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2024 My Blog. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" /> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" /> Instagram
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" /> GitHub
                    </a>
                </div>
                <div className="footer-contact">
                    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                    <p>Phone: +123-456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
