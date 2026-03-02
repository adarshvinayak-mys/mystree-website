import React from 'react';
import { motion } from 'framer-motion';

const bubbleData = [
    { id: 1, text: "Safe Space Chat", icon: "forum", sizeClass: "w-32 h-32 md:w-48 md:h-48", positionClass: "top-10 left-2 md:left-10" },
    { id: 2, text: "Health Memory", icon: "history_edu", sizeClass: "w-28 h-28 md:w-44 md:h-44", positionClass: "top-32 right-4 md:right-20" },
    { id: 3, text: "Smart Priority", icon: "health_and_safety", sizeClass: "w-36 h-36 md:w-56 md:h-56", positionClass: "bottom-16 left-6 md:left-24" },
    { id: 4, text: "Human Doctors", icon: "medical_services", sizeClass: "w-24 h-24 md:w-36 md:h-36", positionClass: "top-24 right-1/4" },
    { id: 5, text: "100% Private", icon: "lock", sizeClass: "w-32 h-32 md:w-52 md:h-52", positionClass: "bottom-12 right-6 md:right-32" },
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
            bounce: 0.5,
            duration: 1.2
        }
    },
};

const FloatBubble = ({ bubble, index }) => (
    <motion.div
        variants={bubbleVariants}
        className={`absolute ${bubble.positionClass} z-0 flex-shrink-0`}
    >
        <motion.div
            animate={{ y: [0, -20, 0], x: [0, (index % 2 === 0 ? 15 : -15), 0] }}
            transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
            }}
            className={`relative rounded-full flex flex-col items-center justify-center text-center p-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.2)] bg-white/10 backdrop-blur-3xl border border-white/40 hover:scale-110 transition-transform duration-500 ${bubble.sizeClass}`}
        >
            <span className="material-icons text-white mb-2" style={{ fontSize: '2.5rem' }}>{bubble.icon}</span>
            <span className="font-sans text-white font-bold text-sm md:text-base lg:text-lg leading-snug drop-shadow-md px-2 break-words">
                {bubble.text}
            </span>
        </motion.div>
    </motion.div>
);

export default function BubbleCTA() {
    return (
        <section className="relative w-full min-h-screen py-32 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#EF6A40] to-[#ED5B2D]">
            {/* Ambient Animated Bubbles Container */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {bubbleData.map((bubble, index) => (
                    <FloatBubble key={bubble.id} bubble={bubble} index={index} />
                ))}
            </motion.div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-16 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-2xl border border-white/30 p-10 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(10,10,10,0.2)]"
                >
                    <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        Be part of the future of women's health.
                    </h2>
                    <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-sans mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        To ensure the highest quality of personalized care, we are limiting access. Secure your spot in the private beta now.
                    </p>

                    <form className="max-w-lg mx-auto relative group flex flex-col sm:flex-row gap-4 sm:gap-0 sm:bg-white sm:border sm:border-white/30 sm:rounded-full sm:p-1.5 shadow-2xl focus-within:ring-4 focus-within:ring-white/40 transition-all font-sans" onSubmit={e => e.preventDefault()}>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 bg-white sm:bg-transparent border border-white/50 sm:border-none text-gray-900 placeholder:text-gray-500 rounded-full sm:rounded-none py-4 px-8 text-lg focus:outline-none transition-all"
                        />
                        <button className="w-full sm:w-auto py-4 px-10 rounded-full bg-[#1A365D] text-white font-bold text-lg shadow-xl hover:bg-[#112441] hover:shadow-2xl sm:hover:-translate-y-0.5 sm:hover:scale-[1.02] transition-all whitespace-nowrap">
                            Join the Waitlist
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-white/80 font-sans tracking-wide font-medium">
                        100% Private. We respect your data and your inbox.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
