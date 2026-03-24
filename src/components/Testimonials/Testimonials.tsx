import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        quote: "It’s very nice and peaceful. The nursery has different kinds of plants and it’s very beautiful. The way of receiving the customers is also good.",
        name: "B.Deepika",
        rating: 5
    },
    {
        id: 2,
        quote: "Good nursery… we get almost every plant here. The experience is very good.",
        name: "Priya",
        rating: 5
    },
    {
        id: 3,
        quote: "Very well satisfied, everything is perfect and on‑time service. If you want any plants or garden designs, I personally prefer Kadiyam Nursery.",
        name: "Another client",
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
