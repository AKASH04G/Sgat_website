import React from "react";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Premium Wall Paint",
      description: "Long-lasting paint with a silky finish.",
      price: "₹1,200",
      image: "https://via.placeholder.com/150?text=Wall+Paint",
    },
    {
      id: 2,
      name: "Heavy-Duty Drill Machine",
      description: "Perfect for construction and repair work.",
      price: "₹3,500",
      image: "https://via.placeholder.com/150?text=Drill+Machine",
    },
    {
      id: 3,
      name: "Tempered Glass Sheets",
      description: "High-quality tempered glass for windows.",
      price: "₹500/sq.ft",
      image: "https://via.placeholder.com/150?text=Glass+Sheets",
    },
    {
      id: 4,
      name: "Waterproof Plywood",
      description: "Durable and waterproof plywood for furniture.",
      price: "₹1,800",
      image: "https://via.placeholder.com/150?text=Plywood",
    },
  ];

  return (
    <section id="featured-items" className="featured-items">
      <div className="container">
        <h2>Featured Items</h2>
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <div key={item.id} className="featured-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
