import React from 'react';
import { Button } from '../Button/Button';
import './AboutUs.css';

export const AboutUs: React.FC = () => {
    return (
        <section className="about-us">
            <h2 className="section-title">About Kadiyam Plant Nursery</h2>
            <div className="about-content">
                <p className="about-text">
                    Kadiyam is known as the Plant Capital of India, with decades of experience in plant cultivation.
                    At Kadiyam Plant Nursery, we are committed to delivering premium quality plants grown with natural methods and expert care.
                </p>
                <Button variant="green">
                    Read More →
                </Button>
            </div>
        </section>
    );
};
