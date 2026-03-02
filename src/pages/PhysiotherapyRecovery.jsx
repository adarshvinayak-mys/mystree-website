import React, { useEffect } from 'react';
import doctorJasmine from '../assets/drpriya.jpeg'; // Using existing asset for Dr. Jasmine Priyadarshini as used in other files

const treatmentAreas = [
    {
        title: "Pregnancy Mobility Care",
        points: ["Prenatal posture support", "Trimester-safe movement", "Back load management"],
        icon: "pregnant_woman",
        tag: "pregnancy"
    },
    {
        title: "Pelvic Floor Therapy",
        points: ["Core stability", "Incontinence care", "Pelvic pain relief"],
        icon: "spa",
        tag: "female"
    },
    {
        title: "Urodynamics & Bladder Rehab",
        points: ["Bladder training", "Urge control strategies", "Leakage prevention plans"],
        icon: "water_drop",
        tag: "monitor_heart"
    },
    {
        title: "Postnatal Recovery",
        points: ["Diastasis recti repair", "C-section scar mobility", "Pelvic reconnection"],
        icon: "baby_changing_station",
        tag: "pregnant_woman"
    }
];

export default function PhysiotherapyRecovery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-display bg-corn-silk text-cadet-gray antialiased selection:bg-primary/30 selection:text-primary relative pb-32 lg:pb-0">

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-8 pb-12 px-6 md:px-12 lg:px-20 bg-corn-silk">
                <div className="hidden sm:block absolute top-0 right-0 sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] bg-uranian-blue/30 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
                <div className="hidden sm:block absolute bottom-0 left-0 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="relative z-10 space-y-8 lg:col-span-6 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="inline-block transform -rotate-2 mb-2">
                            <div className="bg-uranian-blue text-cadet-gray px-4 py-1.5 rounded-full border-2 border-white shadow-sm font-bold text-sm tracking-wide flex items-center gap-2">
                                <span className="material-icons text-primary text-base">verified</span>
                                Pelvic Health Experts
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cadet-gray leading-[1.1] tracking-tight font-serif">
                            Move Freely. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF833C] to-[#ed592c] relative">
                                Live Pain-Free.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-uranian-blue z-[-1]" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00026 6.99997C38.5003 2.99999 154.5 -3.50002 198 6.99997" stroke="currentColor" strokeWidth="3"></path>
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-cadet-gray/80 max-w-lg leading-relaxed font-medium">
                            Restore Movement. Reduce Pain. Regain Strength. Expert physiotherapy tailored for women.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-gradient-to-r from-[#ed592c] to-[#FF833C] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group">
                                <span>Book Appointment</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                {[4, 5, 6].map(i => (
                                    <img key={i} alt="User" className="w-10 h-10 rounded-full border-2 border-corn-silk" src={`https://i.pravatar.cc/100?u=${i + 30}`} />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-corn-silk bg-uranian-blue flex items-center justify-center text-xs font-bold text-cadet-gray">+800</div>
                            </div>
                            <div className="text-sm font-medium text-cadet-gray/70">
                                <span className="block text-primary font-bold text-base">Pain-Free Lives</span>
                                Recovering every day
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:col-span-6 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
                        <div className="relative z-10 w-full max-w-md">
                            <div className="absolute inset-0 bg-uranian-blue rounded-[3rem] transform rotate-3 translate-x-4 translate-y-4 -z-10 opacity-60"></div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[420px] sm:h-[550px] w-full bg-[#F2E8C4] relative">
                                <img
                                    alt="Woman performing guided movement therapy"
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2069"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3a506b]/40 to-transparent"></div>
                            </div>
                            <div className="hidden md:block absolute bottom-10 -left-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]">
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                        <span className="material-icons text-xl">self_improvement</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-cadet-gray uppercase tracking-wide">Expert Care</p>
                                        <p className="text-xs text-cadet-gray/70 mt-1">Specialized support for recovery & strength.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Specialized Treatments */}
            <section className="py-12 px-6 md:px-12 lg:px-20 relative bg-corn-silk">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block">Specialized Treatments</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif mb-6">What Hurts? How Can We Help?</h2>
                        <p className="text-cadet-gray/70 max-w-2xl mx-auto text-lg">We don't just treat symptoms. We find the root cause and help you build a resilient body.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {treatmentAreas.map((area, idx) => (
                            <div key={idx} className={`glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 ${idx % 2 !== 0 ? 'md:translate-y-12' : ''}`}>
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-icons text-8xl text-cadet-gray">{area.tag}</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <span className="material-icons text-3xl">{area.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-cadet-gray mb-3 font-serif">{area.title}</h3>
                                    <div className="text-cadet-gray/80 mb-6 space-y-1">
                                        {area.points.map((p, i) => (
                                            <span key={i} className="block text-sm font-semibold opacity-90">• {p}</span>
                                        ))}
                                    </div>
                                    <button className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform">
                                        Consult <span className="material-icons ml-1 text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-12 md:h-24"></div>
                </div>
            </section>

            {/* The Difference Section */}
            <section className="py-12 bg-corn-silk relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group animate-in fade-in slide-in-from-left duration-1000">
                            <div className="absolute -inset-4 bg-uranian-blue/40 rounded-[2rem] transform -rotate-2 scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-4 border-white">
                                <img
                                    alt="Supportive therapist session"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                                />
                            </div>
                        </div>
                        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
                            <div>
                                <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block">Why Choose My Stree?</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif mb-6">The Women-First Difference</h2>
                            </div>
                            <p className="text-cadet-gray/80 text-lg leading-relaxed">
                                Women’s bodies go through unique changes—from pregnancy to menopause. Generic physiotherapy often overlooks hormonal impacts on connective tissues and recovery rates.
                            </p>
                            <p className="text-cadet-gray/80 text-lg leading-relaxed">
                                At <span className="font-serif font-bold text-cadet-gray">My Stree</span>, we specialize in female biomechanics. Whether you're recovering from childbirth, managing pelvic pain, or dealing with age-related joint issues, our approach is empathetic, specialized, and holistic.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Hormonal-Health Aware Therapy",
                                    "Private & Comfortable Environment",
                                    "Postpartum-Specialized Rehabilitation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="bg-primary/10 p-1.5 rounded-full text-primary">
                                            <span className="material-icons text-sm">check</span>
                                        </span>
                                        <span className="text-cadet-gray font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <button className="border-2 border-cadet-gray text-cadet-gray px-8 py-3 rounded-full font-bold hover:bg-cadet-gray hover:text-white transition-all">
                                    Meet Our Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talk to us about tags */}
            <section className="py-16 bg-uranian-blue/20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold text-cadet-gray font-serif mb-8">Talk to us about</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Pregnancy Mobility", "Postnatal Recovery", "Pelvic Floor", "Urodynamics",
                            "Bladder Rehab", "Incontinence Care", "Core Rebuilding"
                        ].map((tag, i) => (
                            <button key={i} className="px-6 py-2 bg-white rounded-full text-cadet-gray border border-transparent hover:border-primary hover:text-primary transition-all shadow-sm text-sm font-semibold">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-24 bg-white px-6 md:px-12 lg:px-20 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block">Success Stories</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif">Stories of Strength & Healing</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                text: "After my C-section, I felt so disconnected from my core. Dr. Jasmine's guidance and specific exercises helped me regain my strength and posture within weeks. I feel like myself again!",
                                author: "Anjali S.",
                                condition: "Postnatal Recovery",
                                initial: "A"
                            },
                            {
                                text: "I was hesitant about pelvic floor therapy, but Dr. Jasmine made me feel so at ease. The improvement in my core strength and bladder control has been life-changing.",
                                author: "Ridhi G.",
                                condition: "Pelvic Health",
                                initial: "R"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-corn-silk p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-primary/5 relative group">
                                <span className="material-icons text-primary/10 text-6xl absolute top-6 right-8 group-hover:text-primary/20 transition-colors">format_quote</span>
                                <div className="inline-block px-3 py-1 bg-white rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-6 border border-primary/10">{t.condition}</div>
                                <p className="text-cadet-gray/80 italic relative z-10 mb-8 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-sm">
                                        {t.initial}
                                    </div>
                                    <span className="font-bold text-cadet-gray text-sm">{t.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialist Profile Section */}
            <section className="py-12 bg-corn-silk px-6 md:px-12 lg:px-20" id="dr-jasmine">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm relative overflow-hidden border border-gray-100">
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-uranian-blue/30 rounded-full blur-3xl"></div>
                        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                            <div className="w-full md:w-1/3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                                    <img
                                        alt="Dr. Jasmine Priyadarshini"
                                        className="w-full h-auto rounded-2xl relative shadow-md object-cover aspect-[4/5]"
                                        src={doctorJasmine}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 space-y-6">
                                <div className="inline-block bg-uranian-blue/30 text-cadet-gray px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4">Women's Health Specialist</div>
                                <h2 className="text-4xl font-bold text-cadet-gray font-serif mb-2">Dr. Jasmine Priyadarshini</h2>
                                <p className="text-primary font-semibold text-lg mb-6">Physiotherapist & Lactation Counsellor</p>
                                <p className="text-cadet-gray/80 mb-8 leading-relaxed text-lg italic">
                                    "Dedicated to holistic women's health. My goal is to ensure mothers recover strength and confidence through specialized rehab."
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                    <div>
                                        <p className="text-3xl font-bold text-cadet-gray font-serif">21+</p>
                                        <p className="text-xs text-cadet-gray/60 uppercase font-bold tracking-widest">Years Experience</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-cadet-gray font-serif">9</p>
                                        <p className="text-xs text-cadet-gray/60 uppercase font-bold tracking-widest">Years Specialist</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-primary font-serif">₹900</p>
                                        <p className="text-xs text-cadet-gray/60 uppercase font-bold tracking-widest">Consultation Fee</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="bg-cadet-gray text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2">
                                        Book Appointment
                                        <span className="material-icons">calendar_today</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
