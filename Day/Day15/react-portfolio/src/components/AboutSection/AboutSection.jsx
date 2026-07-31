import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Harshith' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Harshith, Computer Science student with a passion for web development, problem-solving, and creating clean, user-friendly applications. Always learning, building, and exploring new technologies to grow as a software developer.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
