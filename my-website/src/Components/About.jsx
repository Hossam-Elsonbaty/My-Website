// src/About.js
import React from 'react';
import img1 from '../Images/about-pic.webp'
import img2 from '../Images/arrow.webp'
import img4 from '../Images/education.webp'
import img6 from '../Images/experience.webp'
import img15 from '../Images/WhatsApp Image Hossam.webp'

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={img15}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={img6}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>3+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={img4}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a Frontend Developer with 3 years of experience, working on projects ranging from simple CRUD applications to complex, large-scale accounting systems. Collaborating with my team, I built responsive web pages that seamlessly integrate with back-end APIs.
            </p>
          </div>
        </div>
      </div>
      <img
        src={img2}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#experience'}
      />
    </section>
  );
};

export default About;
