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
        image: "https://img.freepik.com/premium-photo/rows-young-flowers-greenhouse-with-lot-indoor-plants-plantation_97694-10404.jpg"
    },
    {
        id: 3,
        title: "Watering Tips for Beginners",
        excerpt: "Avoid overwatering or underwatering with these simple guides.",
        image: "https://www.idyl.co.in/cdn/shop/articles/out-0_5ed6076c-2047-48a2-b94f-0e4ed1662d09.png?v=1729685617"
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
