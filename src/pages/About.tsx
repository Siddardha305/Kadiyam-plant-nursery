import React, { useEffect } from 'react';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { OurStaff } from '../components/OurStaff/OurStaff';
import './About.css';

export const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            {/* Dedicated Hero for About Page */}
            <div className="page-hero about-hero">
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <h1>About Kadiyam Nursery</h1>
                    <p>India's Largest Plant Hub since decades.</p>
                </div>
            </div>

            <div className="about-page-content">
                <AboutUs />
                
                {/* Additional Vision/Mission styling */}
                <div className="mission-vision-grid">
                    <div className="mv-card">
                        <h3>Our Mission</h3>
                        <p>To provide high-quality, sustainable plants to every household in India, ensuring a greener and healthier planet for everyone.</p>
                    </div>
                    <div className="mv-card">
                        <h3>Our Vision</h3>
                        <p>To become the leading national hub for botanical diversity, setting the standard for nursery farming and landscape beautification.</p>
                    </div>
                </div>

                <OurStaff />
            </div>
        </div>
    );
};
