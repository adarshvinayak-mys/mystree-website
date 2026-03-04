import React from 'react';

export default function StickyBookingBar({
    title = "Book your appointment today",
    subtitle = "Consult with Bangalore's top specialists."
}) {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.1)] border-t border-gray-100 p-4 z-[60] transition-transform duration-300 transform translate-y-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="hidden md:block">
                    <p className="font-bold text-cadet-gray text-lg font-serif">{title}</p>
                    <p className="text-cadet-gray/70 text-sm">{subtitle}</p>
                </div>
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <button className="w-full md:w-fit px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-[#d0461f] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                        <span className="material-icons text-base">calendar_month</span>
                        <span>Book Appointment</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
