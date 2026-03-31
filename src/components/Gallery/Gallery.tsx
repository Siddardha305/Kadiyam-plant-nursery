import React from 'react';
import './Gallery.css';

const galleryImages = [
    "https://content.jdmagicbox.com/comp/gajraula/u9/9999p5922.5922.181013071007.g6u9/catalogue/urban-green-nursery-gajraula-gajraula-plant-nursery-product-manufacturers-wrwfk7n7bl.jpg", // Nursery fields
    "https://content.jdmagicbox.com/comp/gajraula/u9/9999p5922.5922.181013071007.g6u9/catalogue/urban-green-nursery-gajraula-gajraula-plant-nursery-product-manufacturers-wrwfk7n7bl.jpg", // Plants
    "https://content.jdmagicbox.com/comp/gajraula/u9/9999p5922.5922.181013071007.g6u9/catalogue/urban-green-nursery-gajraula-gajraula-plant-nursery-product-manufacturers-wrwfk7n7bl.jpg", // Packing
    "https://content.jdmagicbox.com/comp/gajraula/u9/9999p5922.5922.181013071007.g6u9/catalogue/urban-green-nursery-gajraula-gajraula-plant-nursery-product-manufacturers-wrwfk7n7bl.jpg"  // Happy customer / Home
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
