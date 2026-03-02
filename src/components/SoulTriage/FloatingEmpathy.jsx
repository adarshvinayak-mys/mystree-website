import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function FloatingEmpathy({ empathyImageUrl }) {
    const sectionRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "center center"]
    });

    const grayscale = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    // Progressive Disclosure Opacities
    const p1Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    const words = "You are not a collection of symptoms. You are a complete system.".split(" ");

    const Word = ({ children, progress, range }) => {
        const opacity = useTransform(progress, range, [0.15, 1]);
        return (
            <motion.span style={{ opacity: shouldReduceMotion ? 1 : opacity }} className="inline-block mr-[0.25em] mb-[0.1em] transition-opacity duration-100">
                {children}
            </motion.span>
        );
    };

    return (
        <section ref={sectionRef} className="relative w-full py-32 lg:py-40 px-6 lg:px-12 bg-[#110F0E] z-10 border-t border-white/5 will-change-transform min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="col-span-1 lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1 pt-12 md:pt-0">
                    <h2 className="font-serif text-[38px] sm:text-5xl md:text-6xl font-light leading-[1.2] text-[#F4F1EB] tracking-[-0.03em] max-w-[600px] flex flex-wrap">
                        {words.map((word, i) => {
                            const start = i / words.length * 0.8;
                            const end = start + (1 / words.length);
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                    {word.includes("symptoms") || word.includes("system") ? (
                                        <span className={word.includes("system") ? "text-[#FF5A36] italic" : "text-white/60"}>{word}</span>
                                    ) : word}
                                </Word>
                            );
                        })}
                    </h2>

                    <motion.div style={{ opacity: shouldReduceMotion ? 1 : p1Opacity }} className="text-[#8FA295] text-base lg:text-lg leading-relaxed font-sans font-light max-w-[500px] mt-4">
                        <p>
                            We built a platform that treats you like a person, not just a patient file, because being heard is the first step to healing.
                        </p>
                    </motion.div>
                </div>

                <div className="col-span-1 lg:col-span-6 relative order-1 lg:order-2 h-[50vh] lg:h-[70vh] w-full max-w-[500px] mx-auto lg:ml-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full h-full relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] will-change-transform shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.02)] border border-white/5"
                    >
                        {empathyImageUrl ? (
                            <motion.img
                                style={{ filter: shouldReduceMotion ? 'grayscale(0%)' : `grayscale(${grayscale})` }}
                                src={empathyImageUrl}
                                alt="Narrative Empathy"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#1A1816]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#110F0E]/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
