const facts = [
    {
        icon: "favorite",
        color: "text-primary",
        bgColor: "bg-uranian-blue/30 dark:bg-blue-900/30",
        text: "Our hearts beat faster than men's on average, and they're more likely to experience subtle heart attack symptoms like fatigue & nausea."
    },
    {
        icon: "female",
        color: "text-secondary",
        bgColor: "bg-secondary/10 dark:bg-orange-900/20",
        text: "The average woman will have about 450 periods in her lifetime, equating to roughly 10 years of menstruation!"
    },
    {
        icon: "medication",
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        text: "Women are more prone to autoimmune diseases, making early diagnosis and management crucial for conditions like lupus and rheumatoid arthritis."
    },
    {
        icon: "water_drop",
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        text: "Hydration impacts women differently throughout their cycle. Estrogen levels can influence water retention and hydration needs."
    },
    {
        icon: "bedtime",
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        text: "Women require about 20 minutes more sleep than men on average due to complex multitasking brains and hormonal fluctuations."
    },
    {
        icon: "psychology",
        color: "text-pink-600",
        bgColor: "bg-pink-100 dark:bg-pink-900/20",
        text: "Hormonal shifts during postpartum and menopause significantly impact mental health, requiring specialized care and understanding."
    },
    {
        icon: "healing",
        color: "text-teal-600",
        bgColor: "bg-teal-100 dark:bg-teal-900/20",
        text: "Women possess a higher pain threshold in some contexts but are more sensitive to pain perception due to nerve density variations."
    },
    {
        icon: "monitor_heart",
        color: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-900/20",
        text: "Regular screenings for thyroid function are vital as women are 5-8 times more likely than men to have thyroid problems."
    }
];

export default function Facts() {
    return (
        <section className="py-12 bg-corn-silk dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-2">
                    Women's Health <span className="text-primary italic">Insights</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400">Did you know these fascinating facts about your body?</p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks for fading effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-corn-silk to-transparent dark:from-gray-900 z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-corn-silk to-transparent dark:from-gray-900 z-10"></div>

                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-4">
                    {[...facts, ...facts].map((fact, index) => (
                        <div
                            key={index}
                            className="w-[280px] md:w-[350px] flex-shrink-0 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 border border-orange-50 dark:border-gray-700 transform hover:-translate-y-1"
                        >
                            <div className={`${fact.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${fact.color}`}>
                                <span className="material-symbols-thin text-3xl">{fact.icon}</span>
                            </div>
                            <h4 className="font-display font-bold text-lg mb-2 dark:text-white">Did You Know?</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {fact.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
