import styles from './Workshops.module.css';

const workshops = [
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
    videoLink: 'https://youtu.be/7A5X-vKg66M',
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
  const featuredKey = 'Workshop Instructor: AI Engineer Quickstart: Get Up and Running Fast';
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
            {featured.videoLink && (
              <a href={featured.videoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Watch Workshop Recording ↗
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workshops;
