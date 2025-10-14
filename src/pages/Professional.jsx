import styles from './Professional.module.css';

const professionalExperience = [
  {
    title: 'AI Engineer',
    company: 'City University of Seattle, Seattle, WA',
    date: 'Jan 2024 - Present',
    description: [
      'Brought to build a search and recommender system with Retrieval Augmented Generation (RAG) capabilities for chat for different initiatives.',
      'Responsible for designing, implementing and deploying RAG-based applications with MLOps.',
      'Technologies used: React Native, ExpressJS, FastAPI, MLflow, Ollama, Gemma, ChromaDB, GitHub Actions, GitHub Codespaces, Amazon EC2',
    ],
  },
  {
    title: 'IT Consultant',
    company: 'Liberty Paper Inc., Manila, Philippines',
    date: 'Nov 2023 - Dec 2023',
    description: [
      'Conducted a comprehensive analysis of existing IT infrastructure and processes to identify enhancement opportunities.',
      'Proposed and strategized the implementation of the following solutions: establishment of a centralized knowledge base for streamlined information access, utilize version control Git and cloud repository GitHub for software development, initiatives for customer service and HR modernization through ServiceDesk, ERP systems modernization using ERPNext for improved operational efficiency, and IT infrastructure upgrade by incorporating VPN and DDNS technologies.',
      "Led the development and execution of the company's strategic plan, aligning business objectives with KPIs to drive growth.",
      'Collaborated with cross-functional teams to ensure alignment between proposed solutions and business objectives.',
      'Technologies used: ERPNext, ServiceDesk, Airtable, Git, GitHub',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'eBay Inc., San Jose, CA',
    date: 'Aug 2021 - Sep 2023',
    description: [
      'Reduced for mean time to identify root cause related to site impacting changes to advertising platform from 1 minute to 10 seconds.',
      'Continuously delivery of features for experiment metadata enhancement project with team size of 5 to enhance A/B testing monitoring.',
      'Analyze business metrics data inaccuracies, such as revenue clicks, impressions, etc. and work with team members to correct the data.',
      'Involved in batch processing using Spring Batch framework to extract data from ServiceNow and other internal APIs and load into Elasticsearch.',
      'Designed Spring Boot microservices to decouple logic from existing monolithic applications.',
      'Developed and designed table view, search function, and validation rules to show changes metadata with React framework and Ant Design.',
      'Configured continuous integration and delivery of applications with Jenkins and eBay auto deployment tool.',
      'Performed on-call work and Root Cause Analysis (RCA) reported by Slack alerts, Grafana, and other monitoring systems.',
      'Utilized Git as local and remote version control platform, GitHub as remote code repository to track branch features and fixes and collaboration, and JIRA to track issues of the project.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Worldwide American, Cleveland, OH',
    date: 'Jan 2021 - Jul 2021',
    description: [
      'Designed and implemented the architecture for a social media ranking platform using React, Java Spring, and MySQL.',
      'Optimized backend service performance, reducing response time by 80% through asynchronous processing and caching mechanisms.',
      'Architected a robust microservices system leveraging Spring Cloud Netflix, including components like API Gateway, Composite Service, Core Service, Discovery Server, Config Server, and Admin Server.',
      'Integrated RabbitMQ for efficient inter-server communication and dynamic configuration updates.',
      'Configured AWS RDS instances with MySQL to establish secure connections for core services.',
      'Deployed backend services on Amazon Elastic Compute Cloud (EC2), ensuring scalability and reliability.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'CodeDay CodeLabs, Seattle, WA',
    date: 'Oct 2020',
    description: [
      'Enhanced functionality of RESTful APIs, ensuring seamless integration and consumption by a MERN stack-based UI.',
      'Implemented route protection and user authentication using JSON Web Tokens (JWT) with Auth0, strengthening application security.',
      'Collaborated with a team to design and develop scalable back-end solutions, adhering to industry best practices.',
    ],
  },
];

const Professional = () => {
  return (
    <section className={styles.professionalExperience}>
      <h2>Professional Experience</h2>
      <div className={styles.experienceGrid}>
        {professionalExperience.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <h3>{exp.title}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.date}>{exp.date}</p>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Professional;