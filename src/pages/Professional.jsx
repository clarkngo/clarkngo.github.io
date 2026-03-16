import { useStaggerReveal } from '../hooks/useScrollReveal';
import styles from './Professional.module.css';

const professionalExperience = [
  {
    title: 'AI Engineer',
    company: 'City University of Seattle, Seattle, WA',
    date: 'Jan 2024 – Present',
    description: [
      'Brought to build a search and recommender system with Retrieval Augmented Generation (RAG) capabilities for chat for different initiatives.',
      'Responsible for designing, implementing and deploying RAG-based applications with MLOps.',
      'Technologies used: React Native, ExpressJS, FastAPI, MLflow, Ollama, Gemma, ChromaDB, GitHub Actions, GitHub Codespaces, Amazon EC2',
    ],
  },
  {
    title: 'IT Consultant',
    company: 'Liberty Paper Inc., Manila, Philippines',
    date: 'Nov 2023 – Dec 2023',
    description: [
      'Conducted a comprehensive analysis of existing IT infrastructure and processes to identify enhancement opportunities.',
      'Proposed solutions: centralized knowledge base, Git/GitHub version control, ServiceDesk for HR/customer service, ERPNext for ERP modernization, VPN and DDNS infrastructure upgrades.',
      "Led the development and execution of the company's strategic plan, aligning business objectives with KPIs to drive growth.",
      'Collaborated with cross-functional teams to ensure alignment between proposed solutions and business objectives.',
      'Technologies used: ERPNext, ServiceDesk, Airtable, Git, GitHub',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'eBay Inc., San Jose, CA',
    date: 'Aug 2021 – Sep 2023',
    description: [
      'Reduced mean time to identify root cause related to site-impacting changes to advertising platform from 1 minute to 10 seconds.',
      'Continuously delivered features for experiment metadata enhancement project (team of 5) to enhance A/B testing monitoring.',
      'Analyzed business metrics data inaccuracies (revenue, clicks, impressions) and worked with teams to correct the data.',
      'Involved in batch processing using Spring Batch to extract data from ServiceNow and other internal APIs into Elasticsearch.',
      'Designed Spring Boot microservices to decouple logic from existing monolithic applications.',
      'Developed table view, search function, and validation rules to show changes metadata with React and Ant Design.',
      'Configured CI/CD with Jenkins and eBay auto deployment tool.',
      'Performed on-call work and Root Cause Analysis (RCA) via Slack alerts, Grafana, and other monitoring systems.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Worldwide American, Cleveland, OH',
    date: 'Jan 2021 – Jul 2021',
    description: [
      'Designed and implemented architecture for a social media ranking platform using React, Java Spring, and MySQL.',
      'Optimized backend service performance, reducing response time by 80% through async processing and caching.',
      'Architected a microservices system using Spring Cloud Netflix: API Gateway, Composite Service, Core Service, Discovery Server, Config Server, Admin Server.',
      'Integrated RabbitMQ for efficient inter-server communication and dynamic configuration updates.',
      'Configured AWS RDS instances with MySQL for secure connections to core services.',
      'Deployed backend services on Amazon EC2, ensuring scalability and reliability.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'CodeDay CodeLabs, Seattle, WA',
    date: 'Oct 2020',
    description: [
      'Enhanced functionality of RESTful APIs, ensuring seamless integration and consumption by a MERN stack-based UI.',
      'Implemented route protection and user authentication using JWT with Auth0.',
      'Collaborated with a team to design and develop scalable back-end solutions, adhering to industry best practices.',
    ],
  },
];

const Professional = () => {
  const timelineRef = useStaggerReveal('reveal', 0.05);

  return (
    <div className={styles.professionalExperience}>
      <div className={styles.pageHero}>
        <h2>Professional Experience</h2>
        <p>Software Architect &amp; AI Engineer</p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.timeline} stagger`} ref={timelineRef}>
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
      </div>
    </div>
  );
};

export default Professional;
