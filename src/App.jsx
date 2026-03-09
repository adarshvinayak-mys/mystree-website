import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import GlobalHealthCTAButton from './components/GlobalHealthCTAButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import LaunchCountdownWidget from './components/LaunchCountdownWidget';
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const Experts = lazy(() => import('./pages/Experts'));
const OBGYNConsults = lazy(() => import('./pages/OBGYNConsults'));
const AdolescentHealth = lazy(() => import('./pages/AdolescentHealth'));
const PrenatalClinic = lazy(() => import('./pages/PrenatalClinic'));
const FertilityClinic = lazy(() => import('./pages/FertilityClinic'));
const MenopausalClinic = lazy(() => import('./pages/MenopausalClinic'));
const NutritionCounselling = lazy(() => import('./pages/NutritionCounselling'));
const PhysiotherapyRecovery = lazy(() => import('./pages/PhysiotherapyRecovery'));
const DermatologySkinCare = lazy(() => import('./pages/DermatologySkinCare'));
const PsychologyPsychiatry = lazy(() => import('./pages/PsychologyPsychiatry'));
const Gallery = lazy(() => import('./pages/Gallery'));
const UpcomingEvents = lazy(() => import('./pages/UpcomingEvents'));
const Contact = lazy(() => import('./pages/Contact'));
const BookingGateway = lazy(() => import('./pages/BookingGateway'));
const BlogAndCommunity = lazy(() => import('./pages/BlogAndCommunity'));
const SoulTriage = lazy(() => import('./pages/SoulTriage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

const Wrapper = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Only scroll to top on new navigations, not on Back/Forward (POP)
    if (navigationType !== "POP") {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);

  return children
}

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#F8F4EC] px-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
      Loading page
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const root = document.body;
    if (!root) return undefined;

    let scheduled = false;
    let isSanitizing = false;

    const shouldSkipNode = (node) => {
      const parent = node.parentElement;
      if (!parent) return true;

      const blockedTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA'];
      if (blockedTags.includes(parent.tagName)) return true;
      if (parent.closest('[data-keep-punctuation="true"]')) return true;

      const value = node.nodeValue;
      return !value || !value.includes('.');
    };

    const sanitizeTrailingPeriods = () => {
      if (isSanitizing) return;
      isSanitizing = true;

      try {
        const walker = document.createTreeWalker(
          root,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode(node) {
              return shouldSkipNode(node)
                ? NodeFilter.FILTER_REJECT
                : NodeFilter.FILTER_ACCEPT;
            }
          }
        );

        const updates = [];

        while (walker.nextNode()) {
          const node = walker.currentNode;
          const original = node.nodeValue ?? '';
          const trailingWhitespace = original.match(/\s*$/)?.[0] ?? '';
          const content = original.slice(0, original.length - trailingWhitespace.length);

          if (!content || content.endsWith('...')) continue;
          if (!content.endsWith('.')) continue;

          const updated = `${content.slice(0, -1)}${trailingWhitespace}`;
          if (updated !== original) {
            updates.push([node, updated]);
          }
        }

        updates.forEach(([node, updated]) => {
          node.nodeValue = updated;
        });
      } finally {
        isSanitizing = false;
      }
    };

    const scheduleSanitize = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        sanitizeTrailingPeriods();
      });
    };

    sanitizeTrailingPeriods();
    const bootTimer = window.setTimeout(sanitizeTrailingPeriods, 120);

    const observer = new MutationObserver(() => {
      if (isSanitizing) return;
      scheduleSanitize();
    });

    observer.observe(root, { childList: true, subtree: true, characterData: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(bootTimer);
    };
  }, [location.pathname]);



  useEffect(() => {
    // Enforce light theme across the app and block re-enabling dark mode.
    const root = document.documentElement;
    const enforceLightTheme = () => root.classList.remove('dark');
    enforceLightTheme();

    const observer = new MutationObserver(enforceLightTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bookingPattern = /\b(book|appointment|consult|consultation|reserve|rsvp|scheduling|session|package|assessment|start|enroll|register|talk|join|begin|healing|physiotherapy|rehab|rehabilitation|treatment)\b/i;
    const hrefPattern = /(book|appointment|consult|reserve|rsvp|scheduling|session|package|assessment|#)/i;

    const hasBookingIntent = (element) => {
      if (!element) return false;
      const text = (element.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      const ariaLabel = (element.getAttribute?.('aria-label') || '').toLowerCase();
      const title = (element.getAttribute?.('title') || '').toLowerCase();
      const href = (element.getAttribute?.('href') || '').toLowerCase();
      const isDirectContactLink =
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.includes('wa.me/') ||
        href.includes('api.whatsapp.com/');
      if (isDirectContactLink) return false;
      return bookingPattern.test(text) || bookingPattern.test(ariaLabel) || bookingPattern.test(title) || hrefPattern.test(href);
    };

    const handleBookingRedirect = (event) => {
      const target = event.target?.closest('button, a');
      if (!target) return;
      if (target.dataset.noBookingIntercept === 'true') return;
      if (target.closest('[data-no-booking-intercept="true"]')) return;
      if (!hasBookingIntent(target)) return;

      event.preventDefault();
      event.stopPropagation();
      window.location.href = 'https://my-stree.com/booking';
    };

    const handleFormSubmitRedirect = (event) => {
      const submitter = event.submitter;
      if (!submitter) return;
      if (submitter.dataset?.noBookingIntercept === 'true') return;
      if (hasBookingIntent(submitter)) {
        event.preventDefault();
        window.location.href = 'https://my-stree.com/booking';
      }
    };

    document.addEventListener('click', handleBookingRedirect, true);
    document.addEventListener('submit', handleFormSubmitRedirect, true);
    return () => {
      document.removeEventListener('click', handleBookingRedirect, true);
      document.removeEventListener('submit', handleFormSubmitRedirect, true);
    };
  }, [location.pathname]);

  const getPageFontClass = (pathname) => {
    if (pathname === '/') return 'page-font-home';
    if (pathname === '/about') return 'page-font-about';
    if (pathname === '/team') return 'page-font-team';
    if (pathname === '/experts') return 'page-font-experts';
    if (pathname === '/services/obgyn') return 'page-font-obgyn';
    if (pathname === '/services/adolescent-health') return 'page-font-adolescent';
    if (pathname === '/services/prenatal') return 'page-font-prenatal';
    if (pathname === '/services/fertility') return 'page-font-fertility';
    if (pathname === '/services/menopause') return 'page-font-menopause';
    if (pathname === '/services/nutrition') return 'page-font-nutrition';
    if (pathname === '/services/physiotherapy') return 'page-font-physio';
    if (pathname === '/services/dermatology') return 'page-font-dermatology';
    if (pathname === '/services/psychology') return 'page-font-psychology';
    if (pathname === '/showcase/gallery') return 'page-font-gallery';
    if (pathname === '/showcase/events') return 'page-font-events';
    if (pathname === '/contact') return 'page-font-contact';
    if (pathname === '/booking-gateway') return 'page-font-contact';
    if (pathname === '/blog') return 'page-font-blog';
    if (pathname === '/mystree-soul') return 'page-font-soul';
    return 'page-font-home';
  };

  return (
    <Wrapper>
      {!location.pathname.startsWith('/mystree-soul') && !location.pathname.startsWith('/soul-triage') && <Navbar />}
      <main className={`${!location.pathname.startsWith('/mystree-soul') && !location.pathname.startsWith('/soul-triage') ? 'pt-20 ' : ''}overflow-x-hidden ${getPageFontClass(location.pathname)}`}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/services/obgyn" element={<OBGYNConsults />} />
            <Route path="/services/adolescent-health" element={<AdolescentHealth />} />
            <Route path="/services/prenatal" element={<PrenatalClinic />} />
            <Route path="/services/fertility" element={<FertilityClinic />} />
            <Route path="/services/menopause" element={<MenopausalClinic />} />
            <Route path="/services/nutrition" element={<NutritionCounselling />} />
            <Route path="/services/physiotherapy" element={<PhysiotherapyRecovery />} />
            <Route path="/services/dermatology" element={<DermatologySkinCare />} />
            <Route path="/services/psychology" element={<PsychologyPsychiatry />} />
            <Route path="/showcase/gallery" element={<Gallery />} />
            <Route path="/showcase/events" element={<UpcomingEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-gateway" element={<BookingGateway />} />
            <Route path="/blog" element={<BlogAndCommunity />} />
            <Route path="/mystree-soul" element={<SoulTriage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </main>
      {!location.pathname.startsWith('/mystree-soul') && !location.pathname.startsWith('/soul-triage') && <Footer />}
      {!location.pathname.startsWith('/mystree-soul') && !location.pathname.startsWith('/soul-triage') && <GlobalHealthCTAButton />}
      {!location.pathname.startsWith('/mystree-soul') && !location.pathname.startsWith('/soul-triage') && <ScrollToTopButton />}
      {!location.pathname.startsWith('/mystree-soul') && !location.pathname.startsWith('/soul-triage') && <ChatButton />}
      {location.pathname === '/' && <LaunchCountdownWidget />}

    </Wrapper>
  );
}
