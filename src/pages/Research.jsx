import styles from './Research.module.css';

const researchData = {
  journalPublication: [
    'Ngo, C., Chang, J., & Chung, S. (2023). Decreasing the Barrier to Entry for an Open-Source Full-Stack Web Development. ISCAP Conference.',
  ],
  proceedings: [
    'Ngo, C., & Chung, S. (2024). Enterprise AI Course: Cloud-Based Full-Stack DevSecOps with Retrieval-Augmented Generation. UKC 2024 Conference, 238.',
    'Ngo, C., Wang, P., Tran, T., & Chung, S. (2020). Serverless Computing Architecture Security and Quality Analysis for Back-end Development. Journal of The Colloquium for Information Systems Security Education, 7 (1), 44.',
  ],
  conferencePresentation: [
    {
      text: 'Ngo, C., & Chung, S. (2024). Enterprise AI Course: Cloud-Based Full-Stack DevSecOps with Retrieval-Augmented Generation. UKC 2024 Conference, 238.',
      details: 'Presented at UKC 2024 in San Francisco, CA, from August 21 to 24, 2024',
    },
    {
      text: 'Ngo, C., Wang, P., Tran, T., & Chung, S. (2020). Serverless Computing Architecture Security and Quality Analysis for Back-end Development. Journal of The Colloquium for Information Systems Security Education, 7 (1), 44.',
      details: 'Presented at the 5th International Conference on Accounting and Finance (ICOAF-2019). This conference occurred on July 13-14, 2019, at the Grand Tourane Hotel in Da Nang City, Vietnam.',
    },
    {
      text: 'Chung, S., Wang, P., Ngo, C., Tran, T., & Truong, T. (2019). Crossing the Chasm between FinTech and Finance Professionals: A Grounded Analysis of Blockchain and Cloud Technology for Future FinTech Information Systems. The 5th International Conference on Accounting and Finance (ICOAF).',
      details: 'Presented the paper at CISSE 2019 at Las Vegas, Nevada and achieved a significant milestone as the first student-track presentation for the School of Technology & Computing at City University of Seattle.',
    },
  ],
  academicResearchProjects: [
    "2019 Assessment and Approval based on Center for Internet Security's (CIS) Oracle MySQL Community Server 5.7",
    '2019 Cyber Security Risk Assessment for Investment Bank',
    '2019 Security Awareness for Financial Services',
    '2019 Security Policy for Investment Bank',
    '2010 Consumer Price Index, Money Supply, Exchange Rate and GDP by origin: Philippine Setting (2009 -1990) 2010 Analysis of Financial Performance, Position and Competitors: Hewlett Packard Company (2008 – 2006) 2010 Analysis of Financial Performance, Position and Industry Analysis: Lepanto Consolidated Mining Company (2008 – 2002) 2009 Inflation and Personal Consumption Expenditure (PCE): The Philippine Case (2009-2003) 2008 Analysis of Financial Performance and Position: Philippine Long Distance Telephone Company (2008 – 2004)',
  ],
};

const Research = () => {
  return (
    <section className={styles.research}>
      <h2>Research</h2>

      <div className={styles.researchCategory}>
        <h3>Journal Publication</h3>
        {researchData.journalPublication.map((item, index) => (
          <div key={index} className={styles.researchItem}>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className={styles.researchCategory}>
        <h3>Proceedings</h3>
        {researchData.proceedings.map((item, index) => (
          <div key={index} className={styles.researchItem}>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className={styles.researchCategory}>
        <h3>Conference Presentation</h3>
        {researchData.conferencePresentation.map((item, index) => (
          <div key={index} className={styles.researchItem}>
            <p>{item.text}</p>
            <p><em>{item.details}</em></p>
          </div>
        ))}
      </div>

      <div className={styles.researchCategory}>
        <h3>Academic Research Projects</h3>
        {researchData.academicResearchProjects.map((item, index) => (
          <div key={index} className={styles.researchItem}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;