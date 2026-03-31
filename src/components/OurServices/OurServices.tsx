import React from 'react';
import { FaHome, FaBuilding, FaTruck, FaLeaf, FaMapMarkedAlt, FaSeedling } from 'react-icons/fa';
import './OurServices.css';

const services = [
    {
        id: 1,
        icon: <FaSeedling />,
        title: "Home Gardening Support",
        description: "Expert advice and tools for your home garden."
    },
    {
        id: 2,
        icon: <FaBuilding />,
        title: "Landscaping for Villas & Apartments",
        description: "Professional landscaping services for residential complexes."
    },
    {
        id: 3,
        icon: <FaTruck />,
        title: "Bulk Plant Supply",
        description: "Large scale plant supply for nurseries and businesses."
    },
    {
        id: 4,
        icon: <FaHome />,
        title: "Nursery Consultation",
        description: "Guidance on setting up and maintaining nurseries."
    },
    {
        id: 5,
        icon: <FaMapMarkedAlt />,
        title: "Pan-India Plant Delivery",
        description: "Reliable plant delivery services across the country."
    },
    {
        id: 6,
        icon: <FaLeaf />,
        title: "Organic Plant Care",
        description: "Eco-friendly solutions for healthy plant growth."
    }
];

export const OurServices: React.FC = () => {
    return (
        <section className="our-services">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
