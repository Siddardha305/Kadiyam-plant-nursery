import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { HomeHero } from './components/HomeHero/HomeHero'
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';
import { PlantCategories } from './components/PlantCategories/PlantCategories';
import { FeaturedPlants } from './components/FeaturedPlants/FeaturedPlants';
import { AboutUs } from './components/AboutUs/AboutUs';
import { OurServices } from './components/OurServices/OurServices';
import { Gallery } from './components/Gallery/Gallery';
import { Testimonials } from './components/Testimonials/Testimonials';
import { PlantCareTips } from './components/PlantCareTips/PlantCareTips';
import { ContactCTA } from './components/ContactCTA/ContactCTA';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <WhyChooseUs />
      <PlantCategories />
      <FeaturedPlants />
      <AboutUs />
      <OurServices />
      <Gallery />
      <Testimonials />
      <PlantCareTips />
      <ContactCTA />
      <Footer />
    </>
  )
}

export default App

