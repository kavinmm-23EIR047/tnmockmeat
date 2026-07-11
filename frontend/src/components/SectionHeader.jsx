export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-10 bg-chilli" />
          <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-chilli">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-display text-3xl font-black leading-[1.05] text-olivewood sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-8 text-bark">{text}</p>}
    </div>
  );
}
