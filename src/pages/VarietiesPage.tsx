import React, { useEffect } from 'react';
import { Varieties } from '../components/Varieties/Varieties';

export const VarietiesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <Varieties />
        </div>
    );
};
