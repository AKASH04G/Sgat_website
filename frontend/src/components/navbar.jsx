import React from "react";
import { Link } from "react-scroll";  // Using Link from react-scroll
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">S.G.Akash.Traders</a>
        </div>
        <ul className="nav-links">
          <li><Link to="shopinfo" smooth={true} duration={500}>Shop Info</Link></li>  
          <li><Link to="products" smooth={true} duration={500}>Products</Link></li>  
          <li><Link to="featureditems" smooth={true} duration={500}>Featured Items</Link></li>  
          <li><Link to="brands" smooth={true} duration={500}>Our Brands</Link></li>  
          <li><Link to="aboutus" smooth={true} duration={500}>About Us</Link></li>  
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>  
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
