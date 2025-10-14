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
      'Delivered a two-day workshop focused on advanced Al concepts, including Retrieval-Augmented Generation (RAG) and its importance in improving large language model responses.',
      'Explained foundational challenges of LLMs, emphasizing the value of accurate, current, and reliable information retrieval to enhance user trust and interaction quality.',
      'Provided hands-on guidance on implementing RAG workflows and compared approaches like fine-tuning and MLOps integration for Al applications.',
      'Designed practical examples, including a movie search and recommender app, to demonstrate key concepts like cosine similarity, vectorization, and API integration.',
      'Taught participants how to interact with modern LLMs using FastAPI and Ollama servers, decoding streaming responses for real-time applications. Created and shared resources to encourage continued learning, including GitHub repositories for workshop materials and projects.',
    ],
  },
  {
    title: 'Workshop Instructor: Data Structures and Algorithms with Python',
    organization: 'City University of Seattle, Seattle, WA',
    date: 'Mar 2019',
    description: [
      'Designed and delivered an engaging workshop on data structures and algorithms, using Python to illustrate key concepts.',
      'Taught foundational and advanced topics, including arrays, linked lists, trees, sorting algorithms, and Big-O analysis.',
      'Guided participants through hands-on coding exercises, fostering problem-solving skills and a deeper understanding of algorithmic thinking.',
      'Created a supportive learning environment, encouraging questions and collaborative discussions.',
    ],
  },
];

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Workshops = () => {
  const highlightedWorkshop = workshops.find(w => w.title === 'Workshop Instructor: AI Engineer Quickstart: Get Up and Running Fast');
  const otherWorkshops = workshops.filter(w => w.title !== 'Workshop Instructor: AI Engineer Quickstart: Get Up and Running Fast');

  return (
    <section className={styles.workshops}>
      <h2>Workshops Conducted</h2>

      {highlightedWorkshop && (
        <div className={styles.highlightedWorkshop}>
          <h3>{highlightedWorkshop.title}</h3>
          <p className={styles.organization}>{highlightedWorkshop.organization}</p>
          <p className={styles.date}>{highlightedWorkshop.date}</p>
          {highlightedWorkshop.description.length > 0 && (
            <ul>
              {highlightedWorkshop.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {highlightedWorkshop.videoLink && (
            <a href={highlightedWorkshop.videoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Watch Workshop <ArrowIcon />
            </a>
          )}
        </div>
      )}

      <ul className={styles.workshopList}>
        {otherWorkshops.map((exp, index) => (
          <li key={index} className={styles.workshopItem}>
            <h3>{exp.title}</h3>
            <p className={styles.organization}>{exp.organization}</p>
            <p className={styles.date}>{exp.date}</p>
            {exp.description.length > 0 && (
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {exp.videoLink && (
              <a href={exp.videoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Watch Workshop <ArrowIcon />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Workshops;