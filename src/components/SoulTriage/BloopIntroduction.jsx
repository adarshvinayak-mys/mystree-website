import React, { useRef } from 'react';
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform
} from 'framer-motion';

const springConfig = { stiffness: 50, damping: 20, mass: 1 };

const traitPills = ['Round', 'Squishy', 'Expressive', 'Hormone-reactive'];

const stateRows = [
    {
        name: 'Flat Bloop',
        title: 'Low energy',
        detail: 'Quiet days, slower rhythms, softer reserves.'
    },
    {
        name: 'Spiky Bloop',
        title: 'PMS mode',
        detail: 'More friction, more tension, more need for support.'
    },
    {
        name: 'Glowy Bloop',
        title: 'Ovulation',
        detail: 'Brighter, clearer, higher-signal days in the cycle.'
    }
];

function PeekingBloop({
    containerClassName,
    imageClassName,
    style,
    imageStyle,
    shouldReduceMotion,
    delay = 0,
    driftAxis = 'y',
    mirror = false
}) {
    const driftAnimation = shouldReduceMotion
        ? {}
        : driftAxis === 'x'
            ? {
                animate: { x: [0, 8, 0], y: [0, -4, 0], rotate: [0, 1.8, 0] },
                transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
            }
            : {
                animate: { y: [0, -8, 0], rotate: [0, 1.6, 0], scale: [1, 1.015, 1] },
                transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
            };

    return (
        <motion.div
            aria-hidden="true"
            style={style}
            className={`pointer-events-none absolute z-20 overflow-hidden ${containerClassName}`}
        >
            <motion.img
                src="/bloop-main.svg"
                alt=""
                aria-hidden="true"
                style={{ ...imageStyle, scaleX: mirror ? -1 : 1 }}
                className={`absolute h-auto w-full object-contain drop-shadow-2xl select-none ${imageClassName}`}
                {...driftAnimation}
            />
        </motion.div>
    );
}

