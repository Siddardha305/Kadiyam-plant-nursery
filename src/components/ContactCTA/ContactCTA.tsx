import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="contact-cta">
            <h2 className="section-title">Need Help Choosing the Right Plants?</h2>
            <p className="contact-subtitle">
                Our experts are ready to guide you with the best plants for your home or business.
            </p>
            <div className="contact-buttons">
                <Button variant="green" className="cta-btn" onClick={() => globalThis.location.href = 'tel:+919553244660'}>
                    <FaPhoneAlt className="btn-icon-left" /> Call Now
                </Button>
                <Button variant="green" className="cta-btn whatsapp-btn" onClick={() => globalThis.open('https://wa.me/919553244660', '_blank')}>
                    <FaWhatsapp className="btn-icon-left" /> WhatsApp Us
                </Button>
                <Button variant="yellow-outline" className="cta-btn" onClick={() => navigate('/contact')}>
                    <FaEnvelope className="btn-icon-left" /> Contact Form
                </Button>
            </div>
        </section>
    );
};
