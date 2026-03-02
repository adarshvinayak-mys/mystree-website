import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { supabase } from '../../supabaseClient';

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
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative w-full py-24 lg:py-32 bg-[#110F0E] overflow-hidden flex flex-col items-center justify-center z-10 border-t border-white/5 will-change-transform">
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Ecosystem Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="font-serif text-[36px] md:text-5xl lg:text-6xl font-light text-[#F4F1EB] tracking-[-0.03em] leading-[1.1] mb-6"
                    >
                        Connected Care Ecosystem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                        className="text-[#8FA295] font-sans text-sm md:text-base font-light leading-relaxed max-w-[500px] mx-auto"
                    >
                        Every service works in harmony to support your full health journey.
                    </motion.p>
                </div>

                {/* --- DESKTOP NETWORK (True Radial) --- */}
                <div className="hidden md:block relative w-full max-w-4xl h-[600px] mx-auto mb-20 pointer-events-none">

                    {/* SVG Connecting Lines (Draw from center) */}
                    {!shouldReduceMotion && (
                        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                            {features.map((node, i) => (
                                <motion.line
                                    key={`line-${node.id}`}
                                    x1="50%" y1="50%"
                                    x2={`${node.deskX}%`} y2={`${node.deskY}%`}
                                    stroke="rgba(255,131,60,0.15)"
                                    strokeWidth="1.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1.5, delay: 0.4 + (i * 0.15), ease: "easeInOut" }}
                                />
                            ))}
                        </svg>
                    )}

                    {/* Ambient Center Glow */}
                    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,90,54,0.06), transparent 45%)' }} />

                    {/* Central Bubble */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="w-[180px] h-[180px] rounded-full bg-[rgba(255,90,54,0.08)] border border-[rgba(255,90,54,0.3)] backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,90,54,0.15)] group transition-all duration-300"
                        >
                            {!shouldReduceMotion && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-[#FF5A36]/20 bg-transparent pointer-events-none"
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            )}
                            <span className="material-icons text-4xl text-[#FF5A36] mb-2">all_inclusive</span>
                            <span className="font-serif text-[#F4F1EB] text-xl font-medium tracking-tight">MyStree Soul</span>
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
                                whileHover={{ y: shouldReduceMotion ? 0 : -6, boxShadow: shouldReduceMotion ? 'none' : "0 20px 40px rgba(255,90,54,0.15)" }}
                                className="w-[140px] h-[140px] rounded-full bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 cursor-default group will-change-transform"
                            >
                                <span className="material-icons text-3xl text-white/70 group-hover:text-[#F4F1EB] transition-colors duration-300 mb-3 block">
                                    {node.icon}
                                </span>
                                <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.1em] text-[#8FA295] group-hover:text-[#F4F1EB] text-center px-4 transition-colors duration-300">
                                    {node.title}
                                </h4>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* --- MOBILE NETWORK (Vertical Stack) --- */}
                <div className="md:hidden relative w-full flex flex-col items-center mt-12 mb-20">

                    {/* SVG lines hidden on mobile to prevent clutter */}

                    {/* Central Bubble (Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="relative z-10 w-[140px] h-[140px] mb-8 rounded-full bg-[rgba(255,90,54,0.08)] border border-[rgba(255,90,54,0.3)] backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,90,54,0.15)]"
                    >
                        <span className="material-icons text-3xl text-[#FF5A36] mb-1">all_inclusive</span>
                        <span className="font-serif text-[#F4F1EB] text-lg font-medium tracking-tight">MyStree Soul</span>
                    </motion.div>

                    {/* Outer Feature Bubbles (Mobile Staggered Fade) */}
                    {features.map((node, i) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: 0.2 + (i * 0.15), duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="relative z-10 w-[120px] h-[120px] mb-8 last:mb-0 rounded-full bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-md bg-[#110F0E]"
                        >
                            <span className="material-icons text-2xl text-white/70 mb-2">{node.icon}</span>
                            <h4 className="font-sans font-medium text-[10px] uppercase tracking-[0.1em] text-[#8FA295] text-center px-4">
                                {node.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>


                {/* --- WAITLIST FORM BLOCK --- */}
                <div className="w-full max-w-[500px] mx-auto mt-12 mb-20 relative z-10">
                    <h3 className="font-serif text-2xl md:text-3xl text-center text-[#F4F1EB] font-light mb-8">
                        Be part of the future <span className="italic text-[#FF5A36]">of women's health.</span>
                    </h3>

                    {!submitted ? (
                        <motion.form
                            layoutId="footer-waitlist"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            onSubmit={async (e) => {
                                e.preventDefault();
                                setSubmitting(true);
                                try {
                                    const { error } = await supabase
                                        .from('mystree_soul_waitlist')
                                        .insert([{ name, email }]);
                                    if (error) throw error;
                                    setSubmitted(true);
                                } catch (error) {
                                    console.error('Error submitting to waitlist:', error.message);
                                    setSubmitted(true);
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                            className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-white/10 p-1.5 focus-within:border-[#FF5A36] transition-all flex flex-col gap-2 rounded-lg"
                        >
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="FULL NAME"
                                className="w-full bg-transparent px-4 sm:px-6 py-3 outline-none text-[#F4F1EB] placeholder:text-[#8FA295]/50 font-sans text-xs uppercase tracking-[0.1em] border-b border-white/10"
                            />
                            <div className="flex flex-col sm:flex-row gap-2 w-full">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="EMAIL ADDRESS"
                                    className="flex-1 bg-transparent px-4 sm:px-6 py-3 outline-none text-[#F4F1EB] placeholder:text-[#8FA295]/50 font-sans text-xs uppercase tracking-[0.1em]"
                                />
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    data-no-booking-intercept="true"
                                    className="px-6 sm:px-8 py-3 bg-[#F4F1EB] text-[#110F0E] font-sans text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#FF5A36] hover:text-[#F4F1EB] active:scale-95 transition-all rounded-md disabled:opacity-70 whitespace-nowrap"
                                >
                                    {submitting ? 'Joining...' : 'Join Waitlist'}
                                </button>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            layoutId="footer-waitlist"
                            className="bg-[rgba(255,90,54,0.1)] border border-[#FF5A36]/50 p-6 flex flex-col sm:flex-row items-center gap-4 rounded-xl text-center sm:text-left justify-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                                className="w-10 h-10 rounded-full bg-[#FF5A36] flex items-center justify-center text-white"
                            >
                                <span className="material-icons">check</span>
                            </motion.div>
                            <div>
                                <h3 className="font-sans text-base font-medium text-[#F4F1EB] tracking-wide">Invitation Secured</h3>
                                <p className="font-sans text-[11px] text-[#8FA295] tracking-[0.05em] uppercase mt-1">Founding member spot confirmed, {name.split(' ')[0]}.</p>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* --- FAQs --- */}
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-white/5 pt-12">
                    <div>
                        <h4 className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#F4F1EB] font-medium mb-2">Is this replacing doctors?</h4>
                        <p className="font-sans text-sm text-[#8FA295] font-light max-w-[250px] mx-auto md:mx-0">No. It enhances them by gathering context so they can treat you better, faster.</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#F4F1EB] font-medium mb-2">Is this only for Bangalore?</h4>
                        <p className="font-sans text-sm text-[#8FA295] font-light max-w-[250px] mx-auto md:mx-0">Initially, yes. Our first clinical hub is launching in Indiranagar.</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#F4F1EB] font-medium mb-2">What happens after I join?</h4>
                        <p className="font-sans text-sm text-[#8FA295] font-light max-w-[250px] mx-auto md:mx-0">You'll receive a secure invitation email post-launch if selected.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
