import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import doctor2 from '../assets/supabase/doctor2.jpg';
import doctorPri from '../assets/supabase/drpriya.jpeg'; // Assuming this is Dr. Rupa's image based on previous context, or use a placeholder if unsure. Previous file had doctorPri for Dr. Rupa.
import DoctorCard from '../components/DoctorCard';

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What psychological therapies are best for women's mental health?",
            "acceptedAnswer": { "@type": "Answer", "text": "The most effective psychological therapies for women include Cognitive Behavioral Therapy (CBT), trauma healing, and structured counseling. Our expert psychologists help women safely navigate clinical anxiety, relationship conflicts, and severe burnout through personalized talk therapy in a completely confidential, judgment-free environment." }
        },
        {
            "@type": "Question",
            "name": "When should a woman consult a clinical psychiatrist?",
            "acceptedAnswer": { "@type": "Answer", "text": "A woman should consult a clinical psychiatrist when experiencing severe mental health challenges, complex mood disorders, or debilitating postpartum depression. Our senior psychiatrists provide expert medical diagnosis, comprehensive biological assessments, and safe, monitored medication management tailored specifically to female hormonal health." }
        }
    ]
};

const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "My Stree Women's Mental Health & Clinical Psychiatry Clinic",
    "description": "Expert Women's Mental Health & Clinical Psychiatry in Bangalore. 1,200+ women served monthly in a 100% private, judgment-free space.",
    "medicalSpecialty": ["Psychiatry", "Psychology"],
    "availableService": [
        { "@type": "MedicalProcedure", "name": "Cognitive Behavioral Therapy (CBT)" },
        { "@type": "MedicalProcedure", "name": "Clinical Psychiatry & Medication Management" },
        { "@type": "MedicalProcedure", "name": "Postpartum Depression Support" },
        { "@type": "MedicalProcedure", "name": "Trauma Healing & Emotional Recovery" }
    ]
};

const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Smitha A.P.",
    "description": "Senior Consultant for Women's Integrated Care and Clinical Psychiatry. 23+ Years of Clinical Experience.",
    "medicalSpecialty": "ObstetricsGynecology",
    "hasCredential": "MBBS, MS, DNB (OBG), FFM, FRM, MBA"
};

