import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p className="about-description">
        Welcome to S.G.Akash.Traders, your one-stop shop for all your hardware, paint, glass, and plywood needs. 
        We have been serving the community for over [X] years, providing quality products at competitive prices. 
        Our goal is to offer excellent customer service and a wide range of products to meet your home improvement and construction needs.
      </p>
      
      <div className="about-values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Quality:</strong> We believe in offering only the best products for our customers.</li>
          <li><strong>Customer Service:</strong> Our team is always ready to help with your queries and product selection.</li>
          <li><strong>Reliability:</strong> We ensure timely delivery and quality assurance for all products.</li>
        </ul>
      </div>

      <div className="about-team">
        <h3>Meet Our Team</h3>
        <p>Our team is dedicated to providing top-notch service and assisting you with all your needs.</p>
        <div className="team-members">
          <div className="team-member">
            <img src="/path/to/team-member1.jpg" alt="Team Member 1" />
            <p>John Doe - Manager</p>
          </div>
          <div className="team-member">
            <img src="/path/to/team-member2.jpg" alt="Team Member 2" />
            <p>Jane Smith - Sales</p>
          </div>
          <div className="team-member">
            <img src="/path/to/team-member3.jpg" alt="Team Member 3" />
            <p>Mark Lee - Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
