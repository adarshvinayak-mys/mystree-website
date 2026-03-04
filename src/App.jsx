import { BrowserRouter, Routes, Route, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import GlobalHealthCTAButton from './components/GlobalHealthCTAButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import OurTeam from './pages/OurTeam';
import OBGYNConsults from './pages/OBGYNConsults';
import AdolescentHealth from './pages/AdolescentHealth';
import PrenatalClinic from './pages/PrenatalClinic';
import FertilityClinic from './pages/FertilityClinic';
import MenopausalClinic from './pages/MenopausalClinic';
import NutritionCounselling from './pages/NutritionCounselling';
import PhysiotherapyRecovery from './pages/PhysiotherapyRecovery';
import DermatologySkinCare from './pages/DermatologySkinCare';
import PsychologyPsychiatry from './pages/PsychologyPsychiatry';
import Gallery from './pages/Gallery';
import UpcomingEvents from './pages/UpcomingEvents';
import Contact from './pages/Contact';
import BookingGateway from './pages/BookingGateway';
import BlogAndCommunity from './pages/BlogAndCommunity';
import SoulTriage from './pages/SoulTriage';


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

import Experts from './pages/Experts';

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

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
  }, [location.pathname, navigate]);

  const getPageFontClass = () => 'page-font-unified';

  return (
    <Wrapper>
      {location.pathname !== '/mystree-soul' && <Navbar />}
      <main className={`${location.pathname !== '/mystree-soul' ? 'pt-20 ' : ''}overflow-x-hidden ${getPageFontClass()}`}>
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
          <Route path="/soul-triage" element={<SoulTriage />} />
        </Routes>



      </main>
      {location.pathname !== '/mystree-soul' && <Footer />}
      {location.pathname !== '/mystree-soul' && <GlobalHealthCTAButton />}
      {location.pathname !== '/mystree-soul' && <ScrollToTopButton />}
      {location.pathname !== '/mystree-soul' && <ChatButton />}
    </Wrapper>
  );
}
