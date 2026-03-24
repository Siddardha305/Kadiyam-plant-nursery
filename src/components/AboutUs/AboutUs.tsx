import React from 'react';
import { Button } from '../Button/Button';
import './AboutUs.css';

export const AboutUs: React.FC = () => {
    return (
        <section className="about-us">
            <h2 className="section-title">About Kadiyam Plant Nursery</h2>
            <div className="about-content">
                <p className="about-text">
                    Located in Kadiyam, East Godavari, Andhra Pradesh, Kadiyam Nursery is a wholesale supplier of flower plants, fruit plants, ornamental plants, avenue plants, palms, creepers, bonsai, and indoor-outdoor plants.
                </p>
                <Button variant="green">
                    Read More →
                </Button>
            </div>
        </section>
    );
};
