import { useEffect, useState } from 'react';
import { fetchCmsJson, formatCmsDate, resolveCmsMediaUrl } from '../lib/cmsApi';

const fallbackHero = '/sanctuary_hero_bg_v2_1771307980803.webp';

function isPastEvent(event) {
  const referenceDate = event?.end_at || event?.start_at;
  if (!referenceDate) return false;

  const parsedDate = new Date(referenceDate);
  if (Number.isNaN(parsedDate.getTime())) return false;

  return parsedDate.getTime() < Date.now();
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCmsJson('/website/events')
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || 'Failed to load events'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF4D9] text-[#1b110e]">
      <section className="relative min-h-[56vh] overflow-hidden px-6 py-24 text-white md:px-10 lg:px-20">
        <div className="absolute inset-0 bg-black/45" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackHero})` }}
        />
        <div className="relative z-10 mx-auto max-w-5xl pt-16 [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Events</p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">Gatherings, workshops, and community-led healing spaces</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Discover workshops, conversations, and community gatherings curated around women&apos;s health and wellbeing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-20">
        {loading ? <p className="text-sm text-slate-500">Loading events...</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {!loading && !error && !events.length ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-500">
            No published events yet.
          </div>
        ) : null}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => {
            const pastEvent = isPastEvent(event);

            return (
              <article
                key={event.id}
                className={[
                  'overflow-hidden rounded-[2rem] border shadow-sm transition-all duration-300',
                  pastEvent
                    ? 'border-[#d6c8b3] bg-[#f5efe4] text-slate-500 opacity-80 saturate-50'
                    : 'border-[#E8DCC8] bg-white',
                ].join(' ')}
              >
                <div className="h-56 bg-[#F2E7D5]">
                  {event.cover_image_url ? (
                    <img
                      src={resolveCmsMediaUrl(event.cover_image_url)}
                      alt={event.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {event.start_at ? <span>{formatCmsDate(event.start_at, { day: '2-digit', month: 'short' })}</span> : null}
                    {event.venue ? <span>{event.venue}</span> : null}
                    {pastEvent ? <span className="rounded-full bg-slate-200 px-3 py-1 text-[10px] tracking-[0.28em] text-slate-600">Past Event</span> : null}
                  </div>
                  <h2 className="text-2xl font-bold text-[#1b110e]">{event.title}</h2>
                  {event.summary ? <p className="text-sm leading-6 text-slate-600">{event.summary}</p> : null}
                  {event.body_markdown ? <p className="line-clamp-4 whitespace-pre-line text-sm leading-6 text-slate-500">{event.body_markdown}</p> : null}
                  {event.embed_url ? (
                    <div className="overflow-hidden rounded-2xl border border-[#E8DCC8] bg-[#faf5ed]">
                      <iframe
                        src={event.embed_url}
                        title={event.title ? `${event.title} embed` : 'Event embed'}
                        className="h-72 w-full"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-500">
                    {event.start_at ? <span>{formatCmsDate(event.start_at)}{event.end_at ? ` - ${formatCmsDate(event.end_at)}` : ''}</span> : null}
                  </div>
                  {event.external_url ? (
                    <a
                      href={event.external_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d0461f]"
                    >
                      View event
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
