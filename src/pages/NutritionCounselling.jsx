import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import doctor3 from '../assets/doctor3.jpg';
import nutritionHero from '../assets/nutritionpage.png';
import nutritionPsychology from '../assets/nutritionpage2.png';
import wm1 from '../assets/weightmanagement1.png';
import wm2 from '../assets/weightmanagement2.png';
import wm3 from '../assets/weightmanagement3.png';
import wm4 from '../assets/weightmanagement4.png';
import nutrition1 from '../assets/nutrition1.jpg';
import nutrition2 from '../assets/nutrition2.jpg';
import nutrition3 from '../assets/nutrition3.jpg';
import nutrition4 from '../assets/nutrition4.jpg';
import weight12 from '../assets/weight12.png';
import pcosMain from '../assets/pcos_hormonal_balance.png';

const focusAreas = [
    {
        title: "Weight Management & Metabolism",
        description: "Sustainable weight loss strategies that boost your metabolism naturally without starving.",
        icon: "fitness_center",
        tag: "monitor_weight",
        image: wm1
    },
    {
        title: "Pregnancy & Postnatal Diet",
        description: "Nutrient-rich plans for a healthy pregnancy and recovery, supporting both mom and baby.",
        icon: "child_friendly",
        tag: "pregnant_woman",
        image: wm2
    },
    {
        title: "PCOS & Hormonal Care",
        description: "Dietary interventions to manage insulin resistance, reduce inflammation, and balance hormones.",
        icon: "female",
        tag: "water_drop",
        image: pcosMain
    },
    {
        title: "Menopause Nutrition",
        description: "Foods to manage hot flashes, bone health, and energy levels during the transition.",
        icon: "elderly_woman",
        tag: "volunteer_activism",
        image: wm4
    }
];

const methodology = [
    {
        step: "1. Analyze & Map",
        title: "BCA & Biological Mapping",
        description: "Science-backed Body Composition Analysis (BCA) to understand your unique biology beyond the scale.",
        icon: "monitor_weight"
    },
    {
        step: "2. Plan & Unpack",
        title: "Psychology-Linked Nutrition",
        description: "Personalised plans that address the psychology of your food habits and cravings.",
        icon: "psychology"
    },
    {
        step: "3. Track & Reset",
        title: "Habit Transformation",
        description: "Ongoing emotional and metabolic tracking to ensure sustainable, long-term success.",
        icon: "autorenew"
    }
];

