import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCmsJson, formatCmsDate, resolveCmsMediaUrl } from '../lib/cmsApi';

const renderParagraphs = (body) => {
  return String(body || '')
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;
    fetchCmsJson(`/website/blogs/${slug}`)
      .then((data) => setPost(data))
      .catch((err) => setError(err.message || 'Failed to load post'))
      .finally(() => setLoading(false));
  }, [slug]);

  const paragraphs = useMemo(() => renderParagraphs(post?.body_markdown), [post?.body_markdown]);

  return (
    <div className="min-h-screen bg-[#FFF8EE] pb-24 text-[#2F3E46]">
      <section className="mx-auto max-w-4xl px-6 pt-28 md:px-10 lg:px-0">
        <Link to="/blog" className="text-sm font-semibold text-primary hover:text-[#d0461f]">← Back to blog</Link>

        {loading ? <p className="mt-10 text-sm text-slate-500">Loading article...</p> : null}
        {error ? <p className="mt-10 text-sm text-red-600">{error}</p> : null}

        {!loading && !error && post ? (
          <article className="mt-8 overflow-hidden rounded-[2.5rem] bg-white shadow-sm ring-1 ring-[#E8DCC8]">
            {post.cover_image_url ? (
              <div className="h-[320px] bg-[#EDE3D2] md:h-[420px]">
                <img src={resolveCmsMediaUrl(post.cover_image_url)} alt={post.title} className="h-full w-full object-cover" />
              </div>
            ) : null}
            <div className="space-y-6 p-8 md:p-12">
              <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {post.published_at ? <span>{formatCmsDate(post.published_at)}</span> : null}
                {post.author_name ? <span>{post.author_name}</span> : null}
              </div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">{post.title}</h1>
              {post.excerpt ? <p className="text-lg leading-8 text-[#5A7070]">{post.excerpt}</p> : null}
              <div className="space-y-5 text-base leading-8 text-[#42545A]">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${post.id || slug}-${index}`} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ) : null}
      </section>
    </div>
  );
}
