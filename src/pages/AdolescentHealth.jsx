import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import doctor1 from '../assets/supabase/doctor1.jpg';
import doctor2 from '../assets/supabase/doctor2.jpg';
import doctor3 from '../assets/supabase/doctor3.jpg';

// Note: Intentionally not using reusable components due to specific "sticker" aesthetic logic requested.

const reviews = [
    {
        name: "Ananya",
        content: "Dr. Surbhi is a very friendly and non-judgemental doctor. As a PCOS patient, I finally found someone who listens to all my concerns.",
        location: "Bangalore",
        rating: 5
    },
    {
        name: "Julia Corget",
        content: "She explains things very clearly and answers any questions (no matter how silly). She made sure to bridge the cultural gap.",
        location: "International Patient",
        rating: 5
    },
    {
        name: "Nafisa",
        content: "Very friendly, approachable, non-judgmental. She makes one feel comfortable to ask all our doubts.",
        location: "Bangalore",
        rating: 5
    }
];

const topicDetails = {
    menstrual: {
        title: "Periods, But Make It Chill",
        subtitle: "How can a teen gynecologist help with irregular periods and cycle tracking?",
        icon: "water_drop",
        accent: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/30",
        concerns: ["Painful periods", "Heavy flow or irregular cycles", "Premenstrual symptoms"],
        approach: "A teen gynecologist helps diagnose and treat the root causes of irregular periods, heavy bleeding, or severe cramps. At our Indiranagar clinic, we use medically guided cycle tracking and lifestyle adjustments to regulate your menstrual health safely, ensuring you experience pain-free, predictable cycles without anxiety.",
        whenToConsult: "If pain affects school or daily life, cycles are very irregular, or bleeding feels excessive."
    },
    hormonal: {
        title: "Hormones Be Wildin’",
        subtitle: "What are the signs of hormonal imbalance and PCOS in teenagers?",
        icon: "spa",
        accent: "text-cadet-gray",
        bg: "bg-uranian-blue/30",
        border: "border-uranian-blue",
        concerns: ["PCOS-related symptoms", "Acne and hair changes", "Mood and energy fluctuations"],
        approach: "Common signs of teenage hormonal imbalance and PCOS include severe acne, sudden weight gain, irregular periods, and excessive hair growth. Our specialists provide expert PCOS management and hormonal balancing treatments tailored specifically for adolescents to naturally restore your body's software back to normal.",
        whenToConsult: "If symptoms are persistent for 2-3 cycles or beginning to impact confidence, sleep, or focus."
    },
    sexual: {
        title: "Situationships & Safe Love",
        subtitle: "Where can teenagers get confidential sexual health advice in Bangalore?",
        icon: "health_and_safety",
        accent: "text-teal-900",
        bg: "bg-mint/40",
        border: "border-mint",
        concerns: ["Contraception questions", "Safe boundaries and consent education", "Body changes and sexual wellness doubts"],
        approach: "Teenagers can receive 100% confidential, judgement-free sexual health counseling at My Stree in Indiranagar. We provide expert medical advice on consent, safe sex practices, contraception options, and STI prevention, empowering young women to make informed, safe choices about their bodies.",
        whenToConsult: "Any time you are unsure, anxious, or need private clarity before making health decisions."
    },
    mental: {
        title: "Brain on Vibes",
        subtitle: "How does puberty affect adolescent mental health and wellness?",
        icon: "psychology",
        accent: "text-purple-900",
        bg: "bg-lavender/40",
        border: "border-lavender",
        concerns: ["Stress and anxiety", "Body image concerns", "Mood changes linked to health issues"],
        approach: "Puberty causes significant hormonal fluctuations that directly impact adolescent mental health, often leading to anxiety, mood swings, or burnout. We offer integrated holistic wellness and medical support to help teens navigate these emotional changes, giving you main character energy without the stress.",
        whenToConsult: "If stress, low mood, or anxiety feels frequent, intense, or starts affecting academics and relationships."
    }
};

