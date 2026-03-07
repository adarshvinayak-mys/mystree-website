import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// ─── Confetti ────────────────────────────────────────────────────────────────
const CONFETTI_COLORS = ['#D4AF37', '#F5E6A3', '#fff', '#BFE2FE', '#0057FF'];
function ConfettiPiece() {
    return (
        <motion.div className="fixed pointer-events-none z-[10001]"
            style={{ width: Math.random() * 8 + 6, height: Math.random() * 8 + 6, backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)], borderRadius: Math.random() > 0.5 ? '50%' : '2px', top: '-20px', left: `${Math.random() * 100}vw` }}
            initial={{ y: -20, opacity: 1, rotate: 0, x: 0 }}
            animate={{ y: '110vh', opacity: [1, 1, 0], rotate: Math.random() * 720 - 360, x: (Math.random() - 0.5) * 200 }}
            transition={{ duration: Math.random() * 1.5 + 2, delay: Math.random() * 0.8, ease: 'easeIn' }}
        />
    );
}

// ─── Launch Celebration ──────────────────────────────────────────────────────
function LaunchCelebration({ onClose }) {
    return ReactDOM.createPortal(
        <motion.div className="fixed inset-0 z-[10000] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {Array.from({ length: 80 }).map((_, i) => <ConfettiPiece key={i} />)}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
            <motion.div className="relative z-10 max-w-[520px] w-full mx-4 rounded-[32px] overflow-hidden text-center"
                initial={{ scale: 0.75, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.1 }}
                style={{ background: '#0A1628', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.3)' }}>
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #D4AF37, #F5E6A3, #D4AF37)' }} />
                <div className="p-10 sm:p-14 flex flex-col items-center gap-5">
                    <motion.div className="text-6xl" animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 1.2, repeat: 2 }}>🚀</motion.div>
                    <div>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">MyStree Soul is Live!</h2>
                        <p className="font-sans text-base text-[#D4AF37] mt-2 font-semibold tracking-wider uppercase" style={{ letterSpacing: '0.15em' }}>The future of women's health — now open.</p>
                    </div>
                    <Link to="/mystree-soul" onClick={onClose}
                        className="mt-2 px-10 py-4 rounded-xl text-[#0A1628] font-black uppercase tracking-[0.2em] text-sm transition-all hover:brightness-90 active:scale-[0.97]"
                        style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 100%)', boxShadow: '0 8px 32px rgba(212,175,55,0.4)' }}>
                        Enter Now →
                    </Link>
                    <button onClick={onClose} className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors">Dismiss</button>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
}

