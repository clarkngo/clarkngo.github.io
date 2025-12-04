import styles from './Mentor.module.css';

const Mentor = () => {
  return (
    <main className={styles.mentor}>
      <header className={styles.headerResume}>
        <h1 className={styles.name}>Clark Jason Ngo</h1>
        <div className={styles.contact}>
          <span>Duvall, WA</span>
          <span> | </span>
          <a href="tel:+14255537113">(425) 553-7113</a>
          <span> | </span>
          <a href="mailto:clarkngo@gmail.com">clarkngo@gmail.com</a>
        </div>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/clarkngo" target="_blank" rel="noopener noreferrer">linkedin.com/in/clarkngo</a>
          <span> | </span>
          <a href="https://github.com/clarkngo" target="_blank" rel="noopener noreferrer">github.com/clarkngo</a>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mentorship & Educational Philosophy</h2>
        <p className={styles.lead}>
          Dedicated Educator and Senior AI Engineer with an MBA and MS in Computer Science. Proven
          track record in mentoring diverse populations — military veterans, college students, and
          youth. Expert in designing hands-on curricula (AI, Full Stack, DevOps) and fostering
          growth mindsets through structured coaching and peer leadership.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Educational Leadership & Instruction</h2>

        <article className={styles.job}>
          <h3>Workshop Instructor | City University of Seattle</h3>
          <div className={styles.meta}>Seattle, WA | 2019 – Present</div>
          <ul>
            <li><strong>AI & Engineering Instruction:</strong> Delivered workshops including "AI Engineer Quickstart", teaching RAG and LLM concepts.</li>
            <li><strong>Curriculum Design:</strong> Designed practical examples (recommender apps) to demonstrate vectorization and API integration.</li>
            <li><strong>Resource Creation:</strong> Published GitHub repositories and resources to support continued student learning.</li>
            <li><strong>Foundational Mentoring:</strong> Led Data Structures and Algorithms workshops with hands-on coding exercises.</li>
            <li><strong>Current Focus:</strong> Developing hands-on modules integrating AWS Bedrock and GenAI APIs into labs.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Amazon Apprenticeship Program Manager | City University of Seattle</h3>
          <div className={styles.meta}>Seattle, WA | Jan 2020 – Mar 2021</div>
          <ul>
            <li><strong>Program Leadership:</strong> Managed a yearly 17-week technical program for veterans and spouses.</li>
            <li><strong>Mentorship at Scale:</strong> Led instructors and TAs to deliver high-quality education.</li>
            <li><strong>Curriculum Development:</strong> Built courses in sysadmin, programming, databases, and full-stack web development.</li>
            <li><strong>Student Success:</strong> Achieved a 93% placement rate into OJT with Amazon AWS.</li>
            <li><strong>Operational Efficiency:</strong> Reduced operational budget by 40% through workload optimization.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Computer Science Instructor | City University of Seattle</h3>
          <div className={styles.meta}>Seattle, WA | Jan 2020 – Mar 2021</div>
          <ul>
            <li>Taught Full-Stack Web Development (MEAN), Python, Machine Learning, and Cybersecurity.</li>
            <li>Introduced low-code tooling (Mendix) to accelerate student application development.</li>
          </ul>
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Dedicated Mentorship & Community Service</h2>

        <article className={styles.job}>
          <h3>Software Engineer Mentor | CodeDay</h3>
          <div className={styles.meta}>Seattle, WA | 2024</div>
          <ul>
            <li>Guided college students contributing to open-source projects and building practical portfolios.</li>
            <li>Provided career guidance to help bridge classroom learning and industry expectations.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Leadership in Smart and Secure Computing Research Group | Center for IA Education</h3>
          <div className={styles.meta}>Seattle, WA | Dec 2018</div>
          <ul>
            <li>Peer mentoring and community-building; contributed to CityU Tech Clubs and Secure Coding Club activities.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Volunteer Mentor | Empower Youth Network</h3>
          <div className={styles.meta}>Duvall, WA | 2023</div>
          <ul>
            <li>Mentored a high school student over a school year on goal setting, problem solving, and leadership.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Volunteer Mentor | New Tech Northwest & CodeDay Washington</h3>
          <div className={styles.meta}>Seattle, WA | 2019</div>
          <ul>
            <li>Mentored youth (ages 12–26) and advised on professional networking and job market navigation.</li>
          </ul>
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Experience (Mentoring Focus)</h2>

        <article className={styles.job}>
          <h3>AI Engineer | City University of Seattle</h3>
          <div className={styles.meta}>Seattle, WA | Jan 2024 – Present</div>
          <ul>
            <li>Built "AI Hub", a portfolio of AI apps to translate complex concepts into approachable modules for learners.</li>
            <li>Pursuing AWS Generative AI Certification to strengthen curriculum design.</li>
            <li>Developed Python-based simulation tools for student exercises.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Software Engineer II | eBay Inc.</h3>
          <div className={styles.meta}>San Jose, CA | Aug 2021 – Sep 2023</div>
          <ul>
            <li>Onboarded new hires, led code reviews, and contributed to team development processes.</li>
            <li>Influenced cross-functional teams on site-impacting changes through data-driven guidance.</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3>Software Engineer | Worldwide American</h3>
          <div className={styles.meta}>Cleveland, OH | Jan 2021 – Jul 2021</div>
          <ul>
            <li>Spearheaded staff sourcing and onboarding initiatives.</li>
          </ul>
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Athletic Coaching (Leadership & Soft Skills)</h2>
        <p>Leveraging sports to teach discipline, resilience, and teamwork to youth.</p>
        <ul>
          <li><strong>Volunteer Volleyball Coach:</strong> Cedarcrest & Sammamish High School (2021–Present)</li>
          <li><strong>Volunteer Basketball Coach:</strong> Sammamish High School (2021–2022)</li>
          <li><strong>Club Coach:</strong> 15 Under Armor Grey (2021–2022)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education & Certifications</h2>
        <ul>
          <li><strong>MBA</strong>, City University of Seattle (GPA 3.9)</li>
          <li><strong>MS Computer Science</strong>, City University of Seattle (GPA 3.9)</li>
          <li>AWS Cloud Practitioner</li>
          <li>CompTIA Linux+</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Content Creation & Knowledge Sharing</h2>
        <ul>
          <li><strong>YouTube (Clark Tech Talks):</strong> Tutorials on System Admin, Spring Boot, Full Stack development (70k+ views).</li>
          <li><strong>Technical Blogging:</strong> 20+ articles on FreeCodeCamp, Medium, Dev.to.</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <p>If you'd like, I can also draft a cover letter that highlights your "Vibe Coding" philosophy or your transition from industry to education.</p>
      </section>
    </main>
  );
};

export default Mentor;
