import React, { useState } from "react";
import "./Welcomepopup.css";
 
const WelcomePopup = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const minimizePopup = () => {
    setIsMinimized(true);
  };

  const restorePopup = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {!isMinimized ? (
        <div className="popup-overlay">
          <div className="welcome-popup">
            <div className="popup-header">
              <h3>Welcome to Our Store</h3>
              <button className="minimize-btn" onClick={minimizePopup}>
                &minus;
              </button>
            </div>
            <div className="popup-body">
              <p>
                We’re glad to have you here! Feel free to enquire or contact us through any of the following methods:
              </p>
              <div className="shop-map">
          <h3>Location</h3>
          <iframe
            title="Shop Location"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60021.58200760587!2d79.0866447!3d12.0076283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baca30eb2a32d79%3A0x6fe941732946e048!2sSG%20Aakash%20Traders!5e1!3m2!1sen!2sin!4v1733845761601!5m2!1sen!2sin" 
             width="75%"
            height="100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
              <div className="contact-options">
                <a href="mailto:example@example.com" className="contact-item">
                <img src="../images/email.png" alt="Email" />
                  Email Us
                </a>
                <a href="tel:+1234567890" className="contact-item">
                <img src="../images/contacticon.png" alt="Phone" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <img src="../images/whatsapp.png" alt="Whatsapp" />
                  WhatsApp
                </a>
              </div>
              <button className="enquire-btn">Enquire Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="popup-icon" onClick={restorePopup}>
          <img src="./images/contacticon.png" alt="Popup Icon" /> {/* Replace with your icon */}
        </div>
      )}
    </>
  );
};

export default WelcomePopup;
