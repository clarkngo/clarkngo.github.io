import styles from './Mentor.module.css';

const Mentor = () => {
  return (
    <main className={styles.mentor}>
      <header className={styles.header}>
        <h1 className={styles.title}>Clark Jason Ngo</h1>
        <p className={styles.headline}>AI Engineer & Educator — Helping you bridge the gap between Theory and Industry</p>
      </header>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I am an AI Engineer and Educator with a passion for demystifying complex technology. My
          journey has taken me from finance to full-stack development and now to the cutting edge
          of Artificial Intelligence. I believe anyone can master technical skills with the right
          guidance and a growth mindset.
        </p>
        <p>
          Currently I work as an AI Engineer at City University of Seattle, building RAG-based
          applications and multi-agent systems. Previously I managed the Amazon Apprenticeship
          program, achieving a 93% placement rate for veterans transitioning into tech.
        </p>
      </section>

      <section className={styles.help}>
        <h2>How I Can Help You</h2>

        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <h3>Career Transition & Growth</h3>
            <ul>
              <li><strong>From Non-Tech to Tech:</strong> Guidance on the mindset and technical roadmap to make a successful jump.</li>
              <li><strong>Military to Tech:</strong> Tailored support for veterans and military spouses entering the civilian workforce.</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3>Technical Mastery</h3>
            <ul>
              <li><strong>AI & LLMs:</strong> Building RAG apps, LangChain/Ollama practical workflows, and production concerns.</li>
              <li><strong>Full Stack:</strong> Best practices for MERN/MEAN stacks, REST APIs, and microservices.</li>
              <li><strong>Cloud & DevOps:</strong> Practical AWS guidance, CI/CD, and Linux system administration.</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3>Academic & Open Source</h3>
            <ul>
              <li><strong>Publishing Research:</strong> Structuring papers and navigating conference submissions.</li>
              <li><strong>Open Source:</strong> How to start contributing to projects and build a public portfolio.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.philosophy}>
        <h2>My Mentoring Philosophy</h2>
        <ul>
          <li><strong>Hands-On Learning:</strong> Sessions focus on code reviews, architecture discussions, and practical exercises.</li>
          <li><strong>Psychological Safety:</strong> I create a supportive environment where asking questions early is encouraged.</li>
          <li><strong>Holistic Development:</strong> I coach on soft skills, discipline, and teamwork—values honed through coaching competitive volleyball.</li>
        </ul>
      </section>

      <section className={styles.impact}>
        <h2>Impact & Track Record</h2>
        <ul>
          <li><strong>93% Success Rate:</strong> Led 17-week programs with strong placement outcomes.</li>
          <li><strong>Budget Optimization:</strong> Delivering high-quality education efficiently while improving outcomes.</li>
          <li><strong>Award-Winning Projects:</strong> Mentored students to win competitions and hackathons.</li>
        </ul>
      </section>

      <section className={styles.availability}>
        <h2>Availability</h2>
        <p>I offer 1:1 career coaching (resume review, mock interviews), technical deep dives (code reviews, architecture planning), and workshops on AI and web development.</p>
      </section>

      <section className={styles.tags}>
        <h3>Suggested Tags</h3>
        <div className={styles.tagList}>
          <span>AI Engineering</span>
          <span>Career Transition</span>
          <span>Veterans in Tech</span>
          <span>Full Stack Development</span>
          <span>RAG</span>
          <span>AWS</span>
          <span>Research Mentorship</span>
          <span>Public Speaking</span>
          <span>Volleyball Coaching</span>
        </div>
      </section>
    </main>
  );
};

export default Mentor;