export default function NutritionCounselling() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-display bg-corn-silk text-cadet-gray antialiased selection:bg-primary/30 selection:text-primary relative">

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-8 pb-12 px-6 md:px-12 lg:px-20 bg-corn-silk">
                <div className="hidden sm:block absolute top-0 right-0 sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] bg-uranian-blue/30 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
                <div className="hidden sm:block absolute bottom-0 left-0 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="relative z-10 space-y-8 lg:col-span-6 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="inline-block transform -rotate-2 mb-2">
                            <div className="bg-uranian-blue text-cadet-gray px-4 py-1.5 rounded-full border-2 border-white shadow-sm font-bold text-sm tracking-wide flex items-center gap-2">
                                <span className="material-icons text-primary text-base">eco</span>
                                Food as Medicine
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cadet-gray leading-[1.1] tracking-tight font-serif">
                            Nourish Your Body. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF833C] to-[#ed592c] relative">
                                Heal from Within.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-uranian-blue z-[-1]" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00026 6.99997C38.5003 2.99999 154.5 -3.50002 198 6.99997" stroke="currentColor" strokeWidth="3"></path>
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-cadet-gray/80 max-w-lg leading-relaxed font-medium">
                            Eat Better. Live Better. Personalised Nutrition for Your Health & Well-Being. No starving, just eating right.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={() => navigate('/booking-gateway')}
                                className="bg-gradient-to-r from-[#FF833C] to-[#ed592c] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Book Appointment</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button
                                onClick={() => navigate('/booking-gateway')}
                                className="bg-white text-cadet-gray border-2 border-primary/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all"
                            >
                                Learn More
                            </button>
                        </div>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                {[
                                    "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100"
                                ].map((url, i) => (
                                    <img key={i} alt="Happy Client" className="w-10 h-10 rounded-full border-2 border-corn-silk object-cover" src={url} />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-corn-silk bg-uranian-blue flex items-center justify-center text-xs font-bold text-cadet-gray">+500</div>
                            </div>
                            <div className="text-sm font-medium text-cadet-gray/70">
                                <span className="block text-primary font-bold text-base">Happy Clients</span>
                                Transforming lives daily
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:col-span-6 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
                        <div className="relative z-10 w-full max-w-md">
                            <div className="absolute inset-0 bg-uranian-blue rounded-[3rem] transform rotate-3 translate-x-4 translate-y-4 -z-10 opacity-60"></div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[420px] sm:h-[550px] w-full bg-[#F2E8C4] relative">
                                <img
                                    alt="Healthy Indian Nutrition Plan"
                                    className="w-full h-full object-cover"
                                    src={nutritionHero}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3a506b]/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Wellness Areas */}
            <section className="py-12 px-6 md:px-12 lg:px-20 relative bg-corn-silk">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block">Wellness Areas</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif mb-6">Holistic Nutrition for Every Stage</h2>
                        <p className="text-cadet-gray/70 max-w-2xl mx-auto text-lg">We focus on sustainable lifestyle changes, not quick fixes. Discover how food can be your medicine.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
                        {focusAreas.map((area, idx) => (
                            <div key={idx} className={`relative rounded-[3rem] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-700 ${idx % 2 !== 0 ? 'md:translate-y-16' : ''} h-[450px]`}>
                                {/* Background Image with Premium Multi-layer Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] grayscale-[0.1] group-hover:grayscale-0"
                                    />
                                    {/* Primary Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity"></div>
                                    {/* Accent Gradient for Depth */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent opacity-40"></div>
                                </div>

                                {/* Floating Icon with Glass Effect */}
                                <div className="absolute top-8 left-8 z-10">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:bg-primary group-hover:border-primary transition-all duration-500 transform group-hover:-translate-y-1">
                                        <span className="material-icons text-3xl text-white">{area.icon}</span>
                                    </div>
                                </div>

                                {/* Background Watermark Icon */}
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-5 transition-opacity z-10 pointer-events-none">
                                    <span className="material-icons text-9xl text-white">{area.tag || area.icon}</span>
                                </div>

                                {/* Content Section */}
                                <div className="relative z-20 h-full flex flex-col justify-end p-10 md:p-12 text-white">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-bold font-serif leading-tight drop-shadow-lg">
                                            {area.title}
                                        </h3>
                                        <p className="text-white/80 text-lg leading-relaxed max-w-sm font-medium drop-shadow-md">
                                            {area.description}
                                        </p>
                                        <div className="flex items-center gap-6 pt-4">
                                            <button
                                                onClick={() => navigate('/booking-gateway')}
                                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-3.5 rounded-2xl border border-white/30 flex items-center gap-3 group/btn transition-all hover:shadow-lg active:scale-95"
                                            >
                                                <span>Consult</span>
                                                <span className="material-icons text-primary-light group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-12 md:h-24"></div>
                </div>
            </section>

            {/* Weight Management Gallery - Reverted and Updated */}
            <section className="pb-24 px-6 md:px-12 lg:px-20 bg-corn-silk">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/60 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5 space-y-6">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Visual Diversity</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif leading-tight">Weight management <br /><span className="italic text-primary-light">is not one-size-fits-all</span></h2>
                                <p className="text-lg text-cadet-gray/80 leading-relaxed">
                                    Our biological precision mapping ensures that your journey is as unique as your metabolism. We look at the variety of factors—from muscle density to hydration—to craft a sustainable path.
                                </p>
                                <div className="pt-4 flex gap-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-primary"><span className="material-icons text-sm">check</span></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-uranian-blue flex items-center justify-center text-cadet-gray"><span className="material-icons text-sm">insights</span></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-mint flex items-center justify-center text-teal-700"><span className="material-icons text-sm">restaurant</span></div>
                                    </div>
                                    <span className="text-xs font-bold text-cadet-gray/60 uppercase tracking-widest self-center">Science-Backed Approach</span>
                                </div>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="rounded-3xl overflow-hidden h-48 md:h-64 shadow-lg transform hover:-rotate-1 transition-all duration-500">
                                            <img src={nutrition1} alt="Variation 1" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="rounded-3xl overflow-hidden h-32 md:h-48 shadow-lg transform hover:rotate-2 transition-all duration-500">
                                            <img src={nutrition2} alt="Variation 2" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="rounded-3xl overflow-hidden h-32 md:h-48 shadow-lg transform hover:rotate-1 transition-all duration-500">
                                            <img src={nutrition3} alt="Variation 3" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="rounded-3xl overflow-hidden h-48 md:h-64 shadow-lg transform hover:-rotate-2 transition-all duration-500">
                                            <img src={nutrition4} alt="Variation 4" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Flow */}
            <section className="py-24 bg-corn-silk relative overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-cadet-gray font-serif mb-4">Our Methodology</h2>
                        <p className="text-cadet-gray/70 mb-16 italic text-lg">"Moving beyond the scale with Body Composition Analysis (BCA)"</p>
                    </motion.div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Connecting Line (SVG) */}
                        <svg className="hidden md:block absolute top-[45px] left-0 w-full -z-10 h-10" preserveAspectRatio="none">
                            <motion.path
                                d="M100,20 C300,0 500,40 700,20 S900,0 1100,20"
                                fill="none"
                                stroke="#ed592c"
                                strokeDasharray="8,8"
                                strokeWidth="2"
                                className="opacity-30"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>

                        {methodology.map((m, idx) => (
                            <motion.div
                                key={idx}
                                className="group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.3 }}
                            >
                                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-uranian-blue relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons text-4xl text-primary">{m.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{m.step}</h3>
                                <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{m.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Psychology of Eating - Special Section */}
            <section className="py-24 bg-gradient-to-r from-uranian-blue/20 to-corn-silk relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white text-primary text-xs font-bold uppercase tracking-widest">
                            <span className="material-icons text-base">psychology</span>
                            Redefining the Plate
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-cadet-gray font-serif leading-tight">
                            The Silent Dialogue <br />
                            <span className="italic text-primary/80 text-3xl md:text-5xl">of Psychology & Satiety</span>
                        </h2>
                        <div className="space-y-6 text-lg text-cadet-gray/80 leading-relaxed font-light">
                            <p>
                                Food is more than a calculation of calories. It is a profound language of history, emotion, and biological impulse. At My Stree, we move beyond the transactional nature of generic diet plans to explore the internal dialogue that shapes your choices.
                            </p>
                            <p>
                                By bridging the gap between how you think and how you eat, we uncover the roots of your cravings and the triggers of your habits. This is not about restriction; it is about the discovery of a harmonious relationship with nourishment.
                            </p>
                        </div>
                        <div className="pt-4 border-l-4 border-primary/20 pl-8 italic text-cadet-gray/60 font-serif text-xl md:text-2xl leading-relaxed">
                            "The way we nourish ourselves is a mirror to the way we live. Understanding the why is just as vital as identifying the what."
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        <div className="relative z-10 glass-card p-4 rounded-[3rem] transform group-hover:rotate-y-6 transition-all duration-700 shadow-2xl">
                            <img
                                src={nutritionPsychology}
                                alt="Mindful eating and psychology"
                                className="w-full h-[500px] object-cover rounded-[2.5rem]"
                            />
                            <div className="absolute inset-x-8 bottom-8 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl">
                                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">The Good Thought</p>
                                <p className="text-cadet-gray font-serif text-lg italic">"True health begins when the mind and the body begin to speak the same language."</p>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3.5rem] blur-2xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
                    </div>
                </div>
            </section>

            {/* Specialist Section */}
            <section className="py-24 bg-white px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-corn-silk rounded-[3rem] p-8 md:p-12 shadow-sm relative overflow-hidden border border-primary/5">
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-uranian-blue/20 rounded-full blur-3xl"></div>
                        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                            <div className="w-full md:w-1/3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3"></div>
                                    <img
                                        alt="Priyanka Savina"
                                        className="w-full h-auto rounded-[2rem] relative shadow-lg"
                                        src={doctor3}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 space-y-6">
                                <div className="inline-block bg-uranian-blue/30 text-cadet-gray px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Lead Nutritionist</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-cadet-gray font-serif">Priyanka Savina</h2>
                                <p className="text-primary font-bold text-xl italic font-serif">"Healing the mind's relationship with the plate."</p>
                                <p className="text-cadet-gray/80 text-lg leading-relaxed">
                                    Priyanka Savina serves as the essential bridge between advanced clinical expertise and deep behavioral insights. She redefines nutrition as a practice of mindfulness and metabolic harmony, mapping the silent patterns of your food practices to foster a genuinely sustainable lifestyle. Her methodology ensures that every meal is an act of self-care and biological optimization.
                                </p>
                                <p className="text-cadet-gray/70 text-sm leading-relaxed border-l-4 border-primary/30 pl-4">
                                    Note: Specific treatment-plan details are verified directly with Priyanka for each individual, and she is also available across Adolescent and Menopause support tracks.
                                </p>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                    <div>
                                        <p className="text-3xl font-bold text-cadet-gray font-serif">10+</p>
                                        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Years Exp</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-cadet-gray font-serif">2000+</p>
                                        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Families</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-cadet-gray font-serif">₹800</p>
                                        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Consultation</p>
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

            {/* Patient Testimonials */}
            <section className="py-24 bg-white px-6 md:px-12 lg:px-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-uranian-blue/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs mb-3 block italic">Transformations</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-cadet-gray font-serif">Deeply Personal Success Stories</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                text: "I consulted Priyanka for nutrition guidance and had a very positive experience. She took time to understand my lifestyle, food preferences, and challenges instead of giving a generic diet plan. Better energy levels and more awareness about my eating habits.",
                                author: "Ram Teja",
                                tag: "Life-style Mapping",
                                initial: "R"
                            },
                            {
                                text: "I went to Priyanka because I have PCOS, and she helped me work toward my goals without any crash diets or extreme rules. It honestly felt like I was eating the same foods I always had—just healthier versions of them.",
                                author: "Athira",
                                tag: "PCOS Management",
                                initial: "A"
                            },
                            {
                                text: "Priyanka is extremely learned especially with the way she describes all the health benefits of following an extremely well tuned diet chart that she creates from scratch. Patient, has a listening ear, and a very good communicator!",
                                author: "Arshia Pawar",
                                tag: "Custom Nutrition",
                                initial: "A"
                            },
                            {
                                text: "Dr. Priyanka was amazing. She listened to all my health concerns and gave me simple and effective solutions. Her plans are pocket friendly and include a variety of different foods without giving up what I love.",
                                author: "Bency Sebastian",
                                tag: "Practical Solutions",
                                initial: "B"
                            },
                            {
                                text: "I lost 10 kgs following her diet plan. What I really appreciated is that she customised everything based on my needs and lifestyle, using simple home-cooked food that was easy to follow.",
                                author: "Sheetal",
                                tag: "Sustainable Weight Loss",
                                initial: "S"
                            },
                            {
                                text: "The doctor was extremely friendly, patient, and approachable. From the very first consultation, they made me feel comfortable and listened to all my concerns without rushing. Very well explained!",
                                author: "Aishwarya / Nitesh",
                                tag: "Personal Care",
                                initial: "A"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-corn-silk p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-primary/5 relative group">
                                <span className="material-icons text-primary/10 text-6xl absolute top-6 right-8 group-hover:text-primary/20 transition-colors">format_quote</span>
                                <div className="inline-block px-3 py-1 bg-white rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-6 border border-primary/10">{t.tag}</div>
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

            {/* Why My Stree Section */}
            <section className="py-24 bg-uranian-blue/10 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-cadet-gray font-serif">Why My Stree Nutrition?</h2>
                        <p className="text-cadet-gray/70 mt-4">Science meets sustenance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-primary/5 group">
                            <span className="material-icons text-5xl text-primary mb-6 group-hover:scale-110 transition-transform">monitor_weight</span>
                            <h3 className="text-xl font-bold text-cadet-gray mb-4 font-serif">Biological Precision</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed">We use Body Composition Analysis (BCA) to map your unique metabolic profile, ensuring we target fat loss and muscle health, not just numbers on a scale.</p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-primary/5 group">
                            <span className="material-icons text-5xl text-primary mb-6 group-hover:scale-110 transition-transform">psychology</span>
                            <h3 className="text-xl font-bold text-cadet-gray mb-4 font-serif">Psychology of the Plate</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed">Our approach identifies the emotional and cognitive triggers behind your eating habits, making your transformation mental as well as physical.</p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-primary/5 group">
                            <span className="material-icons text-5xl text-primary mb-6 group-hover:scale-110 transition-transform">auto_fix_high</span>
                            <h3 className="text-xl font-bold text-cadet-gray mb-4 font-serif">Behavioral Mastery</h3>
                            <p className="text-sm text-cadet-gray/70 leading-relaxed">Led by specialists who bridge the gap between clinical nutrition and behavioral science for a lifestyle that feels genuinely natural, not restrictive.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
