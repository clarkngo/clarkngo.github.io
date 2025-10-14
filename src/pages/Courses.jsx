import styles from './Courses.module.css';

const Courses = () => {
  return (
    <section className={styles.courses}>
      <h2>Courses</h2>
      <div className={styles.courseGrid}>
        <div className={styles.courseCard}>
          <h3>Agent Development</h3>
          <p>A course on agent development.</p>
          <a href="https://clarkngo.github.io/agent-development/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>View Course</a>
        </div>
      </div>
    </section>
  );
};

export default Courses;