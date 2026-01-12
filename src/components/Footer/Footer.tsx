import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-title">Kadiyam Plant Nursery</h3>
                    <ul className="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#nursery">Our Nursery</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#plants">Plants</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#bulk">Bulk Orders</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Contact Info</h3>
                    <ul className="footer-contact">
                        <li><FaMapMarkerAlt className="footer-icon" /> Kadiyam, Andhra Pradesh</li>
                        <li><FaPhoneAlt className="footer-icon" /> +91 XXXXXXXXXX</li>
                        <li><FaEnvelope className="footer-icon" /> support@kadiyamplants.com</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Social Media</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><FaFacebook /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kadiyam Plant Nursery. All rights reserved.</p>
            </div>
        </footer>
    );
};
