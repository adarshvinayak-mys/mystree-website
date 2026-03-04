import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const gallery1 = '/mystreeevent1.webp';
const gallery2 = '/mystreeevent2.webp';
const gallery3 = '/mystreeevent3.webp';
const gallery4 = '/blog/blog1.webp';
const gallery5 = '/blog/blog2.webp';
const gallery6 = '/blog/blog3.webp';
const gallery7 = '/blog/blog4.webp';
const gallery8 = '/blog/blog5.webp';
const gallery9 = '/blog/blog6.webp';
const gallery10 = '/blog/blog7.webp';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['All', 'Facilities', 'Happy Moms', 'Our Tech', 'Team'];

    const galleryItems = [
        { id: 1, category: 'Facilities', title: 'Modern Reception', image: gallery1 },
        { id: 2, category: 'Team', title: 'Expert Consultation', image: gallery2 },
        { id: 3, category: 'Happy Moms', title: 'Joyful Moments', image: gallery3 },
        { id: 4, category: 'Our Tech', title: 'Advanced Diagnostics', image: gallery4 },
        { id: 5, category: 'Our Tech', title: 'Clinical Precision', image: gallery5 },
        { id: 6, category: 'Team', title: 'Care Coordination', image: gallery6 },
        { id: 7, category: 'Facilities', title: 'Serene Hallways', image: gallery7 },
        { id: 8, category: 'Facilities', title: 'Patient Suites', image: gallery8 },
        { id: 9, category: 'Facilities', title: 'Therapeutic Lounges', image: gallery9 },
        { id: 10, category: 'Facilities', title: 'Wellness Spaces', image: gallery10 }
    ];

    const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="font-display text-slate-800 bg-background-light dark:bg-background-dark min-h-screen selection:bg-primary/30 antialiased overflow-x-hidden pb-32 lg:pb-20">

            {/* Gallery Hero - Shortened and optimized */}
            <header className="relative w-full bg-[#fdf8f0] py-16 px-6 lg:py-24 lg:px-20 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="max-w-5xl mx-auto flex flex-col gap-6 relative z-10"
                >
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Excellence in Motion</span>
                    <h1 className="font-serif text-5xl lg:text-7xl font-medium leading-[0.9] text-slate-900 tracking-tight">
                        Our <span className="italic text-primary">Gallery.</span>
                    </h1>
                    <p className="text-slate-500 text-lg lg:text-xl font-light max-w-xl mx-auto leading-relaxed">
                        A visual glimpse into our world-class facilities and the patients we serve.
                    </p>
                </motion.div>
            </header>

            {/* Masonry Showcase Section - Pulled up */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-12">
                    <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`snap-center shrink-0 px-4 sm:px-8 py-2 sm:py-3 whitespace-nowrap rounded-full text-xs sm:text-sm font-bold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onClick={() => setSelectedImage(item)}
                                    className="relative group overflow-hidden rounded-[2.5rem] cursor-pointer break-inside-avoid shadow-sm"
                                >
                                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-white text-5xl mb-4">zoom_in</span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-white/80 font-medium">{item.category}</p>
                                    </div>
                                    <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm group-hover:opacity-0 transition-opacity">
                                        {item.category}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Image Popup Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2 group"
                            >
                                <span className="font-bold text-sm uppercase tracking-widest">Close</span>
                                <span className="material-symbols-outlined text-3xl">close</span>
                            </button>
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                                loading="eager"
                                decoding="async"
                            />
                            <div className="mt-6 text-center">
                                <h3 className="text-2xl font-bold text-white mb-1 font-serif">{selectedImage.title}</h3>
                                <p className="text-primary font-medium tracking-widest uppercase text-xs">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Journal Section */}
            <section className="py-24 bg-[#fffefc] border-t border-slate-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-20">
                        <div className="md:w-1/3">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Perspective</span>
                            <h3 className="text-4xl font-serif font-bold mb-6">Our Path of<br /><span className="italic text-primary">Healing</span></h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">Deep dives into our methods and patient stories.</p>
                        </div>
                        <div className="md:w-2/3 space-y-12">
                            {[
                                { title: "Patient Success: Overcoming PCOS", date: "Jan 12", image: gallery3 },
                                { title: "Clinical Standards in Lab Care", date: "Jan 05", image: gallery4 }
                            ].map((p, i) => (
                                <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-8 group cursor-pointer">
                                    <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-md">
                                        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-slate-400 text-xs font-bold mb-2 uppercase">{p.date} • Featured Post</span>
                                        <h4 className="text-2xl font-bold font-serif group-hover:text-primary transition-colors">{p.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
