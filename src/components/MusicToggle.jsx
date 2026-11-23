import { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.css';

/* Background music: on by default, the visitor's on/off choice is remembered in
   localStorage. Browsers block autoplay with sound until the visitor interacts with
   the page, so when music is on but blocked we start it on the first click/key/tap. */
const STORAGE_KEY = 'bgMusic';
const TRACK = `${import.meta.env.BASE_URL}audio/emotional-piano.mp3`;
const VOLUME = 0.35;

const readPref = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'off';
  } catch {
    return true;
  }
};

const writePref = (on) => {
  try {
    localStorage.setItem(STORAGE_KEY, on ? 'on' : 'off');
  } catch {
    /* storage unavailable (private mode etc.) — just don't remember */
  }
};

const MusicToggle = () => {
  const [enabled, setEnabled] = useState(readPref);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);

  // Create the audio element once.
  useEffect(() => {
    const audio = new Audio(TRACK);
    audio.loop = true;
    audio.volume = VOLUME;
    audio.preload = 'auto';
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audioRef.current = null;
    };
  }, []);

  // Keep playback in sync with the preference; if autoplay is blocked, start on first interaction.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!enabled) {
      audio.pause();
      return;
    }

    const events = ['pointerdown', 'keydown', 'touchstart'];
    const cleanup = () => events.forEach((e) => document.removeEventListener(e, onGesture, true));
    function onGesture(e) {
      // The toggle button handles its own clicks.
      if (buttonRef.current && buttonRef.current.contains(e.target)) return;
      cleanup();
      audio.play().catch(() => {});
    }

    audio.play().catch(() => {
      events.forEach((e) => document.addEventListener(e, onGesture, true));
    });
    return cleanup;
  }, [enabled]);

  const toggle = () => {
    const audio = audioRef.current;
    // Music is on but was blocked from autoplaying: this click just starts it.
    if (enabled && audio && audio.paused) {
      audio.play().catch(() => {});
      return;
    }
    const next = !enabled;
    writePref(next);
    setEnabled(next);
  };

  const label = playing ? 'Mute background music' : 'Play background music';

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`${styles.searchButton} ${styles.musicButton}`}
      onClick={toggle}
      aria-label={label}
      aria-pressed={playing}
      title={label}
    >
      {playing ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      )}
    </button>
  );
};

export default MusicToggle;
