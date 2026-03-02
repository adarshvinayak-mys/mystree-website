import React from 'react';
import { Link } from 'react-router-dom';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import adarsh from '../assets/adarsh.jpg';
import bgImage from '../assets/background.jpg';

export default function AboutUs() {
    return (
        <div className="bg-white dark:bg-gray-900 text-slate-800 dark:text-white font-body selection:bg-primary selection:text-white pb-32 lg:pb-0">

            {/* 1. Redefining Women’s Healthcare (Hero Section) */}
            <section
                className="relative pt-24 pb-32 lg:pt-44 lg:pb-52 bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Sophisticated Overlay for Text Readability */}
                <div className="absolute inset-0 bg-white/75 dark:bg-gray-900/85 backdrop-blur-[1px]"></div>

                <div className="container relative mx-auto px-6 lg:px-12 z-10">
                    <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom duration-1000">
                        <span className="inline-block py-1.5 px-4 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-10 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm transition-all hover:border-primary/40">
                            Holistic Health & Care
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-10">
                            Redefining Women’s Healthcare with <span className="italic text-primary">Precision</span> & Empathy.
                        </h1>
                        <div className="w-24 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
                        <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
                            My Stree combines medical excellence with a deep understanding of the female physiology to deliver comprehensive care that empowers.
                        </p>
                    </div>
                </div>

                {/* Decorative fade at the bottom to transition into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
            </section>

            {/* 2. Vision & Mission (From Concept 2) */}
            <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800 border border-gray-100 dark:border-gray-800 rounded-lg bg-[#FFFFF0]/30 dark:bg-gray-800/30 overflow-hidden">
                        <div className="p-12 md:p-16">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">visibility</span>
                            <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-4">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                To be the most trusted authority in women's health, creating a sanctuary where medical expertise meets holistic wellness, ensuring every woman feels empowered, informed, and prioritized throughout her life journey.
                            </p>
                        </div>
                        <div className="p-12 md:p-16">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">flag</span>
                            <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-4">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                To bridge the gap in specialized women's healthcare by integrating advanced obstetrics, gynecology, and nutritional science with a deeply empathetic, patient-centric approach that respects individual choices and needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Leadership Team (From Concept 2) */}
            <section className="py-24 bg-[#FFFFF0] dark:bg-gray-900">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <h2 className="font-display text-4xl text-gray-900 dark:text-white mb-2">Leadership Team</h2>
                        <p className="text-gray-500 dark:text-gray-400">Guided by decades of medical excellence and innovation.</p>
                    </div>

                    {/* Featured Leader: Dr. Smitha */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12 mb-12 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/3 flex-shrink-0">
                            <div className="relative">
                                <img
                                    alt="Dr. Smitha A.P."
                                    className="w-full aspect-[3/4] object-cover rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
                                    src={doctor2}
                                />
                                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-md">
                                    <span className="block text-2xl font-display font-bold">23+</span>
                                    <span className="text-xs uppercase tracking-wider opacity-90">Years Exp.</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            <div>
                                <h3 className="font-display text-4xl text-gray-900 dark:text-white mb-1">Dr. Smitha A.P.</h3>
                                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Co-Founder & Chief Medical Officer</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded uppercase">MBBS</span>
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded uppercase">MS (OBG)</span>
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded uppercase">DNB</span>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                A visionary leader in women's health, Dr. Smitha brings over two decades of clinical mastery in high-risk obstetrics and gynecological care. Her philosophy combines rigorous medical standards with a profound commitment to patient dignity. She founded My Stree to address the systemic gaps in women's healthcare, ensuring that complex medical needs are met with precision and empathy.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Specialization</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">High-Risk Obstetrics, Laparoscopy</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Focus</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Patient Safety & Clinical Governance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Dr. Surbhi */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/30 group">
                            <div className="mb-6 overflow-hidden rounded-md h-64">
                                <img
                                    alt="Dr. Surbhi Sinha"
                                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all"
                                    src={doctor1}
                                />
                            </div>
                            <h3 className="font-display text-2xl text-gray-900 dark:text-white">Dr. Surbhi Sinha</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Lead Specialist</p>
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold border border-gray-100 dark:border-gray-600 rounded uppercase">MRCOG (UK)</span>
                                <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold border border-gray-100 dark:border-gray-600 rounded uppercase">OBGYN</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                Expert in fertility and reproductive medicine with international credentials. Dr. Sinha champions evidence-based protocols for complex fertility challenges.
                            </p>
                        </div>

                        {/* Priyanka Savina */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/30 group">
                            <div className="mb-6 overflow-hidden rounded-md h-64">
                                <img
                                    alt="Priyanka Savina"
                                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all"
                                    src={doctor3}
                                />
                            </div>
                            <h3 className="font-display text-2xl text-gray-900 dark:text-white">Priyanka Savina</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Wellness Lead</p>
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold border border-gray-100 dark:border-gray-600 rounded uppercase">M.Sc Nutrition</span>
                                <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold border border-gray-100 dark:border-gray-600 rounded uppercase">PCOS Expert</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                Specializing in nutritional interventions for PCOS and postpartum recovery, Priyanka integrates lifestyle medicine into our core treatment plans.
                            </p>
                        </div>

                        {/* Adarsh Vinayak */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/30 group">
                            <div className="mb-6 overflow-hidden rounded-md h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <img
                                    alt="Adarsh Vinayak"
                                    className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all opacity-80"
                                    src={adarsh}
                                />
                            </div>
                            <h3 className="font-display text-2xl text-gray-900 dark:text-white">Adarsh Vinayak</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Technology Lead</p>
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold border border-gray-100 dark:border-gray-600 rounded uppercase">CTO</span>
                                <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold border border-gray-100 dark:border-gray-600 rounded uppercase">Digital Health</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                Spearheading the digital transformation of patient care, Adarsh ensures seamless, secure, and accessible technology integration for modern healthcare delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Ethos (From Concept 1) */}
            <section className="py-24 bg-[#FCF4D9] dark:bg-gray-900 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Our Ethos</span>
                            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-none mb-8">
                                Guided by <br />
                                <span className="italic text-gray-500">Unwavering</span> <br />
                                Principles.
                            </h2>
                        </div>
                        <div className="space-y-12">
                            <div className="flex gap-6 items-start border-l-2 border-primary pl-8">
                                <div>
                                    <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2">Clinical Integrity</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">We adhere to the highest standards of medical ethics, ensuring every decision is evidence-based and patient-first.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start border-l-2 border-secondary pl-8">
                                <div>
                                    <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2">Empathetic Care</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">Medicine treats the body; empathy treats the person. We integrate emotional well-being into clinical practice.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                                <div>
                                    <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2">Sustainable Wellness</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">Beyond quick fixes, we focus on long-term health outcomes and preventative strategies for women.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Core Values (From Concept 2) */}
            <section className="py-24 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl text-gray-900 dark:text-white mb-4">Core Values</h2>
                        <p className="text-gray-500 dark:text-gray-400">The principles that define our practice and promise.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
                        {/* Value 1 */}
                        <div className="bg-white dark:bg-gray-900 p-10 flex flex-col items-center text-center hover:bg-orange-50/30 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-icons text-3xl text-primary mb-4">diversity_1</span>
                            <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Empathy</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Understanding the emotional context of every medical need.</p>
                        </div>
                        {/* Value 2 */}
                        <div className="bg-white dark:bg-gray-900 p-10 flex flex-col items-center text-center hover:bg-orange-50/30 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-icons text-3xl text-primary mb-4">fingerprint</span>
                            <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Personalized Care</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Tailoring treatments to individual biology and lifestyle.</p>
                        </div>
                        {/* Value 3 */}
                        <div className="bg-white dark:bg-gray-900 p-10 flex flex-col items-center text-center hover:bg-orange-50/30 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-icons text-3xl text-primary mb-4">gpp_good</span>
                            <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Safe Space</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">A judgment-free environment prioritizing privacy and trust.</p>
                        </div>
                        {/* Value 4 */}
                        <div className="bg-white dark:bg-gray-900 p-10 flex flex-col items-center text-center hover:bg-orange-50/30 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-icons text-3xl text-primary mb-4">spa</span>
                            <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Holistic</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Integrating mind, body, and nutrition into recovery.</p>
                        </div>
                        {/* Value 5 */}
                        <div className="bg-white dark:bg-gray-900 p-10 flex flex-col items-center text-center hover:bg-orange-50/30 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-icons text-3xl text-primary mb-4">accessible</span>
                            <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Accessibility</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Making expert care reachable and understandable.</p>
                        </div>
                        {/* Value 6 */}
                        <div className="bg-white dark:bg-gray-900 p-10 flex flex-col items-center text-center hover:bg-orange-50/30 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-icons text-3xl text-primary mb-4">volunteer_activism</span>
                            <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Empowerment</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Educating women to take charge of their own health.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Your Health, Our Priority (From Concept 1) */}
            <section className="py-32 bg-white dark:bg-gray-900 text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="material-icons text-primary text-5xl mb-6">verified</span>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8">
                            Your Health, <span className="italic text-primary">Our Priority.</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                            Partner with a team that values your trust as much as your health. Experience the difference of leadership-driven care.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="https://my-stree.com/booking" className="bg-primary text-white px-10 py-5 rounded text-lg font-bold shadow-lg hover:bg-orange-700 uppercase tracking-wide">
                                Book Consultation
                            </a>
                            <Link to="/contact" className="border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-10 py-5 rounded text-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800 uppercase tracking-wide">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
