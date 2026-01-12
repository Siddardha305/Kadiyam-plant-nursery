import React from 'react';
import { Button } from '../Button/Button';
import { FaShoppingCart } from 'react-icons/fa';
import './FeaturedPlants.css';

const featuredPlants = [
    {
        id: 1,
        name: "Areca Palm",
        image: "https://images.unsplash.com/photo-1614594975525-e45890e2e126?q=80&w=2670&auto=format&fit=crop",
        price: "₹350"
    },
    {
        id: 2,
        name: "Money Plant",
        image: "https://images.unsplash.com/photo-1628126235206-5260537f7e9d?q=80&w=2670&auto=format&fit=crop",
        price: "₹150"
    },
    {
        id: 3,
        name: "Rose Plants",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=2593&auto=format&fit=crop",
        price: "₹250"
    },
    {
        id: 4,
        name: "Mango Saplings",
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=2535&auto=format&fit=crop",
        price: "₹180"
    },
    {
        id: 5,
        name: "Tulsi Plant",
        image: "https://images.unsplash.com/photo-1599423300746-b62507ac6279?q=80&w=2574&auto=format&fit=crop",
        price: "₹120"
    }
];

export const FeaturedPlants: React.FC = () => {
    return (
        <section className="featured-plants">
            <h2 className="section-title">Our Best Selling Plants</h2>
            <div className="featured-grid">
                {featuredPlants.map((plant) => (
                    <div key={plant.id} className="plant-card">
                        <div className="plant-image-container">
                            <img src={plant.image} alt={plant.name} className="plant-image" />
                        </div>
                        <div className="plant-info">
                            <h3 className="plant-name">{plant.name}</h3>
                            <p className="plant-price">{plant.price}</p>
                            <Button variant="green" className="buy-btn">
                                Buy Now <FaShoppingCart style={{ marginLeft: '8px' }} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
