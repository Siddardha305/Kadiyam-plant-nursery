import React from 'react';
import { Button } from '../Button/Button';
import { GiMonsteraLeaf, GiTreeGrowth, GiFlowerPot, GiFruitBowl, GiGrass, GiMedicinePills } from 'react-icons/gi';
import './PlantCategories.css';

const categories = [
    { id: 1, name: 'Indoor Plants', icon: <GiMonsteraLeaf /> },
    { id: 2, name: 'Outdoor Plants', icon: <GiTreeGrowth /> },
    { id: 3, name: 'Flowering Plants', icon: <GiFlowerPot /> },
    { id: 4, name: 'Fruit Plants', icon: <GiFruitBowl /> },
    { id: 5, name: 'Landscaping Plants', icon: <GiGrass /> },
    { id: 6, name: 'Medicinal & Herbal', icon: <GiMedicinePills /> }
];

export const PlantCategories: React.FC = () => {
    return (
        <section className="plant-categories">
            <h2 className="section-title">Explore Our Plant Categories</h2>
            <div className="categories-grid">
                {categories.map((cat) => (
                    <div key={cat.id} className="category-card">
                        <div className="category-icon">{cat.icon}</div>
                        <h3 className="category-name">{cat.name}</h3>
                    </div>
                ))}
            </div>
            <div className="categories-cta">
                <Button variant="green">
                    View All Plants →
                </Button>
            </div>
        </section>
    );
};