// ─── Main Widget ──────────────────────────────────────────────────────────────
export default function LaunchCountdownWidget() {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });
    const [launched, setLaunched] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [scrolledAway, setScrolledAway] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolledAway(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const calcTimeLeft = useCallback(() => {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight - now;
        if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
        const ts = Math.floor(diff / 1000);
        return { hours: Math.floor(ts / 3600), minutes: Math.floor((ts % 3600) / 60), seconds: ts % 60, totalSeconds: ts };
    }, []);

    useEffect(() => {
        setTimeLeft(calcTimeLeft());
        const timer = setInterval(() => {
            const t = calcTimeLeft();
            setTimeLeft(t);
            if (t.totalSeconds === 0 && !launched) {
                setLaunched(true);
                setShowCelebration(true);
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [calcTimeLeft, launched]);

    if (dismissed || location.pathname !== '/') return null;

    const units = [
        { val: timeLeft.hours, lbl: 'HRS' },
        { val: timeLeft.minutes, lbl: 'MIN' },
        { val: timeLeft.seconds, lbl: 'SEC' },
    ];

    // Shared tile style
    const tile = (size) => ({
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(212,175,55,0.4)',
        borderRadius: size === 'sm' ? '9px' : '12px',
        color: '#fff',
        fontFamily: '"Courier New", monospace',
        fontWeight: 900,
        fontSize: size === 'sm' ? '2rem' : 'clamp(2.25rem, 4.5vw, 3.85rem)',
        padding: size === 'sm' ? '0.35rem 0.75rem' : 'clamp(0.45rem, 1.1vw, 0.95rem) clamp(0.65rem, 1.6vw, 1.35rem)',
        minWidth: size === 'sm' ? '3rem' : 'clamp(3.3rem, 6.6vw, 5.5rem)',
        textAlign: 'center',
        lineHeight: 1,
        letterSpacing: '0.04em',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
    });

    const labelStyle = (size) => ({
        fontSize: size === 'sm' ? '0.48rem' : 'clamp(0.5rem, 0.75vw, 0.62rem)',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '0.35em',
        color: 'rgba(212,175,55,0.75)',
    });

    const colonStyle = (size) => ({
        fontFamily: 'monospace',
        fontWeight: 900,
        color: 'rgba(212,175,55,0.45)',
        fontSize: size === 'sm' ? '1.4rem' : 'clamp(1.4rem, 3vw, 2.6rem)',
        lineHeight: 1,
        marginBottom: size === 'sm' ? '0.8rem' : '1rem',
    });

    return (
        <>
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

                        {/* Dismiss */}
                        <button onClick={() => setDismissed(true)}
                            className="absolute top-3 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Dismiss">
                            <span className="material-icons text-lg" style={{ color: 'rgba(255,255,255,0.35)' }}>close</span>
                        </button>

                        {/* ────────── MOBILE ────────── */}
                        <div className="flex flex-col sm:hidden px-5 pt-4 pb-4 gap-4">
                            {/* Row 1: Tag + Timer */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D4AF37' }} />
                                    <span style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.35em', color: 'rgba(212,175,55,0.8)' }}>
                                        Launching in
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {units.map((u, i) => (
                                        <React.Fragment key={u.lbl}>
                                            {i > 0 && <span style={colonStyle('sm')}>:</span>}
                                            <div className="flex flex-col items-center gap-0.5">
                                                <div style={tile('sm')}>{String(u.val).padStart(2, '0')}</div>
                                                <span style={labelStyle('sm')}>{u.lbl}</span>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2: Headline + CTA */}
                            <div className="flex items-center justify-between gap-3 pb-1">
                                <div className="flex flex-col items-start gap-0.5">
                                    <span style={{ fontFamily: 'serif', fontWeight: 900, fontSize: '1.18rem', color: '#fff', lineHeight: 1.2 }}>
                                        MyStree Soul
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                                        Women's health — reimagined.
                                    </span>
                                </div>
                                <Link to="/mystree-soul"
                                    className="flex items-center gap-1.5 rounded-xl font-black uppercase flex-shrink-0 transition-all active:scale-[0.95]"
                                    style={{
                                        background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 100%)',
                                        color: '#0A1628',
                                        fontSize: '0.72rem',
                                        padding: '0.62rem 1.25rem',
                                        letterSpacing: '0.14em',
                                        boxShadow: '0 4px 20px rgba(212,175,55,0.5)',
                                    }}>
                                    Join Now
                                    <span className="material-icons" style={{ fontSize: '0.85rem' }}>east</span>
                                </Link>
                            </div>
                        </div>

                        {/* ────────── DESKTOP ────────── */}
                        <div className="hidden sm:flex items-center justify-between px-8 lg:px-16 gap-8"
                            style={{ minHeight: 'calc(20vh - 3px)', maxHeight: '195px' }}>

                            {/* LEFT: Countdown */}
                            <div className="flex flex-col items-start gap-2 shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D4AF37' }} />
                                    <span style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.72rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.35em', color: 'rgba(212,175,55,0.8)' }}>
                                        Launching in
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {units.map((u, i) => (
                                        <React.Fragment key={u.lbl}>
                                            {i > 0 && <span style={colonStyle('lg')}>:</span>}
                                            <div className="flex flex-col items-center gap-0.5">
                                                <div style={tile('lg')}>{String(u.val).padStart(2, '0')}</div>
                                                <span style={labelStyle('lg')}>{u.lbl}</span>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="self-stretch my-5 w-px" style={{ background: 'rgba(212,175,55,0.15)' }} />

                            {/* CENTER: Headline */}
                            <div className="flex-1 flex flex-col items-center justify-center text-center gap-1 px-4">
                                <h2 className="font-serif font-black text-white leading-tight"
                                    style={{ fontSize: 'clamp(1.65rem, 4.5vw, 3.3rem)', letterSpacing: '-0.02em' }}>
                                    MyStree Soul
                                </h2>
                                <p style={{ fontSize: 'clamp(0.88rem, 1.75vw, 1.2rem)', color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.01em' }}>
                                    Women's health — <span style={{ color: '#D4AF37', fontWeight: 700 }}>reimagined with intelligence.</span>
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="self-stretch my-5 w-px" style={{ background: 'rgba(212,175,55,0.15)' }} />

                            {/* RIGHT: CTA */}
                            <div className="shrink-0 flex flex-col items-end gap-2">
                                <motion.div
                                    animate={{ boxShadow: ['0 0 0 0 rgba(212,175,55,0)', '0 0 0 10px rgba(212,175,55,0.08)', '0 0 0 0 rgba(212,175,55,0)'] }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{ borderRadius: '14px' }}
                                >
                                    <Link to="/mystree-soul"
                                        className="flex items-center gap-2.5 rounded-[14px] font-black uppercase transition-all duration-200 active:scale-[0.95]"
                                        style={{
                                            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 100%)',
                                            color: '#0A1628',
                                            fontSize: 'clamp(0.85rem, 1.7vw, 1.05rem)',
                                            padding: 'clamp(0.8rem, 1.6vw, 1.15rem) clamp(1.7rem, 3.5vw, 2.8rem)',
                                            letterSpacing: '0.16em',
                                            boxShadow: '0 6px 28px rgba(212,175,55,0.5)',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; }}
                                    >
                                        Be Among the First
                                        <span className="material-icons" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>east</span>
                                    </Link>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Celebration */}
            <AnimatePresence>
                {showCelebration && <LaunchCelebration onClose={() => setShowCelebration(false)} />}
            </AnimatePresence>
        </>
    );
}
