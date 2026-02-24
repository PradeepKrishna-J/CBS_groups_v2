import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (hash) {
        // Handle hash navigation (e.g., /#contact)
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // If element not found, scroll to top
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        // No hash - scroll to top instantly on route change
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
