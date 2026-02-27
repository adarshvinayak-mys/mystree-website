import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';

import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg'; // Priyanka
import doctorChaitra from '../assets/DrChaitraNayak.jpg';
import fert1 from '../assets/fert1.jpg';
import fert3 from '../assets/fert3.jpg';
import fert4 from '../assets/fert4.jpg';

// Reviews from verified patients (Dr. Chaitra Nayak)
const reviews = [
    {
        name: "Nazia",
        content: "Dr. Chaitra is an exceptional gynecologist who truly stands out for her cool, calm demeanor. She patiently addressed all our concerns and questions, explaining everything in a clear and understandable manner. We are incredibly grateful for the exceptional care and guidance provided by Dr. Chaitra throughout our entire pregnancy journey.",
        location: "Happy Parent",
        rating: 5
    },
    {
        name: "Mehak",
        content: "I had many confusions about conceiving, but Dr Chaitra reassured me that there was no issue. She was incredibly positive throughout the entire process. After I conceived, she was there to support me every step of the way. Her positivity made all the difference!",
        location: "Natural Conception",
        rating: 5
    },
    {
        name: "Kusuma",
        content: "I came for infertility, she referred me for IVF. Today I'm pregnant with triplets! So glad and happy... Thank you Ma'am, Dr. Chaitra Nayak. All staff are so friendly.",
        location: "IVF Success (Triplets)",
        rating: 5
    },
    {
        name: "Punitha",
        content: "I will highly recommend Dr Chaitra ma'am... For only one month of consultation I got pregnant... her hands are literally doing magic... She has given me another life (Motherhood). She is very humble.",
        location: "PCOS Treatment",
        rating: 5
    },
    {
        name: "Sandhya Nagraj",
        content: "She diagnosed my fertility problem accurately. She is a wonderful human being and an experienced, excellent doctor. I really loved the way she treated me. I have been blessed with twins.",
        location: "Twin Pregnancy",
        rating: 5
    },
    {
        name: "Mrs. Soundarya",
        content: "I am extremely happy to know that I have conceived in the very first month of my treatment under Dr. Chaitra Nayak. She is very patient friendly and explains the medical issue in detail.",
        location: "Fertility Treatment",
        rating: 5
    }
];

