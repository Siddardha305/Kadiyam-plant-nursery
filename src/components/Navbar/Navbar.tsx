import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';
import logo from '../../assets/react.svg';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    interface NavLink {
        name: string;
        href?: string;
        children?: NavLink[];
    }

    const navLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        {
            name: 'Varieties',
            href: '/varieties',
            children: [
                { name: 'Avenue Plants', href: '/varieties#avenue-plants' },
                { name: 'Flowering Plants', href: '/varieties#flowering-plants' },
                { name: 'Fruit Plants', href: '/varieties#fruit-plants' },
                { name: 'Creepers', href: '/varieties#creepers' },
                { name: 'Indoor & Outdoor', href: '/varieties#indoor-outdoor' },
                { name: 'Palms', href: '/varieties#palms' },
                { name: 'Bonsai', href: '/varieties#bonsai' },
                { name: 'Coconut', href: '/varieties#coconut-varieties' },
            ]
        },
        { name: 'Gallery', href: '/gallery' },
    ];

    const handleLinkClick = (href: string | undefined) => {
        setIsOpen(false);
        if (href?.includes('#')) {
            const [path, hash] = href.split('#');
            navigate(path);
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <span className="logo-text">Kadiyam Nursery</span>
                </Link>

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
                                    <Link to={link.href || '#'} className="nav-link dropdown-toggle" onClick={() => setIsOpen(false)}>
                                        {link.name}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        {link.children.map((child) => (
                                            <li key={child.name} className="dropdown-item">
                                                {child.href?.includes('#') ? (
                                                    <a href={child.href} className="nav-link" onClick={(e) => {
                                                        e.preventDefault();
                                                        handleLinkClick(child.href);
                                                    }}>
                                                        {child.name}
                                                    </a>
                                                ) : (
                                                    <Link to={child.href || '#'} className="nav-link" onClick={() => setIsOpen(false)}>
                                                        {child.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link to={link.href || '#'} className="nav-link" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li className="nav-item-btn">
                        <Button variant="green" onClick={() => navigate('/contact')}>
                            Contact Us
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
