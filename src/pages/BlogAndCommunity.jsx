import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCmsJson, formatCmsDate, resolveCmsMediaUrl } from '../lib/cmsApi';

export default function BlogAndCommunity() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCmsJson('/website/blogs')
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || 'Failed to load blog posts'))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return posts;
    return posts.filter((post) => {
      return [post.title, post.excerpt, post.author_name]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(needle));
    });
  }, [posts, query]);

  const featured = filteredPosts[0] || null;
  const remaining = featured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-[#FCF4D9] text-[#2F3E46] pb-24">
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_right,rgba(237,91,45,0.18),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Blog & Community</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">Stories, insights, and clinical perspectives from MyStree</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#5A7070]">
            Explore thoughtful articles, expert perspectives, and community stories across women’s health, healing, and care.
          </p>
          <div className="mt-8 max-w-md">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="w-full rounded-full border border-[#E8DCC8] bg-white px-5 py-3 text-sm shadow-sm outline-none ring-primary/20 focus:ring"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 md:px-10 lg:px-16">
        {loading ? <p className="text-sm text-slate-500">Loading blog posts...</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {!loading && !error && !filteredPosts.length ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
            No published blog posts yet.
          </div>
        ) : null}

        {featured ? (
          <article className="grid gap-8 overflow-hidden rounded-[2.5rem] bg-white shadow-sm ring-1 ring-[#E8DCC8] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="h-full min-h-[320px] bg-[#EDE3D2]">
              {featured.cover_image_url ? (
                <img
                  src={resolveCmsMediaUrl(featured.cover_image_url)}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            <div className="flex flex-col justify-center space-y-5 p-8 lg:p-12">
              <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {featured.published_at ? <span>{formatCmsDate(featured.published_at)}</span> : null}
                {featured.author_name ? <span>{featured.author_name}</span> : null}
              </div>
              <h2 className="text-4xl font-black leading-tight text-[#2F3E46]">{featured.title}</h2>
              {featured.excerpt ? <p className="text-base leading-7 text-[#5A7070]">{featured.excerpt}</p> : null}
              <Link to={`/blog/${featured.slug}`} className="inline-flex w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d0461f]">
                Read article
              </Link>
            </div>
          </article>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remaining.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#E8DCC8]">
              <div className="h-56 bg-[#EDE3D2]">
                {post.cover_image_url ? (
                  <img
                    src={resolveCmsMediaUrl(post.cover_image_url)}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {post.published_at ? <span>{formatCmsDate(post.published_at)}</span> : null}
                  {post.author_name ? <span>{post.author_name}</span> : null}
                </div>
                <h3 className="text-2xl font-bold leading-tight text-[#2F3E46]">{post.title}</h3>
                {post.excerpt ? <p className="line-clamp-4 text-sm leading-6 text-[#5A7070]">{post.excerpt}</p> : null}
                <Link to={`/blog/${post.slug}`} className="inline-flex text-sm font-semibold text-primary hover:text-[#d0461f]">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
