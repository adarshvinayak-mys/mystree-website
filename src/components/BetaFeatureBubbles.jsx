import React from 'react';
import { motion } from 'framer-motion';

const features = [
    { id: 1, text: "Safe Space Chat", sizeClass: "w-32 h-32 md:w-56 md:h-56", offsetClass: "-translate-y-4 md:-translate-y-12" },
    { id: 2, text: "Health Memory", sizeClass: "w-36 h-36 md:w-48 md:h-48", offsetClass: "translate-y-6 md:translate-y-16" },
    { id: 3, text: "Smart Priority", sizeClass: "w-40 h-40 md:w-64 md:h-64", offsetClass: "-translate-y-2 md:-translate-y-8" },
    { id: 4, text: "Human Doctors", sizeClass: "w-32 h-32 md:w-48 md:h-48", offsetClass: "translate-y-8 md:translate-y-20" },
    { id: 5, text: "100% Private", sizeClass: "w-36 h-36 md:w-56 md:h-56", offsetClass: "-translate-y-6 md:-translate-y-10" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const bubbleVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
};

const Bubble = ({ feature, index }) => {
    return (
        <motion.div variants={bubbleVariants} className={`${feature.offsetClass} flex-shrink-0`}>
            {/* The continuous float animation is on a child to avoid conflicting with the whileInView y-axis animation */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 3.5 + (index % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                }}
                className={`relative rounded-full flex items-center justify-center text-center p-3 sm:p-5 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_15px_35px_rgba(0,0,0,0.4)] bg-white/5 backdrop-blur-2xl border border-white/20 ${feature.sizeClass}`}
            >
                <span className="font-sans text-white font-bold text-sm md:text-lg lg:text-xl leading-tight drop-shadow-lg z-10 w-full px-2 break-words">
                    {feature.text}
                </span>
            </motion.div>
        </motion.div>
    );
};

export default function BetaFeatureBubbles() {
    return (
        <section className="relative w-full min-h-screen py-32 overflow-hidden flex flex-col items-center justify-center bg-[#0D0D12]">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_top_left,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />

            <motion.div
                className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {features.map((feature, index) => (
                    <Bubble key={feature.id} feature={feature} index={index} />
                ))}
            </motion.div>
        </section>
    );
}
