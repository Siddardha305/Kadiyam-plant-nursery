import React from 'react';
import { FaSeedling, FaTruck, FaHeart, FaUserNurse, FaTags } from 'react-icons/fa6';
import './WhyChooseUs.css';

const benefits = [
    {
        id: 1,
        icon: <FaSeedling />,
        title: "Direct from Kadiyam Nurseries",
        description: "Authentic plants sourced directly from the heart of India's plant hub."
    },
    {
        id: 2,
        icon: <FaTruck />,
        title: "Safe & Fast Delivery",
        description: "Secure packaging and rapid shipping across India."
    },
    {
        id: 3,
        icon: <FaHeart />,
        title: "Healthy & Well-Maintained Plants",
        description: "Grown with care, ensuring you receive only the healthiest plants."
    },
    {
        id: 4,
        icon: <FaTags />,
        title: "Affordable Prices",
        description: "Best market rates without compromising on quality."
    },
    {
        id: 5,
        icon: <FaUserNurse />,
        title: "Expert Plant Care Support",
        description: "Professional guidance for your gardening journey."
    }
];

export const WhyChooseUs: React.FC = () => {
    return (
        <section className="why-choose-us">
            <h2 className="section-title">Why Choose Kadiyam Plant Nursery?</h2>
            <div className="benefits-grid">
                {benefits.map((benefit) => (
                    <div key={benefit.id} className="benefit-card">
                        <div className="benefit-icon">{benefit.icon}</div>
                        <h3 className="benefit-title">{benefit.title}</h3>
                        <p className="benefit-description">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
