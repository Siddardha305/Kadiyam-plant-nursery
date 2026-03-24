import React, { useEffect } from 'react';
import { OurServices } from '../components/OurServices/OurServices';
import { PlantCareTips } from '../components/PlantCareTips/PlantCareTips';

export const Services: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <OurServices />
            <PlantCareTips />
        </div>
    );
};
