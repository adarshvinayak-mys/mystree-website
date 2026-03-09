const facts = [
    {
        icon: "favorite",
        color: "text-primary",
        bgColor: "bg-uranian-blue/30 dark:bg-blue-900/30",
        question: "Why do heart symptoms differ?",
        text: "Women often show subtler signs like fatigue, breathlessness, or nausea instead of classic chest pain."
    },
    {
        icon: "female",
        color: "text-secondary",
        bgColor: "bg-secondary/10 dark:bg-orange-900/20",
        question: "How many periods in a lifetime?",
        text: "On average, around 450 periods occur across life stages, adding up to nearly 10 years."
    },
    {
        icon: "medication",
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        question: "Why prioritize early autoimmune checks?",
        text: "Women have higher autoimmune risk, so early detection helps control flares and long-term complications."
    },
    {
        icon: "water_drop",
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        question: "Does hydration change with the cycle?",
        text: "Yes. Hormonal shifts can affect water retention and thirst, so hydration needs may vary through the month."
    },
    {
        icon: "bedtime",
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        question: "Do women need more sleep?",
        text: "Many women benefit from slightly more sleep, especially during periods of hormonal change and stress."
    },
    {
        icon: "psychology",
        color: "text-pink-600",
        bgColor: "bg-pink-100 dark:bg-pink-900/20",
        question: "How do hormones affect mood health?",
        text: "Postpartum and menopause transitions can strongly influence mood, anxiety, and emotional resilience."
    },
    {
        icon: "healing",
        color: "text-teal-600",
        bgColor: "bg-teal-100 dark:bg-teal-900/20",
        question: "Is pain felt differently by women?",
        text: "Pain perception can differ due to hormonal and nerve-related factors, so personalized care matters."
    },
    {
        icon: "monitor_heart",
        color: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-900/20",
        question: "Why are thyroid checks important?",
        text: "Women are much more likely to develop thyroid disorders, and timely screening prevents delayed diagnosis."
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {facts.map((fact) => (
                        <div
                            key={fact.question}
                            className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 border border-orange-50 dark:border-gray-700 transform hover:-translate-y-1"
                        >
                            <div className={`${fact.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${fact.color}`}>
                                <span className="material-symbols-thin text-3xl">{fact.icon}</span>
                            </div>
                            <h4 className="font-display font-bold text-lg mb-2 dark:text-white">{fact.question}</h4>
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
