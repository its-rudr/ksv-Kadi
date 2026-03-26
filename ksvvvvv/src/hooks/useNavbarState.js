import { useState, useEffect } from 'react';

/**
 * Scroll-aware navbar state hook.
 * Returns `scrolled` (true after 10px) and `atTop` (true when at page top).
 */
export function useNavbarState(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // set initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { scrolled, atTop: !scrolled };
}
