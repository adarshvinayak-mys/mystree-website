import { useState, useEffect } from 'react';

export default function ChatButton() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-6 z-50 group">
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 w-max bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Chat with us
                <div className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>

            <button className={`bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full p-0 shadow-[0_8px_30px_rgb(16,185,129,0.3)] flex items-center transition-all duration-300 transform md:hover:scale-105 hover:shadow-emerald-500/40 ${isScrolled ? 'w-14 h-14 justify-center' : 'pr-6 pl-2 py-2 gap-3'}`}>
                <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm ${isScrolled ? '' : ''}`}>
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <span className={`font-bold text-sm tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${isScrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>Chat Support</span>
            </button>
        </div>
    );
}
