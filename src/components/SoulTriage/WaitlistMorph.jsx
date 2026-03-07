import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { supabase } from '../../supabaseClient';
import soulEcosystemImg from '../../assets/mystreesoule.jpg';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INDIA_PHONE_REGEX = /^[6-9]\d{9}$/;
const COUNTRY_OPTIONS = [
    { code: '+91', label: 'IN +91', minLength: 10, maxLength: 10 },
    { code: '+1', label: 'US +1', minLength: 10, maxLength: 10 },
    { code: '+44', label: 'UK +44', minLength: 10, maxLength: 10 },
    { code: '+971', label: 'UAE +971', minLength: 9, maxLength: 9 }
];

const features = [
    { id: 'pcos', title: "PCOS Care", icon: "spa", deskX: 22, deskY: 22 },
    { id: 'hormonal', title: "Hormonal Balance", icon: "water_drop", deskX: 78, deskY: 22 },
    { id: 'pregnancy', title: "Pregnancy Support", icon: "child_care", deskX: 22, deskY: 78 },
    { id: 'mental', title: "Mental Wellness", icon: "psychology", deskX: 78, deskY: 78 },
];

export default function WaitlistMorph() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [submitError, setSubmitError] = useState('');
    const shouldReduceMotion = useReducedMotion();
    const selectedCountry = COUNTRY_OPTIONS.find((opt) => opt.code === countryCode) || COUNTRY_OPTIONS[0];

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#FCFBF7] overflow-hidden flex flex-col items-center justify-center z-10 border-t border-black/5">
            {/* Professional Background Image with White Tint - Mobile Optimized */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={soulEcosystemImg}
                    alt="Ecosystem Background"
                    className="w-full h-full object-cover sm:object-center object-[70%] opacity-60 grayscale-[10%] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF7]/95 via-[#FCFBF7]/40 to-[#FCFBF7]/95 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Ecosystem Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="font-serif text-[42px] md:text-6xl lg:text-7xl font-light text-[#110F0E] tracking-[-0.04em] leading-[1.1] mb-8"
                    >
                        Connected Care Ecosystem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                        className="text-[#2F3E46] font-sans text-lg md:text-xl font-bold leading-relaxed max-w-[600px] mx-auto"
                    >
                        Every service works in harmony to support your full health journey.
                    </motion.p>
                </div>

                {/* --- DESKTOP NETWORK (True Radial) --- */}
                <div className="hidden md:block relative w-full max-w-4xl h-[650px] mx-auto mb-24 pointer-events-none">

                    {/* SVG Connecting Lines (Draw from center) */}
                    {!shouldReduceMotion && (
                        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                            {features.map((node, i) => (
                                <motion.line
                                    key={`line-${node.id}`}
                                    x1="50%" y1="50%"
                                    x2={`${node.deskX}%`} y2={`${node.deskY}%`}
                                    stroke="rgba(255,90,54,0.3)"
                                    strokeWidth="2.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1.5, delay: 0.4 + (i * 0.15), ease: "easeInOut" }}
                                />
                            ))}
                        </svg>
                    )}

                    {/* Ambient Center Glow */}
                    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,90,54,0.1), transparent 45%)' }} />

                    {/* Central Bubble */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="w-[200px] h-[200px] rounded-full bg-white border-2 border-[#FF5A36] flex flex-col items-center justify-center shadow-2xl group transition-all duration-300"
                        >
                            {!shouldReduceMotion && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-[#FF5A36]/10 bg-transparent pointer-events-none"
                                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            )}
                            <span className="material-icons text-5xl text-[#FF5A36] mb-3">all_inclusive</span>
                            <span className="font-serif text-[#110F0E] text-2xl font-bold tracking-tight text-center px-4">MyStree Soul</span>
                        </motion.div>
                    </div>

                    {/* Outer Feature Bubbles */}
                    {features.map((node, i) => (
                        <div
                            key={node.id}
                            className="absolute z-10 pointer-events-auto"
                            style={{
                                left: `${node.deskX}%`,
                                top: `${node.deskY}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: 0.6 + (i * 0.15), duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                whileHover={{ y: shouldReduceMotion ? 0 : -8, scale: 1.05, boxShadow: "0 25px 60px rgba(0,0,0,0.1)" }}
                                className="w-[160px] h-[160px] rounded-full bg-white border-2 border-black/5 shadow-xl flex flex-col items-center justify-center transition-all duration-300 cursor-default group will-change-transform"
                            >
                                <span className="material-icons text-4xl text-[#2F3E46] group-hover:text-[#FF5A36] transition-colors duration-300 mb-4 block">
                                    {node.icon}
                                </span>
                                <h4 className="font-sans font-bold text-[13px] uppercase tracking-[0.15em] text-[#110F0E] text-center px-6 transition-colors duration-300">
                                    {node.title}
                                </h4>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* --- MOBILE NETWORK --- */}
                <div className="md:hidden relative w-full flex flex-col items-center mt-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="relative z-10 w-[160px] h-[160px] mb-12 rounded-full bg-white border-2 border-[#FF5A36] flex flex-col items-center justify-center shadow-2xl"
                    >
                        <span className="material-icons text-4xl text-[#FF5A36] mb-2">all_inclusive</span>
                        <span className="font-serif text-[#110F0E] text-xl font-bold tracking-tight">MyStree Soul</span>
                    </motion.div>

                    {features.map((node, i) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: 0.2 + (i * 0.15), duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="relative z-10 w-[140px] h-[140px] mb-10 last:mb-0 rounded-full bg-white border-2 border-black/5 shadow-xl flex flex-col items-center justify-center"
                        >
                            <span className="material-icons text-3xl text-[#2F3E46] mb-3">{node.icon}</span>
                            <h4 className="font-sans font-bold text-[12px] uppercase tracking-[0.12em] text-[#110F0E] text-center px-6">
                                {node.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>


                {/* --- WAITLIST FORM BLOCK --- */}
                <div className="w-full max-w-[600px] mx-auto mt-12 mb-16 relative z-10">
                    <h3 className="font-serif text-[32px] md:text-[40px] text-center text-[#110F0E] font-light mb-12">
                        Be part of the future <span className="italic text-[#FF5A36] font-bold">of women's health.</span>
                    </h3>

                    {!submitted ? (
                        <>
                            <motion.form
                                layoutId="footer-waitlist"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                onSubmit={async (e) => {
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
                                }}
                                className="bg-white border-2 border-black/10 p-2 focus-within:border-[#FF5A36] transition-all flex flex-col gap-3 rounded-2xl shadow-2xl shadow-black/5"
                            >
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="FULL NAME"
                                    className="w-full bg-transparent px-6 py-4 outline-none text-[#110F0E] placeholder:text-[#2F3E46]/40 font-sans text-sm font-bold uppercase tracking-[0.15em] border-b-2 border-black/5"
                                />
                                <div className="w-full flex items-center border-b-2 border-black/5 focus-within:border-[#FF5A36] transition-all bg-transparent">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => {
                                            const nextCode = e.target.value;
                                            const nextCountry = COUNTRY_OPTIONS.find((opt) => opt.code === nextCode) || COUNTRY_OPTIONS[0];
                                            const digits = phone.replace(/\D/g, '').slice(0, nextCountry.maxLength);
                                            setCountryCode(nextCode);
                                            setPhone(digits);
                                        }}
                                        className="w-[112px] bg-black/5 border-none outline-none text-[#110F0E] px-4 py-4 font-sans text-xs sm:text-sm uppercase tracking-[0.08em] font-bold appearance-none cursor-pointer hover:bg-black/10 transition-colors"
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
                                        className="flex-1 bg-transparent px-4 py-4 outline-none text-[#110F0E] placeholder:text-[#2F3E46]/40 font-sans text-sm font-bold uppercase tracking-[0.15em]"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 w-full">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="EMAIL ADDRESS"
                                        className="flex-1 bg-transparent px-6 py-4 outline-none text-[#110F0E] placeholder:text-[#2F3E46]/40 font-sans text-sm font-bold uppercase tracking-[0.15em]"
                                    />
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        data-no-booking-intercept="true"
                                        className="px-8 py-4 bg-[#FF5A36] text-white font-sans text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#110F0E] active:scale-95 transition-all rounded-xl shadow-lg shadow-[#FF5A36]/30 disabled:opacity-70 whitespace-nowrap"
                                    >
                                        {submitting ? 'Joining...' : 'Join Waitlist'}
                                    </button>
                                </div>
                            </motion.form>
                            {submitError ? (
                                <p className="mt-2 px-2 text-[11px] sm:text-xs text-red-300 font-sans tracking-[0.04em] uppercase">
                                    {submitError}
                                </p>
                            ) : null}
                        </>
                    ) : (
                        <motion.div
                            layoutId="footer-waitlist"
                            className="bg-white border-2 border-[#FF5A36] p-10 flex flex-col sm:flex-row items-center gap-8 rounded-3xl text-center sm:text-left justify-center shadow-3xl shadow-[#FF5A36]/10"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                                className="w-16 h-16 rounded-full bg-[#FF5A36] flex items-center justify-center text-white shadow-xl shadow-[#FF5A36]/40"
                            >
                                <span className="material-icons text-3xl">check</span>
                            </motion.div>
                            <div>
                                <h3 className="font-sans text-2xl font-bold text-[#110F0E] tracking-tight">Invitation Secured</h3>
                                <p className="font-sans text-[13px] text-[#2F3E46] tracking-[0.15em] uppercase mt-2 font-bold">Waitlist Confirmed. You'll be considered for priority-invite access as soon as a spot opens up, {name.split(' ')[0]}.</p>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* --- FAQs --- */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-t-2 border-black/5 pt-12">
                    <div>
                        <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-[#FF5A36] font-bold mb-4">Is this replacing doctors?</h4>
                        <p className="font-sans text-lg text-[#110F0E] font-medium max-w-[300px] mx-auto md:mx-0">No. It enhances them by gathering context so they can treat you better, faster.</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-[#FF5A36] font-bold mb-4">Is this only for Bangalore?</h4>
                        <p className="font-sans text-lg text-[#110F0E] font-medium max-w-[300px] mx-auto md:mx-0">Initially, yes. Our first clinical hub is launching in Indiranagar.</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-[#FF5A36] font-bold mb-4">What happens after I join?</h4>
                        <p className="font-sans text-lg text-[#110F0E] font-medium max-w-[300px] mx-auto md:mx-0">You'll receive priority onboarding, direct feedback loop with our team, and fast access.</p>
                    </div>
                </div>
                {/* --- FOOTER --- */}
                <div className="w-full max-w-6xl mx-auto pt-16 pb-12 sm:pb-14 flex flex-col md:flex-row items-center justify-center gap-6 opacity-30">
                    <div className="flex items-center gap-2">
                        <span className="font-sans text-xs sm:text-sm tracking-[0.2em] font-bold text-[#110F0E] uppercase text-center">
                            © 2026. BLOOP – MY STREE SOUL. ALL RIGHTS RESERVED.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
