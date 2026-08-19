import { useEffect, useRef, useState } from 'react';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';
import heroImage from '../assets/hero_clark_frieren.png';

/* load Orbitron + Rajdhani for the HazardMons card */
const pokeHazardFonts = document.createElement('link');
pokeHazardFonts.rel = 'stylesheet';
pokeHazardFonts.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600&display=swap';
document.head.appendChild(pokeHazardFonts);

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
const featuredProjects = [
  {
    title: 'Playground',
    desc: 'My most active space — 30+ live projects spanning AI agents, RAG systems, full-stack apps, system design, microservices, and more. If you only click one link, make it this one.',
    href: 'https://clarkngo.github.io/playground/',
    cta: 'Explore the Playground',
  },
  {
    title: 'CityU Contributions',
    desc: 'A collection of everything I\'ve built, taught, and shipped at City University of Seattle — courses, workshops, AI tools, and research that shaped the program.',
    href: 'https://clarkngo.github.io/cityu-contributions/',
    cta: 'View Contributions',
  },
];

const aiToolsProjects = [
  { title: 'AI Hub',              desc: 'A hub for AI projects and resources.',                              href: 'https://clarkngo.github.io/AI-Hub',                  cta: 'View Project' },
  { title: 'AI Educator Showcase',desc: 'A curated flip-card tour of my sites and tools, framed for educators exploring what\'s possible with AI.', href: 'https://clarkngo.github.io/ai-educator-showcase/', cta: 'View Showcase' },
  { title: 'Prompt Builder',      desc: 'Build, refine, and manage effective prompts.',                      href: 'https://clarkngo.github.io/prompt-builder',          cta: 'View Project' },
  { title: 'Agent Development',   desc: 'A project on agent development.',                                   href: 'https://clarkngo.github.io/agent-development/',      cta: 'View Project' },
  { title: 'Agentic Blueprints',  desc: 'Design patterns and blueprints for building agentic AI systems.',   href: 'https://clarkngo.github.io/agentic-blueprints/',     cta: 'View Project' },
  { title: 'Vibe Coding',         desc: 'Exploring vibe coding workflows and experiments.',                  href: 'https://clarkngo.github.io/vibe-coding/',            cta: 'View Project' },
];

const systemsProjects = [
  { title: 'Microservices',      desc: 'Exploring the world of microservices architecture.',        href: 'https://clarkngo.github.io/microservices',       cta: 'View Project' },
  { title: 'System Design',      desc: 'System design resources and case studies.',                 href: 'https://clarkngo.github.io/system-design',       cta: 'View Project' },
  { title: 'Paper Explained',    desc: 'Explaining complex research papers in plain language.',     href: 'https://clarkngo.github.io/paper-explained',     cta: 'View Project' },
];

const learningProjects = [
  { title: 'The Briefing Room',  desc: 'Curated insights, analyses, and strategic content.',        href: 'https://clarkngo.github.io/the-briefing-room/',  cta: 'View Project' },
  { title: 'Guided Readings',    desc: 'Interactive companions for working through a book alongside the text — not instead of it.', href: 'https://clarkngo.github.io/guided-readings/', cta: 'View Project' },
  { title: 'My Learning Notes',  desc: 'Personal learning notes and write-ups on tech topics.',    href: 'https://clarkngo.github.io/my-learning-notes/',  cta: 'View Notes' },
  { title: 'Tuklas',             desc: 'A project for Tuklas, which means discovery.',             href: 'https://clarkngo.github.io/tuklas/',             cta: 'View Project' },
  { title: 'Infographics',      desc: 'Visual storytelling through data-driven infographics.',      href: 'https://clarkngo.github.io/infographics/',      cta: 'View Project' },
  { title: 'Presentations',     desc: 'Slide decks and talks on tech topics.',                     href: 'https://clarkngo.github.io/presentations/',     cta: 'View Project' },
];

