import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../supabaseClient';
import mystreelogo from '../../assets/mystreelogo.svg';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INDIA_PHONE_REGEX = /^[6-9]\d{9}$/;
const COUNTRY_OPTIONS = [
    { code: '+91', label: 'IN +91', minLength: 10, maxLength: 10 },
    { code: '+1', label: 'US +1', minLength: 10, maxLength: 10 },
    { code: '+44', label: 'UK +44', minLength: 10, maxLength: 10 },
    { code: '+971', label: 'UAE +971', minLength: 9, maxLength: 9 }
];

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
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [submitError, setSubmitError] = useState('');

    const supportOptions = [
        { id: 'cycle', label: 'my cycle', color: '#FF5A36' },
        { id: 'mood', label: 'my mood', color: '#8FA295' },
        { id: 'fertility', label: 'my fertility', color: '#EEDBCE' },
        { id: 'skin', label: 'my skin', color: '#D4C5B9' }
    ];

    const glowColor = activeTopic ? activeTopic.color : '#FF5A36';

    const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityText = useTransform(scrollYProgress, [0, 0.4, 0.9], [1, 0.95, 0.9]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    const titleWords1 = ["Join", "the", "AI", "revolution"];
    const titleWords2 = ["with", "MyStree", "Soul."];
    const selectedCountry = COUNTRY_OPTIONS.find((opt) => opt.code === countryCode) || COUNTRY_OPTIONS[0];

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
            const trimmedName = name.trim();
            const normalizedEmail = email.trim().toLowerCase();
            const phoneDigits = phone.replace(/\D/g, '');

            if (!trimmedName) {
                setSubmitError('Please enter your full name.');
                return;
            }
            if (!EMAIL_REGEX.test(normalizedEmail)) {
                setSubmitError('Please enter a valid email address.');
                return;
            }
            if (phoneDigits.length < selectedCountry.minLength || phoneDigits.length > selectedCountry.maxLength) {
                setSubmitError(`Please enter a valid phone number for ${selectedCountry.label}.`);
                return;
            }
            if (countryCode === '+91' && !INDIA_PHONE_REGEX.test(phoneDigits)) {
                setSubmitError('Please enter a valid Indian mobile number.');
                return;
            }

            const fullPhone = `${countryCode}${phoneDigits}`;
            const { error } = await supabase
                .from('mystree_soul_waitlist')
                .insert([{ name: trimmedName, email: normalizedEmail, phone: fullPhone }]);
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
        <section ref={ref} className="relative w-full min-h-[100dvh] bg-[#FCFBF7] z-0">

            {/* Minimalist Logo Navbar for Beta Page */}
            <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 pointer-events-none">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <a href="/" className="pointer-events-auto transition-opacity hover:opacity-80">
                        <img
                            src={mystreelogo}
                            alt="MyStree Logo"
                            className="h-10 md:h-12 w-auto object-contain filter brightness-[100] drop-shadow-md"
                            onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = '/mystreelogo.svg';
                                event.currentTarget.className = "h-10 md:h-12 w-auto object-contain filter brightness-[100] drop-shadow-md";
                            }}
                        />
                    </a>
                    <a
                        href="/"
                        className="pointer-events-auto group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 backdrop-blur-md"
                    >
                        <span className="material-icons text-[20px] text-white group-hover:-translate-x-1 transition-all">west</span>
                        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.15em] font-bold text-white transition-colors">Return to Clinic</span>
                    </a>
                </div>
            </nav>

            {/* WOMENS DAY SCROLLING BANNER */}
            <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden bg-[#FF5A36]/10 border-t border-[#FF5A36]/20 py-4 sm:py-5 shadow-sm pointer-events-none backdrop-blur-md">
                <motion.div
                    animate={{ x: [0, "-50%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="flex whitespace-nowrap w-max"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8 px-8">
                            <span className="material-icons text-[18px] sm:text-[22px] text-[#FF5A36] animate-pulse">spa</span>
                            <span className="font-sans text-[13px] sm:text-[15px] font-bold tracking-[0.2em] text-[#1B2C39] uppercase">
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
                    <img
                        src={heroImageUrl}
                        alt="MyStree Soul"
                        className="w-full h-full object-cover sm:object-center object-[75%] opacity-85 grayscale-[5%] contrast-[1.05] will-change-transform"
                    />
                ) : (
                    <div className="w-full h-full bg-[#FCFBF7]" />
                )}
                {/* Sophisticated Light Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent backdrop-blur-[1px] z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FCFBF7] z-10" />
            </motion.div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-20 min-h-[100dvh] flex flex-col justify-center px-5 sm:px-6 lg:px-12 max-w-6xl mx-auto pt-32 pb-20 will-change-transform"
            >
                <div className="flex flex-col items-start justify-center max-w-[900px] relative">

                    {/* Breathing Ambient Glow Add-on */}
                    <motion.div
                        animate={
                            shouldReduceMotion
                                ? { opacity: 0.1, backgroundColor: glowColor }
                                : { scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1], backgroundColor: glowColor }
                        }
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", backgroundColor: { duration: 1.5, ease: "easeInOut" } }}
                        className="absolute -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] left-[10%] top-1/2 -translate-y-1/2 rounded-full blur-[140px] pointer-events-none will-change-transform"
                    />


                    {/* Professional Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="w-12 h-[1px] bg-[#FF5A36]" />
                        <span className="font-sans text-sm sm:text-base uppercase tracking-[0.3em] text-[#FF5A36] font-extrabold">
                            Private Beta Launch | March 8, 2026
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-serif text-[40px] leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl font-light text-white lg:leading-[1.05] tracking-[-0.04em] mb-8 lg:mb-10 text-shadow-xl"
                    >
                        <div className="flex flex-wrap gap-x-4 sm:gap-x-6">
                            {titleWords1.map((word, i) => (
                                <motion.span key={i} variants={wordVariants}>{word}</motion.span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-x-4 sm:gap-x-6">
                            {titleWords2.map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordVariants}
                                    className={i >= 3 ? "text-[#FF5A36] italic font-medium" : "drop-shadow-lg"}
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
                        className="text-white/95 font-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[700px] mb-10 lg:mb-14 drop-shadow-lg"
                    >
                        Meet MyStree Soul. <br />
                        <span className="block sm:inline">A healthcare experience that </span>
                        <span className="font-bold underline decoration-[#FF5A36] text-white text-shadow-md">remembers your history</span>,
                        <br />
                        <span className="block sm:inline">understands your symptoms, and </span>
                        <span className="block sm:inline">connects you directly to </span>
                        <span className="font-bold text-white text-shadow-md">expert doctors</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full max-w-2xl"
                    >
                        {!submitted ? (
                            <div className="flex flex-col gap-6">
                                <h3 className="text-white font-serif text-2xl sm:text-3xl font-light tracking-tight drop-shadow-md">I am looking for support with...</h3>

                                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
                                    {supportOptions.map(option => (
                                        <button
                                            key={option.id}
                                            type="button"
                                            onClick={() => setActiveTopic(option)}
                                            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 transition-all duration-300 font-sans text-xs sm:text-sm uppercase tracking-[0.15em] font-bold ${activeTopic?.id === option.id ? 'text-white shadow-lg' : 'bg-white/40 border-black/10 text-[#1B2C39] hover:border-[#FF5A36]/30 hover:text-black hover:bg-white/80'}`}
                                            style={{
                                                backgroundColor: activeTopic?.id === option.id ? option.color : '',
                                                borderColor: activeTopic?.id === option.id ? option.color : ''
                                            }}
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
                                                className="relative group flex flex-col bg-white/95 backdrop-blur-sm border-2 border-black/20 p-3 focus-within:border-black focus-within:ring-4 focus-within:ring-black/5 transition-all duration-300 mb-4 gap-3 rounded-2xl shadow-2xl"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="flex flex-col sm:flex-row gap-2 w-full">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="FULL NAME"
                                                        className="flex-1 bg-white border-2 border-black/5 focus:border-[#FF5A36] outline-none text-[#110F0E] placeholder:text-[#2F3E46]/60 px-6 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-[0.1em] rounded-xl transition-all"
                                                    />
                                                    <div className="flex-1 flex items-center bg-white border-2 border-black/5 focus-within:border-[#FF5A36] rounded-xl transition-all overflow-hidden">
                                                        <select
                                                            value={countryCode}
                                                            onChange={(e) => {
                                                                const nextCode = e.target.value;
                                                                const nextCountry = COUNTRY_OPTIONS.find((opt) => opt.code === nextCode) || COUNTRY_OPTIONS[0];
                                                                const digits = phone.replace(/\D/g, '').slice(0, nextCountry.maxLength);
                                                                setCountryCode(nextCode);
                                                                setPhone(digits);
                                                            }}
                                                            className="w-[100px] bg-black/5 border-none outline-none text-[#110F0E] px-4 py-4 font-sans text-xs sm:text-sm uppercase tracking-[0.08em] font-bold h-full appearance-none cursor-pointer hover:bg-black/10 transition-colors"
                                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23110F0E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" }}
                                                        >
                                                            {COUNTRY_OPTIONS.map((opt) => (
                                                                <option key={opt.code} value={opt.code} className="text-[#110F0E]">
                                                                    {opt.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <input
                                                            type="tel"
                                                            inputMode="numeric"
                                                            required
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, selectedCountry.maxLength))}
                                                            placeholder="PHONE NUMBER"
                                                            className="flex-1 bg-transparent border-none outline-none text-[#110F0E] placeholder:text-[#2F3E46]/60 px-4 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-[0.1em]"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-2 w-full">
                                                    <input
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="EMAIL ADDRESS"
                                                        className="flex-1 bg-white border-2 border-black/5 focus:border-[#FF5A36] outline-none text-[#110F0E] placeholder:text-[#2F3E46]/60 px-6 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-[0.1em] rounded-xl transition-all"
                                                    />
                                                    <button
                                                        type="submit"
                                                        disabled={submitting}
                                                        data-no-booking-intercept="true"
                                                        className="px-8 py-4 bg-[#FF5A36] text-white font-sans text-sm uppercase tracking-[0.15em] font-bold hover:bg-[#E94E2B] active:scale-95 transition-all whitespace-nowrap rounded-xl shadow-lg shadow-[#FF5A36]/30 disabled:opacity-70"
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
                                            <div className="flex items-center gap-3 mt-3 pl-4 text-[#1B2C39]/70">
                                                <motion.span
                                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    className="material-icons text-xl"
                                                    style={{ color: activeTopic.color }}
                                                >
                                                    shield
                                                </motion.span>
                                                <p className="font-sans text-[11px] sm:text-xs tracking-[0.1em] uppercase font-bold">
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
                                className="bg-white border-2 p-6 flex items-center gap-6 rounded-2xl mb-6 shadow-2xl"
                                style={{ borderColor: activeTopic?.color }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                                    style={{ backgroundColor: activeTopic?.color || '#FF5A36' }}
                                >
                                    <span className="material-icons text-xl">check</span>
                                </motion.div>
                                <div>
                                    <h3 className="font-sans text-lg font-bold text-[#110F0E] tracking-tight">Foundation Access Requested</h3>
                                    <p className="font-sans text-[12px] text-[#2F3E46] tracking-[0.1em] uppercase font-medium">We'll be in touch soon, {name.split(' ')[0]}.</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
}
