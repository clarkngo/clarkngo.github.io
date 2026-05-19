import { useEffect, useRef } from 'react';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';
import heroImage from '../assets/hero_clark_frieren.png';

/* ── Particle canvas ── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const NUM = 70;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < NUM; i++) {
        for (let j = i + 1; j < NUM; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.a})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />;
};

/* ── Project data ── */
const featuredProject = {
  title: 'Playground',
  desc: 'My most active space — 30+ live projects spanning AI agents, RAG systems, full-stack apps, system design, microservices, and more. If you only click one link, make it this one.',
  href: 'https://clarkngo.github.io/playground/',
  cta: 'Explore the Playground',
};

const projects = [
  { title: 'Physical AI',        desc: 'Exploring the intersection of AI and the physical world.',  href: 'https://clarkngo.github.io/physical-ai/',        cta: 'View Project' },
  { title: 'The Briefing Room',  desc: 'Curated insights, analyses, and strategic content.',        href: 'https://clarkngo.github.io/the-briefing-room/',  cta: 'View Project' },
  { title: 'AI Hub',             desc: 'A hub for AI projects and resources.',                      href: 'https://clarkngo.github.io/AI-Hub',              cta: 'View Project' },
  { title: 'Microservices',      desc: 'Exploring the world of microservices architecture.',        href: 'https://clarkngo.github.io/microservices',       cta: 'View Project' },
  { title: 'System Design',      desc: 'System design resources and case studies.',                 href: 'https://clarkngo.github.io/system-design',       cta: 'View Project' },
  { title: 'Agent Development',  desc: 'A project on agent development.',                           href: 'https://clarkngo.github.io/agent-development/',  cta: 'View Project' },
  { title: 'Paper Explained',    desc: 'Explaining complex research papers in plain language.',     href: 'https://clarkngo.github.io/paper-explained',     cta: 'View Project' },
  { title: 'My Learning Notes',  desc: 'Personal learning notes and write-ups on tech topics.',    href: 'https://clarkngo.github.io/my-learning-notes/',  cta: 'View Notes' },
  { title: 'Tuklas',             desc: 'A project for Tuklas, which means discovery.',             href: 'https://clarkngo.github.io/tuklas/',             cta: 'View Project' },
  { title: 'Infographics',      desc: 'Visual storytelling through data-driven infographics.',      href: 'https://clarkngo.github.io/infographics/',      cta: 'View Project' },
];

const hobbies = [
  { title: 'Volleyball',   desc: 'A site dedicated to volleyball, my favorite sport.',  href: 'https://clarkngo.github.io/volleyball',   cta: 'View Project' },
  { title: 'Board Games',  desc: 'A personal collection and review of board games.',    href: 'https://clarkngo.github.io/board-games',  cta: 'View Project' },
];

/* ── Component ── */
const Home = () => {
  const projectsRef = useStaggerReveal('reveal', 0.05);
  const hobbiesRef  = useStaggerReveal('reveal', 0.05);
  const workHeadRef = useScrollReveal('reveal');
  const hobbyHeadRef = useScrollReveal('reveal');

  return (
    <div className={styles.home}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <ParticleCanvas />

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>Software Architect &amp; AI Engineer</p>
            <h1 className={styles.headline}>
              Hi, I'm<br />
              <span className={styles.name}>Clark.</span>
            </h1>
            <p className={styles.tagline}>
              I build things, ship them, and then explain how they work.
            </p>

            <ul className={styles.highlights}>
              <li>
                <span className={styles.bullet} />
                <span>I'm an engineer who can't stop teaching — workshops, bootcamps, YouTube, you name it</span>
              </li>
              <li>
                <span className={styles.bullet} />
                <span>I coach volleyball on weekends. <strong>Same skill</strong> as engineering: get the team moving together</span>
              </li>
              <li>
                <span className={styles.bullet} />
                <span>I keep 30+ projects running in public because <strong>the best way to learn is to ship</strong></span>
              </li>
            </ul>

            <div className={styles.heroCtas}>
              <a href="https://github.com/clarkngo" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>GitHub ↗</a>
              <a href="https://clarkngo.github.io/playground/" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>Playground ↗</a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroGlow} />
              <img src={heroImage} alt="Clark Ngo" className={styles.heroImg} />
            </div>
          </div>
        </div>

        <button className={styles.scrollCue} aria-label="Scroll down" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </section>

      {/* ══ WORK ══ */}
      <section id="work" className={styles.workSection}>
        <div className={styles.sectionContainer}>
          <div ref={workHeadRef} className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              My <span>Work</span>
            </h2>
            <p className={styles.sectionSub}>Projects, tools, and experiments I've built</p>
          </div>

          <a href={featuredProject.href} target="_blank" rel="noopener noreferrer" className={styles.featuredCard}>
            <span className={styles.featuredBadge}>Featured</span>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.desc}</p>
            <span className={styles.featuredCta}>{featuredProject.cta} →</span>
          </a>

          {/* ── Orator Lab themed card ── */}
          <a href="https://clarkngo.github.io/orator-lab/" target="_blank" rel="noopener noreferrer" className={styles.oratorLabCard}>
            <div className={styles.oratorLabGlow} />
            <div className={styles.oratorLabInner}>
              <div className={styles.oratorLabWave}>
                <span className={styles.oratorLabBar} />
                <span className={`${styles.oratorLabBar} ${styles.oratorLabBar2}`} />
                <span className={`${styles.oratorLabBar} ${styles.oratorLabBar3}`} />
                <span className={`${styles.oratorLabBar} ${styles.oratorLabBar4}`} />
                <span className={`${styles.oratorLabBar} ${styles.oratorLabBar5}`} />
              </div>
              <div className={styles.oratorLabBody}>
                <span className={styles.oratorLabBadge}>// SIGNAL LIVE //</span>
                <h3 className={styles.oratorLabTitle}>Orator Lab</h3>
                <p className={styles.oratorLabDesc}>Refine your rhetoric, sharpen your delivery. An AI-powered speech coach that dissects your words, maps rhetorical friction points, and hands you back a better speaker.</p>
                <span className={styles.oratorLabCta}>Enter the Lab ↗</span>
              </div>
            </div>
          </a>

          <div ref={projectsRef} className={`${styles.projectGrid} stagger`}>
            {projects.map(({ title, desc, href, cta }) => (
              <div key={title} className={styles.projectCard}>
                <div className={styles.cardAccent} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  {cta} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOBBIES ══ */}
      <section className={styles.hobbiesSection}>
        <div className={styles.sectionContainer}>
          <div ref={hobbyHeadRef} className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Hobbies &amp; <span>Interests</span>
            </h2>
            <p className={styles.sectionSub}>Life outside the terminal</p>
          </div>

          <div ref={hobbiesRef} className={`${styles.hobbiesGrid} stagger`}>
            {hobbies.map(({ title, desc, href, cta }) => (
              <div key={title} className={styles.projectCard}>
                <div className={styles.cardAccent} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  {cta} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
