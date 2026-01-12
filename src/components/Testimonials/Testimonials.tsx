import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        quote: "Plants arrived fresh and healthy. Very happy with the quality and service!",
        name: "Customer from Hyderabad",
        rating: 5
    },
    {
        id: 2,
        quote: "Excellent sourcing for our landscaping project. Top quality bulk supply.",
        name: "Landscape Architect, Bangalore",
        rating: 5
    },
    {
        id: 3,
        quote: "The variety of fruit plants they have is amazing. Highly recommended.",
        name: "Farmer from Vijayawada",
        rating: 5
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((t) => (
                    <div key={t.id} className="testimonial-card">
                        <div className="stars">
                            {[...Array(t.rating)].map((_, i) => (
                                <FaStar key={i} className="star-icon" />
                            ))}
                        </div>
                        <p className="testimonial-quote">“{t.quote}”</p>
                        <p className="testimonial-author">— {t.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
