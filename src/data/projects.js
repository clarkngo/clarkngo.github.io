/* Project data shared by the Home page and the global Spotlight search. */
export const featuredProjects = [
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

export const aiToolsProjects = [
  { title: 'AI Hub',              desc: 'A hub for AI projects and resources.',                              href: 'https://clarkngo.github.io/AI-Hub',                  cta: 'View Project' },
  { title: 'AI Educator Showcase',desc: 'A curated flip-card tour of my sites and tools, framed for educators exploring what\'s possible with AI.', href: 'https://clarkngo.github.io/ai-educator-showcase/', cta: 'View Showcase' },
  { title: 'Prompt Builder',      desc: 'Build, refine, and manage effective prompts.',                      href: 'https://clarkngo.github.io/prompt-builder',          cta: 'View Project' },
  { title: 'Agent Development',   desc: 'A project on agent development.',                                   href: 'https://clarkngo.github.io/agent-development/',      cta: 'View Project' },
  { title: 'The Harness Era',    desc: 'A plain-language tour of how chatbots became agents — and why the model is only half the product.', href: 'https://clarkngo.github.io/the-harness-era/', cta: 'View Project' },
  { title: 'Agentic Blueprints', desc: 'Design patterns and blueprints for building agentic AI systems.',   href: 'https://clarkngo.github.io/agentic-blueprints/',     cta: 'View Project' },
  { title: 'Vibe Coding',         desc: 'Exploring vibe coding workflows and experiments.',                  href: 'https://clarkngo.github.io/vibe-coding/',            cta: 'View Project' },
  { title: 'Scaling for AI Safety', desc: 'Beginner-friendly working prototypes for multi-agent AI safety: a testbed that runs simulated agents, and a pipeline that evaluates their logs.', href: 'https://clarkngo.github.io/scaling-for-ai-safety/', cta: 'View Project' },
  { title: 'Site Blueprint',     desc: 'A catalog of sites and pages as flip cards, each with a rebuild prompt, plus a generator for a master prompt for a new site.', href: 'https://clarkngo.github.io/site-blueprint/', cta: 'View Project' },
  { title: 'AI Security Atlas',  desc: 'An interactive threat modeling map from adversarial vectors through vulnerabilities to guardrails, covering agentic MCP workflows, RAG pipelines, and LLM application defense.', href: 'https://clarkngo.github.io/ai-sec-atlas/', cta: 'View Atlas' },
  { title: 'Problem Atlas',     desc: 'An interactive map from industry to role to task scenario, ending in a diagnosis of AI, process, automation, or requirements-gap solutions.', href: 'https://clarkngo.github.io/problem-atlas/', cta: 'View Atlas' },
];

export const systemsProjects = [
  { title: 'Microservices',      desc: 'Exploring the world of microservices architecture.',        href: 'https://clarkngo.github.io/microservices',       cta: 'View Project' },
  { title: 'System Design',      desc: 'System design resources and case studies.',                 href: 'https://clarkngo.github.io/system-design',       cta: 'View Project' },
  { title: 'System Design Atlas', desc: 'Walk challenges, solutions, and blockers for common scale scenarios.', href: 'https://clarkngo.github.io/sysdesign-atlas/', cta: 'View Atlas' },
  { title: 'Paper Explained',    desc: 'Explaining complex research papers in plain language.',     href: 'https://clarkngo.github.io/paper-explained',     cta: 'View Project' },
];

export const learningProjects = [
  { title: 'The Briefing Room',  desc: 'Curated insights, analyses, and strategic content.',        href: 'https://clarkngo.github.io/the-briefing-room/',  cta: 'View Project' },
  { title: 'Guided Readings',    desc: 'Interactive companions for working through a book alongside the text — not instead of it.', href: 'https://clarkngo.github.io/guided-readings/', cta: 'View Project' },
  { title: 'My Learning Notes',  desc: 'Personal learning notes and write-ups on tech topics.',    href: 'https://clarkngo.github.io/my-learning-notes/',  cta: 'View Notes' },
  { title: 'Tuklas',             desc: 'A project for Tuklas, which means discovery.',             href: 'https://clarkngo.github.io/tuklas/',             cta: 'View Project' },
  { title: 'Infographics',      desc: 'Visual storytelling through data-driven infographics.',      href: 'https://clarkngo.github.io/infographics/',      cta: 'View Project' },
  { title: 'Presentations',     desc: 'Slide decks and talks on tech topics.',                     href: 'https://clarkngo.github.io/presentations/',     cta: 'View Project' },
  { title: 'Color Communication', desc: 'A private, in-browser assessment of your communication blend, plus practice shaping the same message for blue, green, yellow, and red preferences.', href: 'https://clarkngo.github.io/color-communication/', cta: 'View Project' },
  { title: 'Ebooks',            desc: 'Original fiction. Pick a title and read it online, no signup required.', href: 'https://clarkngo.github.io/ebooks/', cta: 'View Shelf' },
  { title: 'First Responders',  desc: 'Duty Board — a curated resource hub for fire, EMS, and police: training, wellness support, field standards, and agency directories.', href: 'https://clarkngo.github.io/first-responders/', cta: 'View Duty Board' },
];

export const hobbyProjects = [
  { title: 'Volleyball',   desc: 'A site dedicated to volleyball, my favorite sport.',  href: 'https://clarkngo.github.io/volleyball',   cta: 'View Project' },
  { title: 'Board Games',  desc: 'A personal collection and review of board games.',    href: 'https://clarkngo.github.io/board-games',  cta: 'View Project' },
  { title: 'Workouts',     desc: 'A floor reference for cable walks, plyometrics, foam rolling, explosiveness, medicine-ball hip work, and kettlebells.', href: 'https://clarkngo.github.io/workouts/', cta: 'View Project' },
];

/* metadata for the bespoke themed cards on Home (hand-written JSX), used for search matching
   and the global Spotlight search — keep href/to in sync with the card links */
export const spotlightMeta = {
  physicalAi:  { href: 'https://clarkngo.github.io/physical-ai/', title: 'Physical AI',            desc: 'Where intelligence meets the physical world — autonomous systems, maritime robotics, ROS, simulators, and research at the edge of embodied AI.' },
  hazardMons:  { href: 'https://clarkngo.github.io/hazard-mons/', title: 'HazardMons',              desc: 'Capture. Mutate. Survive. A survival-horror twist on the Pokémon universe — specimen classifications, phase logs, and the full game design breakdown.' },
  oratorLab:   { href: 'https://clarkngo.github.io/orator-lab/', title: 'Orator Lab',               desc: 'Refine your rhetoric, sharpen your delivery. An AI-powered speech coach that dissects your words, maps rhetorical friction points, and hands you back a better speaker.' },
  lifeWare:    { href: 'https://clarkngo.github.io/life-ware', title: 'LifeWare',                 desc: 'A digital sanctuary for analytical thinkers — mental models, lifestyle frameworks, reflective journals, and wisdom distilled from unexpected places. Slow down. Think deeper.' },
  forwardGame: { href: 'https://clarkngo.github.io/forward-deployed-game-web/', title: 'Forward Deployed Game',    desc: 'A forward-deployed engineering playground — rapid prototypes, tactical builds, and web-based game experiments shipped straight from the field.' },
  monolith:    { href: 'https://clarkngo.github.io/legacy-of-the-monolith-web/', title: 'Legacy of the Monolith',   desc: 'An epic descent into ancient ruins — uncover the secrets of a fallen civilization, awaken the monolith, and claim the legacy carved in stone.' },
  sysRpg:      { href: 'https://clarkngo.github.io/sysdesign-rpg/', title: 'System Design RPG',        desc: 'A turn-based RPG that teaches system design — build architecture, battle scaling bosses, and level up your skills as an engineer.' },
  scriptedOt:  { href: 'https://clarkngo.github.io/scripted-ot/', title: 'ScriptedOT',               desc: 'Cinematic anchors for OT/ICS security engineering — Chernobyl, Deepwater Horizon, Jurassic Park, and seven more scenes decoded by Purdue Model level, root cause, and IEC 62443 runbook.' },
  maritime:    { to: '/maritime', title: 'Maritime',                 desc: 'Fundamentals, operational technology, and Physical AI at sea — vessel systems, ECDIS and engine control, and autonomous maritime robotics.' },
};
