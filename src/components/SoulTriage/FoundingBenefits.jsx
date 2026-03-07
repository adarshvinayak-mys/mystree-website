import React from 'react';
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';

const benefits = [
    {
        eyebrow: 'Always yours',
        title: 'Exclusive lifetime triage access',
        copy: 'Join as a founding member and keep your MyStree Soul triage access even beyond the pilot window.',
        accent: '#FF5A36',
        glow: 'rgba(255,90,54,0.24)',
        icon: 'all_inclusive',
        cta: 'Lifetime triage'
    },
    {
        eyebrow: 'Doctor-backed pilot',
        title: 'Free gynaec access for the pilot period',
        copy: 'Get direct gynaec access throughout the pilot so early members can move from triage to clinical support without friction.',
        accent: '#8FA295',
        glow: 'rgba(143,162,149,0.24)',
        icon: 'favorite',
        cta: 'Free gynaec care'
    },
    {
        eyebrow: 'Companion mode',
        title: 'Free lifetime hormonal health companion Bloop access',
        copy: 'Unlock Bloop as your long-term hormonal health companion for continuity, prompts, and better pattern awareness.',
        accent: '#1B2C39',
        glow: 'rgba(27,44,57,0.18)',
        icon: 'neurology',
        cta: 'Bloop for life'
    }
];

function BenefitCard({ benefit, index, shouldReduceMotion }) {
    const controls = useAnimationControls();

    const triggerRotation = async () => {
        if (shouldReduceMotion) return;

        await controls.start({
            rotateX: [0, 8, -5, 0],
            rotateY: [0, -12, 9, 0],
            rotateZ: [0, 0.4, -0.3, 0],
            y: [0, -8, 0],
            scale: [1, 1.018, 0.996, 1],
            transition: {
                duration: 0.95,
                times: [0, 0.26, 0.68, 1],
                ease: [0.22, 1, 0.36, 1]
            }
        });
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.992 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
                duration: 0.75,
                delay: 0.12 + (index * 0.1),
                ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#BFE2FE]/60 p-6 shadow-[0_28px_80px_rgba(47,62,70,0.1)] backdrop-blur-2xl sm:p-7 cursor-pointer"
            style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.82), rgba(191,226,254,0.34))',
                perspective: 1800
            }}
            onClick={triggerRotation}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    triggerRotation();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={benefit.title}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-0 h-28 rounded-b-[2rem] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: benefit.glow, opacity: 0.95 }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `linear-gradient(145deg, ${benefit.glow}, transparent 50%)`
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.4), transparent 26%, rgba(252,244,217,0.28) 100%)'
                }}
            />

            <motion.div
                animate={controls}
                className="relative z-10 flex h-full flex-col"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="flex items-start justify-between gap-4" style={{ transform: 'translateZ(28px)' }}>
                    <div className="inline-flex rounded-full border border-white/80 bg-white/80 px-3.5 py-2 shadow-[0_8px_18px_rgba(47,62,70,0.06)] backdrop-blur-xl">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1B2C39]">
                            {benefit.eyebrow}
                        </span>
                    </div>
                    <div className="relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-[26px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(252,244,217,0.78))] shadow-[0_18px_40px_rgba(47,62,70,0.1),inset_0_1px_0_rgba(255,255,255,0.95)]">
                        <div
                            aria-hidden="true"
                            className="absolute inset-[10px] rounded-[20px] opacity-80"
                            style={{
                                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.92), ${benefit.glow})`
                            }}
                        />
                        <div className="relative z-10 flex flex-col items-center gap-1">
                            <span className="material-icons text-[28px]" style={{ color: benefit.accent }}>
                                {benefit.icon}
                            </span>
                            <span
                                className="h-[3px] w-7 rounded-full"
                                style={{ background: `linear-gradient(90deg, ${benefit.accent}, rgba(255,255,255,0.9))` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex-1" style={{ transform: 'translateZ(38px)' }}>
                    <h3 className="max-w-[16ch] font-serif text-[1.9rem] font-light leading-[1.05] tracking-[-0.04em] text-[#110F0E] sm:text-[2.2rem]">
                        {benefit.title}
                    </h3>
                    <p className="mt-5 max-w-[34ch] font-sans text-[15px] font-medium leading-relaxed text-[#2F3E46] sm:text-base">
                        {benefit.copy}
                    </p>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/70 pt-5" style={{ transform: 'translateZ(20px)' }}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-4 py-2 shadow-[0_10px_24px_rgba(47,62,70,0.06)] backdrop-blur-xl">
                        <span className="material-icons text-[16px]" style={{ color: benefit.accent }}>
                            {benefit.icon}
                        </span>
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2C39]">
                            {benefit.cta}
                        </span>
                    </div>
                    <span
                        className="h-1.5 flex-1 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${benefit.accent}, rgba(255,255,255,0.35))`
                        }}
                    />
                </div>
            </motion.div>
        </motion.article>
    );
}

export default function FoundingBenefits() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-[#FCF4D9] py-20 sm:py-24 lg:py-32 border-y border-[#BFE2FE]/40">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
                        radial-gradient(circle at 12% 16%, rgba(191,226,254,0.95), transparent 28%),
                        radial-gradient(circle at 88% 12%, rgba(255,255,255,0.8), transparent 24%),
                        radial-gradient(circle at 50% 84%, rgba(255,90,54,0.12), transparent 28%)
                    `
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-multiply"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(17,15,14,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,15,14,0.035) 1px, transparent 1px)',
                        backgroundSize: '36px 36px'
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28"
                style={{
                    background: 'linear-gradient(180deg, rgba(252,251,247,1), rgba(252,244,217,0))'
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
                style={{
                    background: 'linear-gradient(0deg, rgba(252,251,247,1), rgba(252,244,217,0))'
                }}
            />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.055em] text-[#110F0E] sm:text-5xl lg:text-7xl">
                        Built for the women
                        <br />
                        who join <span className="italic text-[#FF5A36] font-medium">before everyone else.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-medium leading-relaxed text-[#2F3E46] sm:text-lg">
                        This is not just early access. It is a high-trust care layer with pilot privileges, long-term utility, and a softer digital experience that feels connected to the rest of Soul.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-4 rounded-[2.2rem] border border-[#BFE2FE]/60 bg-white/55 p-4 backdrop-blur-xl shadow-[0_22px_60px_rgba(47,62,70,0.08)] sm:grid-cols-3 sm:p-5"
                    style={{
                        backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.68), rgba(191,226,254,0.34))'
                    }}
                >
                    {['Invite-only pilot', 'Clinic-backed guidance', 'Built for mobile-first care'].map((item) => (
                        <div
                            key={item}
                            className="flex items-center justify-center rounded-[1.4rem] border border-white/70 bg-[#FCFBF7]/90 px-4 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                        >
                            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2C39] sm:text-xs">
                                {item}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={benefit.title}
                            benefit={benefit}
                            index={index}
                            shouldReduceMotion={shouldReduceMotion}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
