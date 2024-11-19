import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        Have questions or feedback? We'd love to hear from you! Reach out to us using the
        information below or fill out our contact form.
      </p>
      <div className="contact-us-card">
        <h2 className="contact-us-card-title">Get In Touch</h2>
        <p className="contact-us-card-description">
          Address: 123 Food Street, Delicious City, Yummy Country
        </p>
        <p className="contact-us-card-description">
          Phone: (123) 456-7890
        </p>
        <p className="contact-us-card-description">
          Email: contact@yourrestaurant.com
        </p>
      </div>
      <form className="contact-us-form">
        <h2 className="contact-us-form-title">Send Us a Message</h2>
        <input
          type="text"
          className="contact-us-input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="contact-us-input"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact-us-textarea"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="contact-us-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
