import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import logo from '../assets/mechanized_flame_wolf_head.png';
import SpotlightSearch from './SpotlightSearch';

/* Single top-level links stay flat; everything else is grouped into a dropdown
   so the nav doesn't sprawl across 13 items. */
const navLinks = [
  { to: '/profile', label: 'Profile' },
];

const navGroups = [
  {
    label: 'Work',
    items: [
      { to: '/professional', label: 'Professional' },
      { to: '/research',     label: 'Research' },
      { to: '/volunteer',    label: 'Volunteer' },
      { to: '/workshops',    label: 'Workshops' },
      { to: '/maritime',     label: 'Maritime' },
      { href: 'https://clarkngo.github.io/experience-vault/', label: 'Experience Vault' },
    ],
  },
  {
    label: 'Learn',
    items: [
      { to: '/blogs', label: 'Blogs' },
      { href: 'https://clarkngo.github.io/courses/',           label: 'Courses' },
      { href: 'https://clarkngo.github.io/my-learning-notes/', label: 'Notes' },
      { href: 'https://clarkngo.github.io/concepts/',          label: 'Concepts' },
      { href: 'https://clarkngo.github.io/commands',           label: 'Commands' },
      { href: 'https://clarkngo.github.io/badges/',             label: 'Badges' },
      { href: 'https://clarkngo.github.io/vibe-coding/',        label: 'Vibe Coding' },
    ],
  },
];

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Global search shortcuts: Cmd/Ctrl+K anywhere, or "/" when not typing in a field.
  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      } else if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Close mobile menu / open dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [location]);

  // Close an open dropdown when clicking outside the nav
  useEffect(() => {
    if (openGroup === null) return;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [openGroup]);

  const isGroupActive = (items) =>
    items.some((item) => item.to && item.to === location.pathname);

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

          <div className={styles.headerRight}>
          <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
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

              {navGroups.map((group) => (
                <li key={group.label} className={styles.navGroup}>
                  <button
                    type="button"
                    className={`${styles.navGroupToggle} ${isGroupActive(group.items) ? styles.active : ''}`}
                    onClick={() => setOpenGroup((g) => (g === group.label ? null : group.label))}
                    aria-expanded={openGroup === group.label}
                  >
                    {group.label}
                    <svg
                      className={`${styles.caret} ${openGroup === group.label ? styles.caretOpen : ''}`}
                      width="10" height="10" viewBox="0 0 10 6" fill="none"
                      aria-hidden="true"
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <ul className={`${styles.dropdown} ${openGroup === group.label ? styles.dropdownOpen : ''}`}>
                    {group.items.map((item) => (
                      <li key={item.label}>
                        {item.to ? (
                          <Link
                            to={item.to}
                            className={location.pathname === item.to ? styles.active : ''}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.searchButton}
            onClick={() => setSearchOpen(true)}
            aria-label="Search pages and projects"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
          </div>
        </div>
      </header>

      <SpotlightSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

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
