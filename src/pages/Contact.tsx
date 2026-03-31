import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import '../pages/About.css';

export const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const phone = "919553244660";
    const email = "kadiyamplants.support@gmail.com";
    const mapsLink = "https://www.google.com/maps?q=Kadiyam,East%20Godavari,Andhra%20Pradesh";

    const whatsappMessage = "Hello I am interested in your plants";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="page-wrapper">

            {/* HERO */}
            <div className="page-hero contact-hero">
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <h1>Contact Us</h1>
                    <p>Let’s grow something beautiful together 🌱</p>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <section className="contact-section">
                <div className="contact-container">

                    {/* LEFT - INFO */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>
                            Have questions about plants, bulk orders, or services?
                            Reach out to our team anytime.
                        </p>

                        {/* LOCATION */}
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="card-link">
                            <div className="info-card">
                                <FaMapMarkerAlt />
                                <div>
                                    <h4>Location</h4>
                                    <p>Kadiyam, East Godavari, Andhra Pradesh</p>
                                </div>
                            </div>
                        </a>

                        {/* CALL */}
                        <a href={`tel:+${phone}`} className="card-link">
                            <div className="info-card">
                                <FaPhoneAlt />
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 9553244660</p>
                                </div>
                            </div>
                        </a>

                        {/* EMAIL */}
                        <a href={`mailto:${email}`} className="card-link">
                            <div className="info-card">
                                <FaEnvelope />
                                <div>
                                    <h4>Email</h4>
                                    <p>{email}</p>
                                </div>
                            </div>
                        </a>

                        {/* WHATSAPP */}
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="card-link">
                            <div className="info-card whatsapp">
                                <FaWhatsapp />
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>Chat with us</p>
                                </div>
                            </div>
                        </a>

                    </div>

                    {/* RIGHT - MAP */}
                    <div className="contact-map">
                        <iframe
                            title="Kadiyam Map"
                            src="https://www.google.com/maps?q=Kadiyam,East%20Godavari,Andhra%20Pradesh&output=embed"
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </section>

        </div>
    );
};