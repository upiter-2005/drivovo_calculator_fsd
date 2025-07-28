import { useEffect, useState } from 'react';

export function useIsVisible(ref: React.RefObject<Element | null>, threshold = 0.45) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isVisible;
}
