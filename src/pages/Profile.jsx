import { Link } from 'react-router-dom';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import styles from './Profile.module.css';

const cards = [
  { to: '/professional', title: 'Professional',  desc: 'Work history, roles, and validated experience.' },
  { to: '/research',     title: 'Research',       desc: 'Publications, presentations, and academic projects.' },
  { to: '/volunteer',    title: 'Volunteer',      desc: 'Community work, coaching, and outreach activities.' },
  { to: '/mentor',       title: 'Mentor',         desc: 'Mentoring initiatives, mentee outcomes, and programs.' },
];

const Profile = () => {
  const gridRef = useStaggerReveal('reveal', 0.1);

  return (
    <div className={styles.profile}>
      <div className={styles.pageHero}>
        <h2>Profile</h2>
        <p>Explore professional, research, volunteer work, and mentoring</p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.grid} stagger`} ref={gridRef}>
          {cards.map(({ to, title, desc }) => (
            <div key={to} className={styles.card}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link to={to} className={styles.cta}>View</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