export default function AdolescentHealth() {
    const [activeTopic, setActiveTopic] = useState(null);
    const activeTopicData = activeTopic ? topicDetails[activeTopic] : null;

    useEffect(() => {
        if (!activeTopic) return;
        const handleEsc = (event) => {
            if (event.key === 'Escape') setActiveTopic(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [activeTopic]);

    const services = ["All Services", "Adolescent Care", "PCOS & Hormonal Health", "Gynecology", "Nutrition & Wellness", "Mental Health"];

    const doctors = [
        {
            id: 1,
            profileId: "dr-smitha",
            name: "Dr. Smitha A.P.",
            specialty: "Consultant Obstetrician & Adolescent Gynecology Specialist",
            image: doctor2,
            qualification: "MBBS, MS, DNB (OBG)",
            experience: "23+ Years Experience",
            languages: "English, Kannada, Tamil",
            badgeText: "Adolescent Care",
            consultationFee: "₹600",
            badgeColorClass: "bg-white/90 text-gray-800",
            services: ["Adolescent Care", "Gynecology", "All Services"]
        },
        {
            id: 2,
            profileId: "dr-surbhi",
            name: "Dr. Surbhi Sinha",
            specialty: "Consultant Obstetrician & Adolescent PCOS Specialist",
            image: doctor1,
            qualification: "MBBS, MS, MD (OBG)",
            experience: "10+ Years Experience",
            languages: "English, Hindi, Kannada",
            badgeText: "Teen Health Specialist",
            consultationFee: "₹600",
            badgeColorClass: "bg-white/90 text-gray-800",
            services: ["Adolescent Care", "PCOS & Hormonal Health", "All Services"]
        },
        {
            id: 3,
            profileId: "priyanka-savina",
            name: "Priyanka Savina",
            specialty: "Clinical Nutritionist & Adolescent Wellness Consultant",
            image: doctor3,
            qualification: "M.Sc Nutrition & Dietetics, M.Sc Psychological Counseling",
            experience: "Everything About What You Eat",
            languages: "English, Hindi, Kannada",
            badgeText: "Teen Nutrition Support",
            consultationFee: "₹600",
            badgeColorClass: "bg-white/90 text-gray-800",
            services: ["Nutrition & Wellness", "Mental Health", "All Services"]
        }
    ];

    const [selectedService, setSelectedService] = useState("All Services");

    const filteredDoctors = doctors.filter(doctor =>
        doctor.services.includes(selectedService)
    );

    return (
        <div className="font-display bg-corn-silk text-cadet-gray antialiased selection:bg-primary/30 selection:text-primary relative bg-paper-texture ">
            {/* 100% Confidential Badge */}
            <a className="fixed top-32 right-6 z-[60] hidden lg:flex items-center gap-2 bg-white text-cadet-gray font-bold px-4 py-3 rounded-xl shadow-sticker border-2 border-cadet-gray hover:bg-uranian-blue transition-all sticker-hover rotate-2 origin-top-right cursor-pointer">
                <span className="material-icons text-primary text-xl">lock</span>
                <span className="font-hand">100% Confidential</span>
            </a>

            {/* Header */}
            <header className="relative overflow-hidden pt-20 pb-12 px-6 md:px-12 lg:px-20">
                <div className="absolute top-20 right-0 w-96 h-96 bg-uranian-blue/50 blob-shape blur-xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/20 blob-shape-2 blur-xl -z-10 animate-blob"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="relative z-10 space-y-6 lg:col-span-7">
                        <div className="inline-block transform -rotate-1 origin-bottom-left">
                            <span className="px-4 py-2 bg-mint text-cadet-gray text-sm font-bold border-2 border-cadet-gray rounded-lg shadow-[3px_3px_0px_#3a506b] font-hand">
                                ✨ No Judgement Zone | Your Body, Your Rules.
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cadet-gray leading-[1.1] tracking-tight font-serif text-balance mt-4">
                            Best Adolescent Gynaecology <br className="hidden md:block" />
                            <span className="relative inline-block mt-2">
                                & Teen Health Clinic in Indiranagar
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" preserveAspectRatio="none" viewBox="0 0 100 10">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-cadet-gray max-w-2xl leading-relaxed font-medium mt-4">
                            Adolescent health care that actually gets it. Located in the heart of Indiranagar, Bangalore, My Stree provides a 100% private, safe space for teenagers. Led by Bangalore’s top-rated specialist, Dr. Surbhi Sinha, our clinic offers expert, judgement-free medical care for everything from period problems and PCOS to mental wellness and sexual health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-cadet-gray shadow-[4px_4px_0px_#3a506b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#3a506b] transition-all flex items-center justify-center gap-2 group">
                                <span>Talk to a Doctor</span>
                                <span className="material-icons group-hover:rotate-45 transition-transform">arrow_forward</span>
                            </button>
                            <button className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-cadet-gray bg-white hover:bg-gray-50 transition-all text-cadet-gray flex items-center justify-center gap-2 shadow-[4px_4px_0px_rgba(58,80,107,0.1)]">
                                <span className="material-icons text-primary">lock</span>
                                <span>It's 100% Private</span>
                            </button>
                        </div>
                        <div className="pt-6 flex flex-wrap gap-3 items-center">
                            <span className="text-sm font-bold text-cadet-gray">Trending:</span>
                            <span className="px-3 py-1 bg-white border border-cadet-gray rounded-full text-xs font-medium hover:bg-uranian-blue transition-colors cursor-pointer">#PCOS</span>
                            <span className="px-3 py-1 bg-white border border-cadet-gray rounded-full text-xs font-medium hover:bg-primary/20 transition-colors cursor-pointer">#MentalHealth</span>
                            <span className="px-3 py-1 bg-white border border-cadet-gray rounded-full text-xs font-medium hover:bg-mint transition-colors cursor-pointer">#SexualHealth</span>
                        </div>
                    </div>

                    <div className="relative lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative w-full max-w-md h-[420px] sm:h-[500px]">
                            <div className="absolute inset-0 z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="relative bg-white p-3 pb-8 rounded-2xl border-2 border-cadet-gray shadow-[8px_8px_0px_#3a506b]">
                                    <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 -rotate-2 w-[100px] h-[30px] bg-white/40 border border-white/60 backdrop-blur-[2px] z-10 shadow-sm"></div>
                                    <img
                                        className="w-full h-full object-cover rounded-xl grayscale-[10%] hover:grayscale-0 transition-all"
                                        alt="Young woman looking confident"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj99r5LG8NoyAi1KDXBjZERxH2fxvwOtTQ-rrabCFlv6rDrjiD0PZSZ4kDeROKk2HvNIrbvhq9aZb8eQsxVnRULm3qPtCO3IN3kmOmkVT98U4akjIWYm9X9tcwb1dc91YQ1B-KBssGYfZBK8pALQnZW5mc1dpb2ZF4s_-pEH3ICi8EEDdDc2cn84RzCQ_u3M3t2MV9reX5s8SjYeY96RELYLDvMYU0dKeKfeFPMAGOKo83nFBDlE4KZNWWV3CMfHAJjikH2umbGT-e"
                                    />
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="font-hand text-cadet-gray font-bold text-lg">Safe Space 💖</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 sm:-top-6 -left-3 sm:-left-6 z-20 bg-yellow-200 text-cadet-gray p-3 sm:p-4 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transform -rotate-12 border-2 border-cadet-gray shadow-sticker animate-bounce-slow">
                                <span className="text-center font-bold text-xs leading-tight">Teen<br />Friendly<br />Doc</span>
                            </div>
                            <div className="absolute bottom-6 sm:bottom-10 -right-2 sm:-right-4 z-20 bg-white p-2.5 sm:p-3 rounded-lg border-2 border-cadet-gray shadow-sticker transform rotate-6 max-w-[140px] sm:max-w-[150px]">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-icons text-green-500 text-sm">verified</span>
                                    <span className="text-xs font-bold">Bangalore Top Rated</span>
                                </div>
                                <p className="text-[10px] leading-tight text-gray-500">"Dr. Surbhi made me feel totally heard."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* What's on your mind? */}
            <section className="py-20 px-6 relative bg-white/50">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-cadet-gray font-serif mb-4">What's on your mind?</h2>
                    <p className="text-xl text-primary font-hand transform -rotate-1">Click a bubble to explore!</p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {/* Bubble 1 */}
                        <div className="group cursor-pointer" onClick={() => setActiveTopic('menstrual')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTopic('menstrual')}>
                            <div className="w-64 h-64 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/20 flex flex-col items-center justify-center p-6 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:border-cadet-gray shadow-lg hover:shadow-xl">
                                <span className="material-icons text-4xl text-primary mb-3 group-hover:text-white transition-colors">water_drop</span>
                                <h3 className="text-xl font-bold text-cadet-gray group-hover:text-white transition-colors font-serif mb-2 leading-tight">Periods, But Make It Chill</h3>
                                <p className="text-sm text-cadet-gray/70 group-hover:text-white/90 transition-colors leading-tight">Cycle tracking — no more hush-hush.</p>
                            </div>
                        </div>
                        {/* Bubble 2 */}
                        <div className="group cursor-pointer" onClick={() => setActiveTopic('hormonal')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTopic('hormonal')}>
                            <div className="w-64 h-64 rounded-full bg-uranian-blue/30 backdrop-blur-sm border-2 border-uranian-blue flex flex-col items-center justify-center p-6 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-uranian-blue group-hover:border-cadet-gray shadow-lg hover:shadow-xl">
                                <span className="material-icons text-4xl text-cadet-gray mb-3">spa</span>
                                <h3 className="text-xl font-bold text-cadet-gray font-serif mb-2 leading-tight">Hormones Be Wildin’</h3>
                                <p className="text-sm text-cadet-gray/70 leading-tight">Body software update. No random tears.</p>
                            </div>
                        </div>
                        {/* Bubble 3 */}
                        <div className="group cursor-pointer" onClick={() => setActiveTopic('sexual')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTopic('sexual')}>
                            <div className="w-64 h-64 rounded-full bg-mint/40 backdrop-blur-sm border-2 border-mint flex flex-col items-center justify-center p-6 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-mint group-hover:border-cadet-gray shadow-lg hover:shadow-xl">
                                <span className="material-icons text-4xl text-teal-700 mb-3">health_and_safety</span>
                                <h3 className="text-xl font-bold text-teal-900 font-serif mb-2 leading-tight">Situationships & Safe Love</h3>
                                <p className="text-sm text-teal-800/70 leading-tight">Crushes, consent, not just Bollywood.</p>
                            </div>
                        </div>
                        {/* Bubble 4 */}
                        <div className="group cursor-pointer" onClick={() => setActiveTopic('mental')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTopic('mental')}>
                            <div className="w-64 h-64 rounded-full bg-lavender/40 backdrop-blur-sm border-2 border-lavender flex flex-col items-center justify-center p-6 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-lavender group-hover:border-cadet-gray shadow-lg hover:shadow-xl">
                                <span className="material-icons text-4xl text-purple-700 mb-3">psychology</span>
                                <h3 className="text-xl font-bold text-purple-900 font-serif mb-2 leading-tight">Brain on Vibes</h3>
                                <p className="text-sm text-purple-800/70 leading-tight">Main character energy without burnout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {activeTopicData && (
                <div
                    className="fixed inset-0 z-[90] bg-cadet-gray/55 backdrop-blur-[2px] px-4 py-8 md:py-12 flex items-start md:items-center justify-center"
                    onClick={() => setActiveTopic(null)}
                >
                    <div
                        className={`w-full max-w-3xl rounded-3xl border-2 ${activeTopicData.border} bg-white shadow-[10px_10px_0px_rgba(58,80,107,0.2)] overflow-hidden flex flex-col max-h-[90vh]`}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${activeTopicData.title} details`}
                    >
                        <div className={`p-6 md:p-8 ${activeTopicData.bg} border-b border-cadet-gray/10 shrink-0`}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <span className={`material-icons text-3xl ${activeTopicData.accent}`}>{activeTopicData.icon}</span>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-cadet-gray/70 mb-2">Adolescent Clinic Focus</p>
                                        <h2 className="text-3xl font-bold font-serif text-cadet-gray leading-tight">{activeTopicData.title}</h2>
                                        <h3 className="text-cadet-gray/90 mt-2 font-semibold text-lg">{activeTopicData.subtitle}</h3>
                                    </div>
                                </div>
                                <button
                                    className="w-10 h-10 rounded-full bg-white border border-cadet-gray/20 text-cadet-gray hover:bg-gray-50 transition-colors flex items-center justify-center"
                                    onClick={() => setActiveTopic(null)}
                                    aria-label="Close modal"
                                >
                                    <span className="material-icons">close</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto">
                            <div>
                                <h4 className="text-sm uppercase tracking-wider font-bold text-cadet-gray/60 mb-3">Common concerns</h4>
                                <ul className="space-y-2 text-cadet-gray/85">
                                    {activeTopicData.concerns.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="material-icons text-primary text-[18px] mt-0.5">check_circle</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-5">
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-cadet-gray/60 mb-2">Our approach</h4>
                                    <p className="text-cadet-gray/80 leading-relaxed text-sm">{activeTopicData.approach}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-cadet-gray/60 mb-2">When to consult</h4>
                                    <p className="text-cadet-gray/80 leading-relaxed text-sm">{activeTopicData.whenToConsult}</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 md:px-8 pb-7 pt-4 border-t border-cadet-gray/10 flex flex-col sm:flex-row gap-3 justify-end shrink-0 bg-white">
                            <button
                                className="px-5 py-3 rounded-xl border-2 border-cadet-gray text-cadet-gray font-bold hover:bg-gray-50 transition-colors"
                                onClick={() => setActiveTopic(null)}
                            >
                                Close
                            </button>
                            <button className="px-5 py-3 rounded-xl bg-primary text-white font-bold border-2 border-cadet-gray shadow-[3px_3px_0px_#3a506b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#3a506b] transition-all">
                                Book Confidential Consult
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Parent & Child Confidential Consults */}
            <section className="py-14 px-6 md:px-12 lg:px-20 bg-white border-y-2 border-cadet-gray/10">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl bg-uranian-blue/20 border-2 border-cadet-gray p-8 md:p-12 shadow-[6px_6px_0px_rgba(58,80,107,0.18)]">
                        <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
                            <div className="max-w-3xl">
                                <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cadet-gray border border-cadet-gray/30 mb-4">
                                    New for Teens
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-cadet-gray font-serif mb-4">
                                    Parent & Child Confidential Consults
                                </h2>
                                <h3 className="text-lg font-bold text-cadet-gray mb-2">
                                    How do structured parent and child gynecology consults work?
                                </h3>
                                <p className="text-cadet-gray/80 text-lg leading-relaxed">
                                    For teens who feel awkward visiting a gynecologist alone, we offer structured parent-and-child consultations. The session begins together for reassurance and clarity, followed by protected one-on-one time between the teenager and Dr. Surbhi. This ensures private questions are answered safely while establishing clear health steps for both sides.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl border-2 border-cadet-gray p-6 w-full lg:w-[320px]">
                                <p className="text-sm uppercase tracking-wider font-bold text-cadet-gray/70 mb-2">Why this helps</p>
                                <ul className="space-y-2 text-sm text-cadet-gray/80 font-medium">
                                    <li>Private questions without fear</li>
                                    <li>Parent reassurance and clarity</li>
                                    <li>Clear next steps for both sides</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Adolescent Flex (Remaining Gen Z Slang Sections) */}
            <section className="py-20 px-6 md:px-12 lg:px-20 bg-corn-silk/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 relative">
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 rotate-1 text-primary/20 text-6xl font-bold opacity-10 select-none">LEVEL UP</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-cadet-gray font-serif relative z-10">The Adolescent Flex</h2>
                        <p className="text-xl text-primary font-hand mt-2 transform -rotate-1">Your health glow-up starts here ✨</p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Glow-Up Nutrition */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:rotate-1 transition-transform group">
                            <div className="w-12 h-12 bg-mint rounded-lg border-2 border-cadet-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-cadet-gray">restaurant</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Glow-Up Nutrition</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Fuel your body, don’t fight it. We prioritize protein over crash diets to support developing metabolisms.</p>
                        </li>

                        {/* Sleep Is the Real Flex */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:-rotate-1 transition-transform group">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg border-2 border-cadet-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-cadet-gray">bedtime</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Sleep Is the Real Flex</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Rest equals power. We guide teens on sleep hygiene to optimize brain development and reduce cortisol.</p>
                        </li>

                        {/* Screen Time Detox Era */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:rotate-1 transition-transform group">
                            <div className="w-12 h-12 bg-uranian-blue rounded-lg border-2 border-cadet-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-cadet-gray">phonelink_off</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Screen Time Detox </h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Step away from comparison culture. We help teenagers establish healthy digital boundaries for mental clarity.</p>
                        </li>

                        {/* Move Your Body */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:-rotate-1 transition-transform group">
                            <div className="w-12 h-12 bg-mint/50 rounded-lg border-2 border-cadet-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-cadet-gray">directions_run</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Move Your Body</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Fitness that isn’t punishment. Move because it feels good.</p>
                        </li>

                        {/* Growth Mode Activated */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:rotate-1 transition-transform group">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg border-2 border-cadet-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-cadet-gray">straighten</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Growth Mode</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Height, bones, strength — build the foundation now.</p>
                        </li>

                        {/* Shots & Shields */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:-rotate-1 transition-transform group">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg border-2 border-cadet-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-cadet-gray">shield</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Shots & Shields</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Be untouchable. We administer essential adolescent vaccines, including the highly effective HPV vaccine, to build a lifelong foundation of health protection.</p>
                        </li>

                        {/* Red Flag Symptoms */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:rotate-1 transition-transform group border-rose-200">
                            <div className="w-12 h-12 bg-rose-100 rounded-lg border-2 border-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-rose-600">flag</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Red Flag Stats</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">When to tell a adult — no ghosting your health.</p>
                        </li>

                        {/* Ask the Doc */}
                        <li className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-sticker hover:-rotate-1 transition-transform group border-primary/30">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg border-2 border-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-primary">local_hospital</span>
                            </div>
                            <h3 className="font-bold text-lg text-cadet-gray mb-2">Ask the Doc</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed italic">Stop Googling your symptoms. Get accurate, expert medical diagnoses from Bangalore's leading teen specialists.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Why mystree? */}
            <section className="py-16 bg-white relative">
                {/* Clip tape effect simulated via borders/shadows as clip-path is complex for React inline css without external class */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-uranian-blue/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cadet-gray rounded-2xl"></div>
                                <img
                                    alt="Two friends talking comfortably"
                                    className="w-full h-auto rounded-2xl border-2 border-cadet-gray relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDctlKe56NfafxJlTMh6lXhW8W1ozyc3X0I3-j0x4zuDw1KJEAV0d8ao0ffQfhLmavlWUihtf0ARowZG575RrKC07vszcmoNntVecPDY4OU8sMlvugRAf6bf92btBJ0rFjxBugh6iZIDb89ZIdA-k74M8gjbb1mo1YJBPsO7XgR109q7lmhGj_XIlv1DpkFOmsvR8Drmwuw_TPPv7VZGHyKTSiW9KKlZIMKwD56TRoq5uQPNtOufJsdIr46rK7r-4aC9SV6tIKYZ_Lc"
                                />
                                <div className="absolute -bottom-6 -right-6 z-20 bg-corn-silk p-4 border-2 border-cadet-gray rounded-xl shadow-sticker max-w-xs transform rotate-3">
                                    <p className="font-hand text-sm font-bold text-cadet-gray">"Finally, a clinic that doesn't feel scary! Dr. Surbhi made me feel totally heard."</p>
                                    <div className="flex text-primary text-sm mt-1 justify-end">
                                        <span className="material-icons text-xs">star</span><span className="material-icons text-xs">star</span><span className="material-icons text-xs">star</span><span className="material-icons text-xs">star</span><span className="material-icons text-xs">star</span>
                                    </div>
                                    <p className="text-xs text-right mt-1 text-gray-500 font-bold">- Riya, 19 (Indiranagar, Bangalore)</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold text-cadet-gray font-serif">
                                Why Choose <span className="bg-primary/20 px-2 italic">My Stree</span><br className="hidden lg:block" /> for Teen Health in Indiranagar?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-full bg-uranian-blue flex items-center justify-center border-2 border-cadet-gray flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="material-icons text-cadet-gray">visibility_off</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-cadet-gray font-serif mb-1 group-hover:text-primary transition-colors">100% Confidential</h3>
                                        <p className="text-cadet-gray/70">What happens in the room, stays in the room. No awkward letters home.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center border-2 border-cadet-gray flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="material-icons text-cadet-gray">favorite</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-cadet-gray font-serif mb-1 group-hover:text-primary transition-colors">Judgement-Free Zone</h3>
                                        <p className="text-cadet-gray/70">Ask us anything. Weird stuff, scary stuff, "is this normal" stuff.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center border-2 border-cadet-gray flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="material-icons text-cadet-gray">smartphone</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-cadet-gray font-serif mb-1 group-hover:text-primary transition-colors">Text or Talk</h3>
                                        <p className="text-cadet-gray/70">Book online, text our nurse, or come in person. Your choice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Your Allies */}
            <section className="py-24 bg-corn-silk/30 dark:bg-slate-900/50 relative overflow-hidden" id="experts">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Expert Allies</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                                Meet Your <span className="text-primary italic font-serif">Support Team</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light italic">
                                Specialised experts in Bangalore dedicated to your health, privacy, and peace of mind.
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
                        {filteredDoctors.map((doctor) => (
                            <DoctorCard
                                key={doctor.id}
                                profileId={doctor.profileId}
                                name={doctor.name}
                                specialty={doctor.specialty}
                                image={doctor.image}
                                qualification={doctor.qualification}
                                experience={doctor.experience}
                                languages={doctor.languages}
                                badgeText={doctor.badgeText}
                                badgeColorClass={doctor.badgeColorClass}
                                consultationFee={doctor.consultationFee}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white border-t-2 border-cadet-gray">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 rounded-full border border-cadet-gray text-xs font-bold uppercase tracking-widest text-cadet-gray mb-6 bg-yellow-100">
                        Real Talk
                    </span>
                    <h3 className="text-3xl font-bold text-cadet-gray font-serif mb-12">What Your Peers Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border-2 border-cadet-gray shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all text-left">
                                <div className="flex text-primary text-sm mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="material-icons">star</span>
                                    ))}
                                </div>
                                <p className="text-cadet-gray text-sm font-medium mb-4 leading-relaxed">"{review.content}"</p>
                                <p className="text-xs font-bold text-cadet-gray/60 uppercase tracking-wider">- {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vibe Check Section */}
            <section className="bg-primary text-white py-12 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-32 h-12 bg-white/20 rounded-full transform -rotate-2"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-16 bg-white/20 rounded-t-full"></div>

                <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
                    <span className="inline-block px-4 py-1 rounded-full border border-white/50 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
                        VIBE CHECK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        "Judgment-Free Zone. <br /> Your secrets are safe."
                    </h2>
                    <div className="mt-6">
                        <span className="material-icons text-4xl text-white/90">lock</span>
                    </div>
                </div>
            </section>

            {/* Sticky Bottom Bar */}

        </div>
    );
}
