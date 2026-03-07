import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function FloatingWaitlist() {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2 && latest < 0.95) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed bottom-0 md:bottom-12 md:right-12 z-50 w-full md:w-auto p-4 md:p-0"
                >
                    <div className="bg-white border-2 border-black/5 md:rounded-[24px] p-6 md:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row items-center gap-8 w-full md:max-w-xl">
                        <div className="flex-1 text-center sm:text-left w-full">
                            <h4 className="font-serif text-2xl md:text-3xl text-[#110F0E] leading-tight font-bold">Healthcare that finally remembers you.</h4>
                            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#FF5A36] mt-3 font-bold">Foundation Access Open.</p>
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            className="whitespace-nowrap px-10 py-5 bg-[#FF5A36] text-white font-sans text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#110F0E] active:scale-95 transition-all w-full sm:w-auto rounded-xl shadow-lg shadow-[#FF5A36]/30"
                        >
                            Request Access
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
