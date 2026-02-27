import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top callback
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40">
            <button
                type="button"
                onClick={scrollToTop}
                className={`flex items-center justify-center p-3 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-gray-700 hover:text-primary hover:bg-orange-50 transition-all duration-300 transform md:hover:scale-110 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <span className="material-symbols-outlined font-bold text-xl">arrow_upward</span>
            </button>
        </div>
    );
}
