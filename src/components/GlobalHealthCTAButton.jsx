import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GlobalHealthCTAButton() {
    const location = useLocation();
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector('.ms-footer');
        if (!footer) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setIsFooterVisible(entry.isIntersecting),
            { threshold: 0.08 }
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, [location.pathname]);

    if (location.pathname === '/booking-gateway') {
        return null;
    }
    return (
        <div className={`fixed left-3 z-50 transition-all duration-300 ${isFooterVisible ? 'bottom-3 md:bottom-4' : 'bottom-20 md:bottom-8'} md:left-6`}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <a
                    href="https://my-stree.com/booking"
                    className={`group inline-flex items-center rounded-full bg-white/95 backdrop-blur-xl border border-[#ED5B2D]/25 shadow-[0_10px_24px_rgba(237,91,45,0.24)] hover:shadow-[0_14px_30px_rgba(237,91,45,0.32)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED5B2D]/35 ${isFooterVisible ? 'gap-1.5 px-2 py-1.5 md:px-2.5 md:py-2' : 'gap-2.5 md:gap-3 px-3 py-2.5 md:px-5 md:py-3.5'}`}
                    aria-label="Quick health consultation"
                >
                    <motion.span
                        className={`rounded-full bg-gradient-to-r from-[#ED5B2D] to-[#FF833C] text-white flex items-center justify-center shadow-[0_8px_18px_rgba(237,91,45,0.32)] ${isFooterVisible ? 'w-8 h-8 md:w-9 md:h-9' : 'w-10 h-10 md:w-11 md:h-11'}`}
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className={`material-icons ${isFooterVisible ? 'text-[15px] md:text-[16px]' : 'text-[18px] md:text-[19px]'}`}>favorite</span>
                    </motion.span>
                    <span className={`flex-col leading-tight text-left ${isFooterVisible ? 'hidden' : 'hidden sm:flex'}`}>
                        <span className="text-[10px] uppercase tracking-[0.13em] font-semibold text-[#8BA4BF]">Quick Care</span>
                        <span className="text-[15px] md:text-[17px] font-bold text-[#2F3E46] group-hover:text-[#ED5B2D] transition-colors">
                            Book Health Consult
                        </span>
                    </span>
                    <span className={`${isFooterVisible ? 'hidden' : 'sm:hidden'} text-sm pr-1 font-bold text-[#2F3E46] tracking-wide`}>Book</span>
                </a>
            </motion.div>
        </div>
    );
}
