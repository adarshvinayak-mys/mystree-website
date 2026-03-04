import { useEffect } from 'react';
import { motion } from 'framer-motion';
import contactHeroBg from '../assets/contactus.jpg';


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
        <div className="font-display text-slate-800 bg-background-light dark:bg-background-dark min-h-screen overflow-x-hidden selection:bg-primary selection:text-white ">
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
                        src={contactHeroBg}
                        alt=""
                        aria-hidden="true"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="w-full h-full object-cover opacity-100"
                        onError={(event) => {
                            event.currentTarget.style.display = 'none';
                        }}
                    />
                    <div className="absolute inset-0 bg-white/50 dark:bg-background-dark/70 backdrop-blur-sm"></div>
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
                            type: "https://wa.me/+916366573772"
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
                                className={`mt-4 w-full inline-flex px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 items-center justify-center gap-2 ${tile.primary ? 'bg-primary text-white shadow-lg hover:bg-[#d0461f] hover:scale-105' : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-100 dark:border-slate-600 hover:bg-slate-50 hover:scale-[1.02]'}`}
                            >
                                {tile.btn} <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Social Hub - Creative Rotation */}
                <div className="flex flex-col items-center gap-8 mt-12 sm:mt-16 text-center">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Follow Our Care Journey</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
                        {[
                            {
                                label: 'Instagram',
                                link: 'https://www.instagram.com/mystreeforyou?igsh=MXhhOXY0aWxidGtwbQ==',
                                iconColor: 'text-[#E1306C]',
                                tint: 'from-[#E1306C]/20 via-[#F77737]/15 to-[#FCAF45]/15',
                                hoverBorder: 'group-hover:border-[#E1306C]/35',
                                hoverShadow: 'group-hover:shadow-[0_16px_30px_rgba(225,48,108,0.25)]',
                                labelHover: 'group-hover:text-[#E1306C]',
                                iconNode: <i className="fa-brands fa-instagram text-[30px] leading-none" aria-hidden="true"></i>
                            },
                            {
                                label: 'LinkedIn',
                                link: 'https://www.linkedin.com/company/my-stree-for-you/posts/?feedView=all',
                                iconColor: 'text-[#0A66C2]',
                                tint: 'from-[#0A66C2]/20 to-[#60A5FA]/15',
                                hoverBorder: 'group-hover:border-[#0A66C2]/35',
                                hoverShadow: 'group-hover:shadow-[0_16px_30px_rgba(10,102,194,0.25)]',
                                labelHover: 'group-hover:text-[#0A66C2]',
                                icon: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            },
                            {
                                label: 'YouTube',
                                link: '#',
                                iconColor: 'text-[#FF0000]',
                                tint: 'from-[#FF0000]/20 to-[#F87171]/15',
                                hoverBorder: 'group-hover:border-[#FF0000]/35',
                                hoverShadow: 'group-hover:shadow-[0_16px_30px_rgba(255,0,0,0.2)]',
                                labelHover: 'group-hover:text-[#FF0000]',
                                icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            },
                            {
                                label: 'WhatsApp',
                                link: 'https://wa.me/+916366573772',
                                iconColor: 'text-[#25D366]',
                                tint: 'from-[#25D366]/20 to-[#86EFAC]/15',
                                hoverBorder: 'group-hover:border-[#25D366]/35',
                                hoverShadow: 'group-hover:shadow-[0_16px_30px_rgba(37,211,102,0.25)]',
                                labelHover: 'group-hover:text-[#25D366]',
                                iconNode: <i className="fa-brands fa-whatsapp text-[30px] leading-none" aria-hidden="true"></i>
                            }

                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ y: -6, scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex flex-col items-center gap-2.5"
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit Mystree on ${social.label}`}
                            >
                                <div className={`relative w-14 h-14 sm:w-[74px] sm:h-[74px] rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center text-slate-800 transition-all duration-300 shadow-[0_12px_28px_rgba(15,23,42,0.08)] ${social.hoverBorder} ${social.hoverShadow}`}>
                                    <span className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${social.tint} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                                    {social.iconNode ? (
                                        <span className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${social.iconColor}`}>
                                            {social.iconNode}
                                        </span>
                                    ) : (
                                        <svg
                                            viewBox="0 0 24 24"
                                            className={`relative z-10 size-8 fill-current transition-transform duration-300 group-hover:scale-110 ${social.iconColor}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {social.icon}
                                        </svg>
                                    )}
                                </div>
                                <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-slate-500 transition-colors ${social.labelHover}`}>
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Experience */}
            <section className="relative w-full h-[460px] sm:h-[560px] md:h-[700px] overflow-hidden">
                {/* Simulated High-Res Map */}
                {/* Simulated High-Res Map */}
                <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 group">
                    <iframe
                        src="https://maps.google.com/maps?q=13th%20Main%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038&t=m&z=15&output=embed&iwloc=near"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MyStree Clinic Location"
                        className="w-full h-full opacity-60 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] object-cover pointer-events-none"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Address Card */}
                <motion.div
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
                                    <span className="text-xs font-black uppercase">4.9</span>
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

                {/* Animated Marker - Centered */}
                <div className="hidden md:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[80%] z-10 pointer-events-none">
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
            < section className="py-16 md:py-24 bg-white dark:bg-background-dark relative overflow-hidden" >
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
            </section >

        </div >
    );
};

export default Contact;

