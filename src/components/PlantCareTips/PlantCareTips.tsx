import React from 'react';
import { Button } from '../Button/Button';
import './PlantCareTips.css';

const blogs = [
    {
        id: 1,
        title: "How to Take Care of Indoor Plants",
        excerpt: "Essential tips to keep your indoor green buddies happy.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Best Plants for Indian Climate",
        excerpt: "Top picks for thriving plants in Indian weather conditions.",
        image: "https://images.unsplash.com/photo-1598555849887-73d80918939c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Watering Tips for Beginners",
        excerpt: "Avoid overwatering or underwatering with these simple guides.",
        image: "https://images.unsplash.com/photo-1525925433297-c836d226079d?q=80&w=2356&auto=format&fit=crop"
    }
];

export const PlantCareTips: React.FC = () => {
    return (
        <section className="plant-care-tips">
            <h2 className="section-title">Plant Care Tips & Guides</h2>
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-image-container">
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-excerpt">{blog.excerpt}</p>
                            <Button variant="green" className="read-more-btn">Read More</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="blog-cta">
                <Button variant="yellow-outline">Read Our Blog →</Button>
            </div>
        </section>
    );
};
