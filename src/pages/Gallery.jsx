import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, ChevronLeft, ChevronRight, Expand, ImageIcon, Images, Layers3 } from 'lucide-react';
import { fetchCmsJson, formatCmsDate, resolveCmsMediaUrl } from '../lib/cmsApi';

const buildGalleryGroups = (items) => {
  const groups = [];
  const indexByKey = new Map();

  items.forEach((item) => {
    const normalizedGroupName = (item.group_name || '').trim();
    const key = normalizedGroupName ? normalizedGroupName.toLowerCase() : `single-${item.id}`;
    const existingIndex = indexByKey.get(key);

    if (existingIndex === undefined) {
      groups.push({
        key,
        type: normalizedGroupName ? 'group' : 'single',
        title: normalizedGroupName || item.title,
        description: item.group_description || item.caption || '',
        coverImageUrl: item.image_url,
        previewItems: [item],
        categories: item.category ? [item.category] : [],
        items: [item],
      });
      indexByKey.set(key, groups.length - 1);
      return;
    }

    const group = groups[existingIndex];
    group.items.push(item);
    if (group.previewItems.length < 3) {
      group.previewItems.push(item);
    }
    if (item.category && !group.categories.includes(item.category)) {
      group.categories.push(item.category);
    }
    if (!group.description && (item.group_description || item.caption)) {
      group.description = item.group_description || item.caption || '';
    }
  });

  return groups;
};

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedGroup, setSelectedGroup] = useState(null);
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

  const groups = useMemo(() => buildGalleryGroups(items), [items]);

  const categories = useMemo(() => {
    const values = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));
    return ['All', ...values];
  }, [items]);

  const filteredGroups = useMemo(() => {
    if (filter === 'All') return groups;
    return groups.filter((group) => group.categories.includes(filter));
  }, [filter, groups]);

  const cycleSelectedImage = (direction) => {
    if (!selectedGroup?.items?.length || !selectedImage) return;
    const currentIndex = selectedGroup.items.findIndex((item) => item.id === selectedImage.id);
    if (currentIndex < 0) return;
    const nextIndex = (currentIndex + direction + selectedGroup.items.length) % selectedGroup.items.length;
    setSelectedImage(selectedGroup.items[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#fffaf2] pb-24 text-slate-900">
      <header className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-20">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Gallery</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Moments, spaces, and stories from MyStree</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A visual archive of the clinic, community moments, and the spaces that shape the MyStree experience.
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
        {!loading && !error && !filteredGroups.length ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No published gallery items yet.
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredGroups.map((group) => (
            <button
              key={group.key}
              type="button"
              onClick={() => setSelectedGroup(group)}
              className="group overflow-hidden rounded-[2rem] bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                {group.type === 'group' ? (
                  <div className="relative h-full w-full bg-[radial-gradient(circle_at_top,_rgba(199,88,33,0.18),_transparent_48%),linear-gradient(180deg,#fdf7ef_0%,#f5efe7_100%)] p-4">
                    <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                      <div className="absolute left-4 top-4 z-20 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
                        {group.items.length} image{group.items.length > 1 ? 's' : ''}
                      </div>
                      <div className="absolute bottom-5 left-4 right-4 top-11">
                        {group.previewItems.slice(0, 3).map((item, index) => (
                          <div
                            key={item.id}
                            className="absolute inset-x-0 top-0 bottom-0"
                            style={{
                              transform: `translateY(${index * 12}px)`,
                              zIndex: 3 - index,
                            }}
                          >
                            <div className="h-full w-full overflow-hidden rounded-[1.3rem] bg-slate-100 shadow-[0_18px_35px_rgba(15,23,42,0.16)] ring-1 ring-black/5 transition-transform duration-500 group-hover:-translate-y-1">
                              <img
                                src={resolveCmsMediaUrl(item.image_url)}
                                alt={item.alt_text || item.title || 'Gallery image'}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-slate-900/85 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                        <Layers3 size={14} /> Group
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={resolveCmsMediaUrl(group.coverImageUrl)}
                      alt={group.title || 'Gallery image'}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm">
                      <span className="inline-flex items-center gap-2"><ImageIcon size={14} /> Single</span>
                    </div>
                  </>
                )}
                {group.type !== 'group' ? (
                  <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
                    {group.items.length} image{group.items.length > 1 ? 's' : ''}
                  </div>
                ) : null}
              </div>
              <div className="space-y-3 p-6">
                <div className="flex flex-wrap gap-2">
                  {group.categories.map((category) => (
                    <span key={`${group.key}-${category}`} className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex items-start justify-between gap-3">
                  {group.title ? <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2> : <span />}
                  {group.type === 'group' ? <Images className="mt-1 text-primary" size={18} /> : <ImageIcon className="mt-1 text-primary" size={18} />}
                </div>
                {group.description ? <p className="text-sm leading-6 text-slate-600">{group.description}</p> : null}
                <p className="text-sm font-semibold text-primary">Open gallery</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedGroup ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 p-4 md:p-8"
            onClick={() => {
              setSelectedImage(null);
              setSelectedGroup(null);
            }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="mx-auto max-w-6xl rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 md:px-8">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Gallery Collection</p>
                  {selectedGroup.title ? <h2 className="text-3xl font-black text-slate-900">{selectedGroup.title}</h2> : null}
                  {selectedGroup.description ? <p className="max-w-2xl text-sm leading-6 text-slate-600">{selectedGroup.description}</p> : null}
                </div>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  onClick={() => {
                    setSelectedImage(null);
                    setSelectedGroup(null);
                  }}
                >
                  Close
                </button>
              </div>

              <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3 md:p-8">
                {selectedGroup.items.map((item) => (
                  <article key={item.id} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#fffaf2] shadow-sm">
                    <div className="relative h-72 overflow-hidden bg-slate-100">
                      <img
                        src={resolveCmsMediaUrl(item.image_url)}
                        alt={item.alt_text || item.title || 'Gallery image'}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm transition hover:bg-white"
                        onClick={() => setSelectedImage(item)}
                      >
                        <span className="inline-flex items-center gap-2"><Expand size={13} /> Expand</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] overflow-y-auto bg-black/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#111] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-white md:px-8">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Image Details</p>
                  {selectedImage.title ? <h3 className="text-2xl font-black md:text-3xl">{selectedImage.title}</h3> : null}
                </div>
                <button
                  type="button"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/5"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </div>

              <div className="relative bg-black px-4 py-6 md:px-8 md:py-8">
                {selectedGroup?.items?.length > 1 ? (
                  <>
                    <button
                      type="button"
                      className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-3 text-white/85 transition hover:bg-black/65"
                      onClick={() => cycleSelectedImage(-1)}
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-3 text-white/85 transition hover:bg-black/65"
                      onClick={() => cycleSelectedImage(1)}
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                ) : null}
                <img
                  src={resolveCmsMediaUrl(selectedImage.image_url)}
                  alt={selectedImage.alt_text || selectedImage.title || 'Gallery image'}
                  className="mx-auto max-h-[72vh] w-full rounded-[1.5rem] object-contain"
                />
              </div>

              {selectedImage.group_name ? null : (
                <div className="space-y-5 bg-[#171717] p-6 text-white md:p-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.category ? <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{selectedImage.category}</span> : null}
                    {selectedImage.taken_at ? <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">{formatCmsDate(selectedImage.taken_at)}</span> : null}
                  </div>

                  {selectedImage.caption ? (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Description</p>
                      <p className="text-sm leading-7 text-white/80">{selectedImage.caption}</p>
                    </div>
                  ) : null}

                  {selectedImage.alt_text ? (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Alt Text</p>
                      <p className="text-sm leading-7 text-white/80">{selectedImage.alt_text}</p>
                    </div>
                  ) : null}
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
