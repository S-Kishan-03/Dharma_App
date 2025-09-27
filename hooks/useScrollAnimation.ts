import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook that uses the IntersectionObserver API to detect when an element
 * enters the viewport. It animates the element only once.
 * @returns A ref to attach to the element and a boolean indicating if it's visible.
 */
export const useScrollAnimation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting the viewport, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing the element after it has become visible to prevent re-animation
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger a bit before it's fully in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
};
