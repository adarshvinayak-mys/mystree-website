export default function HowItWorks() {
    return (
        <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">Simple Process</span>
                    <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mt-2">
                        Your Journey to Better Health
                    </h2>
                    <p className="text-gray-500 mt-2">Book your consultation in under 5 minutes — in person at Indiranagar or via secure video call.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 dark:bg-gray-700 -z-10"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white dark:border-gray-800">
                            <span className="material-symbols-thin text-4xl text-rose-500">edit_note</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">1. Share Your Concern</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Tell us what's bothering you—irregular periods, pelvic pain, pregnancy planning, or hormonal concerns. No judgment, complete privacy.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white dark:border-gray-800">
                            <span className="material-symbols-thin text-4xl text-blue-500">person_search</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">2. Get Matched</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            We instantly recommend the best available specialist—OBGYN, Fertility, Nutrition, or Mental Health—for your specific clinical needs.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white dark:border-gray-800">
                            <span className="material-symbols-thin text-4xl text-green-500">video_call</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">3. Start Consultation</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Connect via secure video call or visit our Indiranagar clinic. Get instant, personalized care plans and prescriptions on the same day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
