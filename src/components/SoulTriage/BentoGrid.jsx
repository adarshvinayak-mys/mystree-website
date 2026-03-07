import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';

// ─── Card Data ───────────────────────────────────────────────────────────────
const cardsData = [
    {
        id: 'fingerprint',
        icon: 'fingerprint',
        title: 'The Health ID',
        subtitle: 'One scanner. Your entire health story.',
        themeColor: '#2563EB',
        description: 'Your entire health journey — securely stored and accessible in one click. No more carrying files or repeating history to every new doctor.',
        bullets: ['Digital Health Locker', 'Cross-clinic Data Sync', 'Global Access Token'],
    },
    {
        id: 'accuracy',
        icon: 'psychology_alt',
        title: 'AI Precision',
        subtitle: 'Advanced triage to detect complex patterns.',
        themeColor: '#7C3AED',
        description: 'Our AI detects subtle health changes before they become problems — early warnings, intelligent symptom grouping, and clinical peace of mind.',
        bullets: ['99.8% Triage Accuracy', 'Intelligent Symptom Clustering', 'Early Warning Signals'],
    },
    {
        id: 'timedriven',
        icon: 'verified',
        title: '6-Hour Triage',
        subtitle: 'Scientifically validated. Physician verified.',
        themeColor: '#DB2777',
        description: 'AI-powered triage for women’s health with a 6-hour turnaround time, combining intelligent symptom analysis with a human-in-the-loop doctor verification system for fast, reliable, and clinically trusted responses.',
        bullets: ['Guaranteed 6-Hour Response', 'Physician-Verified Analysis', 'Comprehensive Gynaecology Support'],
    },
    {
        id: 'longevity',
        icon: 'lock',
        title: 'Luxury Longevity',
        subtitle: 'Unlocking the future of long-term wellness.',
        themeColor: '#059669',
        description: 'Our elite longevity programs are currently in development. We are building the future of anti-ageing and personalized health storage.',
        bullets: ['Next-gen Precision Testing', 'Anti-ageing Protocols', 'Elite Health Storage'],
        isLocked: true,
    },
];

