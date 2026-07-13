import { useRef, useState, useEffect, useCallback } from 'react';

export default function MobileSlider({ children, desktopCols = 4, autoPlay = true, autoPlayInterval = 3500 }) {
  const items = Array.isArray(children) ? children : [children];
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const childWidth = container.firstElementChild?.offsetWidth || 1;
    const gap = 16;
    const index = Math.round(scrollLeft / (childWidth + gap));
    setActiveIndex(Math.min(index, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index];
    if (child) {
      const containerLeft = container.getBoundingClientRect().left;
      const childLeft = child.getBoundingClientRect().left;
      const relativeLeft = childLeft - containerLeft + container.scrollLeft;
      container.scrollTo({
        left: relativeLeft,
        behavior: 'smooth'
      });
    }
  }, []);

  // Auto slide effect on mobile screens
  useEffect(() => {
    if (!isMobile || !autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      scrollTo(nextIndex);
      setActiveIndex(nextIndex);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isMobile, autoPlay, autoPlayInterval, activeIndex, items.length, scrollTo]);

  const gridClass =
    desktopCols === 2
      ? 'sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0'
      : desktopCols === 3
        ? 'sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3'
        : 'sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4';

  return (
    <div>
      <div
        ref={scrollRef}
        className={`mobile-slider no-scrollbar flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth ${gridClass}`}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className="mobile-slide min-w-[280px] w-[75vw] max-w-[320px] shrink-0 snap-start sm:min-w-0 sm:w-auto sm:max-w-none"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Pagination dots – only on mobile */}
      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-7 bg-chilli'
                : 'w-2.5 bg-olivewood/25 hover:bg-olivewood/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