const PsychologyPsychiatry = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const focusAreas = [
        {
            title: "Anxiety & Stress",
            points: ["Worry & overthinking", "Emotional burnout", "Work-life stress", "Panic episodes"],
            icon: "psychology"
        },
        {
            title: "Depression & Mood Disorders",
            points: ["Sadness & low mood", "Hopelessness", "Sleep changes", "Emotional imbalance"],
            icon: "mood_bad"
        },
        {
            title: "Relationship & Marriage Counselling",
            points: ["Communication issues", "Relationship stress", "Conflict healing", "Couple therapy"],
            icon: "favorite"
        },
        {
            title: "Pregnancy & Postpartum Support",
            points: ["Postpartum depression", "Mood shifts", "New-mother support", "Emotional guidance"],
            icon: "baby_changing_station"
        }
    ];

    const testimonials = [
        {
            text: "I finally feel heard. The severe clinical anxiety I carried for years started lifting after my first few CBT sessions. The digital therapy options fit perfectly into my schedule. It's truly a sanctuary here in Bangalore.",
            author: "Anonymous Patient",
            location: "Bangalore",
            mood: "Anxiety & Stress Relief",
            initial: "A"
        },
        {
            text: "Balancing work and motherhood broke me, leading to intense postpartum depression. The expert clinical psychiatry and medication management here helped me rebuild my resilience piece by piece. Highly recommend their mental health team.",
            author: "Sarah K.",
            location: "Bangalore",
            mood: "Postpartum Support & Psychiatry",
            initial: "S"
        },
        {
            text: "No judgment, just pure support and clinical precision. Their understanding of how hormonal shifts affect mental health is unmatched. The 100% private digital sessions are a lifesaver.",
            author: "M.R.",
            location: "Bangalore",
            mood: "Hormonal Wellness & Empathy",
            initial: "M"
        }
    ];

    const services = ["All Services", "Integrated Women's Care", "Perinatal Mental Health", "Counselling"];

    const specialists = [
        {
            profileId: "dr-smitha",
            name: "Dr. Smitha A.P.",
            specialty: "Senior Consultant - Women's Integrated Care",
            qualification: "MBBS, MS, DNB (OBG), FFM, FRM, MBA",
            experience: "23+ Years Experience",
            languages: "English, Kannada, Tamil",
            image: doctor2,
            badgeText: "Integrated Women's Care",
            consultationFee: "₹600",
            badgeColorClass: "bg-purple-600 text-white",
            services: ["Integrated Women's Care", "Perinatal Mental Health", "All Services"]
        },

    ];

    const [selectedService, setSelectedService] = useState("All Services");

    const filteredSpecialists = specialists.filter(doc =>
        doc.services.includes(selectedService)
    );

    return (
        <div className="font-display text-slate-800 bg-white selection:bg-primary/30 selection:text-primary overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />

            {/* Hero Section - Refined with Pink Gradient */}
            <header className="relative pt-24 pb-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-corn-silk via-white to-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uranian-blue/20 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 relative z-10">
                        <motion.div
                            {...fadeIn}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
                        >
                            <span className="material-icons text-sm">filter_vintage</span>
                            A Sanctuary for the Soul
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-slate-900 font-serif leading-[1.1] tracking-tight"
                        >
                            Expert Women&apos;s Mental Health <br />
                            <span className="text-primary italic font-serif">&amp; Clinical Psychiatry in Bangalore.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-xl text-slate-600 leading-relaxed font-light max-w-xl"
                        >
                            Find peace within yourself at My Stree, Bangalore's premier women-centric mental health clinic. Joined by over <strong>1,200+ women this month</strong>, our safe, 100% private digital and in-person space merges precise clinical psychiatry with deep emotional empathy. Whether you are navigating the weight of severe burnout, the fog of clinical depression, or complex prenatal mood shifts, our highly credentialed specialists are here to guide your healing journey.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <button className="bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group">
                                <span>Begin Your Healing</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button className="bg-white text-slate-700 border-2 border-slate-100 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                                <span className="material-icons text-primary-light">psychology</span>
                                Free Assessment
                            </button>
                        </motion.div>

                        {/* Social Proof Sticker */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-uranian-blue overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?u=pink${i}`} alt="Patient" loading="lazy" decoding="async" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-slate-500">
                                Joined by <span className="text-primary font-bold">1,200+ women</span> this month
                            </p>
                        </div>
                    </div>

                    {/* Hero Visual Area */}
                    <div className="relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <img
                                alt="Peaceful landscape"
                                className="w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>

                            {/* Floating Quote Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50"
                            >
                                <p className="text-slate-800 italic font-serif text-lg leading-relaxed text-center">
                                    "Healing is not reclaiming what was lost, but identifying what can be gained."
                                </p>
                            </motion.div>
                        </div>

                        {/* Floating Ornament - Pink Flower */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center -z-10"
                        >
                            <span className="material-icons text-primary/30 text-6xl opacity-30">filter_vintage</span>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Intro Quote Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                            Every feeling deserves <br />
                            <span className="italic text-primary">its own safe space.</span>
                        </h2>
                    </motion.div>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Whether it's the weight of burnout, the fog of depression, or the complexity of prenatal mood shifts, we are here to walk with you. Our approach merges clinical precision with the warmth of sisterhood.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                        {[
                            { icon: 'favorite', label: 'Empathy First', color: 'text-primary-light' },
                            { icon: 'lock', label: '100% Private', color: 'text-primary' },
                            { icon: 'psychology', label: 'Expert Minds', color: 'text-blue-400' },
                            { icon: 'forum', label: 'Open Hearts', color: 'text-orange-400' }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:shadow-lg transition-all border border-transparent group-hover:border-slate-100">
                                    <span className={`material-icons text-3xl ${item.color}`}>{item.icon}</span>
                                </div>
                                <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest">{item.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars Section - Refined Glassmorphism */}
            <section className="py-24 bg-corn-silk/30 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Psychology Pillar */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-white/50 relative overflow-hidden group flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-uranian-blue/10 rounded-bl-full -z-10 group-hover:bg-uranian-blue/20 transition-all"></div>
                            <div className="flex-grow">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-6 inline-block">Therapy Focus | Capsule Q&amp;A</span>
                                <h3 className="text-3xl font-bold font-serif text-slate-900 mb-4 leading-snug">What psychological therapies are best for women&apos;s mental health?</h3>
                                <p className="text-slate-600 text-base mb-8 leading-relaxed">
                                    The most effective psychological therapies for women include Cognitive Behavioral Therapy (CBT), trauma healing, and structured counseling. Our expert psychologists help women safely navigate clinical anxiety, relationship conflicts, and severe burnout through personalized talk therapy in a completely confidential, judgment-free environment.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {['Cognitive Behavioral Therapy (CBT)', 'Conflict Resolution & Stress Management', 'Trauma Healing & Emotional Recovery'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <span className="material-symbols-outlined text-primary">done_all</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-primary/20">
                                Consult a Psychologist
                            </button>
                        </motion.div>

                        {/* Psychiatry Pillar */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-white/50 relative overflow-hidden group flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-all"></div>
                            <div className="flex-grow">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-6 inline-block">Clinical Focus | Capsule Q&amp;A</span>
                                <h3 className="text-3xl font-bold font-serif text-slate-900 mb-4 leading-snug">When should a woman consult a clinical psychiatrist?</h3>
                                <p className="text-slate-600 text-base mb-8 leading-relaxed">
                                    A woman should consult a clinical psychiatrist when experiencing severe mental health challenges, complex mood disorders, or debilitating postpartum depression. Our senior psychiatrists provide expert medical diagnosis, comprehensive biological assessments, and safe, monitored medication management tailored specifically to female hormonal health.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {['Medical Diagnosis & Psychological Assessment', 'Targeted Medication Management', 'Biological Interventions for Mood Disorders'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <span className="material-symbols-outlined text-primary">done_all</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-primary/20">
                                Consult a Psychiatrist
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Doctors Section - NEW standardized integration */}
            <section className="py-24 bg-corn-silk/30 dark:bg-slate-900/50 relative overflow-hidden" id="experts">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Expert Clinical Specialists | E-E-A-T Verified</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                                Meet Our Expert <span className="text-primary italic">Clinical Specialists</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light italic">
                                Board-certified specialists dedicated to your emotional well-being and clinical mental health care in Bangalore.
                            </p>
                        </div>

                        {/* Filter Dropdown */}
                        <div className="relative z-20 w-full md:w-auto">
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="appearance-none bg-white border border-primary/30 text-gray-700 py-3 pl-6 pr-12 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer font-medium min-w-[200px]"
                            >
                                {services.map((service, idx) => (
                                    <option key={idx} value={service}>{service}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                                <span className="material-icons text-sm">expand_more</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {filteredSpecialists.map((doc, i) => (
                            <DoctorCard key={i} {...doc} profileId={doc.profileId} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Patient Testimonials */}
            <section className="py-24 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Healing Journeys | Local Insights</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 italic">Voices of Resilience</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto italic">Trusted by women navigating mental wellness across Bangalore. "Healing is not reclaiming what was lost, but identifying what can be gained."</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow relative group">
                                <span className="material-icons text-primary/10 text-6xl absolute top-6 right-8 group-hover:text-primary/20 transition-colors">format_quote</span>
                                <div className="inline-block px-3 py-1 bg-primary/5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-6">{t.mood}</div>
                                <p className="text-slate-600 italic relative z-10 mb-8 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-sm transition-transform group-hover:scale-110">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-800 text-sm block">{t.author}</span>
                                        <span className="text-xs text-primary font-bold uppercase tracking-wider">{t.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Redesigned for visual richness */}
            <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FB923C]">
                {/* Dynamic Background Layers */}
                <div className="absolute inset-0 bg-[#EA580C] opacity-25 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FB923C] opacity-90 z-0"></div>

                {/* Animated Abstract Ornaments */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none z-0"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -45, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none z-0"
                ></motion.div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em]">Your Transformation Starts Here</span>

                        <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight text-shadow-lg">
                            Your Mental Wellness <br />
                            <span className="italic opacity-90">is Not a Luxury.</span>
                        </h2>

                        <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto font-serif italic">
                            "The journey of a thousand miles begins with a single step towards yourself."
                        </p>

                        <div className="pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-[#EA580C] px-8 md:px-12 py-4 md:py-5 rounded-3xl font-bold text-lg md:text-xl transition-all shadow-white/20 hover:bg-orange-50 group flex items-center gap-3 mx-auto"
                            >
                                <span>Book Your First Session</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </motion.button>
                            <p className="text-white/60 text-sm mt-6 font-medium tracking-wide uppercase">100% Confidential • Professional Specialists • Safe Space</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PsychologyPsychiatry;
