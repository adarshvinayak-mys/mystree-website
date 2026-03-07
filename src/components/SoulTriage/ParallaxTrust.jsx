import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxTrust({ trustImageUrl }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yShift = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <section ref={sectionRef} className="relative w-full py-16 lg:py-20 px-6 lg:px-12 bg-[#FCFBF7] border-t border-black/5 overflow-hidden z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                {/* Left: Image Container */}
                <div className="col-span-1 lg:col-span-6 relative w-full aspect-[4/5] max-w-[600px] mx-auto lg:mr-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 bg-black/5 border border-black/5">
                    <motion.div style={{ y: yShift }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                        {trustImageUrl ? (
                            <img
                                src={trustImageUrl}
                                alt="Clinical Trust"
                                className="w-full h-full object-cover object-[15%_center] contrast-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#EEDBCE]" />
                        )}
                    </motion.div>
                </div>

                {/* Right: Copy */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="col-span-1 lg:col-span-6 flex flex-col gap-10"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-serif text-[48px] md:text-6xl lg:text-7xl font-light leading-[1.05] text-[#110F0E] tracking-[-0.04em] max-w-[600px]"
                    >
                        Powered by innovation.<br />
                        <span className="italic text-[#FF5A36] font-medium">Expert doctor oversight.</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[#2F3E46] font-sans text-xl lg:text-2xl font-bold leading-relaxed max-w-[600px]"
                    >
                        MyStree Soul is your first step to feeling better, but it never replaces human expertise. Every health summary and AI triage is reviewed by our licensed gynecologists.
                    </motion.p>

                    <div className="pl-8 border-l-4 border-black/5 max-w-[600px] flex flex-col gap-6 relative py-4">
                        {/* Animated Orange Border Line */}
                        <motion.div
                            className="absolute top-0 left-[-4px] w-[4px] bg-[#FF5A36] origin-top"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                        />

                        <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl uppercase tracking-[0.1em] text-[#110F0E] font-bold flex items-center">
                            Licensed MyStree physicians
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl uppercase tracking-[0.1em] text-[#110F0E] font-bold flex items-center">
                            Indiranagar Clinical Hub
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl uppercase tracking-[0.1em] text-[#110F0E] font-bold flex items-center">
                            Real people. Real oversight.
                        </motion.p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
