import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const getSymptoms = (isMobile) => [
    { text: "Fatigue", startX: isMobile ? -100 : -280, startY: isMobile ? -220 : -180, endX: isMobile ? -60 : -140, endY: isMobile ? -140 : -120, icon: "battery_alert" },
    { text: "Mood Swings", startX: isMobile ? 100 : 280, startY: isMobile ? -180 : -150, endX: isMobile ? 60 : 140, endY: isMobile ? -120 : -100, icon: "waves" },
    { text: "Irregular Cycles", startX: isMobile ? -140 : -350, startY: isMobile ? -40 : 0, endX: isMobile ? -80 : -180, endY: isMobile ? -20 : 0, icon: "calendar_month" },
    { text: "Anxiety", startX: isMobile ? 140 : 350, startY: isMobile ? 40 : 30, endX: isMobile ? 80 : 180, endY: isMobile ? 20 : 0, icon: "air" },
    { text: "Bloating", startX: isMobile ? -100 : -250, startY: isMobile ? 180 : 180, endX: isMobile ? -60 : -120, endY: isMobile ? 100 : 120, icon: "water_drop" },
    { text: "Hormonal Imbalance", startX: isMobile ? 100 : 250, startY: isMobile ? 220 : 200, endX: isMobile ? 60 : 120, endY: isMobile ? 140 : 140, icon: "tune" },
];

export default function ChaosToClarity() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const symptoms = getSymptoms(isMobile);

    // Scan line moves from top to bottom between 20% and 60% scroll
    const scanLineY = useTransform(scrollYProgress, [0.2, 0.6], ["-50vh", "50vh"]);
    const scanLineOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.6, 0.65], [0, 1, 1, 0]);

    // Phase 3 Convergence: 60% to 100% scroll
    const textOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
    const textScale = useTransform(scrollYProgress, [0.65, 0.85], [0.9, 1]);
    const centerGlowOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
    const linesOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full h-[250vh] bg-[#0B0F19] border-t border-white/5">
            <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Stage 1: Subtle Diagnostic Grid */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Stage 2: Scanning Line */}
                <motion.div
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A36] to-transparent shadow-[0_0_15px_rgba(255,90,54,0.5)] z-20 pointer-events-none"
                    style={{ y: scanLineY, opacity: scanLineOpacity }}
                />

                {/* Stage 3: Ambient Center Glow */}
                <motion.div
                    style={{ opacity: centerGlowOpacity }}
                    className="absolute inset-0 pointer-events-none flex items-center justify-center z-0"
                >
                    <div className="w-[250px] h-[250px] rounded-full bg-[rgba(255,90,54,0.08)] blur-[60px]" />
                </motion.div>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <g style={{ transform: 'translate(50%, 50%)' }}>
                        {symptoms.map((symptom, i) => {
                            // Phase 2: Inward translation 5%
                            const xPhase2 = symptom.startX * 0.95;
                            const yPhase2 = symptom.startY * 0.95;

                            const x = useTransform(scrollYProgress, [0.2, 0.6, 1.0], [symptom.startX, xPhase2, symptom.endX]);
                            const y = useTransform(scrollYProgress, [0.2, 0.6, 1.0], [symptom.startY, yPhase2, symptom.endY]);
                            return (
                                <motion.line
                                    key={`line-${i}`}
                                    x1="0" y1="0"
                                    x2={x} y2={y}
                                    stroke="rgba(255,90,54,0.2)"
                                    strokeWidth="1"
                                    style={{ opacity: linesOpacity }}
                                />
                            );
                        })}
                    </g>
                </svg>

                {/* Center Core Text */}
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    className="absolute z-20 flex flex-col items-center justify-center pointer-events-none w-full px-6"
                >
                    <h2 className="font-serif text-[32px] md:text-5xl font-light text-[#F4F1EB] tracking-[-0.03em] leading-tight text-center">
                        Understanding <br />
                        <span className="italic text-[#FF5A36]">begins here.</span>
                    </h2>
                </motion.div>

                {/* Floating Symptom Nodes */}
                {symptoms.map((symptom, i) => {
                    const xPhase2 = symptom.startX * 0.95;
                    const yPhase2 = symptom.startY * 0.95;

                    const x = useTransform(scrollYProgress, [0.2, 0.6, 1.0], [symptom.startX, xPhase2, symptom.endX]);
                    const y = useTransform(scrollYProgress, [0.2, 0.6, 1.0], [symptom.startY, yPhase2, symptom.endY]);
                    const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0.65, 0.65, 0.9]);

                    return (
                        <motion.div
                            key={i}
                            style={{ x, y }}
                            className="absolute left-1/2 top-1/2 flex items-center justify-center w-0 h-0 z-10 pointer-events-none will-change-transform"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: i * 0.25, ease: "easeOut" }}
                            >
                                <motion.div style={{ opacity: scrollOpacity }} className="relative flex items-center justify-center">

                                    {/* Brief Subliminal Pulse on Reveal */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0.4 }}
                                        whileInView={{ scale: 1.6, opacity: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.25, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"
                                    />

                                    <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-[6px] px-[18px] py-[10px] rounded-full flex items-center gap-2 sm:gap-3 shadow-md">
                                        <span className="material-icons text-sm sm:text-base text-[#8FA295]">{symptom.icon}</span>
                                        <span className="font-sans text-[11px] sm:text-xs uppercase text-[#F4F1EB] whitespace-nowrap font-medium tracking-[0.02em]">
                                            {symptom.text}
                                        </span>
                                    </div>

                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
}
