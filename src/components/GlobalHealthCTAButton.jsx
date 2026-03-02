import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GlobalHealthCTAButton() {
    const location = useLocation();

    if (location.pathname === '/booking-gateway') {
        return null;
    }
    return (
        <div className="fixed bottom-20 left-4 md:bottom-8 md:left-6 z-50">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <a
                    href="https://my-stree.com/booking"
                    className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-white/90 backdrop-blur-md border border-primary/20 shadow-[0_10px_30px_rgba(237,89,44,0.2)] px-3 py-3 md:px-5 md:py-3 hover:shadow-[0_14px_34px_rgba(237,89,44,0.3)] transition-all"
                    aria-label="Quick health consultation"
                >
                    <motion.span
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-primary to-primary-light text-white flex items-center justify-center"
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="material-icons text-[18px]">favorite</span>
                    </motion.span>
                    <span className="hidden sm:flex flex-col leading-tight text-left">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-cadet-gray/70">Quick Care</span>
                        <span className="text-sm md:text-[15px] font-bold text-cadet-gray group-hover:text-primary transition-colors">
                            Book Health Consult
                        </span>
                    </span>
                    <span className="sm:hidden text-sm px-1.5 font-bold text-cadet-gray tracking-wide">Book</span>
                </a>
            </motion.div>
        </div>
    );
}
