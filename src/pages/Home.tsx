import React, { useEffect } from 'react';
import { HomeHero } from '../components/HomeHero/HomeHero'
import { WhyChooseUs } from '../components/WhyChooseUs/WhyChooseUs';
import { PlantCategories } from '../components/PlantCategories/PlantCategories';
import { ContactCTA } from '../components/ContactCTA/ContactCTA';

export const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HomeHero />
            <WhyChooseUs />
            <PlantCategories />
            <ContactCTA />
        </>
    );
};
