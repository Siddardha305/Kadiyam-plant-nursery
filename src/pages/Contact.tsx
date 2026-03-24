import React, { useEffect } from 'react';
import { Button } from '../components/Button/Button';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import '../pages/About.css'; // Re-use page-hero styles

export const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We will get back to you soon.");
    };

    return (
        <div className="page-wrapper">
            <div className="page-hero contact-hero">
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <h1>Contact Us</h1>
                    <p>Get in touch with Kadiyam’s finest plant experts.</p>
                </div>
            </div>

            <div className="contact-page-container">
                <div className="contact-grid">
                    {/* Information Side */}
                    <div className="contact-info-side">
                        <h2>We'd Love to Hear From You</h2>
                        <p>Whether you have a question about plants, services, or bulk pricing, our team is ready to answer all your questions.</p>

                        <div className="info-item">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div>
                                <strong>Our Location</strong>
                                <p>Kadiyam, East Godavari, Andhra Pradesh, India</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaPhoneAlt /></div>
                            <div>
                                <strong>Phone Number</strong>
                                <p>+91 9553244660</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div>
                                <strong>Email Address</strong>
                                <p>support@kadiyamplantnursery.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon whatsapp-accent"><FaWhatsapp /></div>
                            <div>
                                <strong>WhatsApp Bulk Orders</strong>
                                <p>
                                    <a href="https://wa.me/919553244660" target="_blank" rel="noreferrer" className="text-link">
                                        Chat with us directly
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="contact-form-side">
                        <h3>Send Us A Message</h3>
                        <form className="contact-form" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+91 XXXXXXXXXX" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows={5} placeholder="Tell us what you need..." required></textarea>
                            </div>

                            <Button variant="green" className="submit-btn" type="submit">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
