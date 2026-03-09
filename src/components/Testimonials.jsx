
const reviews = [
    {
        name: "Khushboo Gupta",
        date: "2 weeks ago",
        service: "OBGYN Consult",
        rating: 5,
        review: "A great new facility right in the heart of Indiranagar. I consulted with Dr. Surbhi—she was amazing, patient, and gave me enough time to share my issues. If you're looking for a good gynaecologist in Bangalore, look no further. Highly recommended."
    },
    {
        name: "Prema Gopal",
        date: "a month ago",
        service: "Specialized Care",
        rating: 5,
        review: "I went to My Stree clinic at Indiranagar to meet Dr. Smitha. She is so gentle and kind. She listened to all my issues and suggested the best treatment and medication which has helped me a lot. The place is lively and the staff are very kind and knowledgeable."
    },
    {
        name: "Deepshikha Batheja",
        date: "a month ago",
        service: "OBGYN — Ovarian Cyst",
        rating: 5,
        review: "I consulted with Dr. Surbhi Sinha for my ovarian cyst issue and she listened to me patiently and responded in utmost professional and polite manner, suggesting and discussing various treatment options in detail. I am happy with the consultation."
    },
    {
        name: "Prerna Sinha",
        date: "a month ago",
        service: "Holistic Women's Wellness",
        rating: 5,
        review: "This is a beautiful space created by some of the doctors who I have consulted for my own healing. I can vouch for the doctors, who are not just doctors but also people who have kept compassion alive. The people, the place, and the treatment can be highly trusted."
    },
    {
        name: "Jilu David & Sheetal Bidri",
        date: "a month ago",
        service: "Integrated Care — Nutrition & Gynecology",
        rating: 5,
        review: "Dr. Surbhi has been my trusted gynecologist for years. Ms. Priyanka, the nutritionist, is friendly and pays close attention to you. Ms. Gracy is also very gentle. Highly recommend Dr. Surbhi and the entire My Stree team for scientific women's wellness in Indiranagar."
    },
    {
        name: "Sheetal Bidri",
        date: "2 weeks ago",
        service: "Women's Healthcare — Bangalore",
        rating: 5,
        review: "A passionate team committed to women's wellness in the most scientific way. Highly recommend their services for comprehensive women's healthcare in Bangalore."
    }
];

const cardColors = [
    "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30",
    "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30",
    "bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900/30",
    "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/30",
    "bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/30",
    "bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900/30"
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Patient Stories | Trusted by 10,000+ Women in Bangalore</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
                        Real Voices, Real Results
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Verified Google reviews from women across Indiranagar and Bangalore. We are grateful for every story shared.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {reviews.map((review, index) => (
                        <div key={index} className={`p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col h-full ${cardColors[index % cardColors.length]}`}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary font-bold text-xl shadow-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                                    <p className="text-xs text-slate-500">{review.date}</p>
                                    {review.service && <p className="text-xs text-primary font-semibold mt-0.5">✦ {review.service}</p>}
                                </div>
                                <div className="ml-auto flex text-yellow-500 text-xs">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-[16px] fill-current">
                                            {i < review.rating ? 'star' : 'star_border'}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif leading-none">"</span>
                                <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed relative z-10 italic">
                                    "{review.review}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://g.page/r/YOUR_GOOGLE_MAPS_LINK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                        <span>Read more on Google</span>
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
