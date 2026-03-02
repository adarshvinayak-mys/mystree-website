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
        <section ref={sectionRef} className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#F4F1EB] border-t border-[#8FA295]/20 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left: Image Container */}
                <div className="col-span-1 lg:col-span-6 relative w-full aspect-[4/5] max-w-[500px] mx-auto lg:mr-auto rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-[#110F0E]">
                    <motion.div style={{ y: yShift }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                        {trustImageUrl ? (
                            <img
                                src={trustImageUrl}
                                alt="Clinical Trust"
                                className="w-full h-full object-cover object-[15%_center] grayscale-[10%] contrast-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#1A1816]" />
                        )}
                    </motion.div>
                </div>

                {/* Right: Copy */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="col-span-1 lg:col-span-6 flex flex-col gap-8"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-serif text-[40px] md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#110F0E] tracking-[-0.03em] max-w-[500px]"
                    >
                        Powered by innovation.<br />
                        <span className="italic text-[#FF5A36]">Directed by expert doctors.</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[#110F0E]/70 font-sans text-base lg:text-lg font-light leading-relaxed max-w-[500px]"
                    >
                        MyStree Soul is your first step to feeling better, but it never replaces human expertise. There is always a consultant human in the loop, ensuring a gynec in the loop to review every AI triage and health summary.
                    </motion.p>

                    <div className="pl-6 border-l-2 border-[#110F0E]/10 max-w-[500px] flex flex-col gap-4 relative py-2">
                        {/* Animated Orange Border Line */}
                        <motion.div
                            className="absolute top-0 left-[-2px] w-[2px] bg-[#FF5A36] origin-top"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                        />

                        <motion.p variants={itemVariants} className="font-sans text-sm md:text-[15px] uppercase tracking-[0.08em] text-[#110F0E] font-medium flex items-center">
                            Licensed MyStree physicians.
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-sans text-sm md:text-[15px] uppercase tracking-[0.08em] text-[#110F0E] font-medium flex items-center">
                            Indiranagar Clinical Hub.
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-sans text-sm md:text-[15px] uppercase tracking-[0.08em] text-[#110F0E] font-medium flex items-center">
                            Real people. Real oversight.
                        </motion.p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
