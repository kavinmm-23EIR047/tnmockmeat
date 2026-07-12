import SectionHeader from '../components/SectionHeader.jsx';

const privacyPoints = [
  'We collect only the information shared through enquiry forms, calls, email or WhatsApp.',
  'Your information is used to respond to enquiries, provide product details and manage communication.',
  'We do not sell or trade your personal information to third parties.',
  'We may retain enquiry details for business records, service follow-up and support.',
  'If you ask us to remove your details, we will review the request according to business and legal needs.'
];

export default function Privacy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Legal"
        title="Privacy Policy"
        text="This page explains how enquiry information is handled on the website."
      />
      <div className="mt-10 grid gap-4 rounded-md bg-white/70 p-6 shadow-soft ring-1 ring-olivewood/10">
        {privacyPoints.map((item) => (
          <p key={item} className="leading-8 text-bark">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}