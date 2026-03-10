const CMS_BASE_URL = (import.meta.env.VITE_CMS_API_URL || 'https://mystree-backend.fly.dev').replace(/\/+$/, '');

export const resolveCmsMediaUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  return `${CMS_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

export const fetchCmsJson = async (path) => {
  const response = await fetch(`${CMS_BASE_URL}${path}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

export const formatCmsDate = (value, options = {}) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    ...options,
  }).format(date);
};
