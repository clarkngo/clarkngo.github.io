import styles from './Courses.module.css';

const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.pageHero}>
        <h2>Courses</h2>
        <p>Structured learning paths and hands-on curricula</p>
      </div>

      <div className={styles.content}>
        <div className={styles.courseGrid}>
          <div className={styles.courseCard}>
            <h3>Agent Development</h3>
            <p>A hands-on course on building and deploying AI agents.</p>
            <a
              href="https://clarkngo.github.io/agent-development/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              View Course ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
