import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import doctor1 from '../assets/supabase/doctor1.jpg';
import doctor2 from '../assets/supabase/doctor2.jpg';
import doctorNiv from '../assets/supabase/nivetha-vishnuvardhan-mbbs-md.jpg';

const doctors = [
    {
        id: 1,
        profileId: "dr-smitha",
        name: "Dr. Smitha A.P.",
        specialty: "Founder & High Risk Obstetrician",
        image: doctor2,
        qualification: "High Risk Obstetrician and Fertility Specialist MBBS, MS, DNB(OBG) FFM FRM MBA",
        experience: "23+ Years Clinical Experience",
        languages: "English, Kannada, Tamil",
        badgeText: "₹600 Consultation",
        badgeColorClass: "bg-white/90 text-gray-800",
        services: ["All Services", "High-Risk Pregnancy", "General Gynecology", "Infertility", "Menopause", "Adolescent Health"]
    },
    {
        id: 2,
        profileId: "dr-surbhi",
        name: "Dr. Surbhi Sinha",
        specialty: "Co-Founder & Fertility Specialist",
        image: doctor1,
        qualification: "MBBS, MD, Fellowship in Reproductive Med.",
        experience: "12+ Years Clinical Experience",
        languages: "English, Hindi",
        badgeText: "₹600 Consultation",
        badgeColorClass: "bg-white/90 text-gray-800",
        services: ["All Services", "PCOS / PCOD", "Fertility", "General Gynecology", "Adolescent Health"]
    }
];

const services = [
    "All Services",
    "High-Risk Pregnancy",
    "PCOS / PCOD",
    "Infertility",
    "General Gynecology",
    "Menopause"
];

const reviews = [
    {
        name: "Maleesha Gera",
        content: "Doc Surbhi was a godsend. She helped me from solving my UTIs to identifying HPVs... always ensured I was well informed and comfortable.",
        location: "Bangalore",
        rating: 5
    },
    {
        name: "Shweta S Nath",
        content: "Dr Smitha was the most non-judgemental, kind, professional and empathetic gynaecologist I have ever met. She listened to my concerns patiently.",
        location: "Bangalore",
        rating: 5
    },
    {
        name: "Pallavi",
        content: "Dr. Smitha is the most caring, sensible and calm doctor. She dove into the root cause and provided the best care possible during a tough situation.",
        location: "Bangalore",
        rating: 5
    }
];

