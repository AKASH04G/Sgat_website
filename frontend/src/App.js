import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router and Routes
import Navbar from "./components/navbar";
import Slideshow from "./components/slideshow";
import ShopInfo from "./components/Shopinfo";
import OurProducts from "./components/OurProducts";
import FeaturedItems from "./components/FeaturedItems";
import OurBrands from "./components/Ourbrands";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import WelcomePopup from "./components/Welcomepopup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define route for Home page (all components shown top to bottom) */}
        <Route path="/" element={
          <div>
            <Slideshow />
            <div id="shopinfo"><ShopInfo /></div>
            <div id="products"><OurProducts /></div>
            <div id="featureditems"><FeaturedItems /></div>
            <div id="brands"><OurBrands /></div>
            <div id="aboutus"><Aboutus /></div>
            <div id="contact"><Contact /></div>
            <div><WelcomePopup/></div>
          </div>
        } />
        {/* Optionally add other routes for specific pages */}
        <Route path="/shopinfo" element={<ShopInfo />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/featureditems" element={<FeaturedItems />} />
        <Route path="/brands" element={<OurBrands />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
