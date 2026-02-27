import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Force clear search field on mount/reload to prevent sensitive data persistence via bfcache
    useEffect(() => {
        setSearchQuery('');
    }, []);


    const serviceSearchData = [
        {
            route: '/services/obgyn',
            keywords: [
                'period', 'periods', 'menstruation', 'menstrual', 'gyno', 'gynecologist', 'gynaecologist',
                'discharge', 'uti', 'infection', 'white discharge', 'pelvic pain', 'irregular periods',
                'heavy bleeding', 'painful periods', 'obgyn'
            ]
        },
        {
            route: '/services/fertility',
            keywords: [
                'fertility', 'conceive', 'conceiving', 'trying to conceive', 'ivf', 'iui',
                'ovulation', 'amh', 'egg freezing', 'fertility treatment', 'infertility',
                'pcos fertility', 'reproductive medicine'
            ]
        },
        {
            route: '/services/adolescent-health',
            keywords: [
                'teen', 'teenager', 'adolescent', 'puberty', 'first period', 'young girl health',
                'teen pcos', 'confidential consult', 'school age health'
            ]
        },
        {
            route: '/services/prenatal',
            keywords: [
                'pregnancy', 'pregnant', 'prenatal', 'antenatal', 'maternity', 'labor', 'delivery',
                'trimester', 'ultrasound', 'scan', 'high risk pregnancy', 'fetal scan', 'birth plan'
            ]
        },
        {
            route: '/services/menopause',
            keywords: [
                'menopause', 'perimenopause', 'hot flash', 'hot flush', 'night sweats', 'hormone',
                'estrogen', 'hrt', 'post menopause', 'mood swings menopause', 'bone health menopause'
            ]
        },
        {
            route: '/services/nutrition',
            keywords: [
                'nutrition', 'diet', 'diet plan', 'meal plan', 'weight loss', 'weight gain',
                'pcos diet', 'healthy eating', 'metabolism', 'food counselling', 'postnatal diet',
                'pregnancy diet', 'menopause diet'
            ]
        },
        {
            route: '/services/physiotherapy',
            keywords: [
                'physio', 'physiotherapy', 'pelvic floor', 'urodynamics', 'incontinence',
                'postnatal recovery', 'pregnancy mobility', 'core weakness', 'pelvic pain',
                'bladder rehab', 'rehab', 'recovery'
            ]
        },
        {
            route: '/services/dermatology',
            keywords: [
                'skin', 'acne', 'pimples', 'pigmentation', 'glow', 'dark spots', 'melasma',
                'hair fall', 'scalp', 'laser', 'chemical peel', 'microneedling', 'prp', 'hydracial', 'hydrafacial'
            ]
        },
        {
            route: '/services/psychology',
            keywords: [
                'mental health', 'stress', 'anxiety', 'depression', 'therapy', 'counselling',
                'counselor', 'psychiatry', 'emotional wellness', 'panic', 'sleep issues',
                'burnout', 'art therapy', 'mood'
            ]
        }
    ];

    const popularSearchSuggestions = [
        'PCOS treatment',
        'Pregnancy scan',
        'IVF consultation',
        'Pelvic floor therapy',
        'Acne treatment',
        'Menopause care',
        'Nutrition counselling',
        'Stress and anxiety support'
    ];

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        const query = searchQuery.toLowerCase().trim().replace(/\s+/g, ' ');
        if (!query) return;

        let bestRoute = null;
        let bestScore = 0;

        for (const service of serviceSearchData) {
            let score = 0;

            for (const keyword of service.keywords) {
                if (query === keyword) {
                    score += 10;
                } else if (query.includes(keyword)) {
                    score += 5;
                } else if (keyword.includes(query)) {
                    score += 3;
                } else if (query.split(' ').some((word) => word.length > 2 && keyword.includes(word))) {
                    score += 2;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestRoute = service.route;
            }
        }

        if (bestRoute) {
            navigate(bestRoute);
        } else {
            // If no match but query exists, just go to general services or show toast
            // For now, let's scroll to services section
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-background-light dark:bg-background-dark">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-corn-silk/40 to-transparent dark:from-surface-dark/30 -z-10 rounded-bl-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-tertiary/10 to-transparent -z-10 rounded-tr-[100px]"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 order-2 lg:order-1">



                        <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900 dark:text-white">
                            Health Solutions <br />
                            <span className="text-primary italic font-medium pr-2">Designed for You.</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-secondary dark:text-slate-400 max-w-lg leading-relaxed font-light">
                            Specialized care in OBGYN, Fertility, Prenatal, Dermatology, Nutrition, Physiotherapy, and Mental Health. Your sanctuary for holistic wellness.
                        </p>

                        <form onSubmit={handleSearch} autoComplete="off" className="bg-white dark:bg-surface-dark p-2 rounded-xl shadow-card border border-gray-100 dark:border-gray-700 max-w-md flex flex-col sm:flex-row gap-2 transition-shadow hover:shadow-lg">
                            <div className="relative flex-grow group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-transparent border-none focus:ring-0 text-slate-800 dark:text-slate-200 placeholder-slate-400 text-sm font-medium outline-none"
                                    placeholder="Search services (e.g., PCOS, Acne)..."
                                    type="text"
                                    list="service-search-suggestions"
                                    autoComplete="off"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <datalist id="service-search-suggestions">
                                    {popularSearchSuggestions.map((item) => (
                                        <option key={item} value={item} />
                                    ))}
                                </datalist>
                            </div>
                            <button
                                type="submit"
                                className="bg-secondary hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md shadow-secondary/20"
                            >
                                Find Care
                            </button>
                        </form>

                        <div className="flex items-center gap-5 pt-4">
                            <div className="flex -space-x-4">
                                <img alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover ring-2 ring-transparent hover:ring-primary transition-all z-0 hover:z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhm0VjHOTKl2AXwuuQL4MPiZcJk-pBaPFNYQ_st4ohq296I4Fa0lRzJ0GD_r-faZeCh1USIU-qNdMD-9AUAnfG6YW5o-heUYHNar3SPdn3vBhsD0_wS097akZF4b_6K-WGEylzelH0dkZnP-DqCxttm5b5EhIhEOS4oRPpKHhUAX7G8BPWKORF7K3otSuxvCb-tpyGXjFj-6IFyisHdAc_-Dy0yhr_vrbo9zc_olizHcKUfXEbd1X0fGKwauZO3teS8VtknRRBpmh5" />
                                <img alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover ring-2 ring-transparent hover:ring-primary transition-all z-0 hover:z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADCcTfakd0Kvg-0BeXtLFQdR55UBO0MDv6ZfBNCMH-AP-nMI_DC6d-Tug0uqsKEk3hVoJOBJ6b_G9Kz-cBbNX0J5j3Ed0dq1v-Cjy8bYaIGNV7tKAR88oTOHuW6KVROqHBe12-xi4jbXs8qfgVOIg41UBsAevABxOF__YJ1X3uJSIrdv0CjMwmVey7kzZ9Izz2aIbKZtPGMWVu0-uKKk7ShHTN9tg6rs_IbSFVqR4u6IuvwQD0-7uge0N4Y4j3tfteEtjz7XqSAhsb" />
                                <img alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover ring-2 ring-transparent hover:ring-primary transition-all z-0 hover:z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJAe6dFtxFLelv4a2HxTd8ky5Iahy8780fNk8XodcYCLFzZag3rVUOOetG-HeckpNao_UZ1bBs8C99exVigdk8dWAVK_s52XMul1gpSQ1mD15MPEIaI-I4bp64l7d4_PwPVI22LPvO9SBm4EJI1AeoHPqKg8JsqIRzDJCCUy8Smqf9kjAsm_O-1n8XZ7Hkxh3qxIwVc-UiZ_VK-PdG_CAC_HGsbauMAgCfzq5B6UPQKCZkY6bc_ik6E4cEhOGwrBwad2xP4wwaMYW_" />
                                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-corn-silk flex items-center justify-center text-xs font-bold text-slate-700">5k+</div>
                            </div>
                            <div className="space-y-0.5">
                                <div className="flex text-yellow-400 text-sm gap-0.5">
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                </div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Trusted by 5,000+ women</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content / Image */}
                    <div className="relative lg:h-[640px] order-1 lg:order-2">
                        <div className="absolute inset-0 bg-tertiary rounded-t-full rounded-b-[300px] opacity-20 transform translate-x-4 translate-y-4"></div>
                        <div className="relative h-full w-full rounded-t-full rounded-b-[300px] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                            <img
                                alt="Smiling confident woman"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                src={heroImage}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
