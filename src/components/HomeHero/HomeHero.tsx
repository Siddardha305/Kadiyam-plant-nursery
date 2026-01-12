import React from 'react';
import { Button } from '../Button/Button';
import { FaSeedling, FaBoxOpen, FaLeaf } from 'react-icons/fa6';
import './HomeHero.css';

const CustomIcon = () => <FaLeaf style={{ marginLeft: '8px', verticalAlign: 'middle' }} />;

export const HomeHero: React.FC = () => {
    return (
        <section className="home-hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Bringing Nature to Your Home <CustomIcon />
                </h1>
                <h2 className="hero-subheading">
                    Buy Healthy, High-Quality Plants Directly from Kadiyam – India’s Largest Plant Hub
                </h2>
                <p className="hero-description">
                    We grow and deliver a wide variety of indoor plants, outdoor plants, flowering plants,
                    fruit plants, and landscaping plants with care and quality.
                </p>
                <div className="hero-buttons">
                    <Button variant="green" className="hero-btn-gap">
                        Explore Plants <span className="btn-icon"><FaSeedling /></span>
                    </Button>
                    <Button variant="yellow-outline" className="hero-btn-gap">
                        Bulk Order Inquiry <span className="btn-icon"><FaBoxOpen /></span>
                    </Button>
                </div>
            </div>
        </section>
    );
};
