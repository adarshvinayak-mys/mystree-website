import React from 'react';
import DoctorCard from './DoctorCard';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import doctorNiv from '../assets/nivetha-vishnuvardhan-mbbs-md.jpg';
import doctorPri from '../assets/drpriya.jpeg';
import doctorChaitra from '../assets/DrChaitraNayak.jpg';

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
        image: "https://my-stree.com/assets/doctors/Dr-Jasmine-Flora.png",
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
        <section className="py-24 bg-corn-silk/30 dark:bg-slate-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Premium Healthcare</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                        Meet Our <span className="text-primary italic">Experts</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light italic max-w-2xl mx-auto">
                        Experienced specialists dedicated to your health and comfort with personalized care.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {experts.map((expert, index) => (
                        <DoctorCard key={index} {...expert} />
                    ))}
                </div>
            </div>
        </section>
    );
}
