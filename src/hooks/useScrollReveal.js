import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the `visible` class is added.
 * Use with the global `.reveal`, `.reveal-left`, or `.reveal-right` CSS classes.
 *
 * @param {string} animClass - CSS class to add for the animation type (default: 'reveal')
 * @param {number} threshold - Visibility threshold 0–1 (default: 0.12)
 */
export function useScrollReveal(animClass = 'reveal', threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(animClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animClass, threshold]);

  return ref;
}

/**
 * Applies scroll reveal to all children of a container as a staggered group.
 * Children should already have the `.reveal` class (or pass animClass).
 */
export function useStaggerReveal(animClass = 'reveal', threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children);
    children.forEach(child => child.classList.add(animClass));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach(child => child.classList.add('visible'));
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [animClass, threshold]);

  return ref;
}
