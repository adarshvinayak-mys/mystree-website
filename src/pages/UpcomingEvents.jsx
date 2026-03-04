import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const event1 = '/mystreeevent1.webp';
const event2 = '/mystreeevent2.webp';
const event3 = '/mystreeevent3.webp';
const mystreepro = '/blog/mystreepro.webp';
const sanctuaryHero = '/sanctuary_hero_bg_v2_1771307980803.webp';

const UpcomingEvents = () => {
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const upcomingEventsData = [
        {
            date: "Mar 01",
            time: "11:00 AM",
            location: "HAL 2nd stage, Indiranagar",
            title: "Heal with Sound, Align with Vibration",
            quote: '"Step into a meditative experience that restores balance and inner peace."',
            image: mystreepro,
            type: "Wellness",
            price: "₹1200"
        },
        {
            date: "Oct 22",
            time: "2:00 PM",
            location: "Workshop Hall",
            title: "Nutrition for Cycles",
            quote: '"Nourish your body through every phase of your natural rhythm."',
            image: event2,
            type: "Workshop"
        },
        {
            date: "Nov 05",
            time: "6:30 PM",
            location: "Fire Pit",
            title: "Evening Circle & Share",
            quote: '"A safe space to share stories, support one another, and just be."',
            image: event3,
            type: "Circle"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openEventModal = (event) => {
        setSelectedEvent(event);
        setIsEventModalOpen(true);
    };

    return (
        <div className="bg-[#FCF4D9] text-[#1b110e] font-sans antialiased overflow-x-hidden selection:bg-[#ED5B2D]/30">
            {/* Custom Styles and Fonts */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                
                .bg-paper {
                    background-color: #fff;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
                }
                
                .bg-gradient-flame {
                    background: linear-gradient(135deg, #ED5B2D 0%, #FF833C 100%);
                }
            `}} />



            {/* Event Detail Modal */}
            <AnimatePresence>
                {isEventModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsEventModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/90 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-white/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-0"
                        >
                            <button
                                onClick={() => setIsEventModalOpen(false)}
                                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[#1b110e]">close</span>
                            </button>
                            <div className="h-52 sm:h-64 relative">
                                <img src={selectedEvent?.image || event2} alt={selectedEvent?.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="bg-[#ED5B2D] px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-2 inline-block font-sans">{selectedEvent?.type || "Workshop"}</span>
                                    <h2 className="text-3xl font-bold font-display">{selectedEvent?.title || "Event Details & Highlights"}</h2>
                                </div>
                            </div>
                            <div className="p-6 md:p-10 lg:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1b110e] mb-3 font-display">About this Gathering</h3>
                                            <p className="text-[#3c2a24] leading-relaxed font-sans">Immerse yourself in a transformative experience designed to reconnect you with your inner rhythm. This workshop combines guided meditation, expert-led discussions, and community sharing circles to foster deep healing and growth.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1b110e] mb-3 font-display">What to Expect</h3>
                                            <ul className="space-y-3 text-[#3c2a24] font-sans">
                                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[#ED5B2D] text-lg">check_circle</span> <span>Guided somatic breathwork session</span></li>
                                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[#ED5B2D] text-lg">check_circle</span> <span>Nutritional guidance for hormonal balance</span></li>
                                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[#ED5B2D] text-lg">check_circle</span> <span>Take-home wellness kit ($50 value)</span></li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-sm">
                                            <h3 className="text-lg font-bold text-[#1b110e] mb-4 font-display">Attendee Voices</h3>
                                            <div className="flex gap-4 font-sans">
                                                <div className="size-12 rounded-full bg-neutral-200 shrink-0 bg-cover shadow-inner" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_RQAzTAAt1fRkeUEkuKeWr0F0Fah0D2yqP1hWbOCODsqpPT-nI9vvDcbaJBhJz71juotFbhroAlluaicR8kx7aR_-AcvImI0JIiJw279pLi131ATt50CdOkrcnjmBVXRdZOITps4cd8epMmZU7wCxVQC-0wgdpVvl8M30XexUJjbPs7Oe3r1USgBfY_N4Hbvkn_3DZQsnWfXUZ6aRLNWBk4CPH4NmNbqKRU_sokx0D_VPy_6XMlmRvkU2LqAnWBtBRvYTN6YP5YFv")' }}></div>
                                                <div>
                                                    <p className="text-base italic text-[#3c2a24] mb-3 font-display leading-relaxed">"An absolutely life-changing afternoon. I walked away feeling lighter and more understood than I have in years."</p>
                                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5B2D]">– Jessica M.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/40 border-t-4 border-t-primary font-sans">
                                            <div className="space-y-4 mb-6">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-[#ED5B2D]">calendar_today</span>
                                                    <div>
                                                        <p className="text-[10px] text-[#2d1a15]/60 uppercase font-bold tracking-widest">Date</p>
                                                        <p className="font-bold text-base text-[#1b110e]">Saturday, {selectedEvent?.date || "Oct 14"}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="material-symbols-outlined text-[#ED5B2D] bg-[#ED5B2D]/10 p-2 rounded-xl">schedule</span>
                                                    <div>
                                                        <p className="text-[10px] text-[#2d1a15]/60 uppercase font-bold tracking-widest">Time</p>
                                                        <p className="font-bold text-base text-[#1b110e]">{selectedEvent?.time || "8:00 AM"} - {selectedEvent?.time?.split(':')[0].padStart(2, '0') === '08' ? '11:00 AM' : '05:00 PM'}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="material-symbols-outlined text-[#ED5B2D] bg-[#ED5B2D]/10 p-2 rounded-xl">location_on</span>
                                                    <div>
                                                        <p className="text-[10px] text-[#2d1a15]/60 uppercase font-bold tracking-widest">Location</p>
                                                        <p className="font-bold text-base text-[#1b110e]">{selectedEvent?.location || "The Garden Sanctuary"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {selectedEvent?.registerUrl ? (
                                                <a
                                                    href={selectedEvent.registerUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full text-center bg-gradient-flame text-white py-3 rounded font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                                                >
                                                    Register
                                                </a>
                                            ) : (
                                                <div className="w-full bg-[#1b110e]/10 text-[#1b110e]/50 py-3 rounded font-bold text-center tracking-wide font-sans">
                                                    Event Concluded
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[420px] md:h-[80vh] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <div className="w-full h-full bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${sanctuaryHero})` }}></div>
                </div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/30 tracking-wider uppercase font-sans"
                    >
                        Welcome Home
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg font-display text-balance"
                    >
                        Step into the <i className="font-light md:block mt-2">Sanctuary</i>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
                    >
                        Where wellness meets sisterhood. Join our exclusive community gatherings designed to nourish your soul and connect your spirit.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center font-sans"
                    >
                        <button className="bg-gradient-flame hover:opacity-90 transition-all transform hover:-translate-y-1 text-white h-12 px-8 rounded-lg text-base font-bold shadow-lg flex items-center justify-center gap-2">
                            <span>Explore Invitations</span>
                            <span className="material-symbols-outlined text-sm">arrow_downward</span>
                        </button>
                        <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/40 h-12 px-8 rounded-lg text-base font-medium transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            <span>Watch Our Story</span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Upcoming Section */}
            <section className="py-24 bg-[#FCF4D9] overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-[#ED5B2D] font-bold text-lg uppercase tracking-widest mb-2 font-sans">Upcoming Gatherings</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[#1b110e] font-display">Your Invitations</h3>
                    </div>
                    <div className="hidden md:flex gap-2 font-sans">
                        <button className="size-12 rounded-full border border-[#f3eae8] hover:border-[#ED5B2D]/50 flex items-center justify-center text-[#1b110e] hover:text-[#ED5B2D] transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="size-12 rounded-full border border-[#f3eae8] hover:border-[#ED5B2D]/50 flex items-center justify-center text-[#1b110e] hover:text-[#ED5B2D] transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-8 overflow-x-auto pb-12 px-6 md:px-[max(24px,calc((100vw-1280px)/2))] no-scrollbar snap-x snap-mandatory">
                    {upcomingEventsData.map((event, i) => (
                        <motion.article
                            key={i}
                            whileHover={{ y: -10 }}
                            onClick={() => openEventModal(event)}
                            className="snap-center shrink-0 w-[85vw] max-w-[340px] md:w-[400px] flex flex-col group cursor-pointer transition-transform duration-300"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl mb-[-4px]">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#1b110e] font-sans">
                                    {event.date}
                                </div>
                            </div>
                            <div className="bg-white border-x border-b border-[#ED5B2D]/20 p-6 md:p-8 rounded-b-xl shadow-lg relative z-20">
                                <div className="text-center font-display">
                                    <p className="text-[#ED5B2D] text-sm font-bold tracking-widest uppercase mb-3 font-sans">{event.time} • {event.location}</p>
                                    <h4 className="text-2xl font-bold text-[#1b110e] mb-3 leading-tight">{event.title}</h4>
                                    <div className="w-12 h-[1px] bg-[#ED5B2D]/30 mx-auto my-4"></div>
                                    <p className="text-[#96604f] text-lg italic mb-6 leading-relaxed">{event.quote}</p>
                                    {event.registerUrl ? (
                                        <a
                                            href={event.registerUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-[#1b110e] font-bold border-b-2 border-[#ED5B2D] hover:text-[#ED5B2D] transition-colors pb-0.5 text-sm uppercase tracking-wide font-sans"
                                        >
                                            Register
                                        </a>
                                    ) : (
                                        <div className="text-[#1b110e]/50 font-bold border-b-2 border-transparent pb-0.5 text-sm uppercase tracking-wide font-sans">Event Concluded</div>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Past Section */}
            <section className="py-20 bg-white border-t border-neutral-100 font-sans">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <span className="text-[#ED5B2D] font-bold tracking-widest uppercase text-sm mb-2 block font-sans">Recap</span>
                            <h3 className="text-4xl font-display font-medium text-[#1b110e]">Past Events</h3>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-[#96604f] hover:text-[#ED5B2D] transition-colors text-sm font-bold uppercase tracking-wider">
                            View All
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Flea Market", desc: "A vibrant community flea market with wellness products, food stalls, and local creators.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-pLAhECurGuh_E--xHnooqW8cNx94rvlrpfyEnnebZFjYEm6qaHRaZCahh2w3wjW55NPkfIVg5wqWlsAcnOUdMaUiXxDqL9xc60HxJF4s5lxgyQ8g76ujP4pxdKhKQfCrU82ytQRoOfsFwFy6TEi4LERlMsFPKyGMUJoJL79e_QE-iinVVRpGmNC3EhpSgCTqeuU4E81w0Z5c-DuIZ1v6Ral5gaK6r6lDl5T3swn2MfExJpQEFBRDFO4BpAFTw0htILApCON54v2" },
                            { title: "Egg Freezing Event", desc: "An educational session on fertility preservation, timelines, and decision support.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnbeZdDGdvQfpp_7WhgHzrSD1Qi02Gt-CdCcOlylcj2F2DBQDO58SXq1IyZ72-kuVifueiv6TXVMafEuyOnklAGvh_Do3sEXo1zOoqMWooul5UUj54FlIEbkByYBbjjdQyfymgCayzOEo8HHAYY9_b3KASYRbO6wavopFATkSC3psYxHVJx6TAHjl1wllOLhSYTZSepwI1axyGcJmgJt3tD7_zGHzNAEs5Y52trbtV3rPPKiecJ_pWmWOJ_KnwzTdN3hnSwB0MSNxT" },
                            { title: "Startup Founders Meet", desc: "A networking and reflection space for women founders balancing ambition and wellbeing.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVcaNUJvxruvOjpQqI4dI6YPExgR8zV_qK19sSUjXl2ulOEZjBXOl0vmaMJoOU4WNC9XmkR59n1ZvAjWo1K7nO5ivlM2wmDqFY0M-uxJmoQtUaLeZWifyEl4ZBjbjoiT9C_dwXHRXVnjmYRNboxZQuc2zlYr5B36ENYcGmo4Qo-GNhwE0Y690ZXOB45Q9tuHduGl8sutLqMb6ZxzgLp9__5WRWlXNfpMai3C9j8VlPNq37gTb3Nva6JeXMAcQ_znKKQ3vlns-9J91s" },
                            { title: "Marathon", desc: "Our community marathon focusing on movement, strength, and mental resilience.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrsEZNgeDntrMuHSgZu6C_mFpiSHmuT2xjyP8MNdzDRtCOc7bIhqD_B0vsHRbTDAckglW1ZSy5Ilznh2LUwACFfqTEw58-E5-PfuzQKYTxFUBjDJ9n5huNUI1YrNDh4wvGGv4UYrV_WwdVkzGGG1hm7tYO6a_F9e5-cTwXYDS5dC18Sj-bOhsvrM-Kaz9uC_lTzwFg7KUkSjdOSotUXVNz3fNWV-Q8OZrgHwPYQO_qr8xTL3m91_HZd7S6wogKlaHp7e0L_khWiOU" }
                        ].map((recap, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                onClick={() => setIsEventModalOpen(true)}
                                className="group cursor-pointer"
                            >
                                <div className="overflow-hidden rounded-xl mb-6 shadow-md aspect-video relative">
                                    <img src={recap.image} alt={recap.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#1b110e] text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">Completed</div>
                                </div>
                                <h4 className="text-2xl font-bold text-[#1b110e] mb-2 font-display">{recap.title}</h4>
                                <p className="text-[#96604f] line-clamp-2 mb-4 font-sans">{recap.desc}</p>
                                <button className="text-[#ED5B2D] font-bold text-sm uppercase tracking-widest border-b border-[#ED5B2D]/30 hover:border-[#ED5B2D] pb-1 transition-colors font-sans">See Gallery</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Album Section */}
            <section className="py-24 bg-[#FCF4D9] font-sans">
                <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
                    <span className="text-[#ED5B2D] font-bold tracking-widest uppercase text-sm mb-2 block font-sans">Community Album</span>
                    <h3 className="text-4xl md:text-6xl font-display font-medium text-[#1b110e] mb-6">Moments & Memories</h3>
                    <p className="text-[#96604f] text-xl font-light">Snapshots of joy, connection, and growth from our archive.</p>
                </div>
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Spring Brunch", date: "Mar 2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBKZbC9TdwTDZds9w71Jif5_ghccGLXC_pa0rqEffx5a4et3hudl6YckRCadeFncO6O2e5_21YnI8uyPBfcScAbdmtye0RiTc46mikvFXxQADuCV5uszONzlpyWBZtwiZR1KDGKPz6zcnF50eH_jcPRQg-_GQLsCYt-07tHkBWVp1Ztluoka7ypvNOmAucZAyPVNX2XMdS_RPTR91LdkafWdTx8Y3Mx6bgNcEVpjkwqkLeVvCQF-XV2Lrnezxz0tMf8ROa0NcBJQw9" },
                        { title: "Tea Ceremony", date: "Jul 2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZVC_KaMfJ8FqFfDDTAgPH99QTZBGT2VHvYao7PKKT_AhRDCbxC8AnG9GpD3jggI40A6oSsJ8NJOaUQRQTu5pouSXBnxesv1xqIeg16v2B0BnX6NXcV607oY2Uuhz5iDeNCf1Sqtq_AG39LIc6UHtYdiqQM86vVUfDSKpd-h-czwtCVGiNvlagS5w-a3PuWjaVchSu4Cv5aSHLVo2s9DIfRA4oN4zPcQAHuC_qV2H3dkEjuuROJHsf7gIrBhFPuROruWYuQzfC1N8h" },
                        { title: "Partner Stretch", date: "Aug 2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnbeZdDGdvQfpp_7WhgHzrSD1Qi02Gt-CdCcOlylcj2F2DBQDO58SXq1IyZ72-kuVifueiv6TXVMafEuyOnklAGvh_Do3sEXo1zOoqMWooul5UUj54FlIEbkByYBbjjdQyfymgCayzOEo8HHAYY9_b3KASYRbO6wavopFATkSC3psYxHVJx6TAHjl1wllOLhSYTZSepwI1axyGcJmgJt3tD7_zGHzNAEs5Y52trbtV3rPPKiecJ_pWmWOJ_KnwzTdN3hnSwB0MSNxT" },
                        { title: "Art Therapy", date: "Sep 2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrsEZNgeDntrMuHSgZu6C_mFpiSHmuT2xjyP8MNdzDRtCOc7bIhqD_B0vsHRbTDAckglW1ZSy5Ilznh2LUwACFfqTEw58-E5-PfuzQKYTxFUBjDJ9n5huNUI1YrNDh4wvGGv4UYrV_WwdVkzGGG1hm7tYO6a_F9e5-cTwXYDS5dC18Sj-bOhsvrM-Kaz9uC_lTzwFg7KUkSjdOSotUXVNz3fNWV-Q8OZrgHwPYQO_qr8xTL3m91_HZd7S6wogKlaHp7e0L_khWiOU" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-[#1b110e] shadow-sm">{item.date}</div>
                            </div>
                            <div className="p-5 font-display">
                                <h5 className="font-bold text-lg mb-2 text-[#1b110e]">{item.title}</h5>
                                <button onClick={() => setIsEventModalOpen(true)} className="w-full mt-2 text-[#ED5B2D] border border-[#ED5B2D]/20 hover:bg-[#ED5B2D] hover:text-white rounded py-2 text-sm font-bold transition-colors uppercase tracking-wide font-sans">
                                    Recap
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stories Section */}
            <section className="py-24 bg-white font-sans">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 md:sticky md:top-32 self-start">
                            <h2 className="text-[#ED5B2D] font-bold text-sm uppercase tracking-widest mb-2 font-sans">The Pulse</h2>
                            <h3 className="text-4xl font-display font-medium text-[#1b110e] mb-6">Stories from the Sanctuary</h3>
                            <p className="text-[#96604f] mb-8 leading-relaxed">Dive deeper into the mystree lifestyle with highlights, tips, and reflections.</p>
                            <a href="#" className="inline-flex items-center text-[#ED5B2D] font-bold hover:text-[#d05f3e] transition-colors gap-2 group">
                                <span>View All Posts</span>
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                        <div className="md:w-2/3 flex flex-col gap-10 w-full">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                onClick={() => setIsEventModalOpen(true)}
                                className="relative rounded-2xl overflow-hidden aspect-video shadow-xl group cursor-pointer"
                            >
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByHgOgJ9tQpYJ7gQgssn10fNqulEadl3uI4R4mK-PrOwD4lKS_4OLJH7U3xNFAZp1Ht8SO7ZkWsnueXhoZthnlp7QMTdWKZNhLT5HqpkRhrts801zZpyTEwtypjPav_EwT5iJ-t9hSlyZRhMx703Xa4LUt4_AT09gQFNDbwCuZBxetwFpuqsvBHzY3VioT_CNJ9kBEHHioRdD-Pw5vOy_QlPHvFNHyBqE1DqGiZWpj7duSBBdG7HnJYIMxEwlbD1E-U-F8RyhkYDPn" alt="Retreat Highlights" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                    <div className="size-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider bg-[#ED5B2D] px-2 py-0.5 rounded mb-2 inline-block font-sans">Featured</span>
                                    <h4 className="text-xl font-bold font-display">Retreat Highlights: Fall 2023</h4>
                                </div>
                            </motion.div>

                            {[
                                { title: "5 Takeaways from our Cycle Workshop", date: "Oct 24, 2023", kat: "Wellness", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVcaNUJvxruvOjpQqI4dI6YPExgR8zV_qK19sSUjXl2ulOEZjBXOl0vmaMJoOU4WNC9XmkR59n1ZvAjWo1K7nO5ivlM2wmDqFY0M-uxJmoQtUaLeZWifyEl4ZBjbjoiT9C_dwXHRXVnjmYRNboxZQuc2zlYr5B36ENYcGmo4Qo-GNhwE0Y690ZXOB45Q9tuHduGl8sutLqMb6ZxzgLp9__5WRWlXNfpMai3C9j8VlPNq37gTb3Nva6JeXMAcQ_znKKQ3vlns-9J91s" },
                                { title: "Morning Rituals for Calm", date: "Oct 20, 2023", kat: "Reflection", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyNUtvoWNTi6rL1vrwmTs1ux3nGVH8pVlHPaLJv7mTlzDr0rQOcHVwNd5DszRLzh4JQ-QGoVjvryY9ZISaAHegeRxoT2el7A-Ce62vIEt3Xxd9Jf9-_Dh58cRbLq-FydLJ0KGVPxlOdqE3JigbBmLbpMiI-o0w4XR0lY2KP0CxEAa6kvcJlJckFOn-w4oBQ1Jspuxhg3ISyQ578FP55U1J_DqKqFO3yhBrDlA5EvJLWDxzbGCSXeqLQtAoWAWeP_QCHYmRNmFA5DIE" }
                            ].map((post, i) => (
                                <div key={i} className="flex flex-col sm:flex-row gap-6 border-b border-[#f3eae8] pb-8 hover:bg-neutral-50 p-4 -mx-4 rounded-xl transition-colors cursor-pointer" onClick={() => setIsEventModalOpen(true)}>
                                    <div className="sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[#ED5B2D] text-xs font-bold uppercase tracking-wider mb-1 block font-sans">{post.kat}</span>
                                        <h4 className="text-xl font-display font-bold text-[#1b110e] mb-2">{post.title}</h4>
                                        <p className="text-[#96604f] text-sm line-clamp-2 mb-3">Understanding your body's natural rhythm is the first step to true empowerment. Here are the key insights...</p>
                                        <div className="flex items-center gap-2 text-xs text-[#96604f]/70 font-sans">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-[#211511] text-white py-24 relative overflow-hidden font-sans">
                <div className="absolute top-0 right-0 -mr-24 -mt-24 size-96 rounded-full bg-[#ED5B2D]/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 size-96 rounded-full bg-[#ED5B2D]/10 blur-3xl"></div>
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-left">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Don't miss an Invitation</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-md font-light">Join the inner circle. Get first access to retreats, workshops, and community gatherings delivered to your inbox.</p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-white/60">
                                <span className="material-symbols-outlined text-[#ED5B2D]">check_circle</span>
                                <span className="text-sm">Weekly Inspiration</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <span className="material-symbols-outlined text-[#ED5B2D]">check_circle</span>
                                <span className="text-sm">Early Bird Access</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full max-w-md">
                        <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ED5B2D] transition-colors" placeholder="Your email address" type="email" />
                            <button className="bg-gradient-flame hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-[#ED5B2D]/20" type="submit">
                                Join the List
                            </button>
                            <p className="text-xs text-white/30 text-center">We respect your privacy. Unsubscribe at any time.</p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpcomingEvents;
