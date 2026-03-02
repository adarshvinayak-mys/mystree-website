import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const GlassCard = ({ icon, title, subtitle, bullets, hoverGradient }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    // Smooth trailing for the mouse glow
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
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full h-full min-h-[400px] rounded-[32px] overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl group cursor-pointer shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
        >
            {/* Hover Gradient Overlay */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${hoverGradient}`}
            />

            {/* Mouse tracking spotlight */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
                    left: smoothX,
                    top: smoothY,
                    x: '-50%',
                    y: '-50%',
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* Inner Border Highlight */}
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/5 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-500 mb-8 group-hover:scale-110 transform origin-left shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:bg-white/10">
                        <span className="material-icons text-2xl">{icon}</span>
                    </div>

                    <h3 className="font-serif text-[28px] md:text-[32px] font-light text-[#F4F1EB] mb-3 leading-tight tracking-[-0.02em] group-hover:text-white transition-colors duration-500">
                        {title}
                    </h3>

                    <p className="font-serif italic text-[16px] text-[#8FA295] mb-8 group-hover:text-white/90 transition-colors duration-500">
                        "{subtitle}"
                    </p>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-8">
                    {bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: `${i * 75}ms` }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0 group-hover:bg-white transition-colors duration-500" />
                            <span className="font-sans text-[14px] md:text-[15px] font-light text-[#F4F1EB] leading-snug">{bullet}</span>
                        </div>
                    ))}
                </div>

                {/* Right corner arrow */}
                <div className="absolute top-12 right-10 md:right-12 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-white/50">
                    <span className="material-icons text-2xl">arrow_forward_ios</span>
                </div>
            </div>
        </motion.div>
    );
};

const cardsData = [
    {
        icon: 'fingerprint',
        title: 'The Unique Fingerprint',
        subtitle: 'One seamless scanner access to your entire medical history.',
        hoverGradient: 'bg-gradient-to-br from-[#FF5A36]/30 via-[#FF5A36]/5 to-transparent',
        bullets: [
            'One barcode access to all medical history and tests',
            'Continuity of your history',
            'Clinical clarity across all touchpoints'
        ]
    },
    {
        icon: 'psychology_alt',
        title: 'AI Accuracy & Precision',
        subtitle: 'Advanced triage to understand complex metabolic patterns.',
        hoverGradient: 'bg-gradient-to-br from-[#06B6D4]/30 via-[#06B6D4]/5 to-transparent',
        bullets: [
            'Unmatched AI accuracy in triage',
            'Intelligent symptom clustering',
            'Evidence-based signal detection'
        ]
    },
    {
        icon: 'bolt',
        title: 'Time-Driven Care',
        subtitle: 'Fast, reliable escalation directed by clinical expertise.',
        hoverGradient: 'bg-gradient-to-br from-[#8B5CF6]/30 via-[#8B5CF6]/5 to-transparent',
        bullets: [
            '6-hour TAT (Turnaround Time) for triage',
            'Instant escalation support when needed',
            'Real-time Partner Alert (SOS) ecosystem'
        ]
    },
    {
        icon: 'spa',
        title: 'Longevity & Wellness',
        subtitle: 'Healthcare designed for your entire journey forward.',
        hoverGradient: 'bg-gradient-to-br from-[#10B981]/30 via-[#10B981]/5 to-transparent',
        bullets: [
            'Personalized long-term wellness and longevity',
            'Preventative care pathways',
            'Secure, encrypted health storage'
        ]
    }
];

export default function BentoGrid() {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <section className="relative w-full py-[100px] lg:py-[140px] px-6 lg:px-12 bg-[#0B0F19] z-10 border-t border-white/5 overflow-hidden">
            {/* Ambient Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] pointer-events-none opacity-20 z-0 blur-[120px]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255,90,54,0.15) 0%, transparent 60%)'
                }}
            />

            <div className="max-w-[1200px] mx-auto flex flex-col gap-14 lg:gap-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="max-w-[800px] mx-auto text-center"
                >
                    <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8FA295] font-medium border-l border-[#FF5A36] pl-4 mb-6 block w-max mx-auto">
                        Our Care Pillars
                    </span>
                    <h2 className="font-serif text-[42px] md:text-5xl lg:text-6xl font-light text-[#F4F1EB] tracking-[-0.03em] leading-[1.1]">
                        Healthcare that finally <br className="hidden md:block" />
                        <span className="text-[#FF5A36] italic font-medium"> remembers you.</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={shouldReduceMotion ? {} : containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr"
                >
                    {cardsData.map((card, i) => (
                        <motion.div key={i} variants={shouldReduceMotion ? {} : cardVariants} className="h-full">
                            <GlassCard {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
