import React, { useEffect } from 'react';
import { Gallery } from '../components/Gallery/Gallery';
import { Testimonials } from '../components/Testimonials/Testimonials';

export const GalleryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <Gallery />
            <Testimonials />
        </div>
    );
};
