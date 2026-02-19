export default function Quote() {
    return (
        <div className="bg-gradient-to-br from-secondary to-orange-400 relative overflow-hidden">
            {/* Medical Icon Pattern Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-8 p-4 transform -rotate-12 scale-110">
                    {/* Repeated icons to form a pattern */}
                    {[...Array(48)].map((_, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <span className="material-symbols-thin text-white text-4xl">
                                {["cardiology", "female", "water_drop", "monitor_heart", "psychology", "medication", "stethoscope", "nutrition"][i % 8]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="md:w-2/3 mb-8 md:mb-0 text-white">
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight text-shadow-soft">
                        You are not just a patient.<br />
                        <span className="font-serif italic text-white/90">You are a story we honor.</span>
                    </h3>
                    <p className="text-white/90 text-lg font-medium max-w-xl">
                        Experience healthcare that feels like a partnership. Start your journey with mystree today.
                    </p>
                </div>
                <div>
                    <a className="bg-white text-secondary hover:bg-gray-100 px-10 py-4 rounded-full font-bold shadow-xl transition transform hover:scale-105 inline-block" href="#">
                        Start Your Journey
                    </a>
                </div>
            </div>
        </div>
    );
}
