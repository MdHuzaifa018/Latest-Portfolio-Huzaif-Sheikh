import React, { useState, useEffect, useRef } from 'react';

/**
 * LazySection
 * A high-performance wrapper that prevents main-thread rendering lag.
 * It renders a fixed-height skeleton/placeholder to preserve page layout height,
 * and mounts the heavy child component only when it is 400px away from the viewport.
 */
const LazySection = ({ id, children, height = '600px', offset = '400px', className = '' }) => {
  const [hasRendered, setHasRendered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Fallback if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasRendered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRendered(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: `0px 0px ${offset} 0px`, // Load 400px before entering screen
        threshold: 0.01,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.disconnect();
      }
    };
  }, [offset]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={className}
      style={{
        minHeight: hasRendered ? 'auto' : height,
        width: '100%',
        containIntrinsicSize: `auto ${height}`, // Modern CSS optimization to assist browser layout calculations
        contentVisibility: hasRendered ? 'visible' : 'auto', // Skips painting offscreen placeholders
      }}
    >
      {hasRendered ? (
        children
      ) : (
        <div 
          style={{ height }} 
          className="w-full flex items-center justify-center bg-transparent opacity-20"
        />
      )}
    </div>
  );
};

export default React.memo(LazySection);
