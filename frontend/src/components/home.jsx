import React from "react";
 import Navbar from "./components/navbar";
 import Slideshow from "./components/slideshow";
 import ShopInfo from "./components/Shopinfo";
import OurProducts from "./components/OurProducts";
import FeaturedItems from "./components/FeaturedItems";
import OurBrands from "./components/Ourbrands";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/footer";
 
function Home() {
  
  return (
    <div>
      <Navbar />
      <Slideshow />
      <ShopInfo/>
      <OurProducts/>
      <FeaturedItems/>
      <OurBrands/>
      <Aboutus/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
