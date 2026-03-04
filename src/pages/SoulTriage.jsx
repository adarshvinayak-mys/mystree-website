import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CinematicHero from '../components/SoulTriage/CinematicHero';
import FloatingEmpathy from '../components/SoulTriage/FloatingEmpathy';
import BentoGrid from '../components/SoulTriage/BentoGrid';
import ParallaxTrust from '../components/SoulTriage/ParallaxTrust';
import WaitlistMorph from '../components/SoulTriage/WaitlistMorph';
import FloatingWaitlist from '../components/SoulTriage/FloatingWaitlist';

// Import local assets
const heroImg = '/triage/traiage123.webp';
const empathyImg = '/triage/traige12.webp';
const doctorImg = '/triage/traige56.webp';

export default function SoulTriage() {
    const nextSectionRef = useRef(null);

    const scrollToNext = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative bg-[#110F0E] min-h-screen font-sans selection:bg-[#FF5A36] selection:text-white text-[#F4F1EB]">

            {/* Global Tactile Cinematic Noise Overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            ></div>

            {/* --- 1. HERO SECTION --- */}
            <CinematicHero heroImageUrl={heroImg} onScrollClick={scrollToNext} />

            <div ref={nextSectionRef} className="invisible h-0 w-0" />

            {/* --- 2. NARRATIVE REVEAL --- */}
            <FloatingEmpathy empathyImageUrl={empathyImg} />

            {/* --- 3. BENTO 3.0 --- */}
            <BentoGrid />

            {/* --- 4. PARALLAX TRUST --- */}
            <ParallaxTrust trustImageUrl={doctorImg} />

            {/* --- 5. BUBBLE CLIMAX --- */}
            <WaitlistMorph />

            {/* Persistent Waitlist CTA for Beta */}
            <FloatingWaitlist />

        </div>
    );
}