const hobbies = [
  { title: 'Volleyball',   desc: 'A site dedicated to volleyball, my favorite sport.',  href: 'https://clarkngo.github.io/volleyball',   cta: 'View Project' },
  { title: 'Board Games',  desc: 'A personal collection and review of board games.',    href: 'https://clarkngo.github.io/board-games',  cta: 'View Project' },
];

/* metadata for the bespoke themed cards below, used only for search matching */
const spotlightMeta = {
  physicalAi:  { title: 'Physical AI',            desc: 'Where intelligence meets the physical world — autonomous systems, maritime robotics, ROS, simulators, and research at the edge of embodied AI.' },
  hazardMons:  { title: 'HazardMons',              desc: 'Capture. Mutate. Survive. A survival-horror twist on the Pokémon universe — specimen classifications, phase logs, and the full game design breakdown.' },
  oratorLab:   { title: 'Orator Lab',               desc: 'Refine your rhetoric, sharpen your delivery. An AI-powered speech coach that dissects your words, maps rhetorical friction points, and hands you back a better speaker.' },
  lifeWare:    { title: 'LifeWare',                 desc: 'A digital sanctuary for analytical thinkers — mental models, lifestyle frameworks, reflective journals, and wisdom distilled from unexpected places. Slow down. Think deeper.' },
  forwardGame: { title: 'Forward Deployed Game',    desc: 'A forward-deployed engineering playground — rapid prototypes, tactical builds, and web-based game experiments shipped straight from the field.' },
  monolith:    { title: 'Legacy of the Monolith',   desc: 'An epic descent into ancient ruins — uncover the secrets of a fallen civilization, awaken the monolith, and claim the legacy carved in stone.' },
  sysRpg:      { title: 'System Design RPG',        desc: 'A turn-based RPG that teaches system design — build architecture, battle scaling bosses, and level up your skills as an engineer.' },
  scriptedOt:  { title: 'ScriptedOT',               desc: 'Cinematic anchors for OT/ICS security engineering — Chernobyl, Deepwater Horizon, Jurassic Park, and seven more scenes decoded by Purdue Model level, root cause, and IEC 62443 runbook.' },
};

