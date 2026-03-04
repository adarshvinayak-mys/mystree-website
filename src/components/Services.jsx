import { Link } from 'react-router-dom';
const obgynImage = '/sexual_wellness.webp';
const fertilityImage = '/pcos_hormonal_balance.webp';
const prenatalImage = '/pregnancy_care.webp';
const nutritionImage = '/adolescent_health.webp';

const services = [
    {
        img: obgynImage,
        title: "OBGYN Consults",
        desc: "Complete reproductive care for every life stage, from annual exams to complex conditions.",
        icon: "female",
        badge: "Most Common",
        link: "/services/obgyn"
    },
    {
        img: fertilityImage,
        title: "Fertility Clinic",
        desc: "Helping couples conceive with advanced fertility treatments and compassionate support.",
        icon: "water_drop",
        link: "/services/fertility"
    },
    {
        img: prenatalImage,
        title: "Prenatal Clinic",
        desc: "Comprehensive care ensuring a healthy pregnancy for both mother and baby.",
        icon: "child_care",
        link: "/services/prenatal"
    },
    {
        img: nutritionImage,
        title: "Nutrition Plans",
        desc: "Personalized diet plans for daily health, hormonal balance, and recovery.",
        icon: "nutrition",
        link: "/services/nutrition"
    }
];

export default function Services() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                        <span className="material-symbols-thin text-2xl">medical_services</span>
                        Expert Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3 text-shadow-soft">
                        Holistic Solutions <br /><span className="text-primary italic font-serif">Tailored for You</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-uranian-blue/20 dark:bg-blue-900/10 rounded-3xl p-6 hover:bg-uranian-blue/40 transition duration-300 border border-transparent hover:border-uranian-blue flex flex-col items-center text-center relative">
                            {service.badge && (
                                <span className="absolute top-2 right-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm z-10 border border-white">
                                    {service.badge}
                                </span>
                            )}
                            <div className="w-24 h-24 mb-6 relative">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="font-display font-bold text-xl mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{service.desc}</p>
                            <Link className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition font-bold text-sm gap-2" to={service.link}>
                                <span>Explore Service</span>
                                <span className="material-icons text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link className="inline-block px-10 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-full font-bold transition" to="/about">Learn More About Us</Link>
                </div>
            </div>
        </section>
    );
}
