import React, { useState, useEffect } from 'react';
import doctor1 from '../assets/supabase/doctor1.jpg';
import doctor2 from '../assets/supabase/doctor2.jpg';
import doctor3 from '../assets/supabase/doctor3.jpg';
import DoctorCard from '../components/DoctorCard';

const reviews = [
    {
        name: "Charles Samuel",
        content: "Dr. Smitha was an anchor of trust, guidance, and compassion. Her expertise and professionalism are truly unmatched.",
        location: "Bangalore",
        rating: 5
    },
    {
        name: "K L SUDHA",
        content: "High risk IVF pregnancy handled very calmly. She solved last minute issues in delivery very cleverly. My family completely trusted her.",
        location: "Bangalore",
        rating: 5
    },
    {
        name: "J.N. Surekha",
        content: "She really took care of me during pregnancy + Delivery even post delivery. Always available for help on one call.",
        location: "Bangalore",
        rating: 5
    }
];

export default function PrenatalClinic() {
    const [scrolled, setScrolled] = useState(false);
    const [animationPhase, setAnimationPhase] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);

        // Animation cycle
        const interval = setInterval(() => {
            setAnimationPhase(prev => (prev + 1) % 4);
        }, 2000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const services = ["All Services", "High-Risk Pregnancy", "Fetal Medicine", "Fertility", "Lactation", "Nutrition", "Prenatal Care", "Gynecology"];

    const doctors = [
        {
            id: 1,
            profileId: "dr-smitha",
            name: "Dr. Smitha A.P.",
            specialty: "Founder & High Risk Obstetrician",
            image: doctor2,
            qualification: "MBBS, MS, DNB (OBG), FFM, FRM, MBA",
            experience: "23+ Years Experience",
            languages: "English, Kannada, Tamil",
            badgeText: "₹600 Consultation",
            badgeColorClass: "bg-deep-green text-white",
            services: ["High-Risk Pregnancy", "Fetal Medicine", "Prenatal Care", "Gynecology", "All Services"]
        },
        {
            id: 2,
            profileId: "dr-surbhi",
            name: "Dr. Surbhi Sinha",
            specialty: "Co-Founder & Fertility Specialist",
            image: doctor1,
            qualification: "MBBS, MS, DNB, MRCOG (UK), FRM",
            experience: "12+ Years Experience",
            languages: "English, Hindi, Kannada",
            badgeText: "₹600 Consultation",
            badgeColorClass: "bg-deep-green text-white",
            services: ["High-Risk Pregnancy", "Fertility", "Prenatal Care", "All Services"]
        },
        {
            id: 3,
            profileId: "priyanka-savina",
            name: "Priyanka Savina",
            specialty: "Lactation & Nutrition Consultant",
            image: doctor3,
            qualification: "M.Sc Nutrition & Dietetics, M.Sc Psychological Counseling",
            experience: "10+ Years Experience",
            languages: "English, Hindi, Kannada",
            badgeText: "₹600 Consultation",
            badgeColorClass: "bg-deep-green text-white",
            services: ["Lactation", "Nutrition", "All Services"]
        }
    ];

    const [selectedService, setSelectedService] = useState("All Services");

    const filteredDoctors = doctors.filter(doctor =>
        doctor.services.includes(selectedService)
    );

    return (
        <div className="font-display bg-corn-silk text-cadet-gray overflow-x-hidden min-h-screen selection:bg-primary/30 selection:text-primary ">
            <style>{`
                .font-serif-display {
                    font-family: 'Playfair Display', 'Cormorant Garamond', serif;
                }
                
                /* Mother & Womb Container */
                .mother-container {
                    position: relative;
                    width: 400px;
                    height: 520px;
                    margin: 0 auto;
                }
                
                @media (max-width: 640px) {
                    .mother-container {
                        width: 280px;
                        height: 360px;
                    }
                }
                
                /* Mother Silhouette */
                .mother-figure {
                    position: absolute;
                    inset: 0;
                    z-index: 10;
                }
                
                .mother-body {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70%;
                    height: 85%;
                    background: linear-gradient(180deg, 
                        rgba(251, 146, 60, 0.1) 0%, 
                        rgba(249, 115, 22, 0.15) 50%,
                        rgba(234, 88, 12, 0.2) 100%
                    );
                    border-radius: 45% 45% 40% 40% / 60% 60% 40% 40%;
                    overflow: hidden;
                }
                
                /* Head */
                .mother-head {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 28%;
                    height: 22%;
                    background: linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%);
                    border-radius: 50%;
                    box-shadow: 
                        0 4px 15px rgba(251, 146, 60, 0.2),
                        inset 0 -5px 10px rgba(234, 88, 12, 0.1);
                }
                
                /* Hair */
                .mother-hair {
                    position: absolute;
                    top: -5%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120%;
                    height: 60%;
                    background: linear-gradient(180deg, #92400E 0%, #B45309 100%);
                    border-radius: 50% 50% 30% 30%;
                    z-index: -1;
                }
                
                /* Neck */
                .mother-neck {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 12%;
                    height: 8%;
                    background: linear-gradient(180deg, #FDBA74 0%, #FB923C 100%);
                }
                
                /* Shoulders/Arms */
                .mother-shoulders {
                    position: absolute;
                    top: 26%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 85%;
                    height: 20%;
                    background: linear-gradient(180deg, 
                        rgba(251, 146, 60, 0.15) 0%, 
                        transparent 100%
                    );
                    border-radius: 40% 40% 0 0;
                }
                
                /* The Womb - Center of Attention */
                .womb-sanctuary {
                    position: absolute;
                    top: 38%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 45%;
                    height: 35%;
                    z-index: 5;
                }
                
                /* Outer Glow */
                .womb-aura {
                    position: absolute;
                    inset: -20%;
                    background: radial-gradient(circle, 
                        rgba(251, 146, 60, 0.3) 0%, 
                        rgba(249, 115, 22, 0.15) 40%,
                        transparent 70%
                    );
                    border-radius: 50%;
                    animation: aura-breathe 4s ease-in-out infinite;
                }
                
                @keyframes aura-breathe {
                    0%, 100% { 
                        transform: scale(1); 
                        opacity: 0.6; 
                    }
                    50% { 
                        transform: scale(1.15); 
                        opacity: 1; 
                    }
                }
                
                /* Womb Shape */
                .womb-shape {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, 
                        rgba(255, 237, 213, 0.9) 0%, 
                        rgba(254, 215, 170, 0.95) 50%,
                        rgba(253, 186, 116, 0.9) 100%
                    );
                    border-radius: 50% 50% 45% 45% / 55% 55% 45% 45%;
                    box-shadow: 
                        inset 0 -10px 30px rgba(234, 88, 12, 0.15),
                        inset 0 10px 30px rgba(255, 255, 255, 0.5),
                        0 10px 40px rgba(251, 146, 60, 0.3);
                    animation: womb-pulse 3s ease-in-out infinite;
                    overflow: hidden;
                }
                
                @keyframes womb-pulse {
                    0%, 100% { 
                        transform: scale(1); 
                        box-shadow: 
                            inset 0 -10px 30px rgba(234, 88, 12, 0.15),
                            0 10px 40px rgba(251, 146, 60, 0.3);
                    }
                    50% { 
                        transform: scale(1.03); 
                        box-shadow: 
                            inset 0 -15px 35px rgba(234, 88, 12, 0.2),
                            0 15px 50px rgba(251, 146, 60, 0.4);
                    }
                }
                
                /* Baby Silhouette Inside */
                .baby-silhouette {
                    position: absolute;
                    top: 55%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60%;
                    height: 70%;
                    opacity: 0.4;
                    animation: baby-float 5s ease-in-out infinite;
                }
                
                .baby-head {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 45%;
                    height: 35%;
                    background: linear-gradient(135deg, #FB923C 0%, #EA580C 100%);
                    border-radius: 50%;
                }
                
                .baby-body {
                    position: absolute;
                    top: 30%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 55%;
                    height: 55%;
                    background: linear-gradient(180deg, #FB923C 0%, #EA580C 100%);
                    border-radius: 45% 45% 50% 50%;
                }
                
                @keyframes baby-float {
                    0%, 100% { transform: translate(-50%, -50%) rotate(-2deg); }
                    50% { transform: translate(-50%, -52%) rotate(2deg); }
                }
                
                /* Heartbeat Line */
                .heartbeat-container {
                    position: absolute;
                    bottom: 15%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    height: 40px;
                    z-index: 20;
                }
                
                .heartbeat-line {
                    width: 100%;
                    height: 100%;
                    stroke: #EA580C;
                    stroke-width: 2.5;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    filter: drop-shadow(0 0 8px rgba(234, 88, 12, 0.5));
                    animation: heartbeat-draw 2s ease-in-out infinite;
                }
                
                @keyframes heartbeat-draw {
                    0% { stroke-dasharray: 0 300; opacity: 0; }
                    10% { opacity: 1; }
                    50% { stroke-dasharray: 150 150; }
                    100% { stroke-dasharray: 300 0; opacity: 0.8; }
                }
                
                /* Gentle Hands on Belly */
                .mother-hands {
                    position: absolute;
                    top: 42%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70%;
                    height: 30%;
                    z-index: 15;
                    pointer-events: none;
                }
                
                .hand-left, .hand-right {
                    position: absolute;
                    width: 35%;
                    height: 60%;
                    background: linear-gradient(135deg, 
                        rgba(253, 186, 116, 0.6) 0%, 
                        rgba(251, 146, 60, 0.4) 100%
                    );
                    border-radius: 50% 50% 40% 40%;
                    animation: hand-gentle 4s ease-in-out infinite;
                }
                
                .hand-left {
                    left: 5%;
                    transform: rotate(-20deg);
                    animation-delay: 0s;
                }
                
                .hand-right {
                    right: 5%;
                    transform: rotate(20deg);
                    animation-delay: 0.5s;
                }
                
                @keyframes hand-gentle {
                    0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
                    50% { transform: translateY(-5px) rotate(var(--rotation, 0deg)); }
                }
                
                /* Floating Particles - Life Energy */
                .life-particles {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 30;
                }
                
                .particle {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: radial-gradient(circle, #FDBA74 0%, transparent 70%);
                    border-radius: 50%;
                    animation: particle-float 6s ease-in-out infinite;
                }
                
                .particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
                .particle:nth-child(2) { top: 30%; right: 15%; animation-delay: 1s; }
                .particle:nth-child(3) { top: 60%; left: 10%; animation-delay: 2s; }
                .particle:nth-child(4) { top: 70%; right: 20%; animation-delay: 3s; }
                .particle:nth-child(5) { top: 40%; left: 80%; animation-delay: 1.5s; }
                
                @keyframes particle-float {
                    0%, 100% { 
                        transform: translateY(0) scale(1); 
                        opacity: 0.4; 
                    }
                    50% { 
                        transform: translateY(-20px) scale(1.2); 
                        opacity: 0.8; 
                    }
                }
                
                /* Glass Effects */
                .glass-card {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    box-shadow: 0 8px 32px rgba(251, 146, 60, 0.1);
                }
                
                /* Gradient Text */
                .text-gradient-warm {
                    background: linear-gradient(135deg, #EA580C 0%, #D97706 50%, #B45309 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                /* Animations */
                .animate-float {
                    animation: gentle-float 6s ease-in-out infinite;
                }
                
                @keyframes gentle-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                    opacity: 0;
                }
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                
                /* Timeline */
                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(to bottom, #F97316, #FB923C, #FDBA74);
                    transform: translateX(-50%);
                }
                
                @media (max-width: 768px) {
                    .timeline-line { left: 24px; }
                }
            `}</style>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-secondary to-primary border-l-4 border-white px-4 py-3 shadow-md relative z-20">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm flex-wrap text-white">
                    <span className="material-icons-round text-white text-base animate-pulse">emergency</span>
                    <span className="font-bold tracking-wide">High-risk pregnancy? 24/7 emergency line:</span>
                    <a href="tel:+916366573772" className="font-bold underline hover:text-corn-silk transition-colors">+91 63665 73772</a>
                </div>
            </div>

            {/* Hero Section with Animated Mother & Womb */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-8 pb-8 bg-gradient-to-br from-white via-corn-silk/40 to-transparent">
                {/* Background */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Left Content */}
                        <div className="space-y-6 order-2 lg:order-1">
                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-3 fade-in-up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                                    <span className="material-icons-round text-orange-500 text-base">verified</span>
                                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Best Prenatal Care Indiranagar</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                                    <span className="material-icons-round text-green-600 text-base">schedule</span>
                                    <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Same-Day Appointments</span>
                                </div>
                            </div>

                            {/* Headline */}
                            <div className="space-y-3 fade-in-up delay-100">
                                <p className="text-orange-600 font-semibold text-sm tracking-widest uppercase">Where Life Begins</p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 font-serif-display">
                                    Nurturing Your <br />
                                    <span className="font-serif italic text-gradient-warm">Miracle</span> Within
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md fade-in-up delay-200 text-pretty">
                                Experience the warmth of expert care as you journey through motherhood.
                                From the first heartbeat to the first breath, we're here in Indiranagar —
                                <strong className="text-gray-800"> every step of the way</strong>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2 fade-in-up delay-300">
                                <a href="#book" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5">
                                    <span>Begin Your Journey</span>
                                    <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                                <a href="tel:+916366573772" className="flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-full font-semibold border-2 border-orange-100 transition-all hover:border-orange-300 hover:bg-orange-50">
                                    <span className="material-icons-round text-green-600">call</span>
                                    <span>Speak to Us</span>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-8 pt-4 text-sm text-gray-600 fade-in-up delay-300">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-round text-orange-400">star</span>
                                    <span className="font-medium">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-round text-orange-400">favorite</span>
                                    <span className="font-medium">5,000+ Babies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-round text-orange-400">schedule</span>
                                    <span className="font-medium">15+ Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Animated Mother & Womb */}
                        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="mother-container animate-float">

                                {/* Life Energy Particles */}
                                <div className="life-particles">
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                </div>

                                {/* Mother Figure */}
                                <div className="mother-figure">
                                    {/* Head */}
                                    <div className="mother-head">
                                        <div className="mother-hair"></div>
                                        {/* Face features - subtle */}
                                        <div className="absolute top-[35%] left-[30%] w-[8%] h-[8%] bg-amber-800/20 rounded-full"></div>
                                        <div className="absolute top-[35%] right-[30%] w-[8%] h-[8%] bg-amber-800/20 rounded-full"></div>
                                        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[20%] h-[3%] bg-amber-800/20 rounded-full"></div>
                                    </div>

                                    {/* Neck */}
                                    <div className="mother-neck"></div>

                                    {/* Shoulders */}
                                    <div className="mother-shoulders"></div>

                                    {/* Body */}
                                    <div className="mother-body"></div>
                                </div>

                                {/* The Womb - Center of Life */}
                                <div className="womb-sanctuary">
                                    {/* Glowing Aura */}
                                    <div className="womb-aura"></div>

                                    {/* Womb Shape */}
                                    <div className="womb-shape">
                                        {/* Inner glow */}
                                        <div className="absolute inset-4 bg-gradient-to-br from-amber-100/50 to-orange-200/30 rounded-full"></div>

                                        {/* Baby Silhouette */}
                                        <div className="baby-silhouette">
                                            <div className="baby-head"></div>
                                            <div className="baby-body"></div>
                                        </div>

                                        {/* Heartbeat Visualization */}
                                        <div className="heartbeat-container">
                                            <svg viewBox="0 0 200 40" className="w-full h-full">
                                                <path
                                                    className="heartbeat-line"
                                                    d="M0,20 L40,20 L50,5 L60,35 L70,10 L80,30 L90,20 L130,20 L140,5 L150,35 L160,10 L170,30 L180,20 L200,20"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Mother's Hands on Belly */}
                                <div className="mother-hands">
                                    <div className="hand-left" style={{ '--rotation': '-20deg' }}></div>
                                    <div className="hand-right" style={{ '--rotation': '20deg' }}></div>
                                </div>



                                {/* Experience Badge */}
                                <div className="absolute top-8 -right-6 glass-card px-5 py-4 rounded-2xl shadow-xl">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-orange-600 font-serif">15+</p>
                                        <p className="text-xs text-gray-600 font-medium mt-1">Years of<br />Excellence</p>
                                    </div>
                                </div>

                                {/* Trimester Indicator */}
                                <div className="absolute bottom-20 -right-4 glass-card px-4 py-3 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
                                        <span className="text-xs font-semibold text-gray-700">All Trimesters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="py-8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { icon: 'medical_services', title: 'Early Care', desc: 'First trimester screening', color: 'primary' },
                            { icon: 'monitor_heart', title: 'Fetal Monitoring', desc: 'Growth & development', color: 'secondary' },
                            { icon: 'shield', title: 'High-Risk Care', desc: 'Specialized attention', color: 'primary' },
                            { icon: 'spa', title: 'Holistic Wellness', desc: 'Yoga & nutrition', color: 'secondary' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-soft border border-primary/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                                    <span className={`material-icons-round text-primary text-2xl group-hover:text-white`}>{item.icon}</span>
                                </div>
                                <h3 className="font-bold text-cadet-gray mb-1 font-serif">{item.title}</h3>
                                <p className="text-cadet-gray/70 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline Section */}
            <section className="relative py-6 md:py-8 overflow-hidden" id="journey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-8 relative z-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Your 9 Month Path</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">The Mother's Journey</h2>
                    </div>
                    <div className="relative">
                        <div className="timeline-line"></div>

                        {/* Step 0 - Preconceptional Care */}
                        <div className="relative mb-8 md:mb-12 md:grid md:grid-cols-2 md:gap-8 items-center group card-entrance" style={{ animationDelay: '0s' }}>
                            <div className="pl-12 md:pl-0 md:order-1 hidden md:block">
                                <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-primary/5 transform transition-transform hover:-translate-y-2 hover:shadow-lg relative overflow-hidden group-hover:scale-[1.02] duration-300">
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <span className="material-icons-round text-8xl text-primary">favorite</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-start gap-4">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-sm">
                                            <span className="material-icons-round text-3xl text-primary">hourglass_empty</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-cadet-gray mb-1 font-serif">Pre-Pregnancy Focus</h4>
                                            <p className="text-cadet-gray/80 leading-snug">Genetic counseling, lifestyle optimization, and folic acid therapy.</p>
                                        </div>
                                        <button className="mt-2 text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            Start Early <span className="material-icons-round text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-corn-silk z-10"></div>
                            <div className="md:order-2 pl-12 md:pl-12">
                                <div className="md:hidden mb-8 pl-0">
                                    <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-primary/5 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="material-icons-round text-8xl text-primary">favorite</span></div>
                                        <div className="relative z-10 flex flex-col items-start gap-4">
                                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-sm"><span className="material-icons-round text-3xl text-primary">hourglass_empty</span></div>
                                            <div><h4 className="text-xl font-bold text-cadet-gray mb-1 font-serif">Pre-Pregnancy Focus</h4><p className="text-cadet-gray/80 leading-snug">Genetic counseling, lifestyle optimization.</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4">Weeks 0-12</div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Early Care / Preconceptional Counseling</h3>
                                <p className="text-gray-600 text-lg mb-4">
                                    Laying the strongest foundation before conception. We guide you through health optimizations to ensure your body is ready for a healthy pregnancy.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10">
                                    <span className="material-icons-round text-primary text-sm">medical_information</span>
                                    <span className="text-sm font-bold text-gray-700">Tag: Preconceptional Counseling Bangalore</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 1 - Early Pregnancy */}
                        <div className="relative mb-8 md:mb-12 md:grid md:grid-cols-2 md:gap-8 items-center group card-entrance" style={{ animationDelay: '0.1s' }}>
                            <div className="md:text-right pl-12 md:pl-0 pr-0 md:pr-12 mb-8 md:mb-0 relative">
                                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4">Weeks 1-12</div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">First Trimester Care</h3>
                                <p className="text-gray-600 text-lg mb-4">
                                    Establishing the baseline with early viability scans, nutritional planning to manage morning sickness, and initial genetic screening.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10">
                                    <span className="material-icons-round text-primary text-sm">verified</span>
                                    <span className="text-sm font-bold text-gray-700">Tag: Best Prenatal Clinic Indiranagar</span>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-corn-silk z-10"></div>
                            <div className="pl-12 md:pl-0">
                                <div className="bg-blue-50 p-8 rounded-[2rem] shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group-hover:scale-[1.02] duration-300">
                                    <div className="absolute top-0 right-0 p-6 opacity-20">
                                        <span className="material-icons-round text-8xl text-primary">child_care</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-start gap-4">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                            <span className="material-icons-round text-3xl text-primary">favorite</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-1">Early Assessment Focus</h4>
                                            <p className="text-gray-700 leading-snug">Confirming viability, dating scan, and personalized supplement kits.</p>
                                        </div>
                                        <button className="mt-2 text-orange-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            Consult <span className="material-icons-round text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative mb-8 md:mb-12 md:grid md:grid-cols-2 md:gap-8 items-center group card-entrance" style={{ animationDelay: '0.2s' }}>
                            <div className="pl-12 md:pl-0 md:order-1 hidden md:block">
                                <div className="bg-blue-50 p-8 rounded-[2rem] shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group-hover:scale-[1.02] duration-300">
                                    <div className="absolute top-0 right-0 p-6 opacity-20">
                                        <span className="material-icons-round text-8xl text-primary">self_improvement</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-start gap-4">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                            <span className="material-icons-round text-3xl text-primary">spa</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-1">Fetal Health Focus</h4>
                                            <p className="text-gray-700 leading-snug">Detailed anomaly scans, pelvic floor strengthening, and yoga.</p>
                                        </div>
                                        <button className="mt-2 text-orange-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            Join Yoga Class <span className="material-icons-round text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-corn-silk z-10"></div>
                            <div className="md:order-2 pl-12 md:pl-12">
                                <div className="md:hidden mb-8 pl-0">
                                    <div className="bg-blue-50 p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-20"><span className="material-icons-round text-8xl text-primary">self_improvement</span></div>
                                        <div className="relative z-10 flex flex-col items-start gap-4">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md"><span className="material-icons-round text-3xl text-primary">spa</span></div>
                                            <div><h4 className="text-xl font-bold text-gray-900 mb-1">Fetal Health Focus</h4><p className="text-gray-700 leading-snug">Detailed anomaly scans, pelvic floor strengthening.</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4">Weeks 13-27</div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Fetal Growth Monitoring</h3>
                                <p className="text-gray-600 text-lg mb-4">
                                    Rigorous tracking including <strong>Anomaly Scan</strong>, <strong>Fetal Cardiac Assessment</strong>, and precise <strong>Fetal Growth</strong> checks. Our specialists ensure every milestone is met.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10">
                                    <span className="material-icons-round text-primary text-sm">location_on</span>
                                    <span className="text-sm font-bold text-gray-700">Tag: Fetal Growth Monitoring Indiranagar</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center group card-entrance" style={{ animationDelay: '0.4s' }}>
                            <div className="md:text-right pl-12 md:pl-0 pr-0 md:pr-12 mb-8 md:mb-0 relative">
                                <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-bold mb-4 font-serif">Weeks 28-40</div>
                                <h3 className="text-3xl font-bold text-cadet-gray mb-3 group-hover:text-primary transition-colors font-serif">High-Risk Readiness</h3>
                                <p className="text-cadet-gray/80 text-lg mb-4">
                                    Finalizing delivery plans with a focus on safety. We specialize in managing complex conditions to ensure a safe birthing experience.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10">
                                    <span className="material-icons-round text-primary text-sm">local_hospital</span>
                                    <span className="text-sm font-bold text-cadet-gray">Tag: High-Risk Pregnancy Care Bangalore</span>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-corn-silk z-10"></div>
                            <div className="pl-12 md:pl-0">
                                <div className="bg-blue-50 p-8 rounded-[2rem] shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group-hover:scale-[1.02] duration-300">
                                    <div className="absolute top-0 right-0 p-6 opacity-20">
                                        <span className="material-icons-round text-8xl text-primary">bedroom_baby</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-start gap-4">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                            <span className="material-icons-round text-3xl text-primary">escalator_warning</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-1">High-Risk Care Focus</h4>
                                            <p className="text-gray-700 leading-snug">Growth scans, non-stress tests, and detailed labor preparation.</p>
                                        </div>
                                        <button className="mt-2 text-orange-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            Consult <span className="material-icons-round text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-6 md:py-8 bg-white/50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-bold text-gray-900 font-serif">Why Choose mystree?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-primary/10 hover:shadow-lg transition-all hover:border-primary/30">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <span className="material-icons-round text-3xl">volunteer_activism</span>
                            </div>
                            <h3 className="text-xl font-bold text-cadet-gray mb-3 font-serif">Compassionate Care</h3>
                            <p className="text-cadet-gray/80 leading-relaxed">
                                We believe in listening first. Your emotional well-being is as important as your physical health, creating a nurturing environment for you and your baby.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-primary/10 hover:shadow-lg transition-all hover:border-primary/30">
                            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                                <span className="material-icons-round text-3xl">analytics</span>
                            </div>
                            <h3 className="text-xl font-bold text-cadet-gray mb-3 font-serif">Evidence-based Monitoring</h3>
                            <p className="text-cadet-gray/80 leading-relaxed">
                                Utilizing the latest in medical technology for fetal growth monitoring and risk assessment, grounded in global best practices.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-primary/10 hover:shadow-lg transition-all hover:border-primary/30">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <span className="material-icons-round text-3xl">spa</span>
                            </div>
                            <h3 className="text-xl font-bold text-cadet-gray mb-3 font-serif">Holistic Guidance</h3>
                            <p className="text-cadet-gray/80 leading-relaxed">
                                Beyond clinical checks, we integrate nutrition, <strong>Lamaze</strong>, <strong>Birthing Classes</strong>, yoga, and mental wellness to ensure a completely balanced pregnancy journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Experts Section */}
            <section className="py-24 bg-corn-silk/50 dark:bg-slate-900/50 relative overflow-hidden" id="experts">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="max-w-2xl text-center md:text-left">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Specialized Care</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                                Meet Your <span className="text-primary italic">Care Team</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light italic">
                                Dedicated specialists blending clinical precision with deep empathy for your journey.
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
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white/50 border-t border-primary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 font-serif mb-8">Stories of Joy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-left hover:shadow-md transition-shadow">
                                <div className="flex text-orange-400 text-sm mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="material-icons">star</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">"{review.content}"</p>
                                <p className="text-xs font-bold text-primary">- {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Questions Section */}
            <section className="py-6 md:py-8 relative bg-white/30 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Local Insights</span>
                        <h2 className="text-4xl font-bold text-gray-900 font-serif">Moms in Indiranagar Ask Us</h2>
                        <p className="mt-4 text-gray-600">Specific answers for our Bangalore community.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden group">
                            <details className="group p-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                                    <span>How does Bangalore traffic affect emergency transport?</span>
                                    <span className="material-icons-round text-primary transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    We have partnered with a dedicated private ambulance service stationed at 100ft Road to bypass peak traffic bottlenecks. For residents within 3km of Indiranagar, our average response time is under 12 minutes, even during rush hour.
                                </div>
                            </details>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden group">
                            <details className="group p-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                                    <span>Which Indiranagar hospitals do you partner with?</span>
                                    <span className="material-icons-round text-primary transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    We have direct admitting privileges at Cloudnine Hospital (Old Airport Road) and Manipal Hospital. Our doctors will be with you during delivery at these facilities, ensuring seamless continuity of care from our clinic to the labor room.
                                </div>
                            </details>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden group">
                            <details className="group p-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                                    <span>Are prenatal yoga classes held at the clinic?</span>
                                    <span className="material-icons-round text-primary transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    Yes! Our "Tree of Life" yoga studio is located on the terrace floor, offering fresh air and views of Indiranagar's canopy. We offer morning and evening batches specifically designed for each trimester.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating CTA */}
            <div className="hidden md:block fixed bottom-24 right-6 z-50">
                <a href="https://my-stree.com/booking" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-[#d0461f] hover:scale-105 transition-all duration-300 group">
                    Book Appointment
                    <span className="material-icons text-base group-hover:rotate-12 transition-transform">calendar_month</span>
                </a>
            </div>

        </div>
    );
}
