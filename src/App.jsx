import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Products from './Components/Products';
import Clients from './Components/Clients';
import FAQ from './Components/FAQ';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Achievements from './Components/Achievements';
import Footer from './Components/Footer';
import Whatsappwidget from './Components/Whatsappwidget';

function App() {  
  return (
    <div className="bg-gray-900 text-white">
      <Home />
      <Navbar />
      <About />
      <Services />
      <Products />
      <Clients />
      <Achievements />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
      <Whatsappwidget />
    </div>
  );
}

export default App;