import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fetchCmsJson, resolveCmsMediaUrl } from '../lib/cmsApi';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCmsJson('/website/gallery')
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || 'Failed to load gallery'))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const values = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));
    return ['All', ...values];
  }, [items]);

  const filteredItems = filter === 'All' ? items : items.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#fffaf2] pb-24 text-slate-900">
      <header className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-20">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Gallery</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Moments, spaces, and stories from MyStree</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Published gallery items from the admin panel appear here automatically.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${filter === category ? 'bg-primary text-white' : 'bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? <p className="text-sm text-slate-500">Loading gallery...</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {!loading && !error && !filteredItems.length ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No published gallery items yet.
          </div>
        ) : null}

        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group block w-full break-inside-avoid overflow-hidden rounded-[2rem] bg-white text-left shadow-sm ring-1 ring-slate-200"
            >
              <img
                src={resolveCmsMediaUrl(item.image_url)}
                alt={item.alt_text || item.title}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="space-y-2 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{item.category || 'Gallery'}</div>
                <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                {item.caption ? <p className="text-sm leading-6 text-slate-600">{item.caption}</p> : null}
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={resolveCmsMediaUrl(selectedImage.image_url)} alt={selectedImage.alt_text || selectedImage.title} className="max-h-[70vh] w-full object-cover" />
              <div className="space-y-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{selectedImage.category || 'Gallery'}</p>
                <h2 className="text-2xl font-bold text-slate-900">{selectedImage.title}</h2>
                {selectedImage.caption ? <p className="text-sm leading-6 text-slate-600">{selectedImage.caption}</p> : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
