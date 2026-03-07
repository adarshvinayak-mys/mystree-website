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
        <section
            ref={sectionRef}
            className="relative z-10 -mt-[8vh] flex min-h-screen w-full items-center border-t border-black/5 bg-[#FCFBF7] px-6 pt-[calc(8vh+4rem)] pb-16 lg:-mt-[10vh] lg:px-12 lg:pt-[calc(10vh+5rem)] lg:pb-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FCF4D9] via-[#FCFBF7]/90 to-[#FCFBF7]"
            />
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                <div className="col-span-1 lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1 pt-6 md:pt-0">
                    <h2 className="font-serif text-[42px] sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#110F0E] tracking-[-0.04em] max-w-[700px] flex flex-wrap">
                        {words.map((word, i) => {
                            const start = i / words.length * 0.8;
                            const end = start + (1 / words.length);
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                    {word.includes("symptoms") || word.includes("system") ? (
                                        <span className={word.includes("system") ? "text-[#FF5A36] italic font-medium" : "text-black/40"}>{word}</span>
                                    ) : word}
                                </Word>
                            );
                        })}
                    </h2>

                    <motion.div style={{ opacity: shouldReduceMotion ? 1 : p1Opacity }} className="text-[#2F3E46] text-lg lg:text-xl leading-relaxed font-sans font-medium max-w-[600px] mt-6">
                        <p>
                            We built a platform that treats you like a person, not just a patient file, because being heard is the first step to healing.
                        </p>
                    </motion.div>
                </div>

                <div className="col-span-1 lg:col-span-6 relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full max-w-[600px] mx-auto lg:ml-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full h-full relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] will-change-transform shadow-2xl shadow-black/10 bg-black/5 border border-black/5"
                    >
                        {empathyImageUrl ? (
                            <motion.img
                                style={{ filter: shouldReduceMotion ? 'grayscale(0%)' : `grayscale(${grayscale})` }}
                                src={empathyImageUrl}
                                alt="Narrative Empathy"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#EEDBCE]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
