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

        <div className="shop-map">
          <h2>Location</h2>
          <iframe
            title="Shop Location"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60021.58200760587!2d79.0866447!3d12.0076283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baca30eb2a32d79%3A0x6fe941732946e048!2sSG%20Aakash%20Traders!5e1!3m2!1sen!2sin!4v1733845761601!5m2!1sen!2sin" 
             width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
