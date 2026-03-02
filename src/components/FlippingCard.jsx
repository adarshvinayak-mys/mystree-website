import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlippingCard({ icon, title, description }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-80 perspective-[1000px] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-3xl rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <div className="w-20 h-20 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/30 flex items-center justify-center mb-8 text-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <span className="material-icons text-4xl">{icon}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-white leading-[1.2]">{title}</h3>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 bg-[#FDFBF7] border border-white rounded-[2.5rem] flex flex-col items-center justify-center p-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <p className="text-[#1A365D] text-lg font-medium leading-relaxed font-sans">
                        {description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
