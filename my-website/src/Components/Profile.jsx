// src/Profile.js
import React from 'react';
import img7 from '../Images/github.webp'
import img8 from '../Images/linkedin.webp'
import img14 from '../Images/mostafa_sonbaty.webp'
import { Link } from 'react-scroll';
const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={img14} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Mostafa Elsonbaty</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('../assets/Mostafa Sonbaty Resume.pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1">
            <Link to="contact" smooth={false}>Contact Info</Link>
          </button>
        </div>
        <div id="socials-container">
          <img
            src={img8}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href='https://www.linkedin.com/in/mostafa-elsonbaty-34111422a/'}
          />
          <img
            src={img7}
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href='https://github.com/Hossam-Elsonbaty'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
