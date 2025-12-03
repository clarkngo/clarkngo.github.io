import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <header className={styles.header}>
        <h2>Profile</h2>
        <p>Explore professional, research, volunteer work, and mentoring.</p>
      </header>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Professional</h3>
          <p>Work history, roles, and validated experience.</p>
          <Link to="/professional" className={styles.cta}>View</Link>
        </div>

        <div className={styles.card}>
          <h3>Research</h3>
          <p>Publications, presentations, and projects.</p>
          <Link to="/research" className={styles.cta}>View</Link>
        </div>

        <div className={styles.card}>
          <h3>Volunteer</h3>
          <p>Community work, coaching, and outreach activities.</p>
          <Link to="/volunteer" className={styles.cta}>View</Link>
        </div>

        <div className={styles.card}>
          <h3>Mentor</h3>
          <p>Mentoring initiatives, mentee outcomes, and programs.</p>
          <Link to="/mentor" className={styles.cta}>View</Link>
        </div>
      </section>
    </div>
  );
};

export default Profile;
