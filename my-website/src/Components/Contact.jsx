// src/Contact.js
import React from 'react';
import img5 from '../Images/email.webp'
import img8 from '../Images/linkedin.webp'

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={img5}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:m.contact.sonbaty@gmail.com">m.contact.sonbaty@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={img8}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/mostafa-elsonbaty-34111422a/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
