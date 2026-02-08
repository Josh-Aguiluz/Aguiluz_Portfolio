import React, { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let currentScroll = 0;
    let targetScroll = 0;

    const smoothScrollStep = () => {
      // Smooth interpolation
      currentScroll += (targetScroll - currentScroll) * 0.1;

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${currentScroll}px)`;
      }

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        animationFrameId = requestAnimationFrame(smoothScrollStep);
      }
    };

    const handleScroll = () => {
      targetScroll = window.scrollY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(smoothScrollStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="will-change-transform">
      {children}
    </div>
  );
}
