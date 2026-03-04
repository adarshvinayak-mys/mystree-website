import { useLocation } from 'react-router-dom';
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
                    className="group inline-flex items-center gap-2.5 md:gap-3 rounded-full bg-white/95 backdrop-blur-xl border border-[#ED5B2D]/25 shadow-[0_10px_24px_rgba(237,91,45,0.24)] px-3 py-2.5 md:px-5 md:py-3.5 hover:shadow-[0_14px_30px_rgba(237,91,45,0.32)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED5B2D]/35"
                    aria-label="Quick health consultation"
                >
                    <motion.span
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-r from-[#ED5B2D] to-[#FF833C] text-white flex items-center justify-center shadow-[0_8px_18px_rgba(237,91,45,0.32)]"
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="material-icons text-[18px] md:text-[19px]">favorite</span>
                    </motion.span>
                    <span className="hidden sm:flex flex-col leading-tight text-left">
                        <span className="text-[10px] uppercase tracking-[0.13em] font-semibold text-[#8BA4BF]">Quick Care</span>
                        <span className="text-[15px] md:text-[17px] font-bold text-[#2F3E46] group-hover:text-[#ED5B2D] transition-colors">
                            Book Health Consult
                        </span>
                    </span>
                    <span className="sm:hidden text-sm pr-1 font-bold text-[#2F3E46] tracking-wide">Book</span>
                </a>
            </motion.div>
        </div>
    );
}
