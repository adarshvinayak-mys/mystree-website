import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 50) {
                    setIsVisible(false); // Hide on scroll down
                } else {
                    setIsVisible(true); // Show on scroll up
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-orange-100/50 dark:border-gray-800 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <style>{`
                /* Navigation Links */
                .nav-link { position: relative; color: #4B5563; transition: color 0.3s ease; }
                .dark .nav-link { color: #CBD5E1; }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #EA580C, #F97316);
                    transition: width 0.3s ease;
                }
                .nav-link:hover, .nav-link.active { color: #EA580C; }
                .nav-link:hover::after, .nav-link.active::after { width: 100%; }
                
                /* Book Button */
                .book-btn {
                    background: linear-gradient(135deg, #EA580C 0%, #FF782D 100%);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    animation: highlight-pulse 2s infinite;
                    box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
                }
                @keyframes highlight-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.6); transform: scale(1); }
                    50% { box-shadow: 0 0 0 15px rgba(234, 88, 12, 0); transform: scale(1.05); }
                    100% { box-shadow: 0 0 0 0 rgba(234, 88, 12, 0); transform: scale(1); }
                }
                .book-btn:hover {
                    background: linear-gradient(135deg, #FF782D 0%, #EA580C 100%);
                    transform: translateY(-3px) scale(1.1);
                    box-shadow: 0 15px 30px -5px rgba(234, 88, 12, 0.5);
                    animation: none;
                }
            `}</style>

            <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

                {/* Image Logo */}
                <Link to="/" className="flex items-center h-full group py-2">
                    <img
                        src="https://my-stree.com/assets/images/mystreelogo.svg"
                        alt="MyStree Logo"
                        className="h-10 sm:h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
                    <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About Us</Link>
                    <Link className={`nav-link ${isActive('/team') ? 'active' : ''}`} to="/team">Our Team</Link>
                    <div className="relative group">
                        <button className={`flex items-center gap-1 nav-link py-4 ${isActive('/services') ? 'active' : ''}`}>
                            Services <span className="material-icons text-base group-hover:rotate-180 transition-transform">expand_more</span>
                        </button>
                        <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-800 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 dark:border-gray-700">
                            <ul className="space-y-1">
                                <li><Link to="/services/obgyn" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/obgyn' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>OBGYN Consults</Link></li>
                                <li><Link to="/services/fertility" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/fertility' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Fertility Clinic</Link></li>
                                <li><Link to="/services/adolescent-health" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/adolescent-health' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Adolescent Health Clinic</Link></li>
                                <li><Link to="/services/prenatal" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/prenatal' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Pre-Natal Clinic</Link></li>
                                <li><Link to="/services/menopause" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/menopause' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Menopausal Clinic</Link></li>
                                <li><Link to="/services/nutrition" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/nutrition' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Nutrition Counselling</Link></li>
                                <li><Link to="/services/physiotherapy" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/physiotherapy' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Physiotherapy & Recovery</Link></li>
                                <li><Link to="/services/dermatology" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/dermatology' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Dermatology & Skin Care</Link></li>
                                <li><Link to="/services/psychology" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/services/psychology' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Psychology & Psychiatry</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className={`flex items-center gap-1 nav-link py-4 ${isActive('/showcase') ? 'active' : ''}`}>
                            Show Case <span className="material-icons text-base group-hover:rotate-180 transition-transform">expand_more</span>
                        </button>
                        <div className="absolute top-full left-0 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 dark:border-gray-700">
                            <ul className="space-y-1">
                                <li><Link to="/showcase/events" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/showcase/events' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Upcoming Events</Link></li>
                                <li><Link to="/showcase/gallery" className={`block px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold text-sm ${location.pathname === '/showcase/gallery' ? 'text-primary bg-orange-50 dark:bg-slate-700' : ''}`}>Gallery</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact Us</Link>

                </nav>

                <div className="flex items-center gap-4">
                    <button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" id="theme-toggle" onClick={toggleTheme}>
                        <span className="material-icons dark:hidden text-gray-600">dark_mode</span>
                        <span className="material-icons hidden dark:block text-yellow-300">light_mode</span>
                    </button>

                    <a className="hidden md:flex book-btn text-white px-8 py-3.5 rounded-full font-bold shadow-xl items-center gap-2.5 text-base" href="#">
                        <span className="material-icons text-lg">calendar_month</span>
                        Book Appointment
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 absolute top-20 left-0 right-0 shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col p-4 gap-4 text-base font-medium text-slate-800 dark:text-slate-200">
                            <Link to="/" className={`py-2 border-b border-gray-100 dark:border-gray-800 ${location.pathname === '/' ? 'text-primary font-bold' : 'hover:text-primary'}`} onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className={`py-2 border-b border-gray-100 dark:border-gray-800 ${location.pathname === '/about' ? 'text-primary font-bold' : 'hover:text-primary'}`} onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link to="/team" className={`py-2 border-b border-gray-100 dark:border-gray-800 ${location.pathname === '/team' ? 'text-primary font-bold' : 'hover:text-primary'}`} onClick={() => setIsOpen(false)}>Our Team</Link>
                            <div className="border-b border-gray-100 dark:border-gray-800">
                                <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`flex items-center justify-between w-full py-2 text-left ${location.pathname.startsWith('/services') ? 'text-primary font-bold' : 'hover:text-primary'}`}>
                                    Services <span className={`material-icons text-base transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: isServicesOpen ? 'auto' : 0, opacity: isServicesOpen ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link to="/services/obgyn" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/obgyn' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>OBGYN Consults</Link>
                                    <Link to="/services/adolescent-health" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/adolescent-health' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Adolescent Health Clinic</Link>
                                    <Link to="/services/prenatal" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/prenatal' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Pre-Natal Clinic</Link>
                                    <Link to="/services/menopause" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/menopause' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Menopausal Clinic</Link>
                                    <Link to="/services/nutrition" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/nutrition' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Nutrition Counselling</Link>
                                    <Link to="/services/physiotherapy" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/physiotherapy' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Physiotherapy & Recovery</Link>
                                    <Link to="/services/dermatology" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/dermatology' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Dermatology & Skin Care</Link>
                                    <Link to="/services/psychology" className={`block py-2 pl-4 text-sm ${location.pathname === '/services/psychology' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Psychology & Psychiatry</Link>
                                </motion.div>

                            </div>
                            <div className="border-b border-gray-100 dark:border-gray-800">
                                <button onClick={() => setIsShowcaseOpen(!isShowcaseOpen)} className={`flex items-center justify-between w-full py-2 text-left ${location.pathname.startsWith('/showcase') ? 'text-primary font-bold' : 'hover:text-primary'}`}>
                                    Show Case <span className={`material-icons text-base transition-transform ${isShowcaseOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: isShowcaseOpen ? 'auto' : 0, opacity: isShowcaseOpen ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link to="/showcase/events" className={`block py-2 pl-4 text-sm ${location.pathname === '/showcase/events' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Upcoming Events</Link>
                                    <Link to="/showcase/gallery" className={`block py-2 pl-4 text-sm ${location.pathname === '/showcase/gallery' ? 'text-primary font-bold' : 'text-slate-600 dark:text-gray-400 hover:text-primary'}`} onClick={() => setIsOpen(false)}>Gallery</Link>
                                </motion.div>
                            </div>
                            <Link to="/contact" className={`py-2 ${location.pathname === '/contact' ? 'text-primary font-bold' : 'hover:text-primary'}`} onClick={() => setIsOpen(false)}>Contact Us</Link>



                            <a className="book-btn text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 mt-2" href="#">
                                <span className="material-icons text-sm">calendar_month</span>
                                Book Appointment
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
