import React, { useEffect } from 'react';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { OurStaff } from '../components/OurStaff/OurStaff';
import './About.css';

export const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple fade-in animation
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => {
            el.classList.add('show');
        });

    }, []);

    return (
        <div className="page-wrapper">
            {/* Dedicated Hero for About Page */}
            <div className="page-hero about-hero">
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
    <h1>About Kadiyam Nursery</h1>
    <p>India's Largest Plant Hub since decades.</p>

    {/* ⭐ Simple Add */}
    <a 
        href="https://www.thehindu.com/news/national/andhra-pradesh/kadiyam-nurseries-target-global-market/article5156691.ece" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hero-btn"
    >
        Explore More ↓
    </a>

</div>
            </div>

            <div className="about-page-content">
                <AboutUs />

                {/* ⭐ NEW: Simple Stats Section */}
                <div className="stats-section fade-in">
                    <div className="stat-box">
                        <h2>10+</h2>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-box">
                        <h2>1K+</h2>
                        <p>Plants</p>
                    </div>
                    <div className="stat-box">
                        <h2>5K+</h2>
                        <p>Customers</p>
                    </div>
                    <div className="stat-box">
                        <h2>20+</h2>
                        <p>Staff</p>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="mission-vision-grid fade-in">
                    <div className="mv-card">
                        <h3>Our Mission</h3>
                        <p>
                            To provide high-quality, sustainable plants to every 
                            household in India, ensuring a greener and healthier 
                            planet for everyone.
                        </p>
                    </div>

                    <div className="mv-card">
                        <h3>Our Vision</h3>
                        <p>
                            To become the leading national hub for botanical 
                            diversity, setting the standard for nursery farming 
                            and landscape beautification.
                        </p>
                    </div>
                </div>

                <OurStaff />
            </div>
        </div>
    );
};