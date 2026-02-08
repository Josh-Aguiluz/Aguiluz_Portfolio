import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title based on route
    const titles: { [key: string]: string } = {
      '/': 'Josh Andrei Aguiluz - Backend Developer Portfolio',
      '/about': 'About Me - Josh Andrei Aguiluz',
      '/projects': 'Projects - Josh Andrei Aguiluz',
      '/resume': 'Resume - Josh Andrei Aguiluz',
      '/contact': 'Contact - Josh Andrei Aguiluz',
    };

    document.title = titles[location.pathname] || 'Josh Andrei Aguiluz - Portfolio';
  }, [location.pathname]);

  return <>{children}</>;
}