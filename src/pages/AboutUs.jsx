import { useState, useEffect, useRef } from 'react';
import founderImage from '../assets/docimage.png';


export default function AboutUs() {
    const [showButton, setShowButton] = useState(false);
    const scrollContainerRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300 overflow-x-hidden pb-0">

            {/* Header/Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-corn-silk dark:bg-gray-900">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-5 order-2 lg:order-1 slide-in-bottom">
                        <h1 className="font-display font-semibold text-6xl lg:text-8xl text-slate-800 dark:text-white leading-[0.9] mb-8">
                            A safe<br /><span className="italic text-primary">haven</span>.
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 dark:text-gray-300 font-light leading-relaxed max-w-md mb-12">
                            My Stree is dedicated to supporting every woman’s physical, emotional, and hormonal well-being. From adolescence to pregnancy, fertility wellness to menopause, we’re here to walk with you through every milestone.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="h-[1px] w-12 bg-slate-400/50"></span>
                            <span className="font-display italic text-slate-600 dark:text-gray-400">Est. 2021</span>
                        </div>
                    </div>
                    <div className="lg:col-span-7 order-1 lg:order-2 relative slide-in-right delay-200">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-100 dark:shadow-none transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                            <img alt="Candid consultation in cozy clinic" className="w-full h-[400px] lg:h-[600px] object-cover" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 z-20 bg-[#FDFBF7] dark:bg-gray-800 p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl max-w-xs hidden lg:block animate-bounce-slow">
                            <span className="material-symbols-outlined text-4xl text-primary mb-2">favorite</span>
                            <p className="font-display text-xl text-slate-800 dark:text-white italic">"Finally, a doctor who looked me in the eye and really listened."</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Story Section */}
            <section className="py-24 px-6 lg:px-12 relative bg-white dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto space-y-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="w-full h-[500px] relative rounded-t-full rounded-b-[10rem] overflow-hidden shadow-xl">
                                <img alt="Founder Story" className="w-full h-full object-cover transition-all duration-700" src={founderImage} />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-12">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">The Beginning</span>
                            <h2 className="font-display text-4xl lg:text-5xl text-slate-800 dark:text-white">Our Story</h2>
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                                The journey of My Stree began with a simple yet profound realization—women’s healthcare is often fragmented, impersonal, and limited to clinical interactions. Despite advances in medicine, the emotional, psychological, and lifestyle aspects are often overlooked.
                            </p>
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                                Our founders, driven by experience and a deep understanding of women’s needs, set out to create something different—a safe space where women can speak freely about their concerns without judgment.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 lg:pr-12 order-2 lg:order-1">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Mission</span>
                            <h2 className="font-display text-4xl lg:text-5xl text-slate-800 dark:text-white">Changing the Narrative</h2>
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                                We aim to change the narrative of women’s healthcare—where the focus is not just on treating symptoms but on empowering women to live healthier, happier, and more fulfilling lives. We provide comprehensive, compassionate, and personalized care.
                            </p>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="w-full h-[500px] relative rounded-[2rem] overflow-hidden shadow-xl transform rotate-2 hover:-rotate-1 transition-transform duration-500">
                                <img alt="Clinic Interior Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" />
                            </div>
                            <div className="absolute -top-10 -right-10 bg-sky-100 dark:bg-sky-900/50 backdrop-blur-md p-6 rounded-full w-40 h-40 flex items-center justify-center animate-pulse-slow z-20 shadow-lg">
                                <span className="font-display font-bold text-center text-slate-800 dark:text-white text-lg leading-tight">No White<br />Coats<br />Syndrome</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-corn-silk dark:bg-gray-900">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <h2 className="font-display text-5xl text-slate-800 dark:text-white mb-6">What We Stand For</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">Your health, your happiness, your journey—My Stree is here for it all.</p>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-sky-200/40 dark:bg-sky-900/20 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] transform group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="relative p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                            <span className="material-symbols-outlined text-5xl text-slate-700 dark:text-white mb-6">psychology</span>
                            <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white mb-4">Holistic Approach</h3>
                            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">We combine medical expertise with care for your mind, body, and soul. From nutrition and mental health to physical wellness, we provide integrated solutions.</p>
                        </div>
                    </div>
                    <div className="group relative mt-12 md:mt-0">
                        <div className="absolute inset-0 bg-gray-200/60 dark:bg-gray-700/30 rounded-[68%_32%_43%_57%/37%_57%_43%_63%] transform group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="relative p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                            <span className="material-symbols-outlined text-5xl text-slate-700 dark:text-white mb-6">favorite</span>
                            <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white mb-4">Empathy First</h3>
                            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">We practice active listening. We understand that sometimes, you just need someone to listen, validate, and guide you—not rush through your concerns.</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-[35%_65%_31%_69%/57%_39%_61%_43%] transform group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="relative p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                            <span className="material-symbols-outlined text-5xl text-slate-700 dark:text-white mb-6">school</span>
                            <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white mb-4">Empowerment</h3>
                            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">Knowledge builds confidence. We empower women with the information, tools, and guidance they need to make informed choices for themselves.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Visit Us Section */}
            <section className="relative bg-background-light dark:bg-background-dark py-0 mb-0">
                <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
                    <div className="md:w-1/3 bg-cadet-gray text-white p-12 flex flex-col justify-center relative z-10">
                        <span className="font-bold uppercase tracking-wider text-sm text-corn-silk mb-2">Visit Us</span>
                        <h2 className="text-4xl font-display font-bold mb-8">What to Expect</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full"><span className="material-symbols-outlined text-white">description</span></div>
                                <div>
                                    <p className="font-bold text-lg">No long forms</p>
                                    <p className="text-white/80 text-sm">Quick digital check-in before you arrive.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full"><span className="material-symbols-outlined text-white">door_front</span></div>
                                <div>
                                    <p className="font-bold text-lg">Private rooms</p>
                                    <p className="text-white/80 text-sm">Soundproofed spaces for your privacy.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full"><span className="material-symbols-outlined text-white">coffee</span></div>
                                <div>
                                    <p className="font-bold text-lg">Warm environment</p>
                                    <p className="text-white/80 text-sm">Comfortable lounge, not a waiting room.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 pt-4 border-t border-white/20 mt-4">
                                <span className="material-symbols-outlined mt-1">location_on</span>
                                <div>
                                    <p className="font-bold text-base">My Stree Clinic</p>
                                    <p className="text-white/80 text-sm">Whitefield, Bengaluru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 relative bg-gray-200 min-h-[400px]">
                        <img alt="Map Location of My Stree Clinic" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition duration-500" onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMeJwUSE8_I6drByML0s6ptvLOEkBJNCIrM20qSk9cGn09e9fUUya6UCv-Ljlz3KQv3csbVk827kO87k4wxhVIeTOo8zBTgsA9oXroOMwBpWaHKQbU4FGTGfbbhdvb1L-Y6NP73mYWvMaXpWs6_t37j2g0kGcnfgiJXDxTxQlpm6N0osjr2KCUdBCEQYzvIQK71DLPrEuIljMHiAj8zT_SjVxeZlTR799QH0iOvXShfcXtlVg6leddHkT7O52_OjYA1daYNeAyrP5r'; e.target.style.objectFit = 'cover' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCla6y3FQE6qjRHwnEMvdtNI24mOUnacAR041hdHAyw5dPEE-gUH0e8KpLrtZGUapAAsZ3ndt8EYbfD0NLveKwBDGjQl9PiOdMwrUIaut077sHaBHJkMuGnSIu_dhIOXuStMac24SnFGm0e2m-hntPytnKhrbwjNBKPvFj1hbKR_NScCap2RHlNHInGaqwBudcd56mloYp8vn0PSXALYOKv0ptMg8k7ElH5DdO6THS7Eblzk9edpJkRqcWKLuHAhnqc0WNjSXA854l_" />
                        <a className="absolute bottom-8 right-8 bg-[#FDFBF7] text-gray-900 px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition z-10" href="https://maps.app.goo.gl/r5462Mpbnn15Q3Ar5" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-primary">directions</span>
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Bottom Buttons */}
            <div className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 p-4 z-40 md:hidden pb-safe">
                <button className="w-full bg-gradient-to-r from-primary to-orange-600 text-white rounded-full px-6 py-3.5 font-bold text-base shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-transform active:scale-95">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    <span>Book Appointment</span>
                </button>
            </div>
            <div className={`hidden md:block fixed bottom-8 right-24 z-50 group transition-all duration-500 transform ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 w-max bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Schedule a visit
                    <div className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                </div>

                <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary rounded-full pl-5 pr-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 hover:border-primary/20 flex items-center gap-3 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(237,91,45,0.2)]">
                    <span className="font-bold text-sm tracking-wide">Book Appointment</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
