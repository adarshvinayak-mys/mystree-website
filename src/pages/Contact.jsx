import { useEffect } from 'react';
import { motion } from 'framer-motion';


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="font-display text-slate-800 bg-background-light dark:bg-background-dark min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
            <style>
                {`
                .glass-panel {
                    background: rgba(175, 219, 245, 0.15);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                }
                .glass-card-white {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                }
                .blob-shape {
                    position: absolute;
                    width: 700px;
                    height: 700px;
                    background: radial-gradient(circle, #AFDBF5 0%, rgba(252, 244, 217, 0) 70%);
                    filter: blur(60px);
                    opacity: 0.5;
                    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
                    z-index: 0;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: blob-bounce 15s infinite ease-in-out;
                }
                @keyframes blob-bounce {
                    0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
                    33% { transform: translate(-45%, -55%) scale(1.1) rotate(10deg); }
                    66% { transform: translate(-55%, -45%) scale(0.9) rotate(-10deg); }
                }
                `}
            </style>

            {/* Hero Section */}
            <section className="relative w-full py-14 px-4 sm:px-6 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80"
                        alt="Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    <div className="absolute inset-0 bg-white/30 dark:bg-background-dark/70 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[#1b110e] dark:text-white text-4xl sm:text-5xl md:text-8xl font-serif font-medium leading-[1.1] tracking-tight"
                    >
                        Let&apos;s Start Your <br />
                        <span className="italic text-primary">Chapter of Care.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-slate-600 dark:text-gray-300 text-lg md:text-2xl font-light leading-relaxed max-w-2xl px-4"
                    >
                        Your journey to better health begins with a simple conversation. Our team is here to guide, listen, and support every step of the way.
                    </motion.p>
                </div>
            </section>

            {/* Action Hub - Creative Tiles */}
            <section className="relative z-10 w-full px-4 sm:px-6 -mt-6 sm:-mt-8 mb-16 sm:mb-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
                    {[
                        {
                            title: "Talk to Us",
                            desc: "Direct connection to care",
                            value: "+91 63665 73772",
                            icon: "call",
                            btn: "Call Instantly",
                            color: "text-primary",
                            type: "tel:+916366573772"
                        },
                        {
                            title: "WhatsApp Care",
                            desc: "Fast respond digital chat",
                            value: "Start a Conversation",
                            icon: "chat",
                            btn: "Start Chat",
                            color: "text-green-500",
                            type: "#"
                        },
                        {
                            title: "Book Online",
                            desc: "Choose your own time",
                            value: "Immediate Scheduling",
                            icon: "calendar_month",
                            btn: "Book Appointment",
                            color: "text-blue-500",
                            primary: true,
                            type: "/team"
                        }
                    ].map((tile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            whileHover={{ y: -8 }}
                            className={`glass-panel rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col items-center text-center gap-5 sm:gap-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden ${tile.primary ? 'border-primary/30 ring-1 ring-primary/10' : ''}`}
                        >
                            {tile.primary && <div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-tighter">Preferred</div>}

                            <div className="size-20 rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary mb-2 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:scale-110 transition-transform duration-500">
                                <span className={`material-symbols-outlined !text-[40px] ${tile.color}`}>{tile.icon}</span>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-[#1b110e] dark:text-white text-2xl font-bold font-serif">{tile.title}</h3>
                                <p className="text-primary font-bold text-sm">{tile.value}</p>
                                <p className="text-slate-500 text-sm font-medium">{tile.desc}</p>
                            </div>

                            <a
                                href={tile.type}
                                className={`mt-4 w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${tile.primary ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-light' : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-100 dark:border-slate-600 hover:bg-slate-50'}`}
                            >
                                {tile.btn} <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Social Hub - Creative Rotation */}
                <div className="flex flex-col items-center gap-8 mt-12 sm:mt-16 text-center">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Follow Our Care Journey</p>
                    <div className="flex justify-center gap-6">
                        {[
                            {
                                label: 'Instagram',
                                icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.79-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            },
                            {
                                label: 'LinkedIn',
                                icon: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            },
                            {
                                label: 'YouTube',
                                icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            },
                            {
                                label: 'WhatsApp',
                                icon: <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.241 2.242 3.481 5.226 3.481 8.408 0 6.556-5.338 11.89-11.893 11.891-2.019 0-3.999-.512-5.753-1.478l-6.235 1.638zm6.236-4.143c1.611.957 3.23 1.462 4.84 1.463 5.429 0 9.847-4.417 9.848-9.847 0-2.63-1.025-5.101-2.887-6.963s-4.332-2.887-6.962-2.887c-5.43 0-9.848 4.417-9.85 9.848 0 1.77.491 3.407 1.411 4.819l-.117.203-1.128 4.121 4.237-1.112.208-.124zm10.644-2.894c-.274-.137-1.623-.801-1.874-.892-.252-.092-.435-.137-.618.137s-.71.892-.869 1.075-.32.206-.594.069c-.274-.138-1.159-.426-2.207-1.361-.815-.727-1.366-1.624-1.526-1.898-.16-.274-.017-.423.12-.559.123-.122.274-.32.411-.48s.183-.274.274-.457c.092-.183.046-.343-.023-.48-.069-.137-.618-1.487-.847-2.035-.222-.53-.448-.458-.618-.466-.16-.008-.344-.01-.527-.01s-.481.069-.732.343c-.252.274-.961.938-.961 2.29s.984 2.655 1.121 2.838c.137.183 1.935 2.954 4.688 4.141.655.283 1.166.452 1.565.578.658.209 1.258.18 1.732.109.529-.079 1.623-.664 1.852-1.304.229-.641.229-1.189.16-1.304-.069-.114-.251-.205-.526-.341z" />
                            }

                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 5 : -5 }}
                                className="group flex flex-col items-center gap-3"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="size-16 rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center text-[#1b110e] dark:text-white transition-all shadow-xl hover:shadow-primary/20 border border-slate-50 dark:border-slate-700 hover:text-primary dark:hover:text-primary">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="size-8 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {social.icon}
                                    </svg>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">{social.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

            </section>

            {/* Map Experience */}
            <section className="relative w-full h-[460px] sm:h-[560px] md:h-[700px] overflow-hidden">
                {/* Simulated High-Res Map */}
                <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 group">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80"
                        alt="Map"
                        className="w-full h-full object-cover opacity-60 grayscale-[50%] sepia-[20%] group-hover:grayscale-0 transition-all duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
                </div>

                {/* Floating Address Card */}
                < motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 md:top-12 md:left-20 md:translate-x-0 z-20 w-[calc(100%-1.5rem)] sm:w-full px-0 md:px-0 max-w-[420px]"
                >
                    <div className="glass-card-white dark:bg-slate-800/90 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl border border-white/50 backdrop-blur-2xl">
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-[#1b110e] dark:text-white text-2xl md:text-3xl font-bold font-serif">MyStree Clinic</h3>
                                    <p className="text-primary font-bold text-sm uppercase tracking-widest">Indiranagar Branch</p>
                                </div>
                                <div className="bg-green-500 text-white px-3 py-1 rounded-xl flex items-center gap-1 shadow-lg shadow-green-100">
                                    <span className="material-symbols-outlined !text-sm">star</span>
                                    <span className="text-xs font-black uppercase">4.9 Rare</span>
                                </div>
                            </div>

                            <div className="h-px w-full bg-slate-200/50 dark:bg-slate-700"></div>

                            <div className="flex gap-5 items-start">
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <p className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                    123, 100 Feet Rd, Indiranagar,<br />
                                    Bengaluru, Karnataka 560038
                                </p>
                            </div>

                            <div className="flex gap-5 items-start">
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-700 dark:text-gray-300 font-bold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                    <p className="text-slate-400 text-sm">Appointments Preferred</p>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-center gap-3 rounded-2xl h-14 md:h-16 bg-slate-900 text-white text-base md:text-lg font-bold shadow-2xl hover:bg-slate-800 transition-all group">
                                <span className="material-symbols-outlined !text-xl group-hover:rotate-12 transition-transform">directions</span>
                                Get Directions
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Animated Marker - Adjusted to India/Bangalore */}
                <div className="hidden md:block absolute top-[58%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative flex flex-col items-center">

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="size-16 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/60 border-4 border-white"
                        >
                            <span className="material-symbols-outlined !text-[36px]">spa</span>
                        </motion.div>
                        <div className="w-2 h-2 bg-primary/40 rounded-full blur-[2px] mt-4 scale-x-150 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Creative Trust Section */}
            <section className="py-16 md:py-24 bg-white dark:bg-background-dark relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-[#1b110e] dark:text-white leading-tight">
                            Your Peace of Mind <br />
                            <span className="italic text-primary">is Our Priority.</span>
                        </h2>
                        <p className="text-xl text-slate-500 dark:text-gray-400 font-light leading-relaxed">
                            Prompt and compassionate communication is at the heart of our care. We prioritize your health and well-being in every interaction.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Secure Data', icon: 'verified_user' },
                            { label: 'Elite Doctors', icon: 'workspace_premium' },
                            { label: 'Prime Location', icon: 'map' },
                            { label: 'Warm Welcome', icon: 'sentiment_very_satisfied' }
                        ].map((box, i) => (
                            <div key={i} className="space-y-3">
                                <div className="size-16 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mx-auto text-primary border border-slate-100 dark:border-slate-700">
                                    <span className="material-symbols-outlined !text-3xl">{box.icon}</span>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{box.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
