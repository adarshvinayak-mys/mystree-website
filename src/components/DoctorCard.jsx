import { Link, useNavigate } from 'react-router-dom';

export default function DoctorCard({
    name,
    specialty,
    designation,
    image,
    qualification,
    experience,
    languages,
    badgeText,
    consultationFee,
    onBook,
    profileId
}) {
    const navigate = useNavigate();
    const badgeValue = typeof badgeText === 'string' ? badgeText.trim() : '';
    const isFeeInBadge = /consultation|session|fee|₹|INR/i.test(badgeValue);
    const labelText = !isFeeInBadge ? badgeValue : '';
    const feeValue = consultationFee || (isFeeInBadge ? badgeValue : "₹1000");
    const titleDesignation = designation || specialty || "Consultant";

    const ProfileLinkWrapper = ({ children, className }) => {
        if (profileId) {
            return <Link to={`/our-team#${profileId}`} className={className}>{children}</Link>;
        }
        return <div className={className}>{children}</div>;
    };

    return (
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200/70 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col h-full">
            <div className="p-4 md:p-5 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group-hover:scale-[1.02] transition-transform duration-500">
                        <ProfileLinkWrapper className="block w-full h-full cursor-pointer">
                            <img
                                alt={name}
                                className="w-full h-full object-cover"
                                src={image}
                            />
                        </ProfileLinkWrapper>
                    </div>

                    <div className="flex-1 min-w-0 pt-1 space-y-2">
                        <ProfileLinkWrapper className="block cursor-pointer">
                            <h2 className="text-xl sm:text-[1.7rem] font-bold text-slate-900 dark:text-white leading-tight">
                                {name}
                            </h2>
                        </ProfileLinkWrapper>

                        <p className="text-[11px] sm:text-xs font-semibold text-primary tracking-[0.16em] uppercase line-clamp-2">
                            {titleDesignation}
                        </p>

                        {labelText && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
                                {labelText}
                            </p>
                        )}

                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 rounded-md">
                                <span className="material-icons text-primary text-xs">verified</span>
                                <span className="text-[10px] font-medium">Verified Expert</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 rounded-md">
                                <span className="material-icons text-primary text-xs">star</span>
                                <span className="text-[10px] font-medium">4.9 (120+ Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-5 py-4 border-y border-slate-100 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-900/20 flex-grow">
                <div className="space-y-3">
                    {qualification && (
                        <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="material-icons text-primary text-xs">school</span>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Qualifications</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                    {qualification}
                                </p>
                            </div>
                        </div>
                    )}

                    {experience && (
                        <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="material-icons text-primary text-xs">work_history</span>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Experience</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                    {experience}
                                </p>
                            </div>
                        </div>
                    )}

                    {languages && (
                        <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="material-icons text-primary text-xs">translate</span>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Languages</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                    {languages}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-4 md:p-5 mt-auto">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-0.5">Consultation Fee</span>
                            <span className="text-2xl font-semibold font-sans text-slate-900 dark:text-white">{feeValue}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => window.location.href = 'https://my-stree.com/booking'}
                        className="group relative w-full bg-primary hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-base shadow-md shadow-primary/20 transition-all active:scale-[0.98] overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Book Appointment
                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                        <span className="material-icons text-[11px]">lock</span>
                        Secure booking powered by Mystree
                    </p>
                </div>
            </div>
        </div>
    );
}
