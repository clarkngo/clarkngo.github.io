import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';
import logo from '../assets/mechanized_flame_wolf_head.png';

const Layout = () => {

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Mechanized Flame Wolf Head Logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/proposal">Proposal</Link></li>
            <li><Link to="/professional">Professional</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/workshops">Workshops</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li>
              <a href="https://clarkngo.github.io/blogs/" target="_blank" rel="noopener noreferrer">
                Blogs
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Clark Ngo. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
