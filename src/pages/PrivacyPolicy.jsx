const sections = [
  {
    title: 'Information We Collect',
    body: 'We may collect contact details, appointment preferences, and website usage information when you interact with My Stree. This placeholder policy is intended to provide a basic public-facing privacy notice until the final legal copy is approved.',
  },
  {
    title: 'How We Use Information',
    body: 'We use submitted information to respond to enquiries, coordinate care, improve site experience, and communicate clinic updates where consent has been provided. Sensitive medical information should only be submitted through approved clinical channels.',
  },
  {
    title: 'Sharing and Storage',
    body: 'We limit access to personal data to authorized staff and service providers who support clinic operations. Data may be stored using secure third-party infrastructure, subject to contractual and technical safeguards.',
  },
  {
    title: 'Your Choices',
    body: 'You may request access, correction, or deletion of personal data, subject to applicable law and clinical record-keeping requirements. For privacy requests, contact the clinic directly using the details on the contact page.',
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#F8F4EC] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-flex rounded-full border border-primary/20 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Legal
        </span>
        <h1 className="mt-6 font-display text-4xl md:text-5xl text-[#203449]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Effective date: March 9, 2026. This is a temporary policy page with generic content until the final reviewed legal copy is published.
        </p>

        <div className="mt-10 space-y-8 rounded-[2rem] border border-[#D8CBB5] bg-white p-8 shadow-sm md:p-10">
          {sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="font-display text-2xl text-[#203449]">{section.title}</h2>
              <p className="text-sm leading-7 text-slate-600 md:text-base">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
