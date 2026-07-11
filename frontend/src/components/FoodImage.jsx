import { useState } from 'react';

const toneByCategory = {
  'Mock Seafood': 'from-seafoam/80 via-olive/50 to-parchment',
  'Mock Meat': 'from-chilli/80 via-olive/50 to-parchment',
  'Breaded Frozen': 'from-olive/80 via-parchment to-white',
  'Frozen Snacks': 'from-chilli/70 via-parchment to-white'
};

export default function FoodImage({ src, alt, category, className = '', imgClassName = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(!src);
  const tone = toneByCategory[category] || 'from-olive/70 via-parchment to-white';

  if (failed) {
    return (
      <div
        className={`relative grid place-items-center overflow-hidden bg-gradient-to-br ${tone} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(circle_at_24px_24px,rgba(35,41,29,0.16)_2px,transparent_3px)] bg-[length:34px_34px]" />
        </div>
        <div className="relative mx-4 grid max-w-48 place-items-center text-center text-olivewood">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-bark">{category || 'Product image'}</span>
          <span className="mt-2 font-display text-xl font-black leading-tight">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${imgClassName}`}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
