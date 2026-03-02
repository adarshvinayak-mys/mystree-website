import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const doctor2 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/doctor2.jpg';
const doctor3 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/doctor3.jpg';
const doctor1 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/doctor1.jpg';
const doctorNiv = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/nivetha-vishnuvardhan-mbbs-md.jpg';
const doctorPri = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/drpriya.jpeg';
const doctorChaitra = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/DrChaitraNayak.jpg';

export default function OurTeam() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-300 ">

            {/* Hero Section */}
            <section className="relative pt-12 pb-20 overflow-hidden bg-primary/5 dark:bg-gray-900">
                {/* Abstract Decoration */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-100/10 dark:bg-primary/5 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-4 dark:bg-white/10 dark:text-white">
                        World-Class Care
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                        Clinical Excellence at <span className="text-primary">Mystree</span>: Meet Our Doctors
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
                        A collective of industry-leading specialists dedicated to reimagining the patient experience through empathy, innovation, and expertise.
                    </p>
                </div>

            </section>

            {/* Founding Team Section */}
            <section className="pt-16 pb-0 lg:pt-24 lg:pb-0 relative bg-background-light dark:bg-gray-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-32 relative z-10">

                    {/* Founder 1: Dr. Smitha A.P. (Left Image, Right Text) */}
                    <div id="dr-smitha" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 relative">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px]">
                                    <img alt="Dr. Smitha A.P." className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src={doctor2} fetchPriority="high" decoding="sync" />
                                </div>

                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-2 lg:order-3 text-left pl-0 lg:pl-10">
                            <span className="text-primary font-bold tracking-wider text-sm mb-2 block uppercase">Co-Founder & CMO</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Dr. Smitha A.P.</h2>
                            <p className="text-lg lg:text-xl text-slate-500 mb-4 lg:mb-6 font-medium">High Risk Obstetrician & Fertility Specialist</p>
                            <p className="text-slate-600 dark:text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                                Dr. Smitha specializes in High Risk Obstetrics and In-utero Fetal Programming with a keen interest in treatment of endocrine disorders, recurrent pregnancy loss, bad obstetric history and high risk pregnancy. She strongly believes in patient care that goes beyond the illness by holistically approaching the care with the right mix of evidence-based medicine and personalized care.
                            </p>
                            <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 text-sm leading-relaxed italic">
                                Alumnus of Dr. B.R. Ambedkar Medical College, Bangalore and Diplomate of the National Board. Active member of BSOG and ISUOG.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">school</span> Credentials
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>MBBS, MS, DNB(OBG)</li>
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>FFM, FRM, MBA</li>
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>23 Years Experience (15 as specialist)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">translate</span> Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">English</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Kannada</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Tamil</span>
                                    </div>
                                </div>
                                <a href="https://my-stree.com/booking/appointment/2" className="w-full sm:w-auto mt-4 px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-booking">
                                    Book Appointment
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">calendar_month</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Founder 2: Dr. Surbhi Sinha (Text Left, Image Right) */}
                    <div id="dr-surbhi" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-left lg:text-right pr-0 lg:pr-10">
                            <span className="text-secondary font-bold tracking-wider text-sm mb-2 block uppercase">Lead Specialist</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Dr. Surbhi Sinha</h2>
                            <p className="text-lg lg:text-xl text-slate-500 mb-4 lg:mb-6 font-medium">OBGYN & Fertility Expert</p>
                            <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed ml-auto">
                                Renowned for her precision and empathy, Dr. Sinha is an expert in advanced surgical techniques and fertility solutions. She prioritizes faster recovery and minimal discomfort, combining cutting-edge tech with compassionate care.
                            </p>
                            <div className="space-y-6 flex flex-col lg:items-end">
                                <div className="lg:w-full">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2 lg:justify-end">
                                        <span className="material-symbols-outlined text-secondary text-sm">school</span> Credentials
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm lg:text-right">
                                        <li className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden w-1.5 h-1.5 rounded-full bg-secondary/50"></span>MBBS, MS, MD<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-secondary/50 ml-2"></span></li>
                                        <li className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden w-1.5 h-1.5 rounded-full bg-secondary/50"></span>MRCOG (UK), FRM<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-secondary/50 ml-2"></span></li>
                                    </ul>
                                </div>
                                <div className="lg:w-full">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2 lg:justify-end">
                                        <span className="material-symbols-outlined text-secondary text-sm">translate</span> Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2 lg:justify-end">
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">English</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Hindi</span>
                                    </div>
                                </div>
                                <a href="https://my-stree.com/booking/appointment/1" className="w-full sm:w-auto mt-4 px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-booking">
                                    Book Appointment
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">calendar_month</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-3">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px]">
                                    <img alt="Dr. Surbhi Sinha" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src={doctor1} loading="lazy" decoding="async" />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Founder 3: Priyanka Savina (Left Image, Right Text) */}
                    <div id="priyanka-savina" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 relative">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-orange-400/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px]">
                                    <img alt="Priyanka Savina" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src={doctor3} loading="lazy" decoding="async" />
                                </div>

                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-2 lg:order-3 text-left pl-0 lg:pl-10">
                            <span className="text-orange-400 font-bold tracking-wider text-sm mb-2 block uppercase">Wellness Lead</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Priyanka Savina</h2>
                            <p className="text-lg lg:text-xl text-slate-500 mb-4 lg:mb-6 font-medium">Nutritionist & Wellness Consultant</p>
                            <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                                Priyanka is the architect behind the seamless mystree experience. Specializing in postpartum nutrition and PCOS management, she ensures that from diet planning to lifestyle changes, every interaction is efficient and respectful of your body.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-400 text-sm">school</span> Credentials
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-400/50"></span>M.Sc Nutrition & Dietetics</li>
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-400/50"></span>Certified Wellness Coach</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-400 text-sm">translate</span> Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">English</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Hindi</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Kannada</span>
                                    </div>
                                </div>
                                <a href="https://my-stree.com/booking/appointment/3" className="w-full sm:w-auto mt-4 px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-booking">
                                    Book Appointment
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">calendar_month</span>
                                </a>
                            </div>
                        </div>
                    </div>



                    {/* Specialist 4: Dr. Chaitra Nayak (Right Image, Left Text - Alternating) */}
                    <div id="dr-chaitra" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-left lg:text-right pr-0 lg:pr-10">
                            <span className="text-secondary font-bold tracking-wider text-sm mb-2 block uppercase">Fertility Expert</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Dr. Chaitra Nayak</h2>
                            <p className="text-lg lg:text-xl text-slate-500 mb-4 lg:mb-6 font-medium">Infertility Specialist & Reproductive Endocrinologist</p>
                            <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed ml-auto">
                                With over 24 years of experience and founder of Kalpa Clinic, Dr. Nayak is a specialist in managing PCOS, recurrent IVF failures, and endometriosis. She combines deep clinical expertise with a passion for social causes.
                            </p>
                            <div className="space-y-6 flex flex-col lg:items-end">
                                <div className="lg:w-full">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2 lg:justify-end">
                                        <span className="material-symbols-outlined text-secondary text-sm">school</span> Credentials
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm lg:text-right">
                                        <li className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden w-1.5 h-1.5 rounded-full bg-secondary/50"></span>MBBS, MS (OBG), FNB (Reproductive Medicine)<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-secondary/50 ml-2"></span></li>
                                        <li className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden w-1.5 h-1.5 rounded-full bg-secondary/50"></span>Fellowship in Reproductive Medicine<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-secondary/50 ml-2"></span></li>
                                    </ul>
                                </div>
                                <div className="lg:w-full">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2 lg:justify-end">
                                        <span className="material-symbols-outlined text-secondary text-sm">translate</span> Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2 lg:justify-end">
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">English</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Hindi</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Kannada</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Tamil</span>
                                    </div>
                                </div>
                                <a href="https://my-stree.com/booking/appointment/4" className="w-full sm:w-auto mt-4 px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-booking">
                                    Book Appointment
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">calendar_month</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-3">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px]">
                                    <img alt="Dr. Chaitra Nayak" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src={doctorChaitra} loading="lazy" decoding="async" />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Specialist 5: Dr. Jasmine Flora (Left Image, Right Text) */}
                    <div id="dr-jasmine" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 relative">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-rose-400/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px]">
                                    <img alt="Dr. Jasmine Flora" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://my-stree.com/assets/doctors/Dr-Jasmine-Flora.png" loading="lazy" decoding="async" />
                                </div>

                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-2 lg:order-3 text-left pl-0 lg:pl-10">
                            <span className="text-rose-400 font-bold tracking-wider text-sm mb-2 block uppercase">Women's Health Specialist</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Dr. Jasmine Flora</h2>
                            <p className="text-lg lg:text-xl text-slate-500 mb-4 lg:mb-6 font-medium">Vaginismus/Pelvic Floor Friend</p>
                            <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                                Dedicated to holistic women's health with 21 years of experience. Dr. Jasmine specializes in obstetric and gynecological physiotherapy, pelvic floor rehab, and diastasis recti rehab, ensuring mothers recover strength and confidence.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-rose-400 text-sm">school</span> Credentials
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400/50"></span>MPT/MPTh - OBG Physiotherapy</li>
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400/50"></span>Lactation Counsellor</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-rose-400 text-sm">history</span> Experience
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">21 Years Overall</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">9 Years Specialist</span>
                                    </div>
                                </div>
                                <a href="https://my-stree.com/booking/appointment/5" className="w-full sm:w-auto mt-4 px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-booking">
                                    Book Appointment
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">calendar_month</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Specialist 7: Dr. Priyadarshini Sumanohar (Text Left, Image Right) */}
                    <div id="dr-priyadarshini" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-left lg:text-right pr-0 lg:pr-10">
                            <span className="text-teal-400 font-bold tracking-wider text-sm mb-2 block uppercase">Health & Wellness</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Dr. Priyadarshini Sumanohar</h2>
                            <p className="text-lg lg:text-xl text-slate-500 mb-4 lg:mb-6 font-medium">Priya, Health and Wellness Ally</p>
                            <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed ml-auto">
                                Dr. Sumanohar brings wholesale expertise in internal medicine, managing complex physiological conditions with a patient-centric approach. Her focus on MRCP standards ensures world-class diagnostic and treatment protocols.
                            </p>
                            <div className="space-y-6 flex flex-col lg:items-end">
                                <div className="lg:w-full">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2 lg:justify-end">
                                        <span className="material-symbols-outlined text-teal-400 text-sm">school</span> Credentials
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm lg:text-right">
                                        <li className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden w-1.5 h-1.5 rounded-full bg-teal-400/50"></span>MBBS, MD<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-teal-400/50 ml-2"></span></li>
                                        <li className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden w-1.5 h-1.5 rounded-full bg-teal-400/50"></span>MRCP (Internal Medicine)<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-teal-400/50 ml-2"></span></li>
                                    </ul>
                                </div>
                                <div className="lg:w-full">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 flex items-center gap-2 lg:justify-end">
                                        <span className="material-symbols-outlined text-teal-400 text-sm">translate</span> Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2 lg:justify-end">
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">English</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Hindi</span>
                                        <span className="px-4 py-1.5 sm:px-3 sm:py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-slate-700 dark:text-gray-300">Kannada</span>
                                    </div>
                                </div>
                                <a href="https://my-stree.com/booking/appointment/6" className="w-full sm:w-auto mt-4 px-8 py-3.5 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-booking">
                                    Book Appointment
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">calendar_month</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-3">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-teal-400/10 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px] bg-white">
                                    <img alt="Dr. Priyadarshini Sumanohar" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src={doctorPri} loading="lazy" decoding="async" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Placeholder: Swati profile slot can be inserted here in the same alternating layout when ready. */}

            </section>

            {/* Value Proposition Section */}
            <section className="pt-12 pb-24 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-slate-900 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6">Why Our Leadership Matters</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our founding team combines decades of medical expertise with a modern vision for healthcare delivery, ensuring every patient feels seen, heard, and cared for.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Feature 1 */}
                        <div className="group relative bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30 hover:bg-orange-50/50 dark:border-gray-700 dark:hover:border-primary/30 dark:hover:bg-slate-800 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-700 dark:to-slate-600 text-primary mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">Patient-First Mindset</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Every decision we make starts with one simple question: "How does this significantly improve our patient's journey?"
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30 hover:bg-orange-50/50 dark:border-gray-700 dark:hover:border-primary/30 dark:hover:bg-slate-800 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-700 dark:to-slate-600 text-primary mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl">science</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">Integrated Technology</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    We leverage the latest medical technology not to replace human care, but to enhance accuracy, speed, and outcomes.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30 hover:bg-orange-50/50 dark:border-gray-700 dark:hover:border-primary/30 dark:hover:bg-slate-800 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-700 dark:to-slate-600 text-primary mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl">favorite</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">Holistic Wellness</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    We treat the root cause, not just the symptoms, combining traditional medicine with lifestyle and nutritional support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-20 bg-primary dark:bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience Better Healthcare?</h2>
                    <p className="text-orange-50 text-lg mb-10">Join the thousands of patients who have trusted the mystree team with their health journey.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://my-stree.com/booking" className="bg-white text-primary hover:bg-orange-50 font-bold py-4 px-10 rounded-lg shadow-lg transition-transform hover:-translate-y-1 inline-block">
                            Book Appointment
                        </a>
                        <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-lg transition-colors">
                            View Our Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
