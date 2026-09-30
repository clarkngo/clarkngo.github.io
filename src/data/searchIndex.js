import {
  featuredProjects, aiToolsProjects, systemsProjects, learningProjects, hobbyProjects, spotlightMeta,
} from './projects';

/* Everything the global Spotlight search can open. Each entry has a `title`, a `desc`, a
   `group` label, optional extra `keywords`, and either `to` (internal route) or `href`
   (external site). Projects come from src/data/projects.js, so a new Home card is
   searchable automatically; only pages and nav links are listed by hand here. */

const pages = [
  { to: '/profile',      title: 'Profile',      desc: 'Bio, impact highlights, and links to my professional, research, volunteer, and mentoring work.', keywords: 'about me resume cv recruiter linkedin github contact email' },
  { to: '/professional', title: 'Professional', desc: 'Work history, roles, and validated experience.', keywords: 'experience resume ebay spring microservices elasticsearch opensearch servicenow control center on-call worldwide american city university of seattle liberty paper codeday rag' },
  { to: '/research',     title: 'Research',     desc: 'Publications, presentations, and academic projects.', keywords: 'papers publications academic' },
  { to: '/volunteer',    title: 'Volunteer',    desc: 'Community work, coaching, and outreach activities.', keywords: 'volleyball basketball coach codeday empower youth network mentor' },
  { to: '/mentor',       title: 'Mentor',       desc: 'Mentoring initiatives, mentee outcomes, and programs.', keywords: 'educator teaching philosophy veterans students' },
  { to: '/workshops',    title: 'Workshops',    desc: 'Teaching AI, full-stack development, and beyond.', keywords: 'teaching bootcamp training' },
  { to: '/blogs',        title: 'Blogs',        desc: 'Thought Journal: my blog.', keywords: 'articles posts writing' },
];

const links = [
  { href: 'https://clarkngo.github.io/courses/',    title: 'Courses',  desc: 'Course catalog: master AI, web development, data science, and more, built for complete beginners.' },
  { href: 'https://clarkngo.github.io/concepts/',   title: 'Concepts', desc: 'Visual-first technical guides.' },
  { href: 'https://clarkngo.github.io/commands',    title: 'Commands', desc: 'Command lookup.' },
  { href: 'https://clarkngo.github.io/badges/',     title: 'Badges',   desc: 'Digital badges and certifications.' },
];

const asEntries = (items, group) => items.map((item) => ({ ...item, group }));

const raw = [
  ...asEntries(pages, 'Page'),
  ...asEntries(featuredProjects, 'Featured'),
  ...asEntries(Object.values(spotlightMeta), 'Project'),
  ...asEntries(aiToolsProjects, 'AI & Tools'),
  ...asEntries(systemsProjects, 'Systems & Engineering'),
  ...asEntries(learningProjects, 'Learning & Content'),
  ...asEntries(hobbyProjects, 'Hobbies'),
  ...asEntries(links, 'Link'),
];

/* De-duplicate on destination (Maritime and Vibe Coding appear in more than one place). */
const seen = new Set();
export const searchIndex = raw.filter((item) => {
  const key = (item.to || item.href).replace(/\/$/, '').toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
}).map((item) => ({
  ...item,
  haystack: {
    title: item.title.toLowerCase(),
    keywords: (item.keywords || '').toLowerCase(),
    desc: (item.desc || '').toLowerCase(),
  },
}));

/* True when `word` starts a word in `text` (so "sys" matches "systems" but not "ecosystems"). */
const startsAWord = (text, word) => new RegExp(`(^|[^a-z0-9])${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(text);

/* Every query word must match somewhere. Title matches outrank keywords, which outrank the
   description; a title that starts with the word ranks highest. */
export const search = (query, limit = 8) => {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const scored = [];
  for (const item of searchIndex) {
    const { title, keywords, desc } = item.haystack;
    let score = 0;
    let all = true;
    for (const w of words) {
      if (title.startsWith(w)) score += 100;
      else if (title.split(/[\s\-&]+/).some((t) => t.startsWith(w))) score += 80;
      else if (title.includes(w)) score += 60;
      else if (startsAWord(keywords, w)) score += 30;
      else if (startsAWord(desc, w)) score += 10;
      else { all = false; break; }
    }
    if (all) scored.push({ item, score });
  }
  scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
  return scored.slice(0, limit).map((s) => s.item);
};

/* Shown before the user types anything. */
export const suggestions = searchIndex.filter((i) => i.group === 'Page');
