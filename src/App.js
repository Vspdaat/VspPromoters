// // import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';


// import Locations from './Components/Locations';
// import AboutUs from './Components/AboutUs';
// import Testimonials from './Components/TestimonialSection';
// import Article from './Components/Article';
// import ContactForm from './Components/ContactForm';
// import Footer from './Components/Footer';
// import HeroSection from './Components/HeroSection';
// import MapSection from './Components/MapSection';
// import SitesSection from './Components/SitesSection';
// import Home1 from './Components/Home1';

// function App() {
//   return (
//     <div className="App overflow-y-hidden ">
//     <div className="bg-[#0c1633]  text-white overflow-y-hidden">
//       <Navbar/>
//       <HeroSection/>
//       <section id="sell">
//           <MapSection />
//       </section>
//       <section id="listings" className=" bg-gray-300">< SitesSection/></section>
//       <section id="about" className=" bg-gray-100"><AboutUs/></section>
//       <Locations/>
//       <Testimonials/>
//       <Article/>
//       <section id="contact" className=" bg-gray-400"><ContactForm/></section>
//       <Footer/>
//       <Home1/>


//       </div>
      
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home1 from './Components/Home1';
import Home from './Components/Home';

// Component to handle scrolling to sections based on state passed from Navtrans
// function ScrollToSection() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.sectionId) {
//       const section = document.getElementById(location.state.sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location]);

//   return null;
// }

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/site/:title" element={<Home1 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
