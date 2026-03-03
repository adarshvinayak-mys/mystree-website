## Deployment

This project is optimized for deployment on platforms like **Vercel** or **Netlify**.

### Deploying to Vercel (Recommended)

1.  Push your code to your GitHub repository: `https://github.com/adarshvinayak-mys/mystree-website`
2.  Login to [Vercel](https://vercel.com).
3.  Click **New Project** and import the `mystree-website` repository.
4.  In the **Environment Variables** section, add the keys listed in `.env.example`:
    - `VITE_SUPABASE_URL`
    - `VITE_SUPABASE_ANON_KEY`
5.  Click **Deploy**.

### Security Audit Status

The project has passed a baseline security audit including:
- Verified `.env` protection.
- Row-Level Security (RLS) compliance.
- Safe external link handling.
- Sanitized dependency tree.
