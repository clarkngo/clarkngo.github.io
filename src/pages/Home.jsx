import styles from './Home.module.css';
import heroImage from '../assets/hero_clark_frieren.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.about}>
        <h2>HI, I'M CLARK!</h2>
        <p>
          I am a passionate and driven software developer with a knack for creating elegant and efficient solutions. My journey in tech has been fueled by a relentless curiosity and a desire to build things that make a difference. I thrive in collaborative environments and am always eager to learn new technologies and take on challenging projects.
        </p>
      </section>
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.heroText}>
          <h1>Clark Ngo</h1>
          <p>AI Engineer</p>
        </div>
      </section>

      <section className={styles.work}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Tuklas</h3>
            <p>A project for Tuklas, which means discovery.</p>
            <a href="https://clarkngo.github.io/tuklas/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>AI-Hub</h3>
            <p>A hub for AI projects and resources.</p>
            <a href="https://clarkngo.github.io/AI-Hub" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Microservices</h3>
            <p>Exploring the world of microservices architecture.</p>
            <a href="https://clarkngo.github.io/microservices" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>System Design</h3>
            <p>A collection of system design resources and case studies.</p>
            <a href="https://clarkngo.github.io/system-design" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Agent Development</h3>
            <p>A project on agent development.</p>
            <a href="https://clarkngo.github.io/agent-development/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Paper Explained</h3>
            <p>Explaining complex research papers.</p>
            <a href="https://clarkngo.github.io/paper-explained" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
        </div>
      </section>

      <section className={styles.hobbies}>
        <h2>Hobbies & Interests</h2>
        <div className={styles.hobbiesGrid}>
          <div className={styles.projectCard}>
            <h3>Volleyball</h3>
            <p>A site dedicated to volleyball, my favorite sport.</p>
            <a href="https://clarkngo.github.io/volleyball" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Board Games</h3>
            <p>A personal collection and review of board games.</p>
            <a href="https://clarkngo.github.io/board-games" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;