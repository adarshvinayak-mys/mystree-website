import { Link } from 'react-router-dom';


export default function Footer() {

    return (
        <footer data-no-booking-intercept="true" className="bg-cadet-gray text-white pt-12 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="inline-block">
                                <img src="https://my-stree.com/assets/images/mystreelogo.svg" alt="Mystree Logo" className="h-16 w-auto object-contain brightness-0 invert" />
                            </div>
                        </div>
                        <p className="text-white/80 text-sm mb-6 leading-relaxed">
                            Compassionate, personalized healthcare for every stage of a woman's life. We are here to listen, support, and heal.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-cadet-gray transition" href="https://www.linkedin.com/company/my-stree-for-you/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-cadet-gray transition" href="https://www.instagram.com/mystreeforyou?igsh=MXhhOXY0aWxidGtwbQ==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-lg"></i></a>
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-cadet-gray transition" href="https://wa.me/+916366573772" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-lg"></i></a>
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-cadet-gray transition" href="mailto:info@mystree.org"><span className="material-symbols-outlined text-lg">mail</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-6 font-display border-b border-white/20 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><Link className="hover:text-white hover:translate-x-1 transition flex items-center gap-2" to="/"><span className="material-symbols-outlined text-xs">arrow_forward_ios</span> Home</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition flex items-center gap-2" to="/about"><span className="material-symbols-outlined text-xs">arrow_forward_ios</span> About Us</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition flex items-center gap-2" to="/team"><span className="material-symbols-outlined text-xs">arrow_forward_ios</span> Our Doctors</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition flex items-center gap-2" to="/showcase/events"><span className="material-symbols-outlined text-xs">arrow_forward_ios</span> Resources</Link></li>
                            <li><Link className="hover:text-white hover:translate-x-1 transition flex items-center gap-2" to="/contact"><span className="material-symbols-outlined text-xs">arrow_forward_ios</span> Contact</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-6 font-display border-b border-white/20 pb-2 inline-block">Our Services</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><Link className="hover:text-white transition" to="/services/obgyn">OBGYN Consults</Link></li>
                            <li><Link className="hover:text-white transition" to="/services/adolescent-health">Adolescent Health</Link></li>
                            <li><Link className="hover:text-white transition" to="/services/prenatal">Prenatal Care</Link></li>
                            <li><Link className="hover:text-white transition" to="/services/fertility">Fertility Treatments</Link></li>
                            <li><Link className="hover:text-white transition" to="/services/menopause">Menopause Support</Link></li>
                            <li><Link className="hover:text-white transition" to="/services/psychology">Mental Wellness</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-6 font-display border-b border-white/20 pb-2 inline-block">Get in Touch</h4>
                        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined">call</span>
                                <div>
                                    <p className="text-xs uppercase opacity-70">Call Us</p>
                                    <p className="font-bold text-lg">+91 63665 73772</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined">email</span>
                                <div>
                                    <p className="text-xs uppercase opacity-70">Email Us</p>
                                    <p className="text-sm">info@mystree.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
                    <p>© 2024 My Stree - All Rights Reserved</p>
                    <div className="flex gap-6 mt-4 md:mt-0 items-center">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <div className="flex gap-2 text-white/40">
                            <span className="material-symbols-outlined">credit_card</span>
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