/* ── Component ── */
const Home = () => {
  const aiToolsRef  = useStaggerReveal('reveal', 0.05);
  const systemsRef  = useStaggerReveal('reveal', 0.05);
  const learningRef = useStaggerReveal('reveal', 0.05);
  const hobbiesRef  = useStaggerReveal('reveal', 0.05);
  const workHeadRef = useScrollReveal('reveal');
  const hobbyHeadRef = useScrollReveal('reveal');

  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const matches = (title, desc) => !q || title.toLowerCase().includes(q) || desc.toLowerCase().includes(q);

  const filteredFeatured = featuredProjects.filter(p => matches(p.title, p.desc));
  const visibleSpotlightCount = Object.values(spotlightMeta).filter(m => matches(m.title, m.desc)).length;
  const categories = [
    { label: 'AI & Tools',              items: aiToolsProjects,  ref: aiToolsRef },
    { label: 'Systems & Engineering',   items: systemsProjects,  ref: systemsRef },
    { label: 'Learning & Content',      items: learningProjects, ref: learningRef },
  ];
  const filteredCategories = categories.map(c => ({ ...c, filtered: c.items.filter(p => matches(p.title, p.desc)) }));
  const totalMatches = filteredFeatured.length + visibleSpotlightCount + filteredCategories.reduce((n, c) => n + c.filtered.length, 0);

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

            <div className={styles.searchWrap}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search projects by name or description…"
                className={styles.searchInput}
                aria-label="Search projects"
              />
              {query && (
                <button type="button" className={styles.searchClear} onClick={() => setQuery('')} aria-label="Clear search">×</button>
              )}
            </div>
          </div>

          {totalMatches === 0 && (
            <p className={styles.noResults}>No projects match "{query}".</p>
          )}

          <div className={styles.featuredGrid}>
            {filteredFeatured.map(({ title, desc, href, cta }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={styles.featuredCard}>
                <span className={styles.featuredBadge}>Featured</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className={styles.featuredCta}>{cta} →</span>
              </a>
            ))}
          </div>

          <div className={styles.spotlightGrid}>
            {matches(spotlightMeta.physicalAi.title, spotlightMeta.physicalAi.desc) && (
              <a href="https://clarkngo.github.io/physical-ai/" target="_blank" rel="noopener noreferrer" className={styles.physicalAiCard}>
                <div className={styles.physicalAiRadialGlow} />
                <div className={styles.physicalAiInner}>
                  <div className={styles.physicalAiSonar}>
                    <span className={styles.physicalAiSonarRing} />
                    <span className={`${styles.physicalAiSonarRing} ${styles.physicalAiSonarRing2}`} />
                    <span className={styles.physicalAiSonarDot} />
                  </div>
                  <div className={styles.physicalAiBody}>
                    <span className={styles.physicalAiBadge}>// TELEMETRY ONLINE //</span>
                    <h3 className={styles.physicalAiTitle}>Physical AI</h3>
                    <p className={styles.physicalAiDesc}>{spotlightMeta.physicalAi.desc}</p>
                    <span className={styles.physicalAiCta}>Access System ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.hazardMons.title, spotlightMeta.hazardMons.desc) && (
              <a href="https://clarkngo.github.io/hazard-mons/" target="_blank" rel="noopener noreferrer" className={styles.pokeHazardCard}>
                <div className={styles.pokeHazardInner}>
                  <span className={styles.pokeHazardIcon}>☣</span>
                  <div className={styles.pokeHazardBody}>
                    <span className={styles.pokeHazardBadge}>// VIRAL INCIDENT REPORT //</span>
                    <h3 className={styles.pokeHazardTitle}>HazardMons</h3>
                    <p className={styles.pokeHazardDesc}>{spotlightMeta.hazardMons.desc}</p>
                    <span className={styles.pokeHazardCta}>Access Files ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.oratorLab.title, spotlightMeta.oratorLab.desc) && (
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
                    <p className={styles.oratorLabDesc}>{spotlightMeta.oratorLab.desc}</p>
                    <span className={styles.oratorLabCta}>Enter the Lab ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.lifeWare.title, spotlightMeta.lifeWare.desc) && (
              <a href="https://clarkngo.github.io/life-ware" target="_blank" rel="noopener noreferrer" className={styles.lifeWareCard}>
                <div className={styles.lifeWareGlow} />
                <div className={styles.lifeWareInner}>
                  <div className={styles.lifeWareOrb}>
                    <span className={styles.lifeWareRing} />
                    <span className={`${styles.lifeWareRing} ${styles.lifeWareRing2}`} />
                    <span className={styles.lifeWareDot} />
                  </div>
                  <div className={styles.lifeWareBody}>
                    <span className={styles.lifeWareBadge}>// SANCTUARY ONLINE //</span>
                    <h3 className={styles.lifeWareTitle}>LifeWare</h3>
                    <p className={styles.lifeWareDesc}>{spotlightMeta.lifeWare.desc}</p>
                    <span className={styles.lifeWareCta}>Enter the Sanctuary ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.forwardGame.title, spotlightMeta.forwardGame.desc) && (
              <a href="https://clarkngo.github.io/forward-deployed-game-web/" target="_blank" rel="noopener noreferrer" className={styles.forwardGameCard}>
                <div className={styles.forwardGameGlow} />
                <div className={styles.forwardGameInner}>
                  <div className={styles.forwardGameRadar}>
                    <span className={styles.forwardGameRadarRing} />
                    <span className={`${styles.forwardGameRadarRing} ${styles.forwardGameRadarRing2}`} />
                    <span className={styles.forwardGameRadarDot} />
                  </div>
                  <div className={styles.forwardGameBody}>
                    <span className={styles.forwardGameBadge}>// UNIT DEPLOYED //</span>
                    <h3 className={styles.forwardGameTitle}>Forward Deployed Game</h3>
                    <p className={styles.forwardGameDesc}>{spotlightMeta.forwardGame.desc}</p>
                    <span className={styles.forwardGameCta}>Deploy ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.monolith.title, spotlightMeta.monolith.desc) && (
              <a href="https://clarkngo.github.io/legacy-of-the-monolith-web/" target="_blank" rel="noopener noreferrer" className={styles.monolithCard}>
                <div className={styles.monolithGlow} />
                <div className={styles.monolithInner}>
                  <div className={styles.monolithSlab}>
                    <span className={styles.monolithStone} />
                    <span className={styles.monolithRune} />
                  </div>
                  <div className={styles.monolithBody}>
                    <span className={styles.monolithBadge}>// ARTIFACT AWAKENED //</span>
                    <h3 className={styles.monolithTitle}>Legacy of the Monolith</h3>
                    <p className={styles.monolithDesc}>{spotlightMeta.monolith.desc}</p>
                    <span className={styles.monolithCta}>Enter the Ruins ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.sysRpg.title, spotlightMeta.sysRpg.desc) && (
              <a href="https://clarkngo.github.io/sysdesign-rpg/" target="_blank" rel="noopener noreferrer" className={styles.sysRpgCard}>
                <div className={styles.sysRpgGlow} />
                <div className={styles.sysRpgInner}>
                  <div className={styles.sysRpgTree}>
                    <span className={`${styles.sysRpgNode} ${styles.sysRpgNode1}`} />
                    <span className={`${styles.sysRpgNode} ${styles.sysRpgNode2}`} />
                    <span className={`${styles.sysRpgNode} ${styles.sysRpgNode3}`} />
                    <span className={styles.sysRpgLink1} />
                    <span className={styles.sysRpgLink2} />
                  </div>
                  <div className={styles.sysRpgBody}>
                    <span className={styles.sysRpgBadge}>// QUEST ACTIVE //</span>
                    <h3 className={styles.sysRpgTitle}>System Design RPG</h3>
                    <p className={styles.sysRpgDesc}>{spotlightMeta.sysRpg.desc}</p>
                    <span className={styles.sysRpgCta}>Level Up ↗</span>
                  </div>
                </div>
              </a>
            )}

            {matches(spotlightMeta.scriptedOt.title, spotlightMeta.scriptedOt.desc) && (
              <a href="https://clarkngo.github.io/scripted-ot/" target="_blank" rel="noopener noreferrer" className={styles.scriptedOtCard}>
                <div className={styles.scriptedOtGlow} />
                <div className={styles.scriptedOtInner}>
                  <div className={styles.scriptedOtPanel}>
                    <span className={`${styles.scriptedOtLight} ${styles.scriptedOtLight1}`} />
                    <span className={`${styles.scriptedOtLight} ${styles.scriptedOtLight2}`} />
                    <span className={`${styles.scriptedOtLight} ${styles.scriptedOtLight3}`} />
                  </div>
                  <div className={styles.scriptedOtBody}>
                    <span className={styles.scriptedOtBadge}>// CONTROL ROOM LIVE //</span>
                    <h3 className={styles.scriptedOtTitle}>ScriptedOT</h3>
                    <p className={styles.scriptedOtDesc}>{spotlightMeta.scriptedOt.desc}</p>
                    <span className={styles.scriptedOtCta}>Enter the Control Room ↗</span>
                  </div>
                </div>
              </a>
            )}
          </div>

          {filteredCategories.map(({ label, filtered, ref }) => filtered.length > 0 && (
            <div className={styles.categoryGroup} key={label}>
              <h4 className={styles.categoryLabel}>{label}</h4>
              <div ref={q ? null : ref} className={q ? styles.projectGrid : `${styles.projectGrid} stagger`}>
                {filtered.map(({ title, desc, href, cta }) => (
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
          ))}
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
