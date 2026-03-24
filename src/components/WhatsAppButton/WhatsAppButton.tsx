import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export const WhatsAppButton: React.FC = () => {
    const phoneNumber = "919553244660";
    const message = encodeURIComponent("Hello Kadiyam Nursery, I would like to inquire about your plants.");
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};