export default function BloopIntroduction() {
    const containerRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const topYRaw = useTransform(scrollYProgress, [0, 0.12, 0.28, 1], [-150, -72, -18, 0]);
    const bottomYRaw = useTransform(scrollYProgress, [0, 0.16, 0.34, 1], [140, 72, 10, 0]);
    const leftXRaw = useTransform(scrollYProgress, [0, 0.1, 0.26, 1], [-172, -88, -16, 0]);
    const rightXRaw = useTransform(scrollYProgress, [0, 0.14, 0.3, 1], [172, 88, 16, 0]);

    const topRotateRaw = useTransform(scrollYProgress, [0, 0.24, 1], [-16, -5, 0]);
    const bottomRotateRaw = useTransform(scrollYProgress, [0, 0.3, 1], [14, 4, 0]);
    const leftRotateRaw = useTransform(scrollYProgress, [0, 0.24, 1], [-18, -6, 0]);
    const rightRotateRaw = useTransform(scrollYProgress, [0, 0.28, 1], [18, 6, 0]);

    const topOpacityRaw = useTransform(scrollYProgress, [0, 0.08, 0.22, 1], [0, 0.45, 1, 1]);
    const bottomOpacityRaw = useTransform(scrollYProgress, [0, 0.12, 0.28, 1], [0, 0.35, 1, 1]);
    const leftOpacityRaw = useTransform(scrollYProgress, [0, 0.06, 0.2, 1], [0, 0.48, 1, 1]);
    const rightOpacityRaw = useTransform(scrollYProgress, [0, 0.1, 0.24, 1], [0, 0.4, 1, 1]);

    const introOpacityRaw = useTransform(scrollYProgress, [0, 0.12, 0.32, 1], [0.42, 0.88, 1, 1]);
    const cardYRaw = useTransform(scrollYProgress, [0, 0.16, 0.52, 1], [64, 20, 0, -10]);
    const cardScaleRaw = useTransform(scrollYProgress, [0, 0.18, 0.58, 1], [0.95, 0.985, 1, 1.01]);
    const cardRotateRaw = useTransform(scrollYProgress, [0, 0.18, 0.5, 1], [-1.2, -0.3, 0, 0.2]);
    const artYRaw = useTransform(scrollYProgress, [0, 0.2, 0.65, 1], [28, 10, -4, -10]);

    const topY = useSpring(topYRaw, springConfig);
    const bottomY = useSpring(bottomYRaw, springConfig);
    const leftX = useSpring(leftXRaw, springConfig);
    const rightX = useSpring(rightXRaw, springConfig);

    const topRotate = useSpring(topRotateRaw, springConfig);
    const bottomRotate = useSpring(bottomRotateRaw, springConfig);
    const leftRotate = useSpring(leftRotateRaw, springConfig);
    const rightRotate = useSpring(rightRotateRaw, springConfig);

    const topOpacity = useSpring(topOpacityRaw, springConfig);
    const bottomOpacity = useSpring(bottomOpacityRaw, springConfig);
    const leftOpacity = useSpring(leftOpacityRaw, springConfig);
    const rightOpacity = useSpring(rightOpacityRaw, springConfig);

    const introOpacity = useSpring(introOpacityRaw, springConfig);
    const cardY = useSpring(cardYRaw, springConfig);
    const cardScale = useSpring(cardScaleRaw, springConfig);
    const cardRotate = useSpring(cardRotateRaw, springConfig);
    const artY = useSpring(artYRaw, springConfig);

    const floatingAnimation = shouldReduceMotion
        ? {}
        : {
            animate: { y: [-10, 10, -10], rotate: [-1, 1.2, -1] },
            transition: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }
        };

    return (
        <section
            ref={containerRef}
            className="relative z-0 h-[185vh] overflow-clip bg-[linear-gradient(180deg,#FCF4D9_0%,#FDF7E7_36%,#FCFBF7_100%)] sm:h-[200vh] lg:h-[210vh]"
        >
            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(circle at 18% 20%, rgba(191,226,254,0.94), transparent 24%),
                            radial-gradient(circle at 82% 24%, rgba(255,212,221,0.55), transparent 18%),
                            radial-gradient(circle at 50% 78%, rgba(252,244,217,0.96), transparent 26%)
                        `
                    }}
                />
                <div
                    aria-hidden="true"
                    className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-[#BFE2FE]/55 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-[12%] right-[10%] h-48 w-48 rounded-full bg-[#F5CDE3]/45 blur-3xl"
                />

                <PeekingBloop
                    containerClassName="left-1/2 top-0 h-40 w-40 -translate-x-1/2 sm:h-48 sm:w-48"
                    imageClassName="left-1/2 top-[-18%] -translate-x-1/2"
                    imageStyle={{ width: '92%' }}
                    style={{ y: topY, rotate: topRotate, opacity: topOpacity }}
                    shouldReduceMotion={shouldReduceMotion}
                    delay={0.1}
                    driftAxis="y"
                />
                <PeekingBloop
                    containerClassName="bottom-0 left-[14%] h-40 w-44 sm:h-48 sm:w-52"
                    imageClassName="bottom-[-48%] left-1/2 -translate-x-1/2"
                    imageStyle={{ width: '90%' }}
                    style={{ y: bottomY, rotate: bottomRotate, opacity: bottomOpacity }}
                    shouldReduceMotion={shouldReduceMotion}
                    delay={0.45}
                    driftAxis="y"
                />
                <PeekingBloop
                    containerClassName="left-0 top-[20%] h-52 w-40 sm:h-60 sm:w-48"
                    imageClassName="left-[-36%] top-[8%]"
                    imageStyle={{ width: '140%' }}
                    style={{ x: leftX, rotate: leftRotate, opacity: leftOpacity }}
                    shouldReduceMotion={shouldReduceMotion}
                    delay={0.25}
                    driftAxis="x"
                />
                <PeekingBloop
                    containerClassName="bottom-[20%] right-0 h-52 w-40 sm:h-60 sm:w-48"
                    imageClassName="right-[-36%] top-[8%]"
                    imageStyle={{ width: '140%' }}
                    style={{ x: rightX, rotate: rightRotate, opacity: rightOpacity }}
                    shouldReduceMotion={shouldReduceMotion}
                    delay={0.7}
                    driftAxis="x"
                    mirror
                />

                <div className="relative z-30 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        style={{ opacity: introOpacity, y: cardY, scale: cardScale, rotate: cardRotate }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(140deg,rgba(255,255,255,0.84),rgba(252,244,217,0.74))] shadow-[0_28px_90px_rgba(17,15,14,0.12)] backdrop-blur-2xl"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                                background: `
                                    radial-gradient(circle at 18% 28%, rgba(191,226,254,0.44), transparent 24%),
                                    radial-gradient(circle at 78% 20%, rgba(255,214,228,0.34), transparent 18%),
                                    linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0))
                                `
                            }}
                        />

                        <div className="relative grid grid-cols-1 gap-10 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
                            <motion.div
                                style={{ y: artY }}
                                className="relative flex min-h-[320px] items-center justify-center rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(252,244,217,0.28))] px-6 py-8 sm:min-h-[380px] lg:min-h-[430px]"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-[2rem]"
                                    style={{
                                        background: `
                                            radial-gradient(circle at 30% 24%, rgba(191,226,254,0.92), transparent 22%),
                                            radial-gradient(circle at 74% 66%, rgba(252,244,217,0.88), transparent 26%),
                                            radial-gradient(circle at 62% 34%, rgba(255,205,226,0.4), transparent 16%)
                                        `
                                    }}
                                />
                                <motion.img
                                    src="/bloop-main.svg"
                                    alt="Bloop, the MyStree Soul mascot"
                                    className="relative z-10 w-full max-w-[360px] object-contain drop-shadow-2xl select-none"
                                    {...floatingAnimation}
                                />
                            </motion.div>

                            <div className="relative flex flex-col justify-center">
                                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#110F0E]/10 bg-white/60 px-4 py-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#E25822]" />
                                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#110F0E]">
                                        Blob Era Mascot
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-[2.4rem] leading-[0.95] tracking-[-0.05em] text-[#110F0E] sm:text-5xl lg:text-[4.25rem]">
                                    Meet Bloop.
                                </h2>

                                <p className="mt-5 font-sans text-[15px] leading-7 text-[#3C3836] sm:text-base">
                                    Bloop is the soft, squishy, expressive, genderless blob behind MyStree Soul. Built
                                    to make hormonal changes feel visible and easier to talk about, Bloop shifts with
                                    the body: flat on low-energy days, a little spiky in PMS mode, and softly luminous
                                    around ovulation. It is reel-friendly, emotionally safe, and designed to carry
                                    science with softness.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {traitPills.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-full border border-[#110F0E]/10 bg-white/58 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#110F0E]"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 space-y-3">
                                    {stateRows.map((state, index) => (
                                        <div
                                            key={state.name}
                                            className="flex items-start gap-4 rounded-[1.4rem] border border-[#110F0E]/8 bg-white/62 px-4 py-4 shadow-[0_18px_34px_rgba(17,15,14,0.05)] backdrop-blur-md"
                                        >
                                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BFE2FE]/70 font-sans text-sm font-bold text-[#110F0E]">
                                                0{index + 1}
                                            </div>
                                            <div>
                                                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A6B61]">
                                                    {state.name}
                                                </p>
                                                <p className="mt-1 font-serif text-[1.4rem] leading-none text-[#110F0E]">
                                                    {state.title}
                                                </p>
                                                <p className="mt-2 font-sans text-sm leading-6 text-[#4C4743]">
                                                    {state.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
