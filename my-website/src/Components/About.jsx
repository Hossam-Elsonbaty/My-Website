// src/About.js
import React from 'react';
import img2 from '../Images/arrow.webp'
import img4 from '../Images/education.webp'
import img6 from '../Images/experience.webp'
import img15 from '../Images/my picture.jpg'

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
              <p>B.Sc. Bachelors Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a Frontend Developer with 3 years of experience crafting dynamic, user-centric web applications. Proven expertise in
              utilizing cutting-edge technologies, including HTML5, CSS3, JavaScript, and modern frameworks like React to deliver highperformance, visually appealing solutions. Demonstrated success in managing complex projects from conception through deployment,
              ensuring seamless integration with backend services and superior user experiences. Adept at collaborating with cross-functional teams to
              translate business requirements into innovative, responsive designs. Committed to staying abreast of industry trends and advancements to
              enhance skill sets and deliver exceptional digital products continually. Recognized for strong problem-solving abilities, meticulous
              attention to detail, and a passion for driving technological excellence.
            </p>
            {/* <p>
              I'm a Frontend Developer with 3 years of experience, working on projects ranging from simple CRUD applications to complex, large-scale accounting systems. Collaborating with my team, I built responsive web pages that seamlessly integrate with back-end APIs.
            </p> */}
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
