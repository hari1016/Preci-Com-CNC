import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
// import Services from './components/Services';
// import Quality from './components/Quality';
// import Infrastructure from './components/Infrastructure';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
