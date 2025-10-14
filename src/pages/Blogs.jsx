import styles from './Blogs.module.css';

const blogPosts = [
  {
    title: 'How to make sure your MySQL database is secured',
    platform: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/news/cjn-is-your-mysql-secured-7793e5444cf5/',
  },
  {
    title: 'How I Passed the CompTIA Linux+ Exam',
    platform: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/news/the-linux-exam-story/',
  },
  {
    title: 'Understanding Hello World in Node.js',
    platform: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/news/cjn-understanding-hello-world-in-nodejs/',
  },
  {
    title: "Want to understand the MEAN Stack quickly? Here's documentation ...",
    platform: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/news/cjn-understanding-mean-stack-through-diagrams/',
  },
  {
    title: 'How to teach yourself to learn again',
    platform: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/news/cjn-how-to-teach-yourself-to-learn-again/',
  },
  {
    title: "Why I abandoned my MBA to get a master's in Computer Science",
    platform: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/news/cjn-why-i-abandoned-my-mba-to-get-a-masters-in-computer-science/',
  },
  {
    title: 'CASE STUDY - SLACK: SCALING TO HUNDRED THOUSAND USERS',
    platform: 'DEV Community',
    link: 'https://dev.to/clarkngo/case-study-slack-scaling-to-hundred-thousand-users-m86',
  },
  {
    title: 'SIMPLE AND BETTER PULL REQUESTS',
    platform: 'DEV Community',
    link: 'https://dev.to/clarkngo/simple-and-better-pull-requests-469o',
  },
  {
    title: 'WHY USE JAVA - MAP.COMPUTEIFABSENT',
    platform: 'DEV Community',
    link: 'https://dev.to/clarkngo/why-use-java-mapcomputeifabsent-4945',
  },
  {
    title: 'How to solve Group Anagrams problem',
    platform: 'DEV Community',
    link: 'https://dev.to/clarkngo/group-anagrams-j91',
  },
  {
    title: 'LOGIC EXPLAINED: MEETING SCHEDULER - LEETCODE [JAVA] USING TWO POINTERS',
    platform: 'DEV Community',
    link: 'https://dev.to/clarkngo/logic-explained-meeting-scheduler-leetcode-java-using-two-pointers-4881',
  },
  {
    title: 'Logic Explained: Meeting Scheduler - Leetcode [Java] using Priority ...',
    platform: 'DEV Community',
    link: 'https://dev.to/clarkngo/logic-explained-meeting-room-ii-leetcode-java-1gh5',
  },
];

const Blogs = () => {
  return (
    <section className={styles.blogs}>
      <h2>My Writings</h2>
      <ul className={styles.blogList}>
        {blogPosts.map((post, index) => (
          <li key={index} className={styles.blogItem}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.platform}>{post.platform}</div>
              <h4>{post.title}</h4>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