// ─── Individual Glass Card ───────────────────────────────────────────────────
const GlassCard = ({ id, icon, title, subtitle, bullets, themeColor, isLocked, onClick }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={isLocked ? undefined : onClick}
            whileHover={isLocked ? {} : { y: -10, scale: 1.02 }}
            whileTap={isLocked ? {} : { scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className={`relative w-full h-full min-h-[420px] rounded-[40px] overflow-hidden border-2 bg-white group transition-all duration-500 ${isLocked ? 'cursor-default opacity-90' : 'cursor-pointer shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]'}`}
            style={{ borderColor: isHovered && !isLocked ? themeColor + '50' : 'rgba(0,0,0,0.06)' }}
        >
            {/* Locked Badge */}
            {isLocked && (
                <div className="absolute top-10 right-10 z-20 bg-black/5 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 flex items-center gap-2">
                    <span className="material-icons text-sm text-[#110F0E]">lock</span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#110F0E]">Coming Soon</span>
                </div>
            )}

            {/* Subtle color tint on hover */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none ${isLocked ? 'hidden' : ''}`}
                style={{ backgroundColor: themeColor }}
            />

            {/* Mouse spotlight glow */}
            {!isLocked && (
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[90px] pointer-events-none z-0"
                    style={{
                        background: `radial-gradient(circle, ${themeColor}22 0%, transparent 70%)`,
                        left: smoothX,
                        top: smoothY,
                        x: '-50%',
                        y: '-50%',
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-between">
                <div>
                    <div
                        className="w-16 h-16 rounded-[20px] flex items-center justify-center transition-all duration-500 mb-8 shadow-sm border border-black/5"
                        style={{
                            backgroundColor: isHovered && !isLocked ? themeColor : 'rgba(0,0,0,0.05)',
                            color: isHovered && !isLocked ? 'white' : '#110F0E',
                        }}
                    >
                        <span className="material-icons text-3xl">{isLocked ? 'lock_clock' : icon}</span>
                    </div>

                    <h3 className="font-serif text-[32px] md:text-[36px] font-bold text-[#110F0E] mb-4 leading-tight tracking-tight">
                        {title}
                    </h3>

                    <p className="font-serif italic text-lg text-[#2F3E46] mb-8 leading-relaxed">
                        "{subtitle}"
                    </p>
                </div>

                <div className="space-y-4 border-t-2 border-black/5 pt-8">
                    {bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <span
                                className="w-2.5 h-2.5 rounded-full mt-2 shrink-0"
                                style={{ backgroundColor: themeColor }}
                            />
                            <span className="font-sans text-lg font-bold leading-snug text-[#110F0E]">{bullet}</span>
                        </div>
                    ))}
                </div>

                <div
                    className={`mt-8 flex items-center gap-3 font-bold uppercase tracking-widest text-sm transition-transform duration-400 ${!isLocked ? 'group-hover:translate-x-2' : ''}`}
                    style={{ color: themeColor }}
                >
                    <span>{isLocked ? 'Coming Soon' : 'Discover More'}</span>
                    <span className="material-icons text-lg">{isLocked ? 'lock_reset' : 'east'}</span>
                </div>
            </div>
        </motion.div>
    );
};

// ─── Glassmorphic Modal (rendered via Portal to avoid crossovers) ─────────────
const GlassModal = ({ card, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    const tc = card.themeColor;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {/* Full-screen fixed overlay — always above everything */}
            <motion.div
                key="modal-root"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 md:p-12"
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            >
                {/* Backdrop — clicking it closes modal */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${tc}18 0%, rgba(17,15,14,0.55) 100%)`,
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                    }}
                    onClick={onClose}
                />

                {/* Modal panel */}
                <motion.div
                    key="modal-panel"
                    initial={{ opacity: 0, scale: 0.88, y: 32 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: 32 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="relative w-full max-w-[680px] md:max-w-[760px] rounded-[40px] md:rounded-[52px] overflow-hidden z-10"
                    style={{
                        background: 'rgba(255,255,255,0.72)',
                        backdropFilter: 'blur(48px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(48px) saturate(180%)',
                        border: `1.5px solid rgba(255,255,255,0.7)`,
                        boxShadow: `0 30px 80px rgba(17,15,14,0.18), 0 0 0 1px rgba(255,255,255,0.15) inset, 0 -1px 0 rgba(255,255,255,0.25) inset`,
                    }}
                >
                    {/* Color ambient glow strip at top */}
                    <div
                        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[52px]"
                        style={{ background: `linear-gradient(90deg, transparent, ${tc}, ${tc}80, transparent)` }}
                    />

                    {/* Inner glass highlight edges */}
                    <div
                        className="absolute inset-0 pointer-events-none rounded-[52px]"
                        style={{ border: '1px solid rgba(255,255,255,0.35)', borderRadius: 'inherit' }}
                    />

                    {/* Ambient color bloom behind content */}
                    <div
                        className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
                        style={{
                            background: `radial-gradient(circle, ${tc}20 0%, transparent 70%)`,
                            filter: 'blur(40px)',
                        }}
                    />

                    {/* Scrollable content area for small screens */}
                    <div className="relative z-10 overflow-y-auto max-h-[90vh] p-8 sm:p-12 md:p-16 flex flex-col gap-7">
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                            style={{
                                background: 'rgba(17,15,14,0.06)',
                                border: '1px solid rgba(17,15,14,0.08)',
                            }}
                        >
                            <span className="material-icons text-xl text-[#110F0E]">close</span>
                        </button>

                        {/* Header */}
                        <div className="flex items-start gap-5 sm:gap-7 pr-14">
                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-[20px] sm:rounded-[24px] text-white flex items-center justify-center shadow-xl"
                                style={{
                                    backgroundColor: tc,
                                    boxShadow: `0 12px 32px ${tc}40`,
                                }}
                            >
                                <span className="material-icons text-3xl sm:text-4xl">{card.icon}</span>
                            </div>
                            <div className="min-w-0">
                                <span
                                    className="font-sans text-xs uppercase tracking-[0.35em] font-bold block mb-1"
                                    style={{ color: tc }}
                                >
                                    Clinical Pillar
                                </span>
                                <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[46px] font-bold text-[#110F0E] leading-tight tracking-tight">
                                    {card.title}
                                </h2>
                            </div>
                        </div>

                        {/* Divider with color */}
                        <div
                            className="h-px w-full"
                            style={{ background: `linear-gradient(90deg, ${tc}60, transparent)` }}
                        />

                        {/* Quote */}
                        <p
                            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#110F0E] font-light italic leading-snug pl-6 border-l-4"
                            style={{ borderColor: tc }}
                        >
                            "{card.subtitle}"
                        </p>

                        {/* Description */}
                        <p className="font-sans text-base sm:text-lg md:text-xl text-[#110F0E]/75 leading-relaxed font-medium">
                            {card.description}
                        </p>

                        {/* Feature bullets — glass inner card */}
                        <div
                            className="rounded-[28px] p-6 sm:p-8"
                            style={{
                                background: 'rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.7)',
                                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 20px ${tc}10`,
                            }}
                        >
                            <span
                                className="font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-5"
                                style={{ color: tc }}
                            >
                                What this means for you
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                {card.bullets.map((bullet, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <span
                                            className="w-3 h-3 rounded-full mt-1.5 shrink-0 shadow-sm"
                                            style={{ backgroundColor: tc }}
                                        />
                                        <span className="font-sans text-base sm:text-lg font-bold text-[#110F0E] leading-snug">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={onClose}
                            className="w-full py-4 sm:py-5 text-white rounded-2xl font-bold uppercase tracking-[0.25em] text-sm active:scale-[0.98] transition-all duration-200"
                            style={{
                                backgroundColor: tc,
                                boxShadow: `0 12px 36px ${tc}45`,
                            }}
                        >
                            Got It
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function BentoGrid() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedCard, setSelectedCard] = useState(null);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
    };

    return (
        <section className="relative w-full py-[64px] lg:py-[80px] px-6 lg:px-12 bg-[#FCFBF7] border-t border-black/5 overflow-hidden">
            {/* Decorative bg blobs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none blur-[120px] opacity-30"
                style={{ background: 'radial-gradient(circle, #2563EB15, transparent 70%)' }} />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] pointer-events-none blur-[120px] opacity-30"
                style={{ background: 'radial-gradient(circle, #DB277715, transparent 70%)' }} />

            <div className="max-w-[1360px] mx-auto flex flex-col gap-10 lg:gap-14 relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="max-w-[900px] mx-auto text-center"
                >
                    <span className="font-sans text-sm uppercase tracking-[0.4em] text-[#110F0E]/30 font-bold border-l-4 border-[#110F0E]/10 pl-5 mb-8 block w-max mx-auto">
                        Pillars of Excellence
                    </span>
                    <h2 className="font-serif text-[48px] md:text-7xl lg:text-[88px] font-light text-[#110F0E] tracking-[-0.04em] leading-[1.05]">
                        Healthcare that{' '}
                        <span className="italic font-semibold text-[#FF5A36]">Remembers You.</span>
                    </h2>
                    <p className="mt-6 font-sans text-lg md:text-xl text-[#110F0E]/50 font-medium max-w-[600px] mx-auto leading-relaxed">
                        Tap any pillar to discover what truly personalized women's health looks like.
                    </p>
                </motion.div>

                {/* Card grid */}
                <motion.div
                    variants={shouldReduceMotion ? {} : containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-8%' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {cardsData.map((card) => (
                        <motion.div key={card.id} variants={shouldReduceMotion ? {} : cardVariants}>
                            <GlassCard {...card} onClick={() => setSelectedCard(card)} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal rendered into document.body — no crossover possible */}
            {selectedCard && (
                <GlassModal card={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
        </section>
    );
}
