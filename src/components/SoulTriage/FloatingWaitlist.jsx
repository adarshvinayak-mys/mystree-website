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
                    className="fixed bottom-0 md:bottom-8 md:right-8 z-50 w-full md:w-auto"
                >
                    <div className="bg-[rgba(17,15,14,0.85)] md:bg-[#1A1816]/90 backdrop-blur-2xl md:border border-t border-white/10 md:rounded-2xl p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] md:shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-center gap-4 w-full md:max-w-md">
                        <div className="flex-1 text-center sm:text-left w-full">
                            <h4 className="font-serif text-lg text-[#F4F1EB] leading-tight">Healthcare that finally remembers you.</h4>
                            <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#8FA295] mt-1">Foundation Access.</p>
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            className="whitespace-nowrap px-6 py-3 bg-[#FF5A36] text-[#F4F1EB] font-sans text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-[#F4F1EB] hover:text-[#110F0E] active:scale-95 transition-all w-full sm:w-auto"
                        >
                            Request Access
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
