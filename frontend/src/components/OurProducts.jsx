import React from "react";
import "./OurProducts.css";

const OurProducts = () => {
  const products = [
    { id: 1, name: "Paint", description: "Premium quality wall paint.", image: "https://via.placeholder.com/150?text=Paint" },
    { id: 2, name: "Plywood", description: "High-grade waterproof plywood.", image: "https://via.placeholder.com/150?text=Plywood" },
    { id: 3, name: "Glass", description: "Durable tempered glass.", image: "https://via.placeholder.com/150?text=Glass" },
    { id: 4, name: "Hardware", description: "High-quality house hardware.", image: "https://via.placeholder.com/150?text=Hardware" },
  ];

  return (
    <section className="our-products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
