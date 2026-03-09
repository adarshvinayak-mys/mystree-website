const sections = [
  {
    title: 'Website Use',
    body: 'This website is provided for general information about My Stree services. It does not replace medical advice, diagnosis, or treatment from a qualified clinician.',
  },
  {
    title: 'Appointments and Availability',
    body: 'Appointment availability, clinician schedules, fees, and service descriptions may change without notice. Booking requests are subject to confirmation by the clinic or its authorized systems.',
  },
  {
    title: 'Content and Intellectual Property',
    body: 'All website copy, branding, graphics, and media remain the property of My Stree or its licensors unless stated otherwise. Reuse without permission is prohibited.',
  },
  {
    title: 'Liability and Contact',
    body: 'While we aim to keep website content accurate and current, we do not guarantee uninterrupted availability or completeness. For urgent clinical concerns, contact the clinic directly or seek emergency medical assistance.',
  },
];

export default function TermsOfService() {
  return (
    <section className="bg-[#F8F4EC] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-flex rounded-full border border-primary/20 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Legal
        </span>
        <h1 className="mt-6 font-display text-4xl md:text-5xl text-[#203449]">
          Terms of Service
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Effective date: March 9, 2026. This temporary page provides generic website terms until finalized legal language is approved.
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
