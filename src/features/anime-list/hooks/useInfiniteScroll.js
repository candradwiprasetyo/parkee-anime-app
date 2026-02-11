import { useEffect } from "react";

export const useInfiniteScroll = (targetRef, onIntersect, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0,
      },
    );

    const currentTarget = targetRef.current;
    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [targetRef, onIntersect, enabled]);
};
