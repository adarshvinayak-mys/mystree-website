const facts = [
    {
        icon: "favorite",
        color: "text-primary",
        bgColor: "bg-uranian-blue/30 dark:bg-blue-900/30",
        question: "Why do heart attack symptoms differ in women?",
        text: "Women often experience subtler heart attack signs such as extreme fatigue, breathlessness, jaw pain, or nausea, rather than classic chest pain. Understanding these unique physiological differences and prioritizing cardiovascular screening is critical for women to prevent life-threatening delays in diagnosis."
    },
    {
        icon: "female",
        color: "text-secondary",
        bgColor: "bg-secondary/10 dark:bg-orange-900/20",
        question: "How many periods does a woman have in a lifetime?",
        text: "On average, a woman experiences around 450 menstrual cycles across her reproductive life, from adolescence to menopause. That adds up to nearly 10 years of periods, making consistent, specialized gynecological care essential at every life stage."
    },
    {
        icon: "medication",
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        question: "Why is early autoimmune screening a priority for women?",
        text: "Women have a significantly higher risk of developing autoimmune and thyroid disorders due to complex hormonal fluctuations. Timely clinical screening detects these issues early, preventing delayed diagnosis, controlling inflammatory flares, and managing long-term health complications effectively."
    },
    {
        icon: "water_drop",
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        question: "Does the menstrual cycle affect hydration and pain perception?",
        text: "Yes, natural hormonal shifts throughout the menstrual cycle directly affect water retention, thirst, and nerve-related pain perception. Because women experience pain and hydration needs differently throughout the month, we provide customized, empathetic care tailored to your specific biological timeline."
    },
    {
        icon: "bedtime",
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        question: "How do hormonal shifts affect a woman's mood and sleep?",
        text: "Major hormonal transitions during postpartum and menopause strongly influence emotional resilience, often causing mood swings, severe anxiety, and sleep disruptions. Because a woman's body requires slightly more rest during these phases, personalized medical care is essential to restore hormonal and mental balance."
    },
    {
        icon: "psychology",
        color: "text-pink-600",
        bgColor: "bg-pink-100 dark:bg-pink-900/20",
        question: "How do hormones affect mood health?",
        text: "Postpartum and menopause transitions strongly influence mood, anxiety, and emotional resilience in women. Estrogen and progesterone fluctuations impact serotonin production, making expert clinical mental health support essential for holistic hormonal well-being."
    },
    {
        icon: "healing",
        color: "text-teal-600",
        bgColor: "bg-teal-100 dark:bg-teal-900/20",
        question: "Is pain felt differently by women?",
        text: "Pain perception can differ significantly due to hormonal and nerve-related biological factors unique to women. This means personalized, empathetic clinical care is critical—a one-size-fits-all approach to pain management is insufficient for female patients."
    },
    {
        icon: "monitor_heart",
        color: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-900/20",
        question: "Why are regular thyroid checks important for women?",
        text: "Women are significantly more likely to develop thyroid disorders, including hypothyroidism and Hashimoto's disease. Timely thyroid screening at our Indiranagar facility prevents delayed diagnosis, controls hormonal imbalances, and protects long-term metabolic and reproductive health."
    }
];

export default function Facts() {
    return (
        <section className="py-12 bg-corn-silk dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-2">
                    Women's Health <span className="text-primary italic">Insights: Did You Know?</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400">Expert answers to the health questions women ask most — powered by our clinical specialists in Indiranagar, Bangalore.</p>
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
