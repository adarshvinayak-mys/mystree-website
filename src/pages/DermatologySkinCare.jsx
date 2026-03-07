import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import doctor1 from '../assets/supabase/doctor1.jpg';
import doctor3 from '../assets/supabase/doctor3.jpg';
import DoctorCard from '../components/DoctorCard';


export default function DermatologySkinCare() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = ["All Services", "Hormonal Skin Care", "Nutrition & Skin Wellness"];

    const doctors = [
        {
            profileId: "dr-surbhi",
            name: "Dr. Surbhi Sinha",
            specialty: "Consultant Obstetrician & Hormonal Skin Specialist",
            qualification: "MBBS, MS, DNB, MRCOG (UK), FRM",
            experience: "12+ Years Experience",
            languages: "English, Hindi, Kannada",
            image: doctor1,
            badgeText: "Hormonal Skin Care",
            consultationFee: "₹600",
            badgeColorClass: "bg-blue-600 text-white",
            services: ["Hormonal Skin Care", "All Services"]
        },
        {
            profileId: "priyanka-savina",
            name: "Priyanka Savina",
            specialty: "Clinical Nutritionist & Skin Wellness Consultant",
            qualification: "M.Sc Nutrition & Dietetics, M.Sc Psychological Counseling",
            experience: "10+ Years Experience",
            languages: "English, Hindi, Kannada",
            image: doctor3,
            badgeText: "Skin Nutrition Protocols",
            consultationFee: "₹600",
            badgeColorClass: "bg-orange-500 text-white",
            services: ["Nutrition & Skin Wellness", "All Services"]
        }
    ];

    const [selectedService, setSelectedService] = useState("All Services");

    const filteredDoctors = doctors.filter(doc =>
        doc.services.includes(selectedService)
    );

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="font-display text-cadet-gray antialiased selection:bg-primary/30 selection:text-primary relative bg-corn-silk min-h-screen ">
            <style>{`
                .bg-gradient-flame {
                    background: linear-gradient(90deg, #ed592c 0%, #FF833C 100%);
                    background-size: 200% 200%;
                    animation: gradient-anim 4s ease infinite;
                }
                @keyframes gradient-anim {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                }
                .sticker-badge {
                    transform: rotate(-3deg);
                    box-shadow: 2px 4px 10px rgba(0,0,0,0.1);
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-12 pb-20 px-6 md:px-12 lg:px-20 bg-corn-silk">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-uranian-blue/30 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        className="relative z-10 space-y-8 lg:col-span-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="inline-block">
                            <div className="bg-uranian-blue text-cadet-gray px-4 py-1.5 rounded-full border-2 border-white shadow-sm font-bold text-sm tracking-wide sticker-badge flex items-center gap-2">
                                <span className="material-icons text-primary text-base">verified</span>
                                Advanced Dermatology
                            </div>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-cadet-gray leading-[1.1] tracking-tight font-serif">
                            Wear Your Skin With <br />
                            <span className="italic text-burnt-sienna relative inline-block">
                                Pride.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-cadet-gray/80 max-w-lg leading-relaxed font-medium">
                            Expert dermatological care for every tone, texture, and story. Reveal your healthiest, most radiant self.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-gradient-flame text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group">
                                <span>Start Your Glow Journey</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                <img alt="User" className="w-10 h-10 rounded-full border-2 border-corn-silk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL51elBadLx-GqI0KUJARdmD1EgPpzLofD7ozM5Z0olIxNGSqCIrSPLVv8H9NAWj0UJNUKV12VeVAjin5Gx9qguQErGQHBbO2cKy6jR5AhpJofIXb4IN_Immkt2LbkaouGag2Zh_4x977cowqeGcGo-LuRu0GYh5kznhcXXAcH2KN5fRjy3VyVsqMEoFiLi-XUIslpmW10jwmov5MVffBDg7pgwz1CkWG_rYEDFoleRshBdije-TOA9-8G3NoF1vXj-QVlftifvqwl" loading="lazy" decoding="async" />
                                <img alt="User" className="w-10 h-10 rounded-full border-2 border-corn-silk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF9BREyehiCFjC1SU3UgpWOazFywfQt9civfvTAhjkiLVCQQFhaPiAWcvJYK-55oAw8ArnFcg13UhVv6QcAPlfg1dV4QN8BycYmA8xfX4QPxXGW9zV5B_xEIiVv6albWXIHYUCbqksqbRjdyPCN3y8hSc5MqbwKoL_bXrjzQvrYjW2Y7yp8tijWsHzGFuX03hvgBS6s2Y-0-oyj0sOFQ7BBe_71cOUQhd7cxa3U-vdEUC_TtVqO-f2s59dF-J6hBQbwtqRBpdEumyB" loading="lazy" decoding="async" />
                                <div className="w-10 h-10 rounded-full border-2 border-corn-silk bg-uranian-blue flex items-center justify-center text-xs font-bold text-cadet-gray">+10k</div>
                            </div>
                            <div className="text-sm font-medium text-cadet-gray/70">
                                <span className="block text-primary font-bold text-base">Radiant Smiles</span>
                                Glowing every day
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative lg:col-span-6 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative z-10 w-full max-w-md">
                            <div className="absolute inset-0 bg-uranian-blue rounded-[3rem] transform rotate-3 translate-x-4 translate-y-4 -z-10 opacity-60"></div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[550px] w-full bg-corn-silk-dark relative group">
                                <img alt="Natural skin glow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL7JCUU1Xe76ymVSom2x3fEiyLmVoyz9gs0eeJe4QIcM2D7AKlNLeLapmiCqRRPrmWLRUc87jz9FRCsctXjU78RCVQATprS_nJu01CgIMXRc-HM4oxC7FtcopA8i7VHAg2E787tC-W3PE8B_J0Z7eFWxTfzZI2VHxbeApb2TbacytexX2Mubx6LamsZO41AWUHGT46Z9HaGw7W6VREdGsblId4q2hh49XpHiy-9EZuZ0_OxulVdYB-uas78d1DAnBcrUWCT5UF8YIj" loading="eager" decoding="async" fetchPriority="high" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cadet-gray/20 to-transparent"></div>
                            </div>
                            <motion.div
                                className="absolute bottom-10 -left-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                                        <span className="material-icons text-xl">wb_sunny</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-cadet-gray uppercase tracking-wide">Skin Health</p>
                                        <p className="text-xs text-cadet-gray/70 mt-1">Clinically proven treatments for lasting glow.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Skin Goal Section */}
            <section className="py-12 bg-white/30 backdrop-blur-sm border-t border-b border-primary/5">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto pb-4 hide-scrollbar">
                    <motion.div
                        className="flex flex-nowrap md:justify-center gap-8 min-w-max"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { icon: "water_drop", label: "Glass Skin (Acne-Free)", color: "uranian-blue" },
                            { icon: "auto_awesome", label: "Timeless Radiance", color: "primary-light" },
                            { icon: "shield", label: "Barrier Repair", color: "purple-300" },
                            { icon: "wb_sunny", label: "Sun-Kissed Clarity", color: "yellow-400" },
                            { icon: "medical_services", label: "Doctor Favorites", color: "teal-400" }
                        ].map((goal, index) => (
                            <motion.button
                                key={index}
                                variants={fadeInUp}
                                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
                            >
                                <div className="w-20 h-20 rounded-full bg-white shadow-soft-card flex items-center justify-center border border-gray-100 group-hover:shadow-glow-blue transition-all duration-300">
                                    <span className={`material-icons text-4xl text-${goal.color}`}>{goal.icon}</span>
                                </div>
                                <span className="font-bold text-cadet-gray text-sm">{goal.label}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Impact Banner */}
            <section className="bg-uranian-blue py-10 overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-burnt-sienna font-serif"
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        CLARITY • RADIANCE • HEALTH
                    </motion.h2>
                </div>
            </section>

            {/* Patient Reviews Section */}
            <section className="py-24 bg-white px-6 md:px-12 lg:px-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-uranian-blue/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block italic">Real Results</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif">The Wall of Radiance</h2>
                        <p className="text-cadet-gray/70 mt-4">Actual experiences from our wonderful clinical patients.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "I've dealt with adult acne for years, and nothing seemed to work. After a few sessions here, my skin has cleared up significantly. The professional care and follow-ups are exceptional.",
                                author: "Sneha P.",
                                focus: "Acne Therapy",
                                initial: "S"
                            },
                            {
                                text: "The anti-aging treatments are subtle but so effective. I love that the focus is on skin health and natural radiance rather than just quick fixes. My skin feels firm and hydrated.",
                                author: "Ananya M.",
                                focus: "Timeless Radiance",
                                initial: "A"
                            },
                            {
                                text: "Dealing with pigmentation was a huge blow to my confidence. The personalized treatment plan here addressed the root cause. My skin tone is so much more even now!",
                                author: "Kavita R.",
                                focus: "Pigmentation Care",
                                initial: "K"
                            }
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                className="glass-card p-10 rounded-[2rem] shadow-sm hover:shadow-glow-blue transition-all border border-primary/5 relative group"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <span className="material-icons text-primary/10 text-6xl absolute top-6 right-8 group-hover:text-primary/20 transition-colors">auto_awesome</span>
                                <div className="inline-block px-3 py-1 bg-uranian-blue/30 rounded-full text-[10px] font-bold text-cadet-gray uppercase tracking-widest mb-6">{t.focus}</div>
                                <p className="text-cadet-gray italic relative z-10 mb-8 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-sm">
                                        {t.initial}
                                    </div>
                                    <span className="font-bold text-cadet-gray text-sm">{t.author}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatments Section */}
            <section className="py-20 px-6 md:px-12 lg:px-20 relative bg-corn-silk">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block">Tailored Treatments</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif mb-6">Your Skin, Our Expertise</h2>
                        <p className="text-cadet-gray/70 max-w-2xl mx-auto text-lg">Targeted solutions designed to restore your skin's natural balance and beauty.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Acne & Scarring",
                                icon: "face_retouching_natural",
                                bgIcon: "healing",
                                items: ["Hormonal Acne Treatment", "Laser Resurfacing", "Post-Acne Mark Fading"]
                            },
                            {
                                title: "Anti-Aging & Glow",
                                icon: "auto_awesome",
                                bgIcon: "hourglass_empty",
                                items: ["Fine Line Reduction", "Collagen Boosting", "Skin Tightening"],
                                shift: true
                            },
                            {
                                title: "Pigmentation & Melasma",
                                icon: "blur_on",
                                bgIcon: "wb_sunny",
                                items: ["Dark Spot Correction", "Sun Damage Repair", "Even Tone Therapy"]
                            },
                            {
                                title: "Hydration & Barrier Repair",
                                icon: "shield",
                                bgIcon: "water_drop",
                                items: ["Deep Moisturizing", "Sensitivity Management", "Barrier Fortification"],
                                shift: true
                            },
                            {
                                title: "Doctor Favorites",
                                icon: "favorite",
                                bgIcon: "spa",
                                items: ["HydraFacial Protocol", "PRP Skin Rejuvenation", "Medi-Facial Brightening"]
                            },
                            {
                                title: "Pigment & Texture Therapies",
                                icon: "texture",
                                bgIcon: "blur_on",
                                items: ["Chemical Peels", "Microneedling", "Laser Toning Sessions"],
                                shift: true
                            }
                        ].map((treatment, index) => (
                            <motion.div
                                key={index}
                                className={`glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-glow-blue transition-all duration-500 ${treatment.shift ? 'md:translate-y-12' : ''}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <span className="material-icons text-8xl text-cadet-gray">{treatment.bgIcon}</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary">
                                        <span className="material-icons text-3xl">{treatment.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-cadet-gray mb-3 font-serif">{treatment.title}</h3>
                                    <div className="text-cadet-gray/80 mb-6 leading-relaxed">
                                        {treatment.items.map((item, i) => (
                                            <span key={i} className="block mb-1 text-sm font-semibold text-primary/80">• {item}</span>
                                        ))}
                                    </div>
                                    <a className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform cursor-pointer">
                                        Consult <span className="material-icons ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialists Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="text-center md:text-left">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Expert Hands</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-cadet-gray font-serif">Meet Our Skin Specialists</h2>
                            <p className="text-cadet-gray/60 max-w-2xl mt-4 text-lg">Leading experts dedicated to your dermatological and nutritional skin health.</p>
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
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {filteredDoctors.map((doc, idx) => (
                            <DoctorCard key={idx} {...doc} profileId={doc.profileId} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
