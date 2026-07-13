export default function StatBand() {
  const stats = [
    ['All', 'Over India'],
    ['100%', 'Business ready'],
    ['B2B', 'Supply ready'],
    ['FSSAI', 'Certified']
  ];

  return (
    <section className="surface-noise overflow-hidden bg-olivewood py-8 text-parchment">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([number, label]) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/[0.07] p-5 shadow-insetLine">
            <p className="font-display text-4xl font-black text-olive">{number}</p>
            <p className="mt-1 text-sm text-parchment/[0.72]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
