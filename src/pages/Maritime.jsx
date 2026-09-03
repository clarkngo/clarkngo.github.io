import { useStaggerReveal } from '../hooks/useScrollReveal';
import styles from './Maritime.module.css';

const resources = [
  {
    title: 'Maritime Fundamentals',
    desc: 'Core maritime concepts explained from the ground up — vessel types, navigation, ports, and shipping operations.',
    href: 'https://clarkngo.github.io/maritime-fundamentals/',
    cta: 'Explore Fundamentals',
  },
  {
    title: 'Maritime Atlas',
    desc: 'A visual atlas of the maritime world — shipping lanes, port systems, and vessel classifications mapped out for quick reference.',
    href: 'https://clarkngo.github.io/maritime-atlas/',
    cta: 'Browse the Atlas',
  },
  {
    title: 'Maritime OT',
    desc: 'Operational technology aboard ships — ECDIS, engine control systems, and the ICS/OT security lens applied at sea.',
    href: 'https://clarkngo.github.io/maritime-ot/',
    cta: 'Explore Maritime OT',
  },
  {
    title: 'Maritime Operations',
    desc: 'Process flow, organizational structure, and job roles across Washington State maritime operations — from vessel arrival to port to career map.',
    href: 'https://clarkngo.github.io/maritime-operations/',
    cta: 'Explore Operations',
  },
  {
    title: 'Physical AI: Maritime',
    desc: 'Where Physical AI meets the sea — autonomous vessels, maritime robotics, and embodied AI research on the water.',
    href: 'https://clarkngo.github.io/physical-ai/#/maritime',
    cta: 'View Physical AI: Maritime',
  },
  {
    title: 'Maritime Explorer',
    desc: 'An interactive explorer for maritime Physical AI — dive into the systems, sensors, and simulations powering autonomous ships.',
    href: 'https://clarkngo.github.io/physical-ai/#/maritime/explorer',
    cta: 'Launch Explorer',
  },
];

const Maritime = () => {
  const gridRef = useStaggerReveal('reveal', 0.08);

  return (
    <div className={styles.maritime}>
      <div className={styles.pageHero}>
        <h2>Maritime</h2>
        <p>Fundamentals, operational technology, and Physical AI at sea</p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.grid} stagger`} ref={gridRef}>
          {resources.map(({ title, desc, href, cta }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.cardAccent} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className={styles.cardLink}>{cta} <span>→</span></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maritime;
