import styles from './Workshops.module.css';

const workshops = [
  {
    title: 'Vibe Coding: Building Software by Collaborating with AI',
    organization: 'Self-Published Curriculum',
    date: '2026',
    link: { url: 'https://clarkngo.github.io/vibe-workshop/', label: 'Explore Workshop Site ↗' },
    description: [
      'Designed a four-module workshop curriculum teaching the vibe coding loop: prompt, review, and iterate on real work.',
      'Module 1 (Foundations) covers the mindset shift behind vibe coding and where it belongs versus where it\'s dangerous.',
      'Module 2 (Practice) teaches writing prompts that hold up, reading AI output like a reviewer, and iterating without starting over.',
      'Module 3 (Judgment) addresses when to trust AI output, when to verify it, and what verification means for non-engineers.',
      'Module 4 (Capstone) has participants build, present, and get critiqued on a small real project using everything from Modules 1-3.',
      'Includes supporting resources: a facilitator Teaching Guide, a Responsible Use Policy, an Assessment Bank, and a Prompt Cheat Sheet.',
    ],
  },
  {
    title: 'Workshop Instructor: Mobile Full Stack Development',
    organization: 'City University of Seattle, Seattle, WA',
    date: '2025',
    description: [],
  },
  {
    title: 'Workshop Instructor: Full Stack Development',
    organization: 'City University of Seattle, Seattle, WA',
    date: '2025',
    description: [],
  },
  {
    title: 'Workshop Instructor: AI Engineer Quickstart: Get Up and Running Fast',
    organization: 'City University of Seattle, Seattle, WA',
    date: '2024',
    link: { url: 'https://youtu.be/7A5X-vKg66M', label: 'Watch Workshop Recording ↗' },
    description: [
      'Delivered a two-day workshop on advanced AI concepts, including Retrieval-Augmented Generation (RAG) and its importance in improving large language model responses.',
      'Explained foundational LLM challenges, emphasizing the value of accurate, current, and reliable information retrieval to enhance user trust.',
      'Provided hands-on guidance on implementing RAG workflows and compared approaches like fine-tuning and MLOps integration.',
      'Designed practical examples including a movie search and recommender app to demonstrate cosine similarity, vectorization, and API integration.',
      'Taught participants how to interact with modern LLMs using FastAPI and Ollama servers, decoding streaming responses for real-time applications.',
    ],
  },
  {
    title: 'Workshop Instructor: Data Structures and Algorithms with Python',
    organization: 'City University of Seattle, Seattle, WA',
    date: 'Mar 2019',
    description: [
      'Designed and delivered an engaging workshop using Python to illustrate key data structures and algorithms.',
      'Taught foundational and advanced topics: arrays, linked lists, trees, sorting algorithms, and Big-O analysis.',
      'Guided participants through hands-on coding exercises, fostering problem-solving skills and algorithmic thinking.',
    ],
  },
];

const Workshops = () => {
  const featuredKey = 'Vibe Coding: Building Software by Collaborating with AI';
  const featured = workshops.find(w => w.title === featuredKey);
  const others    = workshops.filter(w => w.title !== featuredKey);

  return (
    <div className={styles.workshops}>
      <div className={styles.pageHero}>
        <h2>Workshops Conducted</h2>
        <p>Teaching AI, full-stack development, and beyond</p>
      </div>

      <div className={styles.content}>
        {featured && (
          <div className={styles.highlightedWorkshop}>
            <p className={styles.organization}>{featured.organization}</p>
            <h3>{featured.title.replace('Workshop Instructor: ', '')}</h3>
            <p className={styles.date}>{featured.date}</p>
            {featured.description.length > 0 && (
              <ul>
                {featured.description.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {featured.link && (
              <a href={featured.link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {featured.link.label}
              </a>
            )}
          </div>
        )}

        <ul className={styles.workshopList}>
          {others.map((exp, i) => (
            <li key={i} className={styles.workshopItem}>
              <h3>{exp.title.replace('Workshop Instructor: ', '')}</h3>
              <p className={styles.organization}>{exp.organization}</p>
              <p className={styles.date}>{exp.date}</p>
              {exp.description.length > 0 && (
                <ul>
                  {exp.description.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {exp.link && (
                <a href={exp.link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {exp.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workshops;
