import { useEffect, useRef } from "react";

type UseSwipeProps = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
};

export const useSwipe = (
  ref: React.RefObject<HTMLDivElement | null>,
  { onSwipeLeft, onSwipeRight, threshold = 50 }: UseSwipeProps
) => {
  const startX = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX.current - endX;

      if (diff > threshold) {
        onSwipeLeft?.();
      } else if (diff < -threshold) {
        onSwipeRight?.();
      }
    };

    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [ref, onSwipeLeft, onSwipeRight, threshold]);
};