export default function FertilityClinic() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = ["All Services", "IVF & IUI", "Egg Freezing", "Male Fertility", "Donor Program", "PCOS & Endometriosis", "Reproductive Medicine"];

    const doctors = [
        {
            id: 1,
            profileId: "dr-chaitra",
            name: "Dr. Chaitra Nayak",
            role: "Fertility Expert",
            qualification: "MBBS, MS (OBG), FNB",
            image: doctorChaitra,
            specialty: "Senior Consultant - Reproductive Medicine & IVF",
            experience: "24+ Years Experience",
            badgeText: "Lead Fertility Consultant",
            consultationFee: "₹1000",
            badgeColorClass: "bg-warm-coral text-white",
            services: ["IVF & IUI", "Male Fertility", "Donor Program", "PCOS & Endometriosis", "Reproductive Medicine", "All Services"]
        },
        {
            id: 2,
            profileId: "dr-smitha",
            name: "Dr. Smitha A.P.",
            role: "Gynecologist, Fertility Expert & Obstetrician",
            qualification: "MBBS, MS, DNB (OBG), FFM, FRM, MBA",
            image: doctor2,
            specialty: "Gynecologist, Fertility Expert & Obstetrician",
            experience: "23+ Years Experience",
            badgeText: "₹1000 Consultation",
            consultationFee: "₹1000",
            badgeColorClass: "bg-deep-green text-white",
            services: ["IVF & IUI", "PCOS & Endometriosis", "Reproductive Medicine", "All Services"]
        },
        {
            id: 3,
            profileId: "dr-surbhi",
            name: "Dr. Surbhi Sinha",
            role: "OBGYN & Fertility Expert",
            qualification: "MBBS, MS, DNB, MRCOG (UK), FRM",
            image: doctor1,
            specialty: "Reproductive Medicine",
            experience: "12+ Years Experience",
            badgeText: "₹1000 Consultation",
            consultationFee: "₹1000",
            badgeColorClass: "bg-deep-green text-white",
            services: ["IVF & IUI", "Egg Freezing", "PCOS & Endometriosis", "Reproductive Medicine", "All Services"]
        }
    ];

    const [selectedService, setSelectedService] = useState("All Services");

    const filteredDoctors = doctors.filter(doctor =>
        doctor.services.includes(selectedService)
    );

    return (
        <div className="font-display bg-warm-ivory text-soft-charcoal antialiased selection:bg-warm-coral/30 selection:text-warm-coral relative animate-fade-in-up">

            {/* Cinematic Hero Section */}
            <header className="relative w-full min-h-[90vh] overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Expectant couple in sunlit room"
                        className="w-full h-full object-cover object-[center_20%] opacity-90"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWqU06nEVQHMraJjPpsYE4L0w9U1H635ybgl3WhmNIPp9b3U4EmBQ61wHXMYNp48m8TWQevIW01JDVcWFYBwqrGMSBgaczDASR0H87YWbvMBwneVXyCcim5J42fgokQut302uAZhJkAqNVWdcC9yG15O_80qhowborbmUJJCAB2oh2t_OkxuaVzrO9jLhjamaEn-eRakZ-PKoF_RXavOmaWE6fBigzO942p0vgQYDtzZTir3mSgHy4Y5uXR5I-vFQ0WUNSpgKVEFA"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-warm-ivory via-warm-ivory/60 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
                    <div className="max-w-2xl animate-fade-in-up">
                        <span className="text-warm-coral font-bold tracking-widest uppercase text-sm mb-4 block">Advanced Fertility Care</span>
                        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium leading-tight text-deep-green mb-8">
                            Your Journey,<br /> <span class="italic text-warm-coral/90">Our Science.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-lg leading-relaxed font-light">
                            Where clinical precision meets profound empathy. Experience the luxury of feeling understood while receiving world-class IVF care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-warm-coral to-primary-light text-white px-10 py-4 rounded-2xl font-semibold w-full sm:w-auto text-center shadow-lg hover:shadow-warm-coral/40 hover:-translate-y-1 transition-all">
                                Start Your Assessment
                            </button>
                            <button className="bg-white border border-soft-sage text-deep-green hover:bg-soft-sage/20 px-10 py-4 rounded-2xl font-semibold transition w-full sm:w-auto text-center">
                                Watch Our Story
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Editorial Intro / Philosophy */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-light text-soft-charcoal/70 mb-2 font-serif">The Philosophy</h2>
                <div className="w-16 h-0.5 bg-warm-coral mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl leading-relaxed font-light text-soft-charcoal font-serif italic">
                    "We believe that fertility treatment shouldn't feel like a medical transaction. It is a deeply personal narrative where cutting-edge biotechnology meets compassionate care."
                </p>
            </section>

            {/* Natural Conception Program (Revised) */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 lg:mb-24">
                        <span className="text-warm-coral font-bold tracking-widest uppercase text-xs mb-2 block">Holistic Integration</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-green mb-6">Trying to Conceive Naturally through Integrated Wellness</h2>
                        <p className="text-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
                            We don't just treat infertility; we treat the whole person. Our proprietary <strong>'Fertility Fingerprint'</strong> protocol integrates advanced medical intervention with stress-reducing holistic therapies.
                        </p>
                        <p className="text-warm-coral italic mt-4 font-serif text-xl">"Hand-curated personalized programs based on your unique fertility fingerprint."</p>
                    </div>

                    {/* Wellness Offerings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="bg-soft-sage/20 rounded-2xl p-10 text-center hover:bg-soft-sage/30 transition duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green text-4xl">self_improvement</span>
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-deep-green mb-3">Therapeutic Yoga</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Specialized asanas designed to improve blood flow to the reproductive organs and reduce cortisol levels.
                            </p>
                        </div>
                        <div className="bg-soft-sage/20 rounded-2xl p-10 text-center hover:bg-soft-sage/30 transition duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green text-4xl">music_note</span>
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-deep-green mb-3">Sound Healing</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Vibrational therapy sessions to calm the nervous system, creating an internal environment of safety.
                            </p>
                        </div>
                        <div className="bg-soft-sage/20 rounded-2xl p-10 text-center hover:bg-soft-sage/30 transition duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green text-4xl">directions_run</span>
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-deep-green mb-3">Expressive Dance</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Guided movement therapy to release emotional blockages and reconnect with your body's innate wisdom.
                            </p>
                        </div>
                        {/* Added Nutrition Card */}
                        <div className="bg-soft-sage/20 rounded-2xl p-10 text-center hover:bg-soft-sage/30 transition duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green text-4xl">restaurant_menu</span>
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-deep-green mb-3">Targeted Nutrition</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Anti-inflammatory diet plans customized to your metabolic profile to boost egg quality.
                            </p>
                        </div>
                    </div>

                    {/* Program Tiers */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Basic Tier */}
                        <div className="bg-white p-8 shadow-xl border border-soft-sage/30 rounded-2xl relative transition-transform hover:-translate-y-2">
                            <h3 className="font-display text-3xl text-deep-green mb-2">Basic Program</h3>
                            <p className="text-sm text-text-muted mb-2 font-bold uppercase tracking-wide">6 - 12 Weeks</p>
                            <p className="text-sm text-text-muted mb-6">Foundational support for natural conception.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-deep-green"><span className="material-icons text-warm-coral text-sm mr-2">check_circle</span> Diet Consultation</li>
                                <li className="flex items-center text-sm text-deep-green"><span class="material-icons text-warm-coral text-sm mr-2">check_circle</span> Cycle Tracking</li>
                                <li className="flex items-center text-sm text-deep-green"><span class="material-icons text-warm-coral text-sm mr-2">check_circle</span> Stress Management</li>
                            </ul>
                            <a href="#book-basic" className="block w-full py-4 border border-deep-green text-deep-green hover:bg-deep-green hover:text-white transition-colors text-center font-medium uppercase tracking-wide rounded-xl">Book Basic Program</a>
                        </div>

                        {/* Advanced Tier */}
                        <div className="bg-white p-8 shadow-2xl border border-soft-sage rounded-2xl relative z-10 transition-transform hover:-translate-y-2 transform lg:-scale-105 lg:scale-100">
                            <div className="absolute top-0 right-0 bg-warm-coral text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl uppercase tracking-wider shadow-sm">Most Chosen</div>
                            <h3 className="font-display text-3xl text-deep-green mb-2">Advanced Program</h3>
                            <p className="text-sm text-text-muted mb-2 font-bold uppercase tracking-wide">12 - 24 Weeks</p>
                            <p className="text-sm text-text-muted mb-6">Comprehensive holistic & clinical integration.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-deep-green"><span className="material-icons text-warm-coral text-sm mr-2">check_circle</span> Personalized Nutrition Plan</li>
                                <li className="flex items-center text-sm text-deep-green"><span className="material-icons text-warm-coral text-sm mr-2">check_circle</span> Fertility Yoga & Meditation</li>
                                <li className="flex items-center text-sm text-deep-green"><span className="material-icons text-warm-coral text-sm mr-2">check_circle</span> Acupuncture Sessions</li>
                                <li className="flex items-center text-sm text-deep-green"><span className="material-icons text-warm-coral text-sm mr-2">check_circle</span> Hormonal Balancing</li>
                            </ul>
                            <a href="#book-advanced" className="block w-full py-4 bg-deep-green text-white hover:bg-opacity-90 transition-colors text-center font-medium uppercase tracking-wide rounded-xl">Book Advanced Program</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats (V1 Luxury) */}
            <section className="bg-white border-b border-soft-sage/50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-soft-sage/50">
                        <div className="text-center px-4">
                            <span className="block font-display text-5xl text-deep-green mb-1">85%</span>
                            <span className="text-sm uppercase tracking-widest text-text-muted">Success Rate</span>
                        </div>
                        <div className="text-center px-4">
                            <span className="block font-display text-5xl text-deep-green mb-1">1200+</span>
                            <span className="text-sm uppercase tracking-widest text-text-muted">Babies Born</span>
                        </div>
                        <div className="text-center px-4">
                            <span className="block font-display text-5xl text-deep-green mb-1">15+ Years</span>
                            <span className="text-sm uppercase tracking-widest text-text-muted">Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Path to Parenthood (V1 Process) */}
            <section className="section-spacing bg-warm-ivory relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-soft-sage/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-warm-coral/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-20 text-center">
                        <span className="text-warm-coral font-bold tracking-widest uppercase text-xs mb-2 block">Our Methodology</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-green mb-4">The Path to Parenthood</h2>
                        <p className="text-text-muted text-lg">A scientifically rigorous yet deeply human process.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-soft-sage -translate-y-1/2 z-0"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                            {/* Step 1 */}
                            <div className="relative z-10 group">
                                <div className="bg-white p-2 rounded-2xl shadow-lg mb-6 transform transition group-hover:-translate-y-2 duration-300 border border-soft-sage/20">
                                    <img
                                        alt="Understanding consultation"
                                        className="w-full h-64 object-cover rounded-xl filter sepia-[0.2] saturate-[.8]"
                                        src={fert1}
                                    />
                                </div>
                                <div className="bg-warm-ivory border-2 border-soft-sage w-12 h-12 rounded-full flex items-center justify-center text-deep-green font-bold text-xl mx-auto mb-6 lg:mb-8 shadow-sm relative z-20">1</div>
                                <div className="text-center px-4">
                                    <h3 className="font-display text-2xl font-bold text-deep-green mb-2">Understanding</h3>
                                    <p className="text-text-muted">Comprehensive diagnostic mapping to understand your unique biological narrative before we begin.</p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="relative z-10 group">
                                <div className="bg-white p-2 rounded-2xl shadow-lg mb-6 transform transition group-hover:-translate-y-2 duration-300 border border-soft-sage/20">
                                    <img
                                        alt="Tailoring treatment"
                                        className="w-full h-64 object-cover rounded-xl filter sepia-[0.2] saturate-[.8]"
                                        src={fert3}
                                    />
                                </div>
                                <div className="bg-warm-ivory border-2 border-soft-sage w-12 h-12 rounded-full flex items-center justify-center text-deep-green font-bold text-xl mx-auto mb-6 lg:mb-8 shadow-sm relative z-20">2</div>
                                <div className="text-center px-4">
                                    <h3 className="font-display text-2xl font-bold text-deep-green mb-2">Tailoring</h3>
                                    <p className="text-text-muted">Designing a bespoke protocol using advanced reproductive technologies suited to your profile.</p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="relative z-10 group">
                                <div className="bg-white p-2 rounded-2xl shadow-lg mb-6 transform transition group-hover:-translate-y-2 duration-300 border border-soft-sage/20">
                                    <img
                                        alt="Precision execution"
                                        className="w-full h-64 object-cover rounded-xl filter sepia-[0.2] saturate-[.8]"
                                        src={fert4}
                                    />
                                </div>
                                <div className="bg-warm-ivory border-2 border-soft-sage w-12 h-12 rounded-full flex items-center justify-center text-deep-green font-bold text-xl mx-auto mb-6 lg:mb-8 shadow-sm relative z-20">3</div>
                                <div className="text-center px-4">
                                    <h3 className="font-display text-2xl font-bold text-deep-green mb-2">Precision</h3>
                                    <p className="text-text-muted">Embryo transfer with pinpoint accuracy, supported by real-time monitoring and emotional care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Diagnostics (New Section) */}
            <section className="section-spacing bg-deep-green text-warm-ivory py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-warm-coral font-bold tracking-widest uppercase text-xs mb-2 block">High-End Testing</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Advanced Diagnostics</h2>
                            <p className="text-soft-sage/80 text-lg max-w-xl">Leveraging the latest in genetic and molecular science to maximize success rates.</p>
                        </div>
                        <button className="mt-6 md:mt-0 text-white border-b border-warm-coral pb-1 hover:text-warm-coral transition">View Full Technology Suite</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* ERA */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300">
                            <span className="text-warm-coral font-display text-3xl font-bold block mb-2">ERA</span>
                            <h4 className="text-xl font-medium text-white mb-3">Endometrial Receptivity</h4>
                            <p className="text-soft-sage/80 text-sm">Determining the optimal window for implantation to the exact hour.</p>
                        </div>
                        {/* PGT-A */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300">
                            <span className="text-warm-coral font-display text-3xl font-bold block mb-2">PGT-A</span>
                            <h4 className="text-xl font-medium text-white mb-3">Genetic Screening</h4>
                            <p className="text-soft-sage/80 text-sm">Screening embryos for chromosomal abnormalities before transfer.</p>
                        </div>
                        {/* DFI */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300">
                            <span className="text-warm-coral font-display text-3xl font-bold block mb-2">DFI</span>
                            <h4 className="text-xl font-medium text-white mb-3">DNA Fragmentation</h4>
                            <p className="text-soft-sage/80 text-sm">Assessing sperm DNA integrity to select the healthiest candidates.</p>
                        </div>
                        {/* Immune */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300">
                            <span className="text-warm-coral font-display text-3xl font-bold block mb-2">Immune</span>
                            <h4 className="text-xl font-medium text-white mb-3">Reproductive Immunology</h4>
                            <p className="text-soft-sage/80 text-sm">Managing immune responses that might hinder successful pregnancy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Choose Your Path (IVF Tiers) */}
            <section className="py-24 bg-warm-ivory">
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                    <span className="text-warm-coral font-bold tracking-widest uppercase text-xs mb-2 block">Transparent Options</span>
                    <h2 className="font-display text-4xl font-bold text-deep-green">Choose Your Path</h2>
                    <p className="text-text-muted mt-4 max-w-2xl mx-auto">Whether you need standard care or a complex investigation, our tiered programs ensure you only pay for what you need.</p>
                </div>
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Essential IVF */}
                    <div className="bg-white rounded-3xl p-10 border border-soft-sage/30 shadow-soft hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 left-0 w-2 h-full bg-soft-sage group-hover:bg-warm-coral transition-colors"></div>
                        <h3 className="font-display text-3xl text-deep-green mb-4">Essential IVF</h3>
                        <p className="text-text-muted mb-8 h-12">Standardized, high-quality care for straightforward cases.</p>
                        <ul className="space-y-4 mb-10 text-soft-charcoal/80 flex-grow">
                            <li className="flex items-center gap-3"><span className="material-icons text-soft-sage text-sm">check_circle</span> Standard Stimulation Protocol</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-soft-sage text-sm">check_circle</span> Conventional IVF/ICSI</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-soft-sage text-sm">check_circle</span> Blastocyst Culture</li>
                        </ul>
                        <a href="#essential-ivf" className="mt-auto block w-full py-4 border border-deep-green text-deep-green text-center rounded-xl font-bold hover:bg-deep-green hover:text-white transition-all uppercase tracking-wider text-sm">View Package Details</a>
                    </div>

                    {/* Signature Precision */}
                    <div className="bg-deep-green rounded-3xl p-10 shadow-2xl relative overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 right-0 bg-warm-coral text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">Most Recommended</div>
                        <h3 className="font-display text-3xl text-white mb-4">Signature Precision</h3>
                        <p className="text-soft-sage/80 mb-8 h-12">Advanced investigation for RIF, PCOS, or low ovarian reserve.</p>
                        <ul className="space-y-4 mb-10 text-white/90 flex-grow">
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">verified</span> Full Hormonal Mapping & DFI</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">verified</span> Laser Assisted Hatching</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">verified</span> EmbryoGlue® Transfer</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">verified</span> Immune Protocol Support</li>
                        </ul>
                        <a href="#signature-ivf" className="mt-auto block w-full py-4 bg-warm-coral text-white text-center rounded-xl font-bold hover:bg-white hover:text-deep-green transition-all uppercase tracking-wider text-sm shadow-lg">View Signature Plan</a>
                    </div>
                </div>
            </section>

            {/* Additional Specialized Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl font-bold text-deep-green">Targeted Solutions</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: IVF Optimization */}
                        <div className="bg-warm-ivory/50 p-8 rounded-2xl hover:bg-warm-ivory transition-colors border border-transparent hover:border-soft-sage/50 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green">auto_graph</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-deep-green mb-3">IVF Optimization</h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-6">
                                For those who have failed cycles elsewhere. We specialize in "poor responders" and difficult cases.
                            </p>
                            <a href="#optimization" className="text-warm-coral font-bold text-sm hover:underline">Learn More →</a>
                        </div>

                        {/* Card 2: Male Fertility */}
                        <div className="bg-warm-ivory/50 p-8 rounded-2xl hover:bg-warm-ivory transition-colors border border-transparent hover:border-soft-sage/50 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green">male</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-deep-green mb-3">Male Fertility</h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-6">
                                40% of infertility is male-factor. We offer micro-TESE, advanced semen analysis, and DNA fragmentation treatment.
                            </p>
                            <a href="#male-fertility" className="text-warm-coral font-bold text-sm hover:underline">Learn More →</a>
                        </div>

                        {/* Card 3: Donor Gametes */}
                        <div className="bg-warm-ivory/50 p-8 rounded-2xl hover:bg-warm-ivory transition-colors border border-transparent hover:border-soft-sage/50 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-deep-green">diversity_1</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-deep-green mb-3">Donor Program</h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-6">
                                Ethical, anonymous, and legally compliant donor egg and sperm bank with rigorous screening.
                            </p>
                            <a href="#donor-program" className="text-warm-coral font-bold text-sm hover:underline">Learn More →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Egg Freezing Section (New) */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-warm-ivory to-soft-sage/20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <span className="text-warm-coral font-bold uppercase tracking-widest text-xs mb-3 block">Future Planning</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-6 leading-tight">
                            Egg Freezing: <br /> <span className="italic text-warm-coral">Try It Before You Panic.</span>
                        </h2>
                        <p className="text-xl text-soft-charcoal/80 mb-8 font-light leading-relaxed">
                            Fertility preservation is the ultimate act of self-care. It’s not about fear; it’s about freedom. Secure your options today so you can live your life on your own timeline.
                        </p>
                        <ul className="space-y-3 mb-8 text-soft-charcoal/70">
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">check_circle</span> Ideally for ages 28-35 for highest quality</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">check_circle</span> Advanced Vitrification Technology (Flash Freezing)</li>
                            <li className="flex items-center gap-3"><span className="material-icons text-warm-coral text-sm">check_circle</span> Complete ownership of your biological future</li>
                        </ul>
                        <a href="#book-freezing" className="inline-flex items-center justify-center gap-2 bg-warm-coral text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-warm-coral/30 transition-all hover:-translate-y-1 text-lg">
                            Book Egg Freezing Consultation
                        </a>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Confident professional woman smiling"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 saturate-[0.9]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empowered Team (Doctors) */}
            <section className="py-24 bg-warm-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <span className="text-warm-coral font-bold tracking-wider uppercase text-xs mb-2 block">World-Class Care</span>
                            <h2 className="font-display text-4xl text-deep-green mb-4">Meet Our Fertility Experts</h2>
                            <p className="text-text-muted font-light max-w-2xl mx-auto md:mx-0">
                                World-class specialists dedicated to making your dream of parenthood a reality.
                            </p>
                        </div>

                        {/* Filter Dropdown */}
                        <div className="relative z-20 w-full md:w-auto">
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="appearance-none bg-white border border-soft-sage/30 text-deep-green py-3 pl-6 pr-12 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-warm-coral/20 cursor-pointer font-medium min-w-[200px]"
                            >
                                {services.map((service, idx) => (
                                    <option key={idx} value={service}>{service}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-deep-green">
                                <span className="material-icons text-sm">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {filteredDoctors.map((doctor) => (
                            <DoctorCard
                                key={doctor.id}
                                profileId={doctor.profileId}
                                name={doctor.name}
                                specialty={doctor.specialty}
                                designation={doctor.role || doctor.specialty}
                                image={doctor.image}
                                qualification={doctor.qualification}
                                experience={doctor.experience}
                                languages="English, Kannada, Hindi"
                                badgeText={doctor.badgeText}
                                consultationFee={doctor.consultationFee}
                                badgeColorClass={doctor.badgeColorClass}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Trust) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-warm-coral font-bold tracking-wider uppercase text-xs mb-2 block">Real Stories</span>
                        <h2 className="font-display text-4xl text-deep-green">Stories of Hope</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-warm-ivory/30 p-10 rounded-3xl shadow-sm relative border border-soft-sage/20 hover:shadow-lg transition-all flex flex-col h-full">
                                <span className="material-icons absolute top-8 right-8 text-6xl text-soft-sage/20">format_quote</span>
                                <div className="flex text-warm-coral mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="material-icons text-sm">star</span>
                                    ))}
                                </div>
                                <p className="font-display text-lg text-deep-green italic mb-6 leading-relaxed flex-grow">
                                    "{review.content}"
                                </p>
                                <div className="flex items-center mt-auto pt-6 border-t border-soft-sage/10">
                                    <div className="w-10 h-10 bg-soft-sage rounded-full flex items-center justify-center text-deep-green font-bold mr-3">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-deep-green text-sm">{review.name}</p>
                                        <p className="text-xs text-text-muted">{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
