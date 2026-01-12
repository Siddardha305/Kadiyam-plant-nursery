import React from 'react';
import './Gallery.css';

const galleryImages = [
    "https://images.unsplash.com/photo-1545241047-9ac6966a8e2d?q=80&w=2670&auto=format&fit=crop", // Nursery fields
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop", // Plants
    "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=2670&auto=format&fit=crop", // Packing
    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c2e?q=80&w=2080&auto=format&fit=crop"  // Happy customer / Home
];

export const Gallery: React.FC = () => {
    return (
        <section className="gallery-section">
            <h2 className="section-title">Our Nursery in Kadiyam</h2>
            <div className="gallery-grid">
                {galleryImages.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery Image ${index + 1}`} className="gallery-img" />
                    </div>
                ))}
            </div>
        </section>
    );
};
