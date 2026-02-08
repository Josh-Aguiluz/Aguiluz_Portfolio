import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 lg:right-12 z-40 w-16 h-16 bg-[#B8C5B8] dark:bg-[#4B5563] rounded-[16px] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-8 h-8 text-white dark:text-[#E2E8F0]" />
        </button>
      )}
    </>
  );
}
