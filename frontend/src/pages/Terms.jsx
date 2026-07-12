import SectionHeader from '../components/SectionHeader.jsx';

const terms = [
  'This website is an official product and enquiry website for Sakthi Frozen Food Traders.',
  'All product details, images and descriptions are provided for general information, business enquiries and product selection.',
  'Product availability, packaging, dispatch timelines and commercial terms must be confirmed directly with the team.',
  'Specifications, branding, packaging and product availability may change from time to time.',
  'Any dispute or business clarification must be handled through direct communication with the company.'
];

export default function Terms() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        text="Please read these terms before using the website or sending an enquiry."
      />
      <div className="mt-10 grid gap-4 rounded-md bg-white/70 p-6 shadow-soft ring-1 ring-olivewood/10">
        {terms.map((item) => (
          <p key={item} className="leading-8 text-bark">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}