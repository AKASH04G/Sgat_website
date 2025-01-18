import React from "react";
import "./OurProducts.css";

const OurProducts = () => {
  const categories = [
    { id: 1, name: "Paints", description: "Explore vibrant wall paints and premium finishes.", image: "https://via.placeholder.com/150?text=Paints" },
    { id: 2, name: "Plywoods", description: "Durable and waterproof plywood for every need.", image: "https://via.placeholder.com/150?text=Plywoods" },
    { id: 3, name: "Glass", description: "Tempered, clear, and decorative glass solutions.", image: "https://via.placeholder.com/150?text=Glass" },
    { id: 4, name: "Hardware & Fittings", description: "Quality hardware for your home and office.", image: "https://via.placeholder.com/150?text=Hardware" },
    { id: 5, name: "Doors", description: "Stylish, durable doors to complement your space.", image: "https://via.placeholder.com/150?text=Doors" },
  ];

  return (
    <section className="categories">
      <h2>Product Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
