import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


export default function LaunchCountdownWidget() {
    const [scrolledAway, setScrolledAway] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') return undefined;
        const onScroll = () => setScrolledAway(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [location.pathname]);


    if (location.pathname !== '/') return null;

    return (
        <AnimatePresence>
            {!scrolledAway && (
                <motion.div
                    key="launch-bar"
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -120, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="fixed left-0 right-0 z-[55] w-full"
                    style={{
                        top: '80px',
                        background: '#0A1628',
                        borderBottom: '1px solid rgba(212,175,55,0.25)',
                        boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
                    }}
                >
                    {/* Gold top accent line */}
                    <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #F5E6A3 50%, #D4AF37 70%, transparent 100%)' }} />

                    {/* ────────── MOBILE ────────── */}
                    <div className="flex flex-col sm:hidden px-5 py-6 gap-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_#D4AF37]" style={{ background: '#D4AF37' }} />
                            <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.35em', color: 'rgba(212,175,55,0.9)' }}>
                                Officially Launched
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span style={{ fontFamily: 'serif', fontWeight: 900, fontSize: '1.4rem', color: '#fff', lineHeight: 1.2 }}>
                                MyStree Soul is Live!
                            </span>
                            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                                Join the future of women's healthcare today.
                            </span>
                        </div>
                        <Link to="/mystree-soul"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl font-black uppercase transition-all active:scale-[0.95] mx-auto mt-1"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 100%)',
                                color: '#0A1628',
                                fontSize: '0.8rem',
                                padding: '0.75rem 1.5rem',
                                letterSpacing: '0.14em',
                                boxShadow: '0 4px 20px rgba(212,175,55,0.5)',
                            }}>
                            Explore Now
                            <span className="material-icons" style={{ fontSize: '0.9rem' }}>east</span>
                        </Link>
                    </div>

                    {/* ────────── DESKTOP ────────── */}
                    <div className="hidden sm:flex items-center justify-between px-8 lg:px-16 py-6 lg:py-8 gap-8">

                        {/* LEFT: Status */}
                        <div className="flex flex-col items-start gap-2 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_12px_#D4AF37]" style={{ background: '#D4AF37' }} />
                                <span style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4em', color: 'rgba(212,175,55,1)' }}>
                                    Now Live & Access Open
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="self-stretch w-px" style={{ background: 'rgba(212,175,55,0.15)', minHeight: '60px' }} />

                        {/* CENTER: Headline */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 px-4">
                            <h2 className="font-serif font-black text-white leading-tight drop-shadow-lg"
                                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em' }}>
                                MyStree Soul is Officially Launched!
                            </h2>
                            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.02em' }}>
                                The ultimate AI companion for women's health. <span style={{ color: '#D4AF37', fontWeight: 700 }}>Join the ecosystem today.</span>
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="self-stretch w-px" style={{ background: 'rgba(212,175,55,0.15)' }} />

                        {/* RIGHT: CTA */}
                        <div className="shrink-0 flex items-center">
                            <motion.div
                                animate={{ boxShadow: ['0 0 0 0 rgba(212,175,55,0)', '0 0 0 12px rgba(212,175,55,0.08)', '0 0 0 0 rgba(212,175,55,0)'] }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ borderRadius: '16px' }}
                            >
                                <Link to="/mystree-soul"
                                    className="flex items-center gap-2.5 rounded-[16px] font-black uppercase transition-all duration-200 active:scale-[0.95]"
                                    style={{
                                        background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 100%)',
                                        color: '#0A1628',
                                        fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                                        padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 2.75rem)',
                                        letterSpacing: '0.15em',
                                        boxShadow: '0 8px 32px rgba(212,175,55,0.6)',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.15)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; }}
                                >
                                    Enter Experience
                                    <span className="material-icons" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>east</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
