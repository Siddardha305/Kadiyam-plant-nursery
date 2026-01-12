import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './Navbar.css';
import logo from '../../assets/react.svg'; // Using placeholder for now as requested

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    interface NavLink {
        name: string;
        href?: string;
        children?: NavLink[];
    }

    const navLinks: NavLink[] = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        {
            name: 'Varieties',
            children: [
                { name: 'Avenue Plants', href: '#avenue-plants' },
                { name: 'Coconut Varieties', href: '#coconut-varieties' },
                { name: 'Creepers', href: '#creepers' },
                { name: 'Flowering Plants', href: '#flowering-plants' },
                { name: 'Indoor & Outdoor Plants', href: '#indoor-outdoor' },
                { name: 'Fruit Plants', href: '#fruit-plants' },
                { name: 'Palms', href: '#palms' },
            ]
        },
        {
            name: 'Gallery',
            children: [
                { name: 'Photos', href: '#photos' },
                { name: 'Videos', href: '#videos' },
            ]
        },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <span className="logo-text">Kadiyam Nursery</span>
                </div>

                <div className={`navbar-menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className={`nav-item ${link.children ? 'dropdown' : ''}`}>
                            {link.children ? (
                                <>
                                    <span className="nav-link dropdown-toggle">{link.name}</span>
                                    <ul className="dropdown-menu">
                                        {link.children.map((child) => (
                                            <li key={child.name} className="dropdown-item">
                                                <a href={child.href} className="nav-link" onClick={() => setIsOpen(false)}>
                                                    {child.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <a href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                    <li className="nav-item-btn">
                        <Button variant="green" onClick={() => console.log('Contact Us clicked')}>
                            Contact Us
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
