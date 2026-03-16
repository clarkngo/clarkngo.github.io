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
      description: 'This grant aims to advance agentic AI research by funding open-source tools and research that benefit the broader AI community.',
      grantLink: 'https://www.amazon.science/research-awards/call-for-proposals/aws-agentic-ai-call-for-proposals-fall-2025',
    },
    {
      title: 'NAIRR AI Education Fellowship at CRA',
      description: "The NAIRR AI Education Fellowship at CRA, funded by NSF, assembles a national cohort of faculty champions to advance undergraduate and master's AI education.",
      grantLink: 'https://cra.org/nairr-pilot-expansion-ai-edu-research-collaboration-network-rcn/#nairr-ai-education-fellowship-at-cra',
    },
  ],
};

const Proposal = () => {
  return (
    <div className={styles.proposal}>
      <div className={styles.pageHero}>
        <h2>Proposals</h2>
        <p>Grants, initiatives, and institutional proposals</p>
      </div>

      <div className={styles.content}>
        <div className={styles.proposalCategory}>
          <h3>STC Proposals</h3>
          <ul className={styles.proposalList}>
            {proposals.stc.map((item, i) => (
              <li key={i} className={styles.proposalItem}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className={styles.links}>
                  <a href={item.proposalLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Proposal
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.proposalCategory}>
          <h3>Grant Proposals</h3>
          <ul className={styles.proposalList}>
            {proposals.grants.map((item, i) => (
              <li key={i} className={styles.proposalItem}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className={styles.links}>
                  {item.proposalLink && (
                    <a href={item.proposalLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      View Proposal
                    </a>
                  )}
                  {item.grantLink && (
                    <a href={item.grantLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      View Grant
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
