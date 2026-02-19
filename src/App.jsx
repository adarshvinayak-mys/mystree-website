import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import GlobalHealthCTAButton from './components/GlobalHealthCTAButton';
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




const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
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
    return 'page-font-home';
  };

  return (
    <Wrapper>
      <Navbar />
      <main className={`pt-20 overflow-x-hidden ${getPageFontClass(location.pathname)}`}>
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
        </Routes>



      </main>
      <Footer />
      <GlobalHealthCTAButton />
      <ChatButton />
    </Wrapper>
  );
}
