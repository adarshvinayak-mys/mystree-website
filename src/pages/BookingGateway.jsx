import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BookingGateway() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-[70vh] bg-background-light text-slate-800 px-4 sm:px-6 py-20 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-xl p-8 sm:p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-icons text-3xl">construction</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-3">
                    Booking Gateway Under Construction
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                    Online booking is currently being upgraded for a better experience. Please use our contact options for immediate scheduling support.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/contact"
                        className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-light transition-colors"
                    >
                        Go to Contact Support
                    </Link>
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
