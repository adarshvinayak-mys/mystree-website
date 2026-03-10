import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopButton() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

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

    useEffect(() => {
        const footer = document.querySelector('.ms-footer');
        if (!footer) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setIsFooterVisible(entry.isIntersecting),
            { threshold: 0.08 }
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, [location.pathname]);

    useEffect(() => {
        const onChatToggle = (event) => {
            setIsChatOpen(Boolean(event.detail?.open));
        };

        window.addEventListener('mystree-chat-toggle', onChatToggle);
        return () => window.removeEventListener('mystree-chat-toggle', onChatToggle);
    }, []);

    return (
        <div className={`fixed right-4 md:right-6 z-40 transition-all duration-300 ${isFooterVisible ? 'bottom-40 md:bottom-44' : 'bottom-20 md:bottom-24'}`}>
            <button
                type="button"
                onClick={scrollToTop}
                className={`flex items-center justify-center p-3 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-gray-700 hover:text-primary hover:bg-orange-50 transition-all duration-300 transform md:hover:scale-110 border border-gray-100 ${(isVisible && !isChatOpen) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <span className="material-symbols-outlined font-bold text-xl">arrow_upward</span>
            </button>
        </div>
    );
}
