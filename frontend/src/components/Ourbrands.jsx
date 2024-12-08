import React from "react";
import "./OurBrands.css";

const OurBrands = () => {
  const brands = [
    { id: 1, name: "Asian Paints", logo: "https://via.placeholder.com/100?text=Asian+Paints" },
    { id: 2, name: "Fevicol", logo: "https://via.placeholder.com/100?text=Fevicol" },
    { id: 3, name: "Saint-Gobain", logo: "https://via.placeholder.com/100?text=Saint-Gobain" },
    { id: 4, name: "Birla", logo: "https://via.placeholder.com/100?text=Birla" },
    { id: 5, name: "Greenply", logo: "https://via.placeholder.com/100?text=Greenply" },
    { id: 6, name: "Dulux", logo: "https://via.placeholder.com/100?text=Dulux" },
    { id: 7, name: "Nerolac", logo: "https://via.placeholder.com/100?text=Nerolac" },
    { id: 8, name: "Havells", logo: "https://via.placeholder.com/100?text=Havells" },
  ];

  return (
    <section className="our-brands">
      <h2>Our Brands</h2>
      <div className="brands-grid">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.id}>
            <img src={brand.logo} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBrands;
