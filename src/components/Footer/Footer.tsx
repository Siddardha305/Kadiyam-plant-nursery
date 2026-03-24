import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-title">Kadiyam Plant Nursery</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/varieties">Our Nursery</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/varieties">Plants</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><a href="https://wa.me/919553244660" target="_blank" rel="noreferrer">Bulk Orders</a></li>
                        <li><Link to="/contact">Contact</Link></li>
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
                        <a href="https://www.facebook.com/share/14Zt5qkM9xa/" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
                        <a href="https://www.instagram.com/challa_dp?utm_source=qr&igsh=Y2ZhcG85aXpucDcw" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://youtube.com/@challadurgaprasad-ps7pc?si=4m6UkXMPv64gBOG4" target="_blank" rel="noreferrer" className="social-icon"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kadiyam Plant Nursery. All rights reserved.</p>
            </div>
        </footer>
    );
};
