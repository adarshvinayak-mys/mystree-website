import React, { useRef } from 'react';
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform
} from 'framer-motion';

import bloopPink from '../../assets/bloop/blooppink1.png';
import bloopGold from '../../assets/bloop/bloopgold2.png';
import bloopGreen from '../../assets/bloop/bloopgreen1.png';
import bloopBlue from '../../assets/bloop/bloopblue2.png';
import bloopBottom from '../../assets/bloop/blooptop1.png';

const SPRING = { stiffness: 82, damping: 24, mass: 0.95 };

export default function BloopObserver() {
    const containerRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start loading as soon as this section overlaps after hero.
        offset: ['start end', 'end start']
    });

    const progress = useSpring(scrollYProgress, SPRING);

    const panelYRaw = useTransform(progress, [0, 0.16, 0.6, 1], [52, 0, 0, -4]);
    const panelOpacityRaw = useTransform(progress, [0, 0.08, 0.2, 1], [0.44, 0.82, 1, 1]);
    const panelScaleRaw = useTransform(progress, [0, 0.2, 0.7, 1], [0.975, 1, 1, 1.005]);

    const pinkYRaw = useTransform(progress, [0, 0.2, 0.6, 1], [18, 0, -2, -4]);
    const pinkOpacityRaw = useTransform(progress, [0, 0.12, 0.2, 1], [0.46, 0.7, 0.9, 0.84]);

    const goldYRaw = useTransform(progress, [0, 0.2, 0.6, 1], [10, 0, -1, -3]);
    const goldRotateRaw = useTransform(progress, [0, 0.2, 0.6, 1], [-2, -1, 1, 2]);
    const goldOpacityRaw = useTransform(progress, [0, 0.14, 0.24, 1], [0.24, 0.5, 0.74, 0.64]);

    const greenYRaw = useTransform(progress, [0, 0.2, 0.6, 1], [24, 0, 1, 4]);
    const greenOpacityRaw = useTransform(progress, [0, 0.06, 0.2, 1], [0, 0.54, 1, 0.86]);
    const greenGlowRaw = useTransform(progress, [0, 0.2, 0.6, 1], [0.12, 0.34, 0.22, 0.18]);

    const blueYRaw = useTransform(progress, [0, 0.2, 0.6, 0.85, 1], [22, 0, 2, 10, 12]);
    const blueXRaw = useTransform(progress, [0, 0.2, 0.6, 1], [-8, 0, 4, 6]);
    const blueOpacityRaw = useTransform(progress, [0, 0.1, 0.22, 1], [0, 0.4, 1, 0.84]);

    const bottomYRaw = useTransform(progress, [0, 0.6, 0.72, 0.9, 1], [40, 32, 0, -4, -6]);
    const bottomOpacityRaw = useTransform(progress, [0, 0.6, 0.72, 1], [0, 0, 1, 0.9]);

    const panelY = useSpring(panelYRaw, SPRING);
    const panelOpacity = useSpring(panelOpacityRaw, SPRING);
    const panelScale = useSpring(panelScaleRaw, SPRING);

    const pinkY = useSpring(pinkYRaw, SPRING);
    const pinkOpacity = useSpring(pinkOpacityRaw, SPRING);

    const goldY = useSpring(goldYRaw, SPRING);
    const goldRotate = useSpring(goldRotateRaw, SPRING);
    const goldOpacity = useSpring(goldOpacityRaw, SPRING);

    const greenY = useSpring(greenYRaw, SPRING);
    const greenOpacity = useSpring(greenOpacityRaw, SPRING);
    const greenGlow = useSpring(greenGlowRaw, SPRING);

    const blueY = useSpring(blueYRaw, SPRING);
    const blueX = useSpring(blueXRaw, SPRING);
    const blueOpacity = useSpring(blueOpacityRaw, SPRING);

    const bottomY = useSpring(bottomYRaw, SPRING);
    const bottomOpacity = useSpring(bottomOpacityRaw, SPRING);

    const mainIdle = shouldReduceMotion
        ? {}
        : {
            animate: { y: [0, -8, 0] },
            transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        };

    const greenIdle = shouldReduceMotion
        ? {}
        : {
            animate: { y: [0, -6, 0] },
            transition: { duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.12 }
        };

    const blueIdle = shouldReduceMotion
        ? {}
        : {
            animate: { x: [0, 4, 0], y: [0, -4, 0] },
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.24 }
        };

    const bottomIdle = shouldReduceMotion
        ? {}
        : {
            animate: { y: [0, -9, 0] },
            transition: { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.45 }
        };

    const blinkAnim = shouldReduceMotion
        ? {}
        : {
            animate: { scaleY: [0.05, 0.05, 1, 0.05, 0.05] },
            transition: { duration: 7.2, repeat: Infinity, ease: 'easeInOut', times: [0, 0.42, 0.46, 0.5, 1] }
        };

    return (
        <section
            ref={containerRef}
            className="relative z-30 h-[165vh] w-full overflow-clip bg-[linear-gradient(180deg,#FCF4D9_0%,#FCFBF7_52%,#EAF4FF_100%)] md:h-[176vh] lg:h-[186vh]"
        >
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -left-[10%] top-[8%] h-[40vh] w-[44vw] rounded-full bg-[#FCF4D9] opacity-85 blur-[126px]" />
                <div className="absolute -right-[8%] top-[12%] h-[44vh] w-[40vw] rounded-full bg-[#BFE2FE] opacity-74 blur-[126px]" />
                <div className="absolute bottom-[-8%] left-[20%] h-[34vh] w-[44vw] rounded-full bg-[#8BA4BF]/30 blur-[116px]" />
            </div>

            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden px-4 sm:px-6 lg:px-8">
                <motion.div
                    style={{ y: bottomY, opacity: bottomOpacity }}
                    className="pointer-events-none absolute bottom-[94px] left-1/2 z-40 hidden w-[132px] -translate-x-1/2 md:block lg:w-[148px]"
                    {...bottomIdle}
                >
                    <img src={bloopBottom} alt="" className="h-auto w-full object-contain drop-shadow-2xl" />
                </motion.div>

                <div className="relative mx-auto w-full max-w-[1240px]">
                    <motion.article
                        style={{ y: panelY, opacity: panelOpacity, scale: panelScale }}
                        className="relative z-50 grid grid-cols-1 gap-y-10 rounded-[32px] border border-white/72 bg-white/65 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-[16px] sm:p-8 md:gap-y-12 md:p-10 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-x-[5.5rem] lg:p-12"
                    >
                        <div className="relative z-20">
                            <span className="inline-flex rounded-full border border-[#1B2C39]/12 bg-white/76 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2C39]">
                                Next-Gen Clinical Intelligence
                            </span>

                            <h2 className="mt-5 max-w-[620px] font-serif text-[40px] font-bold leading-[1.2] tracking-[-0.03em] text-[#1B2C39] md:text-[44px] lg:text-[48px]">
                                Your Advanced Healthcare AI Companion
                            </h2>

                            <div className="mt-6 max-w-[620px] space-y-4 font-sans text-[1.02rem] leading-[1.72] text-[#334155] sm:text-[1.08rem]">
                                <p>
                                    Designed as an intuitive and clinically empathetic AI entity, Bloop bridges the gap
                                    between biological nuance and behavioral science. Powered by evidence-based medicine,
                                    it dynamically adapts to your physiological states.
                                </p>
                                <p>
                                    Whether you&apos;re navigating reproductive health, perimenopause, or preventative care,
                                    Bloop synthesizes complex medical context to deliver personalized, actionable insights
                                    in a secure, judgment-free environment.
                                </p>
                            </div>

                            <div className="mt-7 max-w-[620px] rounded-[24px] border border-white/85 bg-white/74 p-5 shadow-[0_12px_30px_rgba(17,15,14,0.07)] backdrop-blur-xl sm:p-6">
                                <p className="font-serif text-[1.16rem] italic leading-relaxed text-[#1E293B] sm:text-[1.32rem]">
                                    &quot;A clinically sound ecosystem ensuring your body&apos;s signals are met with deep
                                    understanding and scientific rigor.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="relative min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute right-[4%] top-[30%] h-[220px] w-[220px] rounded-full blur-[84px] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
                                style={{
                                    background:
                                        'radial-gradient(circle at 60% 40%, rgba(191,226,254,0.35), transparent 70%)'
                                }}
                            />

                            <motion.div
                                style={{ y: goldY, rotate: goldRotate, opacity: goldOpacity }}
                                className="pointer-events-none absolute right-[18px] top-[52px] z-10 hidden w-[180px] scale-[0.7] md:block lg:right-[38px] lg:w-[220px]"
                            >
                                <img src={bloopGold} alt="" className="h-auto w-full object-contain drop-shadow-2xl" />
                            </motion.div>

                            <motion.div
                                style={{ y: pinkY, opacity: pinkOpacity }}
                                className="pointer-events-none absolute right-[-58px] top-[44px] z-20 w-[210px] scale-[0.84] md:right-[-86px] md:top-[66px] md:w-[250px] lg:right-[-120px] lg:top-[80px] lg:w-[320px] lg:scale-[0.9]"
                                {...mainIdle}
                            >
                                <img src={bloopPink} alt="" className="h-auto w-full object-contain drop-shadow-2xl" />
                                <motion.div
                                    className="pointer-events-none absolute left-[34%] top-[39%] h-[6px] w-[28px] origin-center rounded-full bg-[#F4D3E8]/90"
                                    {...blinkAnim}
                                />
                                <motion.div
                                    className="pointer-events-none absolute left-[55%] top-[39%] h-[6px] w-[28px] origin-center rounded-full bg-[#F4D3E8]/90"
                                    {...blinkAnim}
                                />
                            </motion.div>

                            <motion.div
                                style={{ y: greenY, opacity: greenOpacity }}
                                className="pointer-events-none absolute left-[18px] top-[18px] z-30 w-[92px] md:left-[24px] md:w-[106px] lg:left-[18px] lg:w-[118px]"
                                {...greenIdle}
                            >
                                <motion.div
                                    style={{ opacity: greenGlow }}
                                    className="absolute inset-0 -z-10 scale-110 rounded-full bg-[#A5EBC4]/50 blur-[42px]"
                                />
                                <img src={bloopGreen} alt="" className="h-auto w-full object-contain drop-shadow-2xl" />
                            </motion.div>

                            <motion.div
                                style={{ x: blueX, y: blueY, opacity: blueOpacity }}
                                className="pointer-events-none absolute left-[8px] top-[53%] z-20 w-[92px] md:w-[104px] lg:w-[112px]"
                                {...blueIdle}
                            >
                                <img src={bloopBlue} alt="" className="h-auto w-full object-contain drop-shadow-2xl" />
                            </motion.div>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
