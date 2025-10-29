import styles from './Home.module.css';
import heroImage from '../assets/hero_clark_frieren.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.about}>
        <h2>HI, I'M CLARK!</h2>
        <p>
          Building the future with intelligent systems, and teaching others how to do it. 
        </p>
      </section>
        <section className={styles.hero}>
               <div className={`${styles.heroInner} container`}>
                 <div className={styles.heroLeft}>
                   <div className={styles.heroText}>
                      <h3 className={styles.role}>Software Architect and AI Engineer</h3>
                      <p className={styles.lead}>I'm a Software Architect and AI Engineer passionate about turning complex ideas into scalable, efficient, and user-centric products. I specialize in Full-Stack Development and RAG AI systems. When I'm not coding, I'm mentoring the next generation of engineers.</p>
                      <h3 className={styles.sectionTitle}>Highlights</h3>
                      <ul className={styles.highlights}>
                        <li> • Reduced eBay's root cause identification time for site-impacting changes from 1 minute to 10 seconds.</li>
                        <li> • Designed a RAG-based chat systems (Gemma/ChromaDB) via FastAPI, implementing MLflow and CI/CD for scalable service delivery.</li>
                        <li> • Saved $72,000 and achieved 93% job placement for veterans in the Amazon Apprenticeship Program.</li>
                      </ul>
                   </div>
                 </div>
                 <div className={styles.heroRight}>
                   <img src={heroImage} alt="Clark Ngo" />
                 </div>
               </div>
             </section>
      <section className={styles.work}>
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
          <div className={styles.projectCard}>
            <h3>My Learning Notes</h3>
            <p>Personal learning notes and write-ups on tech topics.</p>
            <a href="https://clarkngo.github.io/my-learning-notes/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Notes</a>
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