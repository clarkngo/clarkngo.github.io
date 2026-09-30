import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { search, suggestions } from '../data/searchIndex';
import styles from './SpotlightSearch.module.css';

const SpotlightSearch = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => (query.trim() ? search(query) : suggestions), [query]);

  // Reset and focus each time the palette opens; give focus back to the trigger on close.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    setQuery('');
    setActive(0);
    inputRef.current?.focus();
    return () => previous?.focus?.();
  }, [open]);

  // Keep the highlighted row scrolled into view.
  useEffect(() => {
    listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const openItem = (item) => {
    if (!item) return;
    onClose();
    if (item.to) navigate(item.to);
    else window.open(item.href, '_blank', 'noopener,noreferrer');
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      openItem(results[active]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onMouseDown={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.inputRow}>
          <svg className={styles.icon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={onKeyDown}
            placeholder="Search pages and projects"
            role="combobox"
            aria-expanded="true"
            aria-controls="spotlight-results"
            aria-activedescendant={results[active] ? `spotlight-item-${active}` : undefined}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className={styles.esc}>esc</kbd>
        </div>

        {results.length > 0 ? (
          <ul id="spotlight-results" className={styles.results} role="listbox" ref={listRef}>
            {results.map((item, i) => (
              <li
                key={item.to || item.href}
                id={`spotlight-item-${i}`}
                role="option"
                aria-selected={i === active}
                className={`${styles.result} ${i === active ? styles.resultActive : ''}`}
                onMouseMove={() => setActive(i)}
                onClick={() => openItem(item)}
              >
                <span className={styles.resultText}>
                  <span className={styles.resultTitle}>{item.title}</span>
                  <span className={styles.resultDesc}>{item.desc}</span>
                </span>
                <span className={styles.resultMeta}>
                  {item.group}
                  <span aria-hidden="true">{item.href ? ' ↗' : ''}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>No results for &ldquo;{query.trim()}&rdquo;</p>
        )}

        <div className={styles.footer}>
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSearch;
