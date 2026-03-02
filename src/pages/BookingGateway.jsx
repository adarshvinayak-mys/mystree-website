import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BookingGateway() {
    useEffect(() => {
        window.location.href = 'https://my-stree.com/booking';
    }, []);

    return (
        <div className="min-h-[70vh] bg-background-light text-slate-800 px-4 sm:px-6 py-20 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-xl p-8 sm:p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-icons text-3xl animate-spin">refresh</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-3">
                    Redirecting to Booking Gateway
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                    Please wait while we transfer you to our secure booking system. If you are not redirected automatically, <a href="https://my-stree.com/booking" className="text-primary font-bold hover:underline">click here</a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                </div>
            </div>
        </div>
    );
}
