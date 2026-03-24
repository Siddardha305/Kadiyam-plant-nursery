import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allPlants } from '../data/plants';
import { Button } from '../components/Button/Button';
import './PlantDetails.css';

export const PlantDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!id) return <div>Plant not found</div>;

    const plant = allPlants.find(p => p.id === Number.parseInt(id));

    if (!plant) {
        return (
            <div className="plant-not-found">
                <h2>Plant Not Found</h2>
                <Button variant="green" onClick={() => navigate('/')}>Back to Home</Button>
            </div>
        );
    }

    return (
        <div className="plant-details-container">
            <div className="back-btn-wrapper">
                <Button variant="green" className="back-btn" onClick={() => navigate(-1)}>
                    &larr; Back
                </Button>
            </div>
            
            <div className="plant-details-content">
                <div className="plant-details-image">
                    <img src={plant.image} alt={plant.name} />
                </div>
                
                <div className="plant-details-info">
                    <h1 className="plant-details-title">{plant.name}</h1>
                    {plant.teluguName && <h3 className="plant-details-telugu">({plant.teluguName})</h3>}
                    
                    <div className="plant-details-description">
                        <p>{plant.description}</p>
                    </div>

                    <div className="plant-details-meta">
                        {plant.care && (
                            <div className="meta-box">
                                <strong>Care Instructions:</strong>
                                <p>{plant.care}</p>
                            </div>
                        )}
                        {plant.price && (
                            <div className="meta-box">
                                <strong>Pricing Info:</strong>
                                <p>{plant.price}</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="plant-details-actions">
                        <Button variant="green">Inquire to Buy</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
