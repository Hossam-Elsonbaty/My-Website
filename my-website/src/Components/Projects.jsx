// src/Projects.js
import React from 'react';
import img2 from '../Images/arrow.webp'
import img11 from '../Images/project-1.webp'
import img12 from '../Images/project-2.webp'
import img13 from '../Images/project-3.webp'

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={img11}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={img12}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={img13}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={img2}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#contact'}
      />
    </section>
  );
};

export default Projects;
