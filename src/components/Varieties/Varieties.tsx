import React from 'react';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import type { Plant } from '../../data/plants';
import { 
    avenuePlants, floweringPlants, fruitPlants, 
    creepers, ornamentalPlants, palms, bonsai, 
    coconutVarieties, coleusPlants 
} from '../../data/plants';
import './Varieties.css';

const VarietiesSection = ({ id, title, plants }: { id: string, title: string, plants: Plant[] }) => {
    const navigate = useNavigate();
    
    return (
        <div id={id} className="variety-category">
            <h3 className="variety-title">{title}</h3>
            <div className="variety-grid">
                {plants.map((plant) => (
                    <div key={plant.id} className="plant-card">
                        <div className="plant-image-container">
                            <img src={plant.image} alt={plant.name} className="plant-image" />
                        </div>
                        <div className="plant-info">
                            <div className="plant-header">
                                <h4 className="plant-name">{plant.name}</h4>
                                {plant.teluguName && <span className="plant-telugu">({plant.teluguName})</span>}
                            </div>
                            <p className="plant-desc">{plant.description}</p>
                            {plant.care && <p className="plant-care"><strong>Care:</strong> {plant.care}</p>}
                            {plant.price && <p className="plant-price"><strong>Price:</strong> {plant.price}</p>}
                            <Button variant="green" className="buy-btn" onClick={() => navigate(`/plant/${plant.id}`)}>
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Varieties: React.FC = () => {
    return (
        <section className="varieties-section">
            <h2 className="section-title">Our Plant Varieties</h2>
            
            <VarietiesSection id="avenue-plants" title="Avenue Plants" plants={avenuePlants} />
            <VarietiesSection id="flowering-plants" title="Flowering Plants" plants={floweringPlants} />
            <VarietiesSection id="fruit-plants" title="Fruit Plants" plants={fruitPlants} />
            <VarietiesSection id="creepers" title="Creepers" plants={creepers} />
            <VarietiesSection id="indoor-outdoor" title="Indoor & Outdoor Plants" plants={ornamentalPlants} />
            <VarietiesSection id="palms" title="Palms" plants={palms} />
            <VarietiesSection id="bonsai" title="Bonsai" plants={bonsai} />
            
            <VarietiesSection id="coconut-varieties" title="Coconut Varieties" plants={coconutVarieties} />
            
            <VarietiesSection id="coleus-plants" title="Coleus Plants" plants={coleusPlants} />

        </section>
    );
};