export default function OBGYNConsults() {
    const [selectedService, setSelectedService] = useState("All Services");

    const filteredDoctors = doctors.filter(doctor =>
        doctor.services.includes(selectedService)
    );

    return (
        <div className="font-display bg-corn-silk text-cadet-gray antialiased selection:bg-primary/30 selection:text-primary relative ">
            {/* Immediate Booking Button (Fixed) */}


            {/* Hero Section */}
            <header className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-corn-silk/30 to-transparent">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="relative z-10 space-y-6 lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-cadet-gray/10 w-fit shadow-sm">
                            <span className="material-icons text-primary text-sm">verified</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cadet-gray">NABH Accredited Facility</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cadet-gray leading-[1.1] tracking-tight font-serif text-balance">
                            Bangalore’s Leading <br className="hidden sm:block" />
                            <span className="text-primary-light bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">OBGYN Care</span> in Indiranagar
                        </h1>
                        <p className="text-lg text-cadet-gray/80 max-w-lg leading-relaxed font-medium">
                            Excellence in women’s healthcare. From <strong className="text-cadet-gray">High-Risk Pregnancy</strong> management to <strong className="text-cadet-gray">PCOS treatment</strong>, our senior specialists provide world-class medical care with empathy.
                        </p>

                        <div className="pt-4 text-xs text-cadet-gray/50 flex flex-wrap gap-2">
                            <span>Best Gynaecologist in Indiranagar</span> • <span>PCOS Specialist Bangalore</span> • <span>Fertility Clinic Bangalore</span>
                        </div>
                    </div>
                    <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[400px] sm:h-[500px] w-full max-w-md bg-white">
                            <img className="w-full h-full object-cover object-top" alt="Senior medical specialist" src={doctor1} loading="eager" decoding="async" fetchPriority="high" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-primary">
                                <p className="text-sm font-medium text-cadet-gray italic">
                                    "Empowering women through every stage of life, with care and compassion."
                                </p>
                                <div className="text-right mt-2">
                                    <span className="text-xs font-bold text-primary block">Dr. Surbhi Sinha</span>
                                    <span className="text-[10px] text-cadet-gray uppercase tracking-wider">Senior Consultant</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-uranian-blue rounded-full opacity-50 blur-3xl"></div>
                        <div className="absolute -z-10 bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <div className="bg-cadet-gray text-white py-6 px-6 relative z-20 shadow-lg">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12">
                    <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                        <span className="material-icons text-primary-light text-3xl">school</span>
                        <div>
                            <p className="font-bold text-lg leading-none">Ex-AIIMS</p>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Specialists</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-white/20"></div>
                    <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                        <span className="material-icons text-primary-light text-3xl">verified_user</span>
                        <div>
                            <p className="font-bold text-lg leading-none">NABH Accredited</p>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">World-Class Facility</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-white/20"></div>
                    <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                        <span className="material-icons text-primary-light text-3xl">medical_services</span>
                        <div>
                            <p className="font-bold text-lg leading-none">20+ Years</p>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Clinical Expertise</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-white/20"></div>
                    <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                        <div className="flex -space-x-2">
                            <img className="w-8 h-8 rounded-full border border-cadet-gray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlvCb3FcN7H2hlAbGv4gTvziBYIKrKmqJWDW0Bgn7DfkVeh2MAuvPpdzk4ymfH6lHx1WPI6glZvAvoEyaRka6u0H_dsfhx21eWBGcH5ximK0JHEHgrkx4fK2LaYZYE08NoyASF9PbDydKTPC2iLlYIZ9nNpQvg-gtxKNhZuPeKQ9uaH-0JYF1wEwmDScXg5cxX14XomTA4B-HYmlQQvyZJenOEYkpCvxQBP_wKR541m7u9wJCDlA9xmnk2IluULNdWKkEkWfVpnAo" alt="Patient" loading="lazy" decoding="async" />
                            <img className="w-8 h-8 rounded-full border border-cadet-gray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDctlKe56NfafxJlTMh6lXhW8W1ozyc3X0I3-j0x4zuDw1KJEAV0d8ao0ffQfhLmavlWUihtf0ARowZG575RrKC07vszcmoNntVecPDY4OU8sMlvugRAf6bf92btBJ0rFjxBugh6iZIDb89ZIdA-k74M8gjbb1mo1YJBPsO7XgR109q7lmhGj_XIlv1DpkFOmsvR8Drmwuw_TPPv7VZGHyKTSiW9KKlZIMKwD56TRoq5uQPNtOufJsdIr46rK7r-4aC9SV6tIKYZ_Lc" alt="Patient" loading="lazy" decoding="async" />
                            <div className="w-8 h-8 rounded-full border border-cadet-gray bg-white text-cadet-gray flex items-center justify-center text-[10px] font-bold">+2k</div>
                        </div>
                        <div>
                            <p className="font-bold text-lg leading-none">10,000+</p>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Women Trusted</p>
                        </div>
                    </div>
                </div>
            </div >

            {/* Find Care Section */}
            < section className="py-12 md:py-20 bg-white/60 px-6 md:px-12 lg:px-20 relative" >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-cadet-gray font-serif mb-4">Find Care by Concern</h2>
                        <p className="text-cadet-gray/70 max-w-2xl mx-auto">Select your primary health concern to find the right specialist immediately.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-icons text-3xl">pregnant_woman</span>
                            </div>
                            <h3 className="text-xl font-bold text-cadet-gray mb-2 font-serif">Planning a Pregnancy</h3>
                            <p className="text-sm text-cadet-gray/70 mb-6">Pre-conception counseling, fertility assessments, and prenatal care planning.</p>
                            <a className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform uppercase tracking-wider" href="#">
                                Consult <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-icons text-3xl">spa</span>
                            </div>
                            <h3 className="text-xl font-bold text-cadet-gray mb-2 font-serif">Hormonal Issues & PCOS</h3>
                            <p className="text-sm text-cadet-gray/70 mb-6">Expert management for irregular periods, PCOS, acne, and weight concerns.</p>
                            <a className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform uppercase tracking-wider" href="#">
                                Consult <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-icons text-3xl">elderly_woman</span>
                            </div>
                            <h3 className="text-xl font-bold text-cadet-gray mb-2 font-serif">Post-Menopausal Health</h3>
                            <p className="text-sm text-cadet-gray/70 mb-6">Bone density, hormonal therapy, and wellness screening for life after 45.</p>
                            <a className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform uppercase tracking-wider" href="#">
                                Consult <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section >

            {/* Comprehensive Gynaecology Section */}
            < section className="py-12 md:py-20 bg-white px-6 md:px-12 lg:px-20 border-t border-b border-gray-100/50" >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-wide uppercase text-xs mb-2 block">Clinical Services</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-cadet-gray font-serif">Comprehensive Gynaecology</h2>
                        </div>
                        <a className="px-6 py-2 border border-cadet-gray text-cadet-gray rounded-full hover:bg-cadet-gray hover:text-white transition-all text-sm font-semibold" href="#">
                            View Full Service Menu
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item 1 */}
                        <div className="bg-corn-silk/20 p-8 border border-primary/5 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300 flex flex-col h-full hover:bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-cadet-gray font-serif">High-Risk Pregnancy</h3>
                                <span className="material-icons text-primary/60 text-3xl">medical_services</span>
                            </div>
                            <p className="text-sm text-cadet-gray/70 mb-6 leading-relaxed">Specialized monitoring for pregnancies with complications like diabetes, hypertension, or multiple births.</p>
                            <ul className="text-xs text-cadet-gray/60 space-y-2 mb-6">
                                <li className="flex gap-2"><span className="material-icons text-[14px] text-green-500">check_circle</span> Advanced Fetal Monitoring</li>
                                <li className="flex gap-2"><span className="material-icons text-[14px] text-green-500">check_circle</span> Genetic Counseling</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white border border-primary/20 text-primary font-bold text-sm shadow-sm hover:bg-primary hover:text-white transition-all mt-auto uppercase tracking-wide">Consult</button>
                        </div>
                        {/* Service Item 2 */}
                        <div className="bg-corn-silk/20 p-8 border border-primary/5 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300 flex flex-col h-full hover:bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-cadet-gray font-serif">Menstrual Disorders</h3>
                                <span className="material-icons text-primary/60 text-3xl">bloodtype</span>
                            </div>
                            <p className="text-sm text-cadet-gray/70 mb-6 leading-relaxed">Diagnosis and minimally invasive treatments for endometriosis, fibroids, and heavy bleeding.</p>
                            <ul className="text-xs text-cadet-gray/60 space-y-2 mb-6">
                                <li className="flex gap-2"><span className="material-icons text-[14px] text-green-500">check_circle</span> Hysteroscopy Available</li>
                                <li className="flex gap-2"><span className="material-icons text-[14px] text-green-500">check_circle</span> Pain Management</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white border border-primary/20 text-primary font-bold text-sm shadow-sm hover:bg-primary hover:text-white transition-all mt-auto uppercase tracking-wide">Consult</button>
                        </div>
                        {/* Service Item 3 */}
                        <div className="bg-corn-silk/20 p-8 border border-primary/5 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300 flex flex-col h-full hover:bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-cadet-gray font-serif">Preventive Oncology</h3>
                                <span className="material-icons text-primary/60 text-3xl">health_and_safety</span>
                            </div>
                            <p className="text-sm text-cadet-gray/70 mb-6 leading-relaxed">Early detection screening for cervical, ovarian, and breast cancers. Pap smears and mammography guidance.</p>
                            <ul className="text-xs text-cadet-gray/60 space-y-2 mb-6">
                                <li className="flex gap-2"><span className="material-icons text-[14px] text-green-500">check_circle</span> HPV Vaccination</li>
                                <li className="flex gap-2"><span className="material-icons text-[14px] text-green-500">check_circle</span> Colposcopy</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white border border-primary/20 text-primary font-bold text-sm shadow-sm hover:bg-primary hover:text-white transition-all mt-auto uppercase tracking-wide">Consult</button>
                        </div>
                    </div>
                </div>
            </section >

            {/* Meet Our Specialists */}
            < section className="py-16 md:py-24 bg-corn-silk/50 dark:bg-slate-900/50 relative overflow-hidden" id="experts" >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Expert Consultation</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-cadet-gray dark:text-white leading-tight">
                                Meet Our <span className="text-primary italic">Specialists</span>
                            </h2>
                            <p className="text-lg text-cadet-gray/80 dark:text-slate-400 mt-4 leading-relaxed font-light italic">
                                Bangalore's leading gynaecologists and obstetricians dedicated to your wellness.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            {/* Service Filter Dropdown */}
                            <div className="relative group">
                                <select
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="appearance-none w-full sm:w-auto bg-white border border-primary/20 hover:border-primary/50 text-cadet-gray font-medium py-3 pl-6 pr-12 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 sm:min-w-[240px]"
                                >
                                    {services.map((service, idx) => (
                                        <option key={idx} value={service}>{service}</option>
                                    ))}
                                </select>
                                <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-hover:translate-y-[-40%] transition-transform">keyboard_arrow_down</span>
                            </div>

                            <a href="/experts" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-all group/link text-sm uppercase tracking-wider whitespace-nowrap">
                                <span>View all doctors</span>
                                <span className="material-icons group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor) => (
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
                            ))
                        ) : (
                            <div className="col-span-1 lg:col-span-2 text-center py-12 bg-white/50 rounded-3xl border border-dashed border-cadet-gray/30">
                                <span className="material-icons text-4xl text-cadet-gray/40 mb-3">manage_search</span>
                                <p className="text-cadet-gray/60 font-medium">No specialists found for the selected service.</p>
                                <button
                                    onClick={() => setSelectedService("All Services")}
                                    className="mt-4 text-primary font-bold text-sm hover:underline"
                                >
                                    View all specialists
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section >

            {/* Testimonials Section (Updated with specific names) */}
            < section className="py-16 bg-corn-silk/30 border-t border-corn-silk" >
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <h3 className="text-2xl font-bold text-cadet-gray font-serif mb-8">Trusted by 10,000+ Women in Bangalore</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-left">
                                <div className="flex text-yellow-400 text-sm mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="material-icons">star</span>
                                    ))}
                                </div>
                                <p className="text-cadet-gray/80 text-sm italic mb-4">"{review.content}"</p>
                                <p className="text-xs font-bold text-cadet-gray">- {review.name}, {review.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Sticky Bottom Bar */}
            {/* Sticky Bottom Bar */}

        </div >
    );
}
