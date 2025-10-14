import styles from './Proposal.module.css';

const proposals = {
  stc: [
    {
      title: 'Transforming the School of Technology & Computing',
      description: 'A proposal to modernize the curriculum and programs at the School of Technology & Computing at City University of Seattle.',
      proposalLink: 'https://clarkngo.github.io/stc-transformation',
    },
  ],
  grants: [
    {
      title: 'NSF-STEM-K12',
      description: 'A proposal for the NSF-STEM-K12 Program.',
      proposalLink: 'https://clarkngo.github.io/NSF-STEM-K12/',
      grantLink: 'https://www.nsf.gov/funding/opportunities/stem-k-12-nsf-stem-k-12',
    },
    {
      title: 'OpenAI Cybersecurity Grant Program',
      description: 'A proposal for the OpenAI Cybersecurity Grant Program.',
      proposalLink: 'https://clarkngo.github.io/openai-cybersecurity-grant-program/',
      grantLink: 'https://openai.com/index/openai-cybersecurity-grant-program/',
    },
    {
      title: 'AWS Agentic AI call for proposals — Fall 2025',
      description: 'This grant aims to advance agentic AI research by funding the development of open-source tools and research that benefit the broader AI community, or impactful research related to agents.',
      grantLink: 'https://www.amazon.science/research-awards/call-for-proposals/aws-agentic-ai-call-for-proposals-fall-2025',
    },
    {
      title: 'NAIRR AI Education Fellowship at CRA',
      description: "The NAIRR AI Education Fellowship at CRA, funded by the National Science Foundation (NSF), aims to assemble a national cohort of faculty champions to advance undergraduate and master's AI education.",
      grantLink: 'https://cra.org/nairr-pilot-expansion-ai-edu-research-collaboration-network-rcn/#nairr-ai-education-fellowship-at-cra',
    },
  ],
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Proposal = () => {
  return (
    <section className={styles.proposal}>
      <h2>Proposals</h2>

      <div className={styles.proposalCategory}>
        <h3>Proposal STC</h3>
        <ul className={styles.proposalList}>
          {proposals.stc.map((item, index) => (
            <li key={index} className={styles.proposalItem}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className={styles.links}>
                <a href={item.proposalLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View Proposal <ArrowIcon />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.proposalCategory}>
        <h3>Proposal Grants</h3>
        <ul className={styles.proposalList}>
          {proposals.grants.map((item, index) => (
            <li key={index} className={styles.proposalItem}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className={styles.links}>
                {item.proposalLink && (
                  <a href={item.proposalLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Proposal <ArrowIcon />
                  </a>
                )}
                {item.grantLink && (
                  <a href={item.grantLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Grant <ArrowIcon />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Proposal;
