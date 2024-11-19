import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        Welcome to <strong>Swigy</strong>! At our restaurant, we strive to provide a
        unique dining experience with delicious dishes prepared from the freshest ingredients. Our
        chefs are passionate about crafting meals that delight your taste buds and leave you wanting
        more.
      </p>
      <div className="about-us-card">
        <h2 className="about-us-card-title">Our Story</h2>
        <p className="about-us-card-description">
          Since opening our doors in <strong>2011</strong>, we have been committed to creating a
          welcoming space where friends and families can enjoy exceptional food and excellent
          service. Thank you for letting us be a part of your journey. We look forward to serving
          you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
