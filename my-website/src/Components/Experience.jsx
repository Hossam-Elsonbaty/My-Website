// src/Experience.js
import React from 'react';
import img2 from '../Images/arrow.webp'
import img3 from '../Images/checkmark.webp'

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SASS</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React.js</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Next.js</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node.js</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express.js</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>GitHub</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Tailwind</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Prime React</h3>
                  
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>AntDesign</h3>
                  
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>DevExtreme</h3>
                  
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Vercel</h3>
                </div>
              </article>
            </div>
          </div>
          {/* <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={img3}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div> */}
        </div>
      </div>
      <img
        src={img2}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#projects'}
      />
    </section>
  );
};

export default Experience;
