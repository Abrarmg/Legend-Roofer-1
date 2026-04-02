import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Only apply animations if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% is visible
    };

    const observerFallbackDelay = 100;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delayAttr = entry.target.getAttribute('data-delay');
          const delay = delayAttr ? parseFloat(delayAttr) * 1000 : 0;
          
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
          } else {
            entry.target.classList.add('is-visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};
