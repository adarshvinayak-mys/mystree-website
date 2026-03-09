
const reviews = [
    {
        name: "Khushboo Gupta",
        date: "2 weeks ago",
        rating: 5,
        review: "A great new facility right in the heart of Indiranagar. The team makes you feel welcome from the moment you step in and you just know you’ll be well taken care of! I consulted with Dr. Surbhi- she was amazing. Patient and gave me enough time to share my issues. Can’t thank her enough for her guidance. If you’re looking for a good gynaecologist, look no further. Highly recommended."
    },
    {
        name: "Prema Gopal",
        date: "a month ago",
        rating: 5,
        review: "I went to My stree clinic at Indiranagar to meet Dr. Smitha. She is so gentle and kind. She listened to all my issues and suggested the best treatment and medication which has helped me a lot. I'm doing better. The place is so lively and the staff are very kind and knowledgeable."
    },
    {
        name: "Deepshikha Batheja",
        date: "a month ago",
        rating: 5,
        review: "I consulted with Dr. Surbhi Sinha for my ovarian cyst issue and she listened to me patiently and responded in utmost professional and polite manner, suggesting and discussing various treatment options in detail. I am happy with the consultation."
    },
    {
        name: "Prerna Sinha",
        date: "a month ago",
        rating: 5,
        review: "This is a beautiful space created by some of the doctors who I have consulted for my own healing. I can vouch for the doctors, who are not just doctors but also people who have kept compassion alive. The people, the place and the treatment can be highly trusted. Would love to see more and more of you reach there and find yourself in safe hands :)"
    },
    {
        name: "Jilu David",
        date: "a month ago",
        rating: 5,
        review: "Dr. Surbhi has been my trusted gynecologist for the last few years. She is firm yet empathetic and considerate. Ms. Priyanka, the nutritionist, is friendly and pays close attention to you. Ms. Gracy (nurse) is also very gentle. Ms. Geneviev, the front office manager is attentive. I highly recommend Dr. Surbhi, and My Stree clinic."
    },
    {
        name: "Sheetal Bidri",
        date: "2 weeks ago",
        rating: 5,
        review: "A passionate team that is committed to women’s wellness in the most scientific way. Highly recommend their services for women’s healthcare."
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
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Patient Stories</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
                        Trusted by Women like You
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Real experiences from our community. We are grateful for every review.
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
                                <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif leading-none">“</span>
                                <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed relative z-10 italic">
                                    "{review.review}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://maps.app.goo.gl/7w221ApXEqaGJ1yj7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                        <span>Read more on Google</span>
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
