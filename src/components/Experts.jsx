import React from 'react';
import DoctorCard from './DoctorCard';
const doctor1 = '/doctor1.webp';
const doctor2 = '/doctor2.webp';
const doctor3 = '/doctor3.webp';
const doctorNiv = '/nivetha-vishnuvardhan-mbbs-md.webp';
const doctorPri = '/drpriya.webp';
const doctorChaitra = '/DrChaitraNayak.webp';

const experts = [
    {
        name: "Dr. Smitha A.P.",
        specialty: "Gynecologist, Infertility Specialist & Obstetrician",
        qualification: "High Risk Obstetrician and Fertility Specialist MBBS, MS, DNB(OBG) FFM FRM MBA",
        experience: "23+ years experience",
        languages: "English, Kannada, Tamil",
        image: doctor2,
        badgeText: "₹1000 Consultation",
        badgeColorClass: "bg-blue-50 text-blue-700"
    },
    {
        name: "Dr. Surbhi Sinha",
        specialty: "OBGYN & Fertility Specialist",
        qualification: "MBBS, MS, DNB, MRCOG (UK), FRM",
        experience: "10+ years experience",
        languages: "English, Hindi",
        image: doctor1,
        badgeText: "₹1000 Consultation",
        badgeColorClass: "bg-blue-50 text-blue-700"
    },
    {
        name: "Priyanka Savina",
        specialty: "Nutritionist & Wellness Consultant",
        qualification: "M.Sc Nutrition & Dietetics, Wellness Coach",
        experience: "10+ years experience",
        languages: "English, Hindi, Kannada",
        image: doctor3,
        badgeText: "₹800 Consultation",
        badgeColorClass: "bg-orange-50 text-orange-700"
    },
    {
        name: "Dr. Chaitra Nayak",
        specialty: "Infertility Specialist & Reproductive Endocrinologist",
        qualification: "MBBS, MS (OBG), FNB (Reproductive Medicine)",
        experience: "24+ years experience",
        languages: "English, Hindi, Kannada, Tamil",
        image: doctorChaitra,
        badgeText: "Fertility Expert",
        badgeColorClass: "bg-blue-50 text-blue-700"
    },
    {
        name: "Dr. Jasmine Flora",
        specialty: "Physiotherapist & Lactation Counsellor",
        qualification: "MPT/MPTh - OBG Physiotherapy",
        experience: "21 years overall, 9 years specialist",
        languages: "English, Kannada",
        image: '/drpriya.webp',
        badgeText: "Physiotherapist",
        badgeColorClass: "bg-teal-50 text-teal-700"
    },
    {
        name: "Dr. Nivetha Vishnuvardhan",
        specialty: "Hematologic Oncologist & Hematologist",
        qualification: "MBBS, MD (Internal Medicine)",
        experience: "Oncology Specialist",
        languages: "English",
        image: doctorNiv,
        badgeText: "Medical Oncologist",
        badgeColorClass: "bg-teal-50 text-teal-700"
    },
    {
        name: "Dr. Priyadarshini Sumanohar",
        specialty: "Physician & Internal Medicine Specialist",
        qualification: "MBBS, MD, MRCP (Internal Medicine)",
        experience: "Diagnostic & Treatment Specialist",
        languages: "English, Hindi, Kannada",
        image: doctorPri,
        badgeText: "Internal Medicine",
        badgeColorClass: "bg-blue-50 text-blue-700"
    }
];

export default function Experts() {
    return (
        <section className="py-20 md:py-32 bg-[#121110] relative overflow-hidden flex items-center min-h-[85vh]">
            <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center relative gap-8 lg:gap-0 pl-0 lg:pl-16 xl:pl-32">

                {/* Left Text Content - Dark Section */}
                <div className="w-full lg:w-[35%] px-6 lg:px-0 z-10 flex flex-col justify-center text-center lg:text-left">
                    <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-display text-white leading-[1.1] tracking-tight">
                        <span className="font-light text-gray-300">Looking</span><br />
                        <span className="font-light text-gray-300">for our</span><br />
                        <span className="font-medium text-white tracking-normal">medical</span><br />
                        <span className="font-medium text-white tracking-normal">board?</span>
                    </h2>
                </div>

                {/* Right Cards Slider Area - Beige Section */}
                <div className="w-full lg:w-[65%] bg-[#fdfbf6] lg:rounded-l-[3.5rem] p-8 md:p-12 lg:p-16 relative shadow-2xl">
                    <div className="flex overflow-x-auto gap-8 pb-8 pt-4 snap-x snap-mandatory custom-scrollbar pr-8" style={{ scrollbarWidth: 'none' }}>
                        {experts.map((expert, index) => {
                            // Determine badge color based on existing data
                            const badgeColor = expert.badgeColorClass.includes('orange')
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-gray-100 text-gray-600';

                            return (
                                <div key={index} className="min-w-[340px] w-[340px] sm:min-w-[400px] sm:w-[400px] snap-start flex-shrink-0 bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow border border-gray-100 relative group flex flex-col justify-between">

                                    {/* Top Right Badge */}
                                    <div className="flex justify-end mb-4">
                                        <span className={`px-4 py-1 rounded-bl-xl rounded-tr-xl text-[9px] font-bold uppercase tracking-widest ${badgeColor}`}>
                                            {expert.badgeText}
                                        </span>
                                    </div>

                                    <div className="flex gap-5 flex-grow">
                                        {/* Left Side: Image */}
                                        <div className="w-[120px] sm:w-[140px] flex-shrink-0">
                                            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                                                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover object-top" />
                                            </div>
                                        </div>

                                        {/* Right Side: Info */}
                                        <div className="flex-1 flex flex-col">
                                            <h3 className={`text-2xl sm:text-3xl font-display font-medium leading-tight mb-2 ${index === 0 ? 'text-primary' : 'text-slate-900'}`}>
                                                {expert.name.split(' ').map((part, i) => (
                                                    <React.Fragment key={i}>{part}<br /></React.Fragment>
                                                ))}
                                            </h3>

                                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-relaxed mb-4">
                                                {expert.specialty}
                                            </p>

                                            <ul className="space-y-4 text-xs font-medium text-slate-500 flex-grow">
                                                <li className="flex gap-3 items-start">
                                                    <span className="material-symbols-outlined text-[14px] text-gray-400 mt-0.5">school</span>
                                                    <span className="leading-snug">{expert.qualification}</span>
                                                </li>
                                                <li className="flex gap-3 items-center">
                                                    <span className="material-symbols-outlined text-[14px] text-gray-400">work</span>
                                                    <span>{expert.experience}</span>
                                                </li>
                                                <li className="flex gap-3 items-start">
                                                    <span className="material-symbols-outlined text-[14px] text-gray-400 mt-0.5">language</span>
                                                    <span className="leading-snug">{expert.languages}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Consult Button Area */}
                                    <div className="flex justify-end mt-4">
                                        <button className="flex items-center gap-2 bg-[#2d3748] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors">
                                            Consult <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                                        </button>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
