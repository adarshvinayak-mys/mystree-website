import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#FCF4D9] px-6 py-24 text-[#2F3E46] md:px-10 lg:px-16">
      <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#2F3E46]/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">404</p>
        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">Page not found</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5A7070]">
          The page you requested does not exist or has been moved. Use the main navigation or go back to the homepage.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#d0461f]"
          >
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[#D8C9B4] bg-white px-8 py-3 text-sm font-semibold text-[#2F3E46] transition hover:border-primary hover:text-primary"
          >
            Contact MyStree
          </Link>
        </div>
      </div>
    </section>
  );
}
