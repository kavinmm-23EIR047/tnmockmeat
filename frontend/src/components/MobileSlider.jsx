import { useRef, useState, useEffect, useCallback } from 'react';

export default function MobileSlider({ children, desktopCols = 4 }) {
  const items = Array.isArray(children) ? children : [children];
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollTo = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

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
        className={`mobile-slider flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth ${gridClass}`}
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
