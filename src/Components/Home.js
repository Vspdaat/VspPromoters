
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MapSection from './MapSection';
import SitesSection from './SitesSection';
import AboutUs from './AboutUs'
import Locations from './Locations';
import Testimonials from './TestimonialSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Article from './Article'



// Component to handle scrolling to sections based on state passed from Navtrans
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function Home() {
  return (
          <div className="App overflow-y-hidden ">
            <div className="text-white overflow-y-hidden px-4 md:px-20">
              <Navbar/>
              <ScrollToSection /> 
              <HeroSection />
              <section id="sell">
                <MapSection />
              </section>
              <section id="listings" className="bg-gray-300">
                <SitesSection />
              </section>
              <section id="about" className="bg-gray-100">
                <AboutUs />
              </section>
              {/* Add Locations Section */}
              <section id="locations" className="bg-gray-300">
                <Locations />
              </section>
              <Testimonials />
              <Article />
              <section id="contact" className="bg-gray-400">
                <ContactForm />
              </section>
             
            </div>
             <Footer />
          </div>
    
     
  );
}

export default Home;
