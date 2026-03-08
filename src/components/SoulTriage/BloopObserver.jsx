import React from 'react';

import bloopPink from '../../assets/bloop/blooppink1.png';
import bloopGold from '../../assets/bloop/bloopgold2.png';
import bloopGreen from '../../assets/bloop/bloopgreen1.png';
import bloopBlue from '../../assets/bloop/bloopblue2.png';
import bloopBottom from '../../assets/bloop/blooptop1.png';

function QuoteCard() {
    return (
        <div className="mt-8 max-w-[620px] rounded-[24px] border border-white/80 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#1B2C39]/10 bg-white/85">
                    <img src={bloopBottom} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                </div>
                <p className="font-serif text-[1.16rem] italic leading-relaxed text-[#334155] sm:text-[1.28rem]">
                    &quot;A clinically sound ecosystem ensuring your body&apos;s signals are met with deep understanding and
                    scientific rigor.&quot;
                </p>
            </div>
        </div>
    );
}

function ContentColumn() {
    return (
        <div className="relative z-20 max-w-[620px]">
            <span className="inline-flex rounded-full border border-[#1B2C39]/12 bg-white/80 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2C39]">
                NEXT-GEN CLINICAL INTELLIGENCE
            </span>

            <h2 className="mt-4 max-w-[640px] font-serif text-[42px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1B2C39] sm:text-[46px] lg:text-[52px]">
                Your Advanced Healthcare AI Companion
            </h2>

            <div className="mt-5 max-w-[620px] space-y-4 font-sans text-[1rem] leading-[1.66] text-[#334155] sm:text-[1.08rem] sm:leading-[1.72]">
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

            <QuoteCard />
        </div>
    );
}

function DesktopVisualColumn() {
    return (
        <div className="relative hidden min-h-[360px] overflow-hidden md:block lg:min-h-[460px]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[6%] top-[22%] h-[260px] w-[260px] rounded-full blur-[88px] lg:h-[340px] lg:w-[340px]"
                style={{
                    background: 'radial-gradient(circle at 60% 40%, rgba(191,226,254,0.45), transparent 72%)'
                }}
            />

            <img
                src={bloopGold}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[112px] top-[36px] z-10 w-[128px] select-none object-contain opacity-75 md:w-[146px] lg:right-[144px] lg:w-[176px]"
            />

            <img
                src={bloopPink}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[-22px] top-[70px] z-20 w-[210px] select-none object-contain drop-shadow-[0_28px_54px_rgba(15,23,42,0.2)] md:w-[250px] lg:right-[-38px] lg:w-[330px]"
            />

            <img
                src={bloopGreen}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[12px] top-[16px] z-30 w-[72px] select-none object-contain drop-shadow-xl md:w-[80px] lg:right-[18px] lg:w-[94px]"
            />

            <img
                src={bloopBlue}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[188px] top-[48%] z-30 w-[66px] select-none object-contain drop-shadow-xl md:w-[74px] lg:right-[236px] lg:w-[88px]"
            />

            <img
                src={bloopBottom}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[22px] right-[116px] z-30 w-[62px] select-none object-contain drop-shadow-xl md:w-[70px] lg:right-[148px] lg:w-[82px]"
            />
        </div>
    );
}

function MobileVisualStrip() {
    return (
        <div className="relative isolate overflow-hidden rounded-[22px] border border-white/72 bg-white/56 px-4 py-4 shadow-[0_14px_30px_rgba(17,15,14,0.06)] md:hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(circle at 82% 26%, rgba(191,226,254,0.34), transparent 54%), radial-gradient(circle at 14% 32%, rgba(252,244,217,0.55), transparent 46%)'
                }}
            />

            <div className="relative z-10 flex items-end justify-center gap-3 pb-1 pt-1">
                <img src={bloopGreen} alt="" aria-hidden="true" className="h-[96px] w-[96px] select-none object-contain drop-shadow-2xl" />
                <img src={bloopPink} alt="" aria-hidden="true" className="h-[118px] w-[118px] select-none object-contain drop-shadow-2xl" />
                <img src={bloopBottom} alt="" aria-hidden="true" className="h-[54px] w-[54px] select-none object-contain drop-shadow-xl" />
            </div>
        </div>
    );
}

export default function BloopObserver() {
    return (
        <section className="relative z-0 w-full overflow-hidden bg-[linear-gradient(180deg,#FCF4D9_0%,#FCFBF7_52%,#EAF4FF_100%)] pt-10 pb-24 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-16">
            <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[28px] border border-white/72 bg-white/65 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-[14px] md:rounded-[32px] md:backdrop-blur-[16px]">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[28px] md:rounded-[32px]"
                        style={{
                            background:
                                'linear-gradient(145deg, rgba(255,255,255,0.34), rgba(255,255,255,0.1) 42%, rgba(255,255,255,0.02) 100%)'
                        }}
                    />

                    <div className="relative p-5 sm:p-8 md:p-10 lg:p-12">
                        <div className="space-y-6 md:hidden">
                            <MobileVisualStrip />
                            <ContentColumn />
                        </div>

                        <div className="hidden items-start gap-10 md:flex lg:gap-20">
                            <ContentColumn />
                            <div className="min-w-[360px] flex-1 lg:min-w-[420px]">
                                <DesktopVisualColumn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
