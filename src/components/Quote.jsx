import { motion } from 'framer-motion';

export default function Quote() {
    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FB923C]">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 bg-[#EA580C] opacity-20 z-0"></div>

            {/* Animated Abstract Ornaments */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 45, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] pointer-events-none z-0"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -30, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none z-0"
            ></motion.div>

            {/* Medical Icon Pattern Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-12 p-8 transform -rotate-6 scale-110">
                    {[...Array(48)].map((_, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <span className="material-symbols-thin text-white text-5xl">
                                {["cardiology", "female", "water_drop", "monitor_heart", "psychology", "medication", "stethoscope", "nutrition"][i % 8]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-3/4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                Embark on Your Healing Journey
                            </span>
                            <h3 className="text-4xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8 drop-shadow-md">
                                You are not just a patient.<br />
                                <span className="font-serif italic text-white/90">You are a story we honor.</span>
                            </h3>
                            <p className="text-white/90 text-xl md:text-2xl font-serif italic max-w-2xl leading-relaxed">
                                "Experience healthcare that feels like a partnership. Start your journey with MyStree today."
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="shrink-0"
                    >
                        <a
                            className="bg-white text-[#EA580C] hover:bg-orange-50 px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-3 group"
                            href="https://my-stree.com/booking"
                        >
                            <span>Start Your Journey</span>
                            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-4 text-center">No judgment • Just care</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
