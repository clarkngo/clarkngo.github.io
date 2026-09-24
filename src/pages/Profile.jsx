import { Link } from 'react-router-dom';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import heroImage from '../assets/hero_clark_frieren.png';
import styles from './Profile.module.css';

const roleTags = ['Software Architect', 'AI Engineer', 'Educator', 'Coach'];

const highlights = [
  { value: '20% → 5%', label: 'Code duplication, via Spring microservices and shared libraries', where: 'eBay' },
  { value: 'Hours → <10 min', label: 'To surface recent changes behind a revenue or metric drop', where: 'eBay' },
  { value: '80%', label: 'Faster backend response through async processing and caching', where: 'Worldwide American' },
  { value: '30+', label: 'Projects running in public, from RAG apps to system design', where: 'GitHub Pages' },
];

const cards = [
  {
    to: '/professional',
    title: 'Professional',
    desc: 'Work history, roles, and validated experience.',
    meta: 'eBay · Worldwide American · City University of Seattle',
  },
  {
    to: '/research',
    title: 'Research',
    desc: 'Publications, presentations, and academic projects.',
    meta: 'MS Computer Science · MBA',
  },
  {
    to: '/volunteer',
    title: 'Volunteer',
    desc: 'Community work, coaching, and outreach activities.',
    meta: 'King County 2A volleyball champions, 2021 & 2022',
  },
  {
    to: '/mentor',
    title: 'Mentor',
    desc: 'Mentoring initiatives, mentee outcomes, and programs.',
    meta: 'Veterans, college students, and youth',
  },
];

const Profile = () => {
  const statsRef = useStaggerReveal('reveal', 0.1);
  const gridRef = useStaggerReveal('reveal', 0.1);

  return (
    <div className={styles.profile}>
      <div className={styles.pageHero}>
        <div className={styles.intro}>
          <img src={heroImage} alt="Clark Ngo" className={styles.photo} />
          <div className={styles.introText}>
            <h2>Clark Ngo</h2>
            <ul className={styles.tags}>
              {roleTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className={styles.bio}>
              I design and ship production systems &mdash; Spring microservices, search infrastructure,
              and RAG applications &mdash; and I hold an MBA and an MS in Computer Science. I keep my work
              public and explain how it works.
            </p>
            <div className={styles.actions}>
              <a href="https://linkedin.com/in/clarkngo" target="_blank" rel="noopener noreferrer" className={styles.primary}>LinkedIn ↗</a>
              <a href="https://github.com/clarkngo" target="_blank" rel="noopener noreferrer" className={styles.secondary}>GitHub ↗</a>
              <a href="mailto:clarkngo@gmail.com" className={styles.secondary}>Email</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.sectionLabel}>Impact</h3>
        <div className={`${styles.stats} stagger`} ref={statsRef}>
          {highlights.map(({ value, label, where }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
              <span className={styles.statWhere}>{where}</span>
            </div>
          ))}
        </div>

        <h3 className={styles.sectionLabel}>Explore</h3>
        <div className={`${styles.grid} stagger`} ref={gridRef}>
          {cards.map(({ to, title, desc, meta }) => (
            <div key={to} className={styles.card}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className={styles.meta}>{meta}</span>
              <Link to={to} className={styles.cta}>View</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
