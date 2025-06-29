import img2 from '../Images/arrow.webp';
import img3 from '../Images/checkmark.webp';

const skills = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'Git',
  'GitHub',
  'Bootstrap',
  'Tailwind',
  'Material UI',
  'Prime React',
  'AntDesign',
  'DevExtreme',
  'Vercel',
  'Vps Deployment',
];

const Experience = () => (
  <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            {skills.map((skill) => (
              <article key={skill}>
                <img src={img3} alt="Experience icon" className="icon" />
                <div>
                  <h3>{skill}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    <img
      src={img2}
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => (window.location.href = './#projects')}
    />
  </section>
);

export default Experience;