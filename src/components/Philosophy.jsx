export default function Philosophy() {
    return (
        <section className="py-12 bg-gradient-to-b from-corn-silk to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-uranian-blue rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
                        <img alt="Illustration of woman meditating with health icons" className="relative rounded-3xl shadow-xl w-full object-cover h-96 z-10 bg-gray-100" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMeJwUSE8_I6drByML0s6ptvLOEkBJNCIrM20qSk9cGn09e9fUUya6UCv-Ljlz3KQv3csbVk827kO87k4wxhVIeTOo8zBTgsA9oXroOMwBpWaHKQbU4FGTGfbbhdvb1L-Y6NP73mYWvMaXpWs6_t37j2g0kGcnfgiJXDxTxQlpm6N0osjr2KCUdBCEQYzvIQK71DLPrEuIljMHiAj8zT_SjVxeZlTR799QH0iOvXShfcXtlVg6leddHkT7O52_OjYA1daYNeAyrP5r" />
                    </div>
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Healthcare that actually <span className="text-primary italic">listens.</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
                            <p className="mb-6 font-medium text-xl text-gray-800 dark:text-gray-200">
                                A woman's health journey is unique. From adolescence to menopause, every phase brings its own joys and challenges.
                            </p>
                            <p className="mb-8">
                                My Stree moves beyond transactional healthcare. We combine professional expertise with deep empathy to offer personalized solutions tailored to your unique experiences.
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-primary">15+</p>
                                <p className="text-xs uppercase tracking-wide font-bold text-gray-500">Specialists</p>
                            </div>
                            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-primary">10k+</p>
                                <p className="text-xs uppercase tracking-wide font-bold text-gray-500">Patients</p>
                            </div>
                            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-primary">4.9</p>
                                <p className="text-xs uppercase tracking-wide font-bold text-gray-500">Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
