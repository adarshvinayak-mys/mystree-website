import { Link } from 'react-router-dom';
const pcosImg = '/pcos_hormonal_balance.webp';
const pregnancyImg = '/pregnancy_care.webp';
const menopauseImg = '/menopause_wellness.webp';
const dermatologyImg = '/dermatology.webp';
const pelvicHealthImg = '/pelvic_health.webp';
const mentalWellnessImg = '/mental_wellness.webp';
const adolescentHealthImg = '/adolescent_health.webp';
const sexualWellnessImg = '/sexual_wellness.webp';

const conditions = [
    { title: "PCOS & Hormonal Balance", img: pcosImg, link: "/services/obgyn" },
    { title: "Pregnancy Care", img: pregnancyImg, link: "/services/prenatal" },
    { title: "Menopause Wellness", img: menopauseImg, link: "/services/menopause" },
    { title: "Dermatology", img: dermatologyImg, link: "/services/dermatology" },
    { title: "Pelvic Health PT", img: pelvicHealthImg, link: "/services/physiotherapy" },
    { title: "Mental Wellness", img: mentalWellnessImg, link: "/services/psychology" },
    { title: "Adolescent Health", img: adolescentHealthImg, link: "/services/adolescent-health" },
    { title: "Sexual Wellness", img: sexualWellnessImg, link: "/services/obgyn" },
];

export default function Conditions() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm bg-primary/10 px-3 py-1 rounded-full">Conditions We Treat</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-4 text-shadow-soft">
                            Comprehensive care for<br /> <span className="italic text-gray-500 font-serif">every concern.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {conditions.map((item, index) => (
                        <Link key={index} className="group block" to={item.link}>
                            <div className="relative overflow-hidden rounded-2xl aspect-square mb-3 bg-gray-100">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                                <img alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" loading="lazy" src={item.img} />
                                <div className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-sm z-20">
                                    <span className="material-symbols-outlined text-primary text-xl block">arrow_outward</span>
                                </div>
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition leading-tight">{item.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
