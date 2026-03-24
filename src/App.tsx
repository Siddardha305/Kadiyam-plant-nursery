import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { Home } from './pages/Home';
import { PlantDetails } from './pages/PlantDetails';
import { About } from './pages/About';
import { VarietiesPage } from './pages/VarietiesPage';
import { Services } from './pages/Services';
import { GalleryPage } from './pages/GalleryPage';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/varieties" element={<VarietiesPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plant/:id" element={<PlantDetails />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
