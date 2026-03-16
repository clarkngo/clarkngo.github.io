import { useStaggerReveal } from '../hooks/useScrollReveal';
import styles from './Volunteer.module.css';

const volunteerExperience = [
  {
    title: 'Software Engineer Mentor',
    organization: 'CodeDay, Seattle, WA',
    date: '2024',
    description: ['Guided college students—particularly juniors and seniors—through creating or contributing to real-world, open-source projects.'],
  },
  {
    title: 'Volunteer Mentor',
    organization: 'Empower Youth Network, Duvall, WA',
    date: '2023',
    description: [
      'Guided a high school student over one school year, fostering their personal and academic growth.',
      "Supported the organization's mission to inspire youth to lead safe, healthy, and successful lives.",
      'Provided mentorship in goal setting, problem-solving, and developing leadership skills.',
    ],
  },
  {
    title: 'Volunteer Volleyball Coach',
    organization: 'Cedarcrest High School, Bellevue, WA',
    date: 'Sep 2022 – Present',
    description: [
      'Supported program activities to promote teamwork, discipline, and physical fitness among participants.',
      'Encouraged sportsmanship and a positive attitude on and off the court.',
    ],
  },
  {
    title: 'Volunteer Volleyball Coach',
    organization: 'Sammamish High School, Bellevue, WA',
    date: 'Aug 2021 – Present',
    description: ['Champion King County 2A 2021, 2022', 'Coached high school girls teams'],
  },
  {
    title: 'Volunteer Volleyball Club Coach',
    organization: '15 Under Armor Grey, Seattle, WA',
    date: 'Feb 2021 – May 2022',
    description: [
      'Coached a 15 and under girls team; focused on skill development, game strategy, and teamwork.',
      'Designed and led practice sessions to enhance player performance and readiness for tournaments.',
    ],
  },
  {
    title: 'Volunteer Volleyball Coach',
    organization: 'Odle Middle School, Bellevue, WA',
    date: 'Mar 2022',
    description: ['Coached middle school boys and girls teams; assisted in organizing practice sessions, drills, and game strategies.'],
  },
  {
    title: 'Volunteer Basketball Junior Varsity Coach',
    organization: 'Sammamish High School, Bellevue, WA',
    date: 'Sep 2021 – Dec 2022',
    description: [
      'Fostered a positive and inclusive learning environment to build confidence, teamwork, and sportsmanship.',
      'Emphasized discipline, consistency, and a strong work ethic to support player growth both on and off the court.',
    ],
  },
  {
    title: 'Volunteer Mentor',
    organization: 'CodeDay Washington, Bellevue, WA',
    date: 'Feb 2019',
    description: [
      'Mentored youth aged 12–26 during the event, providing guidance in coding and fostering collaborative learning.',
      'Facilitated an engaging and supportive atmosphere that encouraged creativity, problem-solving, and skill development.',
    ],
  },
  {
    title: 'Volunteer Mentor',
    organization: 'New Tech Northwest, Seattle, WA',
    date: 'Jan 2019',
    description: [
      'Engaged with tech professionals, providing guidance on networking and job search strategies.',
      'Offered advice and mentorship to attendees on building connections and navigating the job market.',
    ],
  },
];

const Volunteer = () => {
  const gridRef = useStaggerReveal('reveal', 0.05);

  return (
    <div className={styles.volunteerExperience}>
      <div className={styles.pageHero}>
        <h2>Volunteer Experience</h2>
        <p>Coaching, mentoring, and community impact</p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.experienceGrid} stagger`} ref={gridRef}>
          {volunteerExperience.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
