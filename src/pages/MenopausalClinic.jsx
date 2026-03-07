import React, { useEffect, useState } from 'react';
import doctor1 from '../assets/supabase/doctor1.jpg';
import doctor2 from '../assets/supabase/doctor2.jpg';
import doctor3 from '../assets/supabase/doctor3.jpg';
import doctorPri from '../assets/supabase/drpriya.jpeg';
import heroNew from '../assets/supabase/menopausal_wellness_hero_new_1771300852077.png';
import DoctorCard from '../components/DoctorCard';

export default function MenopausalClinic() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const focusAreas = [
        {
            title: "Hormonal Evaluation",
            description: "Thyroid & estrogen tests, FSH, LH & progesterone levels, Menopause stage evaluation, Cycle irregularity assessment.",
            icon: "science"
        },
        {
            title: "Mood & Sleep Support",
            description: "Sleep disturbance management, Anxiety & mood support, Behavioral counselling, Stress management techniques.",
            icon: "bedtime"
        },
        {
            title: "Bone & Joint Health",
            description: "Bone density testing, Osteoporosis screening, Calcium & Vitamin D evaluation, Joint pain care.",
            icon: "fitness_center"
        },
        {
            title: "Personalised Wellness",
            description: "Weight management, Nutrition counselling, Exercise & lifestyle planning, Hormone replacement options.",
            icon: "spa"
        }
    ];

    const addressingItems = [
        "Hormonal Changes & Symptoms",
        "Mood & Emotional Wellness",
        "Bone & Muscle Health",
        "Weight, Metabolism & Energy Levels",
        "Hormone Replacement Therapy (HRT)"
    ];

    const services = ["All Services", "Menopause Management", "Gynecology", "Pelvic Health", "Nutrition & Lifestyle"];

    const doctors = [
        {
            profileId: "dr-smitha",
            name: "Dr. Smitha A.P.",
            specialty: "Senior Consultant - Menopause & Gynecology",
            qualification: "MBBS, MS, DNB (OBG), FFM, FRM, MBA",
            experience: "23+ Years Experience",
            languages: "English, Kannada, Tamil",
            image: doctor2,
            badgeText: "Menopause Specialist",
            consultationFee: "₹600",
            badgeColorClass: "bg-orange-500 text-white",
            services: ["Menopause Management", "Gynecology", "All Services"]
        },
        {
            profileId: "dr-surbhi",
            name: "Dr. Surbhi Sinha",
            specialty: "Consultant Obstetrician & Menopause Specialist",
            qualification: "MBBS, MS, DNB, MRCOG (UK), FRM",
            experience: "12+ Years Experience",
            languages: "English, Hindi, Kannada",
            image: doctor1,
            badgeText: "Hormonal Health Expert",
            consultationFee: "₹600",
            badgeColorClass: "bg-blue-600 text-white",
            services: ["Menopause Management", "Gynecology", "All Services"]
        },
        {
            profileId: "dr-jasmine",
            name: "Dr. Jasmine Priyadarshini",
            specialty: "Consultant Physiotherapist - Pelvic Floor & Vaginismus Care",
            qualification: "BPT, MPT (Women's Health)",
            experience: "21+ Years Experience",
            languages: "English, Hindi, Kannada",
            image: doctorPri,
            badgeText: "Pelvic Floor Rehabilitation",
            consultationFee: "₹600",
            badgeColorClass: "bg-teal-600 text-white",
            services: ["Pelvic Health", "All Services"]
        },
        {
            profileId: "priyanka-savina",
            name: "Priyanka Savina",
            specialty: "Nutrition Counselling & Menopause Diet Support",
            qualification: "M.Sc Nutrition & Dietetics",
            experience: "10+ Years Experience",
            languages: "English, Hindi, Kannada",
            image: doctor3,
            badgeText: "Nutrition Counselling",
            consultationFee: "₹600",
            badgeColorClass: "bg-amber-50 text-amber-700",
            services: ["Nutrition & Lifestyle", "All Services"]
        }
    ];

    const [selectedService, setSelectedService] = useState("All Services");

    const filteredDoctors = doctors.filter(doc =>
        doc.services.includes(selectedService)
    );

    const reviews = [
        {
            name: "Sujatha K.",
            location: "Bangalore",
            content: "I was struggling with severe hot flashes and mood swings. The personalized care I received here changed everything. I finally feel like myself again!"
        },
        {
            name: "Radhika M.",
            location: "Chennai",
            content: "The holistic approach is what I needed. Not just medication, but diet and lifestyle changes that actually work. Highly recommend the team."
        }
    ];

    return (
        <div className="font-display bg-white text-slate-800 antialiased selection:bg-primary/30 selection:text-primary ">

            {/* Hero Section */}
            <header className="relative pt-12 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-[#FFF5F1] to-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                            <span className="material-icons text-sm">spa</span>
                            Menopause Wellness Clinic
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] font-serif text-balance">
                            Embrace the Change with <br className="hidden sm:block" />
                            <span className="text-primary italic">Confidence & Grace.</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                            Expert care for every stage of menopause. We address the physical, emotional, and hormonal changes to help you thrive.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary-dark transition-all flex items-center gap-2 group">
                                <span>Book Consultation</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative animate-in fade-in zoom-in duration-1000">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src={heroNew}
                                alt="Menopause Wellness"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </header>

            {/* Focus Areas */}
            <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Holistic Care</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Our Areas of Focus</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {focusAreas.map((area, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl hover:shadow-lg transition-all border border-slate-100 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-icons text-3xl">{area.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we address */}
            <section className="py-12 md:py-20 bg-[#FDF2F8]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Comprehensive Support</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-serif">What We Address</h2>
                            <ul className="space-y-4">
                                {addressingItems.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="bg-white p-1 rounded-full text-primary shadow-sm">
                                            <span className="material-icons text-sm">check</span>
                                        </div>
                                        <span className="text-slate-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-8 rounded-[3rem] shadow-xl relative z-10 border border-white/50">
                                <img
                                    src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?auto=format&fit=crop&q=80&w=2070"
                                    alt="Menopause support and wellness"
                                    className="w-full h-full object-cover rounded-[2rem]"
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="text-center md:text-left">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Expert Team</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif">Meet Our Specialists</h2>
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

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {filteredDoctors.map((doc, idx) => (
                            <DoctorCard key={idx} {...doc} profileId={doc.profileId} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-16 md:py-24 bg-[#EBF5FF]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Kind Words</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Success Stories</h2>
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => <span key={i} className="material-icons text-2xl">star</span>)}
                            </div>
                            <span className="font-bold text-gray-900 text-xl">4.9/5</span>
                            <span className="text-gray-400 font-medium">| Our Google Rating</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-white shadow-xl hover:shadow-2xl transition-all group relative">
                                <span className="material-icons text-7xl text-primary/5 absolute top-10 right-10 pointer-events-none">format_quote</span>
                                <div className="relative z-10">
                                    <p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{review.content}"</p>
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-[1.25rem] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                                            <p className="text-xs text-primary font-bold uppercase tracking-wider">{review.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Join Our Menopause Community</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Connect with women who understand your journey. Share experiences, get expert advice, and find support in a safe, non-judgmental space.
                    </p>
                    <a
                        href="#community-menopause"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1"
                    >
                        <span>Join the Circle</span>
                        <span className="material-icons">groups</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
