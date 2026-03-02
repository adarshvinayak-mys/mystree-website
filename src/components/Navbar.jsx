import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isBannerVisible, setIsBannerVisible] = useState(true);
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

    // Reset mobile dropdown states when menu closes or route changes
    useEffect(() => {
        if (!isOpen) {
            setIsServicesOpen(false);
            setIsShowcaseOpen(false);
        }
    }, [isOpen, location.pathname]);



    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[60] transition-all duration-300">
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

            {/* Main Navbar Background */}
            <div className={`absolute inset-0 bg-white dark:bg-slate-900 border-b border-orange-100/50 dark:border-gray-800 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}></div>

            <div className="container relative mx-auto px-4 lg:px-8 h-20 flex items-center justify-between z-10">

                {/* Logo and Nav Links - These hide together */}
                <div className={`flex items-center gap-12 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                    <Link to="/" className="flex items-center h-full group py-2">
                        <img
                            src="https://my-stree.com/assets/images/mystreelogo.svg"
                            alt="MyStree Logo"
                            className="h-10 sm:h-12 w-auto object-contain"
                        />
                    </Link>

                    <nav data-no-booking-intercept="true" className={`hidden md:flex items-center gap-8 text-sm font-medium transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
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

                        <div className="relative flex items-center">
                            <Link
                                to="/mystree-soul"
                                className={`nav-link relative flex items-center gap-2.5 pr-1 font-bold group ${isActive('/mystree-soul') ? 'active' : ''}`}
                            >
                                <span className="relative">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ED5B2D] via-[#EF6A40] to-[#FF833C] drop-shadow-sm">
                                        MyStree Soul
                                    </span>
                                    <motion.span
                                        aria-hidden="true"
                                        className="absolute -top-1.5 -left-2 text-[#FCF4D9] text-[10px]"
                                        animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.08, 0.85], rotate: [0, 12, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                                    >
                                        ✦
                                    </motion.span>
                                    <motion.span
                                        aria-hidden="true"
                                        className="absolute -bottom-1.5 -right-1 text-[#BFE2FE] text-[9px]"
                                        animate={{ opacity: [0.25, 0.9, 0.25], scale: [0.9, 1.1, 0.9], rotate: [0, -14, 0] }}
                                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.2 }}
                                    >
                                        ✦
                                    </motion.span>
                                </span>

                                <motion.span
                                    whileHover={{ y: -1, scale: 1.03 }}
                                    className="relative inline-flex items-center justify-center rounded-full h-5 min-w-[2.35rem] px-2 text-[9px] leading-none text-[#FCF4D9] font-bold uppercase tracking-[0.08em] shadow-md border border-[#FF833C]/60"
                                    style={{ background: "linear-gradient(90deg, #ED5B2D, #EF6A40, #FF833C)" }}
                                >
                                    <span>BETA</span>
                                </motion.span>
                            </Link>
                        </div>

                        <Link className={`nav-link ${isActive('/blog') ? 'active' : ''}`} to="/blog">Blog & Community</Link>
                        <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact Us</Link>
                    </nav>
                </div>



                <a className="hidden md:flex book-btn text-white px-8 py-3.5 rounded-full font-bold shadow-xl items-center gap-2.5 text-base" href="https://my-stree.com/booking">
                    <span className="material-icons text-lg">calendar_month</span>
                    Book Appointment
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Announcement Banner */}
            <AnimatePresence>
                {location.pathname === '/' && isBannerVisible && window.scrollY <= 50 && (
                    <motion.div
                        initial={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        className="relative w-full bg-[#FFC000] z-0 transition-transform duration-300 translate-y-0"
                    >
                        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                            <span className="w-6 hidden sm:block"></span> {/* Spacer for centering */}
                            <Link
                                to="/mystree-soul"
                                className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 group hover:opacity-80 transition-opacity text-center sm:text-left"
                            >
                                <span className="flex items-center gap-1 bg-[#DE9A00] text-black font-extrabold text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full shadow-sm shrink-0">
                                    <span className="text-[10px]">✨</span> NEW
                                </span>
                                <span className="text-black font-semibold text-[11px] sm:text-sm drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                                    MyStree Soul is here! Step into the next generation of intelligent healthcare
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsBannerVisible(false)}
                                className="text-black/60 hover:text-black hover:bg-black/10 rounded-full p-1 transition-colors shrink-0"
                                aria-label="Dismiss banner"
                            >
                                <span className="material-icons text-lg block">close</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 absolute left-0 right-0 shadow-lg rounded-b-3xl overflow-hidden transition-all duration-300 ${location.pathname === '/' && isBannerVisible && window.scrollY <= 50 ? "top-[7.6rem]" : "top-20"}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav data-no-booking-intercept="true" className="flex flex-col p-4 gap-4 text-base font-medium text-slate-800 dark:text-slate-200">
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
                            <Link to="/blog" className={`py-2 border-b border-gray-100 dark:border-gray-800 ${location.pathname === '/blog' ? 'text-primary font-bold' : 'hover:text-primary'}`} onClick={() => setIsOpen(false)}>Blog & Community</Link>
                            <Link to="/contact" className={`py-2 ${location.pathname === '/contact' ? 'text-primary font-bold' : 'hover:text-primary'}`} onClick={() => setIsOpen(false)}>Contact Us</Link>

                            <a className="book-btn text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 mt-2" href="https://my-stree.com/booking" onClick={() => setIsOpen(false)}>
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
