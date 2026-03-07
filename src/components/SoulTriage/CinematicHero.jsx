import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../supabaseClient';
import mystreelogo from '../../assets/mystreelogo.svg';

export default function CinematicHero({ heroImageUrl, onScrollClick }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [activeTopic, setActiveTopic] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitError, setSubmitError] = useState('');

    const supportOptions = [
        { id: 'cycle', label: 'my cycle', color: '#FF5A36' },
        { id: 'mood', label: 'my mood', color: '#8FA295' },
        { id: 'fertility', label: 'my fertility', color: '#EEDBCE' },
        { id: 'skin', label: 'my skin', color: '#D4C5B9' }
    ];

    const glowColor = activeTopic ? activeTopic.color : '#FF5A36';

    const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    const titleWords1 = ["Join", "the", "AI", "revolution"];
    const titleWords2 = ["with", "MyStree", "Soul."];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError('');
        try {
            const { error } = await supabase
                .from('mystree_soul_waitlist')
                .insert([{ name, email, phone }]);
            if (error) {
                setSubmitError(error.message || 'Unable to join waitlist right now. Please try again.');
                return;
            }
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section ref={ref} className="relative w-full min-h-screen overflow-hidden bg-[#110F0E]">

            {/* Minimalist Logo Navbar for Beta Page */}
            <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 pointer-events-none">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <a href="/" className="pointer-events-auto transition-opacity hover:opacity-80">
                        <img
                            src={mystreelogo}
                            alt="MyStree Logo"
                            className="h-8 md:h-10 w-auto object-contain shadow-sm"
                            onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = '/mystreelogo.svg';
                            }}
                        />
                    </a>
                    <a
                        href="/"
                        className="pointer-events-auto group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-md"
                    >
                        <span className="material-icons text-[16px] text-[#8FA295] group-hover:text-[#F4F1EB] group-hover:-translate-x-1 transition-all">west</span>
                        <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.1em] font-medium text-[#8FA295] group-hover:text-[#F4F1EB] transition-colors">Return to Clinic</span>
                    </a>
                </div>
            </nav>

            {/* WOMENS DAY SCROLLING BANNER */}
            <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden bg-[rgba(255,90,54,0.08)] border-t border-[rgba(255,131,60,0.15)] py-3 sm:py-4 shadow-sm pointer-events-none backdrop-blur-md">
                <motion.div
                    animate={{ x: [0, "-50%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="flex whitespace-nowrap w-max"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6 px-6">
                            <span className="material-icons text-[14px] sm:text-[16px] text-[#FF5A36] animate-pulse">spa</span>
                            <span className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.2em] text-[#F4F1EB] uppercase">
                                Hi, I am your MyStree Soul and I can help you by remembering all your health history.
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                animate={shouldReduceMotion ? { scale: 1 } : { scale: [1.05, 1] }}
                transition={{ duration: 10, ease: "easeOut" }}
                style={{ scale: scaleBg }}
                className="absolute inset-0 z-0 w-full h-full will-change-transform"
            >
                {heroImageUrl ? (
                    <img src={heroImageUrl} alt="MyStree Soul" className="w-full h-full object-cover opacity-60 grayscale-[10%] contrast-110 mix-blend-luminosity will-change-transform" />
                ) : (
                    <div className="w-full h-full bg-[#110F0E]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#110F0E]/80 to-[#110F0E] z-10" />
            </motion.div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-20 min-h-screen flex flex-col justify-center px-6 lg:px-12 max-w-6xl mx-auto pt-24 pb-20 will-change-transform"
            >
                <div className="flex flex-col items-start justify-center max-w-[800px] relative">

                    {/* Breathing Ambient Glow Add-on */}
                    <motion.div
                        animate={
                            shouldReduceMotion
                                ? { opacity: 0.1, backgroundColor: glowColor }
                                : { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1], backgroundColor: glowColor }
                        }
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", backgroundColor: { duration: 1.5, ease: "easeInOut" } }}
                        className="absolute -z-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] left-[10%] top-1/2 -translate-y-1/2 rounded-full blur-[120px] pointer-events-none will-change-transform"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="mb-8"
                    >
                        <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8FA295] font-medium border-l border-[#FF5A36] pl-4">
                            Launching in Private Beta | March 8, 2026
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-serif text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F4F1EB] leading-[1.1] tracking-[-0.03em] mb-8"
                    >
                        <div className="flex flex-wrap gap-x-3 sm:gap-x-4">
                            {titleWords1.map((word, i) => (
                                <motion.span key={i} variants={wordVariants}>{word}</motion.span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-x-3 sm:gap-x-4">
                            {titleWords2.map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordVariants}
                                    className={i >= 3 ? "text-[#FF5A36] italic font-medium" : ""}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="text-[#8FA295] font-sans text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-[600px] mb-12"
                    >
                        Meet MyStree Soul. <br />
                        A women's health experience that remembers your history,<br />
                        understands your symptoms,<br />
                        and connects you directly to expert doctors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full max-w-2xl"
                    >
                        {!submitted ? (
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[#F4F1EB] font-serif text-xl sm:text-2xl font-light tracking-tight">I am looking for support with...</h3>

                                <div className="flex flex-wrap gap-2 sm:gap-3 mb-2">
                                    {supportOptions.map(option => (
                                        <button
                                            key={option.id}
                                            type="button"
                                            onClick={() => setActiveTopic(option)}
                                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-sans text-[10px] sm:text-xs uppercase tracking-[0.1em] ${activeTopic?.id === option.id ? 'bg-[rgba(255,255,255,0.1)] border-white text-white' : 'border-white/10 text-[#8FA295] hover:border-white/30 hover:text-[#F4F1EB]'}`}
                                            style={{ borderColor: activeTopic?.id === option.id ? option.color : '' }}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {activeTopic && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <form
                                                layoutId="hero-waitlist"
                                                className="relative group flex flex-col bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/10 p-1.5 focus-within:border-[#F4F1EB] transition-all duration-300 mb-3 gap-1.5 rounded-lg"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="flex flex-col sm:flex-row gap-1.5 w-full">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="FULL NAME"
                                                        className="flex-1 bg-transparent border-none outline-none text-[#F4F1EB] placeholder:text-[#8FA295]/60 px-4 sm:px-6 py-3 sm:py-4 font-sans text-xs uppercase tracking-[0.1em] border-b sm:border-b-0 sm:border-r border-white/10"
                                                    />
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        placeholder="PHONE NUMBER"
                                                        className="flex-1 bg-transparent border-none outline-none text-[#F4F1EB] placeholder:text-[#8FA295]/60 px-4 sm:px-6 py-3 sm:py-4 font-sans text-xs uppercase tracking-[0.1em]"
                                                    />
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-1.5 w-full">
                                                    <input
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="EMAIL ADDRESS"
                                                        className="flex-1 bg-transparent border-none outline-none text-[#F4F1EB] placeholder:text-[#8FA295]/60 px-4 sm:px-6 py-3 sm:py-4 font-sans text-xs uppercase tracking-[0.1em]"
                                                    />
                                                    <button
                                                        type="submit"
                                                        disabled={submitting}
                                                        data-no-booking-intercept="true"
                                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-[#F4F1EB] text-[#110F0E] font-sans text-xs uppercase tracking-[0.1em] font-medium hover:bg-white active:scale-95 transition-all whitespace-nowrap rounded-md disabled:opacity-70"
                                                    >
                                                        {submitting ? 'Requesting...' : 'Request Access'}
                                                    </button>
                                                </div>
                                            </form>
                                            {submitError ? (
                                                <p className="mt-2 px-2 text-[11px] sm:text-xs text-red-300 font-sans tracking-[0.04em] uppercase">
                                                    {submitError}
                                                </p>
                                            ) : null}

                                            {/* Privacy Halo */}
                                            <div className="flex items-center gap-2 mt-2 pl-2 text-[#8FA295]">
                                                <motion.span
                                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    className="material-icons text-sm"
                                                    style={{ color: activeTopic.color }}
                                                >
                                                    shield
                                                </motion.span>
                                                <p className="font-sans text-[10px] sm:text-xs tracking-[0.05em] uppercase">
                                                    Encrypted Soul-Data. Your privacy is our foundation.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <motion.div
                                layoutId="hero-waitlist"
                                className="bg-[rgba(255,90,54,0.1)] border border-[#FF5A36]/50 p-4 flex items-center gap-4 rounded-lg mb-4"
                                style={{ backgroundColor: `rgba(${parseInt(activeTopic?.color.slice(1, 3), 16)}, ${parseInt(activeTopic?.color.slice(3, 5), 16)}, ${parseInt(activeTopic?.color.slice(5, 7), 16)}, 0.1)`, borderColor: `${activeTopic?.color}80` }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#110F0E]"
                                    style={{ backgroundColor: activeTopic?.color || '#FF5A36' }}
                                >
                                    <span className="material-icons text-sm">check</span>
                                </motion.div>
                                <div>
                                    <h3 className="font-sans text-sm font-medium text-[#F4F1EB] tracking-wide">Foundation Access Requested</h3>
                                    <p className="font-sans text-[11px] text-[#8FA295] tracking-[0.05em] uppercase">We'll be in touch soon, {name.split(' ')[0]}.</p>
                                </div>
                            </motion.div>
                        )}
                        <p className="font-sans text-[11px] sm:text-xs text-[#8FA295]/80 leading-relaxed max-w-[420px] mt-8">
                            * Our March 8 launch is an invite-only closed beta. Waitlist members will receive priority onboarding, direct feedback loop with our team, and fast access.
                        </p>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
}
