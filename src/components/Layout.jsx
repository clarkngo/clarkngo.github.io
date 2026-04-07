import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import logo from '../assets/mechanized_flame_wolf_head.png';

const navLinks = [
  { to: '/proposal',     label: 'Proposal' },
  { to: '/profile',      label: 'Profile' },
  { to: '/professional', label: 'Professional' },
  { to: '/research',     label: 'Research' },
  { to: '/volunteer',    label: 'Volunteer' },
  { to: '/workshops',    label: 'Workshops' },
  { to: '/courses',      label: 'Courses' },
];

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className={styles.layout}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Clark Ngo logo" />
              <span>Clark Ngo</span>
            </Link>
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <ul>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={location.pathname === to ? styles.active : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://clarkngo.github.io/my-learning-notes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Notes
                </a>
              </li>
              <li>
                <a
                  href="https://clarkngo.github.io/concepts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Concepts
                </a>
              </li>
              <li>
                <a
                  href="https://clarkngo.github.io/commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commands
                </a>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerLogo}>Clark Ngo</p>
          <p className={styles.footerTagline}>Software Architect &amp; AI Engineer</p>
          <p className={styles.footerCopy}>&copy; {new Date().getFullYear()} Clark Ngo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
