import React from "react";
import "./ShopInfo.css";

const ShopInfo = () => {
  return (
    <section id="shop-info" className="shop-info">
      <div className="container">
        <h2>Welcome to [Your Shop Name]</h2>
        <p>
          Established in [Year], we are proud to be your trusted partner for all hardware, paint, glass, and plywood needs.
          Located in the heart of [City/Area], our shop has been serving the community with high-quality products and exceptional service.
        </p>
        <div className="shop-highlights">
          <div className="highlight">
            <h3>Wide Range of Products</h3>
            <p>
              From durable hardware to vibrant paints, we offer a comprehensive selection to cater to all your needs.
            </p>
          </div>
          <div className="highlight">
            <h3>Top Brands</h3>
            <p>
              We stock only the best brands in the market, ensuring quality and reliability for our customers.
            </p>
          </div>
          <div className="highlight">
            <h3>Trusted by the Community</h3>
            <p>
              With years of experience and a loyal customer base, we are committed to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
