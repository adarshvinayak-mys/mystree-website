import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const doctor1 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/doctor1.jpg'; // Dr. Surbhi
const doctor2 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/doctor2.jpg'; // Dr. Smitha
const doctor3 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/doctor3.jpg'; // Priyanka
const doctorChaitra = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/DrChaitraNayak.jpg';
const eggFreezing1 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/egg_freezing_1.png';
const eggFreezing2 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/egg_freezing_2.png';
const eggFreezing3 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/egg_freezing_3.png';
const blog1 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog1.jpg';
const blog2 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog2.jpg';
const blog3 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog3.jpg';
const blog4 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog4.jpg';
const blog5 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog5.jpg';
const blog6 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog6.jpg';
const blog7 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog7.jpg';
const blog8 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog8.jpg';
const blog9 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog9.jpg';
const blog10 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/blog10.jpg';
const mystreee1 = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/mystreee1.jpg';
const doctorPri = 'https://zhianncgwtyylotoagqa.supabase.co/storage/v1/object/public/images1/drpriya.jpeg';
// Reuse imported doctorChaitra for the first new blog
const doctorJasmineUrl = "https://my-stree.com/assets/doctors/Dr-Jasmine-Flora.png";

export default function BlogAndCommunity() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: blog2,
            title: "Is It Worth The Hype?",
            content: "The pause in the biological ageing with egg freezing as an option for women battling their personal and professional goals appears to be rewarding.\n\nWhat lies deep within this reward is the fear of the unknown - treatment, outcomes and turmoil of emotions leave aside the cost.\n\nEgg freezing, or mature oocyte cryopreservation, is a method used to save women's ability to get pregnant in the future. Eggs harvested from your ovaries are frozen unfertilized and stored for later use, offering a powerful tool for family planning on your own timeline."
        },
        {
            image: blog3,
            title: "Dispelling the Fears",
            content: "As women it's one thing after another—marriage, pregnancy, and then parenting! All bound by societal timelines. Most women find it easier to find a supportive spouse and let go of getting pregnant as it can seem like a daunting event with a series of hospital visits, unlimited bills, and unbearable side effects with uncertain outcomes.\n\nThe only certainty is the decision to *not* blindly go through fertility treatments without empowerment. By freezing your eggs, you obtain crucial information about your fertility status much before your decision is influenced by external pressures.\n\nAlso, you gain freedom from these shrinking timelines and are assured of significantly better outcomes if the procedure is done at the right age under the right medical guidance."
        },
        {
            image: blog4,
            title: "A Personal Reflection",
            content: "If I get asked the question whether I would choose egg freezing as an option if I was offered the same, I can't imagine what my career graph would be like? Considering a career break at 25 when it was barely a year since I graduated from med school!\n\nWell, like every wall has two sides, this one too was a boon and a bane. The bane was it took me a good two years to get back to where I left, but I was still lucky enough to pursue post-graduation and a fellowship. I reiterate it as a boon handling my daughter's teenage woes with every passing day with immense patience, something I don't think would have been possible if I was even a little bit older than what I am now.\n\nUltimately, preserving your fertility gives you the greatest luxury of all: Choices."
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentSlide(0);
    };

    const [selectedCategory, setSelectedCategory] = useState("All Topics");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            id: 0,
            category: "Empowerment",
            date: "Mar 09, 2025",
            doctorImage: null,
            doctorName: "Urbane Essence Pvt Ltd",
            title: "Urbane Essence X MyStree: You Are a Woman who writes her story",
            excerpt: "Women’s Day isn’t just about flowers and appreciation posts—it’s about recognizing the strength, resilience, and needs of every woman. It’s a day to celebrate, yes, but also to reflect on what truly empowers women.",
            image: mystreee1,
            content: "Women’s Day isn’t just about flowers and appreciation posts—it’s about recognizing the strength, resilience, and needs of every woman. It’s a day to celebrate, yes, but also to reflect on what truly empowers women. Empowerment comes with firstly good health, emotional wellness, and a support system that respects and appreciates her. Both respect and appreciation are what every woman wants, but sad to say it is hard to come by. Hence, it is important we women help build a space where she equips herself physically and mentally, paving the way for her goals and achieving her dreams. Respect and appreciation will follow from every corner when you demand it.\n\nToo often, women place themselves last on their list of priorities. Careers, families, and responsibilities—all come first. But what if we paused, even for a moment, to put ourselves first? Everything else will follow and you as a woman will never feel left out of being just the “giver” who never gets anything in return.\n\nThis is where My Stree steps in. More than just a healthcare platform, it is a sanctuary for women, offering expert guidance, and healing, and a community that truly cares. Their promise? Having this hand to hold, this shoulder to lean on, a voice that motivates, and above all the space where one is heard without judgment. Her mental wellness will never take a beating with this kind of support. Much needed in today’s world.\n\nYou are not just a patient to us; you are an individual, a story, and a life we are honored to support.\n\nBeyond Medicine—Healing the Whole Woman\n\nHealthcare isn’t just about prescriptions and tests—it’s about truly understanding the woman behind the symptoms. My Stree offers a holistic approach, ensuring that every woman gets the care she needs. Care could be physical, mental, counseling, and therapy or nutrition and hormonal health.\n\nAt My Stree, every woman is seen, heard, and understood—not just as a patient but as a person with dreams, struggles, and a story that deserves care and respect. This is the very pillar every woman wants to hold and lean on when she wants just a little bit of care with no barrage of questions or opinions to take on.\n\nA Community That Cares\n\nOne of the most powerful aspects of healing is knowing you are not alone. My Stree isn’t just a healthcare platform; it’s a safe space where women can connect, share, and seek guidance without judgment.\n\nWhether it’s a young woman navigating PCOS, a mother dealing with postpartum changes or a woman in her 50s trying to understand menopause—there is help, there is guidance, and there is support.\n\nThis Women’s Day, Choose Yourself\n\nWomen's Day is more than just a date on the calendar\n\nIt is “you” who needs you more than ever, beneath the gifted wrapper\n\nThis year, make yourself a priority\nBecause you are the writer of your story\n\nThis year, take that health check-up\nThat is your time, the world will go on and not stop\n\nThis year, talk about what’s weighing on your mind",
            onClick: null
        },
        {
            id: 1,
            category: "Fertility",
            date: "Oct 12, 2023",
            doctorImage: doctor1,
            doctorName: "Dr. Surbhi Sinha",
            title: "Navigating IVF: A Comprehensive Guide to Emotional & Physical Preparedness",
            excerpt: "Understanding the intricate balance of hormones and hope. We break down the medical protocols and emotional resilience needed for a successful fertility journey.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB836HQsLvgPIAAHwUdaFQmWDnEuFBjPotUedoNBzadxRCATM--HK7WJMiau5HvoxLE01LQnK9ZcKRosnCpmNbxiKGW06zOKRVcn0MPn7MnFCcytIyYtA8ASSyYIq9-Du5TUc7egoHD6VxmEPQ4B5VM3JxeFyIgDG1ocjFQh8-g1OJ3ilKDLmsfHVceQQOmz722YJcVnnb5-1GMfKxMUDr1QQBb3JQbh7Ez39ptRAoTRoK97uKp4TZuWKZYcmaUguLviHgejX1B_sr0",
            content: "Understanding the intricate balance of hormones and hope. We break down the medical protocols and emotional resilience needed for a successful fertility journey.\n\nIVF is a profound journey that requires both physical and emotional stamina. We provide insights into what to expect during each phase, from hormone stimulation to egg retrieval and embryo transfer. Our integrated approach focuses not just on clinical success, but on ensuring you feel supported throughout.",
            onClick: null
        },
        {
            id: 2,
            category: "Nutrition",
            date: "Sep 28, 2023",
            doctorImage: doctor3,
            doctorName: "Priyanka Savina",
            title: "The Gut-Hormone Connection: Foods That Heal PCOS Naturally",
            excerpt: "Explore the powerful link between gut health and hormonal balance. Discover scientifically backed nutritional strategies to manage PCOS symptoms effectively.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiFyyEk1F9m2PyItO_yoZOf8c_Rw3JFFh1QLrGUuK4TOhiwb7IF9JGqBJcaaYPnoeFK8a2XNlFfdYSJRW-Oe-vKZQOeoY57lH2rGpHeFR9Bb-9u-5cCp0IofroV8cdi_VDe3cvO0-FpjXMNmSFFa7PwElv14tr83KAHcnSovseiSrN8PPc0Opn8q9zwADnokmSXwYX9zRVtmVVk1UwzDZdQ_f93Af_OSvfURqKrYbR9BOyuzbA0uJ6rQk19RI4xtuo3EoTu1yCYKl-",
            content: "Explore the powerful link between gut health and hormonal balance. Discover scientifically backed nutritional strategies to manage PCOS symptoms effectively.\n\nDiet plays a critical role in managing PCOS. By focusing on whole, unprocessed foods and monitoring your intake of essential nutrients, you can significantly reduce inflammation and improve your body's hormonal response.",
            onClick: null
        },
        {
            id: 3,
            category: "Pregnancy",
            date: "Sep 15, 2023",
            doctorImage: doctor2,
            doctorName: "Dr. Smitha A.P.",
            title: "Trimester Two: Managing Energy Shifts and Body Changes",
            excerpt: "As you enter the 'golden period' of pregnancy, learn how to adapt your lifestyle to support your growing baby while maintaining your own vitality.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUSZ6HWejo_smdethcdCT1O0U9sTr0yRf0VPT4suedwK3EIQoETrbfWsH5At1DqIx7JT0lyCL-qPFbfL8lmpMgvWEUYTw0epzIqbrsPnTAEY7KlEWOe-Srod8D76kLb_ZF_pT5r7v8yKp3NZ-g-X4lYmPAdC11u3iAxfK4vg9t5ZDwL1rMWC49sPSxdui8YLGS2mv5j74dx3aL_hqfnCpmLkTOSKNr0u0IMfKg-8VgKDAQg0SgV0sEQH4qbag_pAx-PH9c5FuvYbl6",
            content: "As you enter the 'golden period' of pregnancy, learn how to adapt your lifestyle to support your growing baby while maintaining your own vitality.\n\nThe second trimester often brings a surge in energy and a stabilization of morning sickness. It's the perfect time to engage in light exercise like prenatal yoga and to prepare your body for the later stages of pregnancy.",
            onClick: null
        },
        {
            id: 4,
            category: "Mental Wellness",
            date: "Aug 04, 2023",
            doctorImage: null,
            doctorName: "Clinical Team",
            title: "Breaking the Silence: Postpartum Depression Awareness",
            excerpt: "It's more than just the 'baby blues'. Recognizing the signs early and seeking support is the bravest step a new mother can take for her family.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTxxIP6I2HTXDANXlPFUyYOkejiSilKcoKE6TzUGNfrGsswQ5FSXzgR2ijuTDRHpASBWiX2WMtiV_8ub4lHcdwWwcl08DpwhSU4IZMSOE4nm0n6RtjxHAr2GNs4Y6H34pH8U_zU1I3nVYVldAGpZq2aYclK---x-oya9ugzF1ASoixVgpUN4RxjISpTW4nOHMLVw2dCiwaYZ8I43QvqPnKF7TneqipNoKPuYikUEV1x8jwnfRZwSG_-mlq4eyT2n8rwvnox1RwgyC3",
            content: "It's more than just the 'baby blues'. Recognizing the signs early and seeking support is the bravest step a new mother can take for her family.\n\nPostpartum depression affects many new mothers and can manifest in various ways, from profound sadness to severe anxiety. We emphasize the importance of openly discussing these feelings and seeking professional help.",
            onClick: null
        },
        {
            id: 5,
            category: "Infertility",
            date: "Jul 22, 2023",
            doctorImage: doctorChaitra,
            doctorName: "Dr. Chaitra Nayak",
            title: "Unmasking Endometriosis: Beyond Just 'Bad Cramps'",
            excerpt: "A deep dive into diagnosing and managing this often-misunderstood condition, offering hope and clarity for those struggling with chronic pain and fertility challenges.",
            image: blog5,
            content: "Pain is not normal. 1 in 10 women suffer in silence, often misdiagnosed for years. Endometriosis is more than just 'bad cramps'; it's a systemic inflammatory condition that can impact fertility, energy, and quality of life.\n\nEarly diagnosis is key. If you're missing school or work due to period pain, it's time to speak up and seek a specialist. Treatment isn't just about medication—it's about a holistic approach involving diet, pelvic floor therapy, and expert surgical care when needed.",
            onClick: null
        },
        {
            id: 6,
            category: "Pelvic Health",
            date: "Jun 15, 2023",
            doctorImage: doctorJasmineUrl,
            doctorName: "Dr. Jasmine Flora",
            title: "Reclaiming Your Core: Why Pelvic Floor Therapy Matters Postpartum",
            excerpt: "It’s not just about doing Kegels. Learn how specialized physiotherapy can restore strength, prevent long-term issues, and help you return to the activities you love after childbirth.",
            image: blog6,
            content: "Leaking when you sneeze? Avoiding jump ropes at the gym? It's common, but it's not 'normal'—and you don't have to live with it. Postpartum recovery is often focused on the baby, but your body needs attention too.\n\nPelvic floor physiotherapy is the gold standard for restoring core function, treating diastasis recti, and preventing prolapse. It's never too late to start strengthening your foundation, whether you're 6 weeks or 6 years postpartum.",
            onClick: null
        },
        {
            id: 7,
            category: "Wellness",
            date: "May 28, 2023",
            doctorImage: doctorPri,
            doctorName: "Dr. Priyadarshini Sumanohar",
            title: "Stress, Cortisol, and You: Managing the Silent Inflammation",
            excerpt: "Feeling constantly drained? Dr. Priya explains the physiological impact of chronic stress on women's health and practical, medical-grade strategies to reset your body's alarm system.",
            image: blog7,
            content: "Cortisol is the thief of joy (and sleep). In our fast-paced world, chronic stress triggers a cascade of hormonal imbalances that can manifest as weight gain, fatigue, and menstrual irregularities.\n\nWe explore the physiological link between mental stress and physical inflammation. Learn practical, medical-grade strategies to lower your cortisol baseline—from targeted nutritional support to mindfulness practices that actually work for busy women.",
            onClick: null
        },
        {
            id: 8,
            category: "Menopause",
            date: "Apr 12, 2023",
            doctorImage: doctor1,
            doctorName: "Dr. Surbhi Sinha",
            title: "The Menopause Transition: Navigating Hormonal Shifts",
            excerpt: "Hot flashes, sleep disruption, and mood swings? You're not alone. Dr. Surbhi guides you through the perimenopause journey with empathy and medical expertise to help you reclaim your vitality.",
            image: blog8,
            content: "Hot flashes are just the tip of the iceberg. Perimenopause can begin as early as your late 30s, bringing changes in mood, sleep, and metabolism. But this transition doesn't have to be a crisis.\n\nWe debunk common myths about hormone replacement therapy (HRT) and explore natural alternatives for symptom management. Embrace this 'Second Spring' with knowledge and confidence, supported by a team that understands the nuances of midlife health.",
            onClick: null
        },
        {
            id: 9,
            category: "Adolescent Health",
            date: "Mar 22, 2023",
            doctorImage: doctor2,
            doctorName: "Dr. Smitha A.P.",
            title: "Adolescent Health: A Guide for Parents and Teens",
            excerpt: "Puberty is a pivotal time. Dr. Smitha offers essential advice on menstrual health, hygiene, and emotional well-being, fostering open conversations between parents and their growing daughters.",
            image: blog9,
            content: "Puberty doesn't come with a manual, but we're here to help write one. Navigating the physical and emotional changes of adolescence can be daunting for both parents and teens.\n\nFrom first periods to acne battles and emotional rollercoasters, we provide a safe, judgment-free space for young women to learn about their bodies. Empowering the next generation starts with open, accurate, and compassionate conversations about health.",
            onClick: null
        },
        {
            id: 10,
            category: "Mental Wellness",
            date: "Feb 14, 2023",
            doctorImage: null,
            doctorName: "Clinical Team",
            title: "Mental Resilience in Women's Health",
            excerpt: "In a world that demands so much, prioritizing your mental peace is effective healthcare. Discover strategies to build resilience, manage anxiety, and find balance in your daily life.",
            image: blog10,
            content: "It's okay to not be okay. Women often carry the mental load for their families and communities, leaving little room for their own emotional well-being. We discuss the importance of mental resilience as a pillar of overall health.\n\nRecognizing the signs of anxiety and depression is the first step. Our integrated care model ensures that your mental health is treated with the same priority as your physical health, because they are deeply interconnected.",
            onClick: null
        }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === "All Topics" || article.category === selectedCategory || (selectedCategory === "Mental Wellness" && article.category === "Mental Wellness");
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-ivory text-text-main font-body antialiased ">
            {/* Massive Hero Section for Featured Editorial */}
            <section className="relative w-full min-h-[85vh] flex flex-col justify-center bg-[#0a0a0a] group cursor-pointer overflow-hidden pt-36 pb-24 lg:py-32" onClick={() => { setIsModalOpen(true); setCurrentSlide(0); }}>
                {/* Background Decorative */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                </div>

                {/* Content Layout */}
                <div className="relative z-10 w-full px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
                            <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8">
                                <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-white rounded-full border border-primary/30 shadow-sm">
                                    Featured Editorial
                                </span>
                                <span className="text-white/60 text-sm font-medium tracking-wide border-l border-white/20 pl-4">Oct 24, 2023</span>
                            </div>

                            <h1 className="font-display text-5xl sm:text-6xl lg:text-[72px] text-white leading-[1.05] tracking-tight mb-6 sm:mb-8 group-hover:text-primary transition-colors duration-500">
                                Egg Freezing: <br />
                                <span className="italic font-light text-primary">Is It Worth The Hype?</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 font-light mb-8 sm:mb-10 leading-relaxed max-w-xl">
                                The pause in biological ageing offers hope for women balancing personal and professional goals. But what lies beneath the reward? We explore the treatment, outcomes, and emotions behind the decision.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                                <button
                                    className="flex items-center justify-center gap-3 bg-white text-gray-900 group-hover:bg-primary group-hover:text-white transition-all duration-300 px-8 py-4 sm:py-5 rounded-full font-bold text-base shadow-xl"
                                    onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); setCurrentSlide(0); }}
                                >
                                    Read Full Article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>

                                <div className="flex items-center gap-4">
                                    <img src={doctor2} alt="Dr. Smitha A.P." className="w-12 h-12 rounded-full object-cover border-2 border-white/20" loading="lazy" decoding="async" />
                                    <div>
                                        <p className="font-bold text-white text-sm">Dr. Smitha A.P.</p>
                                        <p className="text-xs text-primary uppercase tracking-wider font-bold">Chief Medical Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#f7f5ef] group-hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src={blog1}
                                    alt="Egg Freezing Article"
                                    className="w-full h-full object-cover object-center transform transition-transform duration-[2s] ease-out group-hover:scale-105"
                                    fetchPriority="high"
                                    decoding="sync"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 space-y-4 md:space-y-0">
                        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {["All Topics", "Nutrition", "Pregnancy", "Fertility", "Mental Wellness"].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap transition-colors border ${selectedCategory === category
                                        ? "bg-primary text-white border-primary hover:bg-orange-700"
                                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80">
                            <input
                                className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400"
                                placeholder="Search articles..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">search</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 bg-background-light">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article) => (
                                <article key={article.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-xl transition-shadow" onClick={() => setSelectedArticle(article)}>
                                    <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 relative shadow-md">
                                        <img alt={article.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src={article.image} loading="lazy" decoding="async" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-primary rounded-md shadow-sm">{article.category}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <div className="flex items-center gap-2">
                                                {article.doctorImage && <img src={article.doctorImage} alt={article.doctorName} className="w-5 h-5 rounded-full object-cover" loading="lazy" decoding="async" />}
                                                <span className="font-medium text-gray-700">{article.doctorName}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-display text-2xl lg:text-3xl text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                                        <a className="mt-auto inline-flex items-center text-sm font-bold text-primary hover:text-orange-700 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Read More <span className="material-symbols-outlined text-sm ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span></a>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 border border-gray-300 text-gray-600 font-bold uppercase tracking-widest text-xs rounded hover:border-primary hover:text-primary transition-colors hover:bg-orange-50">Load More Stories</button>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center relative">
                        <span className="material-symbols-outlined text-6xl text-primary/10 absolute -top-10 -left-10 lg:-left-20 rotate-180">format_quote</span>
                        <p className="font-display text-3xl lg:text-4xl italic text-gray-800 leading-relaxed mb-8">
                            "True healing begins when a patient feels heard. At My Stree, our content isn't just information—it is a dialogue, a resource, and a promise that you are never navigating your health journey alone."
                        </p>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <div className="flex flex-col items-center">
                            <img alt="Dr. Smitha A.P." className="w-20 h-20 rounded-full object-cover mb-3 grayscale-[50%] hover:grayscale-0 transition-all border-2 border-primary p-0.5" src={doctor2} loading="lazy" decoding="async" />
                            <h4 className="font-bold text-gray-900 text-lg">Dr. Smitha A.P.</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Co-Founder & Chief Medical Officer</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Circles */}
            <section className="py-24 bg-background-light">
                <div className="container px-6 mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display text-4xl text-gray-900 mb-2">Community Circles</h2>
                            <p className="text-gray-500">Upcoming events, workshops, and support groups.</p>
                        </div>
                        <Link to="/showcase/events" className="hidden md:flex items-center text-primary font-bold text-sm hover:text-orange-800 gap-1">
                            View Calendar <span className="material-symbols-outlined text-sm">calendar_month</span>
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-shadow flex flex-col h-full group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Virtual</div>
                                <span className="text-gray-400 text-sm font-bold">Nov 15</span>
                            </div>
                            <h3 className="font-display text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">PCOS Support Circle</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">A safe, judgment-free space to share experiences and learn management strategies from Dr. Surbhi Sinha.</p>
                            <div className="mt-auto border-t border-gray-50 pt-6 flex justify-between items-center">
                                <span className="text-xs text-gray-400 font-medium">10:00 AM - 11:30 AM EST</span>
                                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary transition-colors">RSVP</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-shadow flex flex-col h-full group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-orange-50 text-orange-800 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">In-Person</div>
                                <span className="text-gray-400 text-sm font-bold">Nov 22</span>
                            </div>
                            <h3 className="font-display text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">Prenatal Yoga Workshop</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">Join our certified wellness lead for a gentle session focusing on breathwork and pelvic floor health.</p>
                            <div className="mt-auto border-t border-gray-50 pt-6 flex justify-between items-center">
                                <span className="text-xs text-gray-400 font-medium">9:00 AM - 10:30 AM</span>
                                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary transition-colors">RSVP</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-shadow flex flex-col h-full group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Webinar</div>
                                <span className="text-gray-400 text-sm font-bold">Dec 05</span>
                            </div>
                            <h3 className="font-display text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">Fertility Facts & Myths</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">Demystifying reproductive health with our expert panel. Q&A session included for all attendees.</p>
                            <div className="mt-auto border-t border-gray-50 pt-6 flex justify-between items-center">
                                <span className="text-xs text-gray-400 font-medium">6:00 PM - 7:00 PM EST</span>
                                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary transition-colors">RSVP</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/showcase/events" className="inline-flex items-center text-primary font-bold text-sm hover:text-orange-800 gap-1">
                            View Calendar <span className="material-symbols-outlined text-sm">calendar_month</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-white py-20 border-t border-gray-100">
                <div className="container px-6 mx-auto">
                    <div className="bg-corn-silk/50 rounded-2xl p-10 lg:p-16 text-center border border-orange-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-10 -mb-10"></div>
                        <div className="relative z-10">
                            <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mb-4">Stay Informed. Stay Empowered.</h2>
                            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Get the latest medical insights, community stories, and wellness tips delivered directly to your inbox.</p>
                            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                                <input className="flex-grow px-5 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-gray-400 text-sm shadow-sm outline-none" placeholder="Enter your email address" required="" type="email" />
                                <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30" type="submit">Subscribe</button>
                            </form>
                            <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 lg:p-12"
                        onClick={closeModal}
                    >
                        <div className="relative w-full max-w-5xl h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-20 text-white/50 hover:text-white transition-colors bg-black/50 rounded-full p-2"
                            >
                                <span className="material-symbols-outlined text-3xl">close</span>
                            </button>

                            {/* Carousel Container */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Previous Button */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-0 lg:-left-12 z-20 text-white hover:text-primary transition-colors p-2"
                                >
                                    <span className="material-symbols-outlined text-4xl lg:text-5xl">chevron_left</span>
                                </button>

                                {/* Content Slide */}
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 overflow-y-auto px-12 pb-12 pt-4"
                                >
                                    <div className="w-full md:w-1/2 flex items-center justify-center">
                                        <img
                                            src={slides[currentSlide].image}
                                            alt={slides[currentSlide].title}
                                            className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 text-white overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                                        <h2 className="font-display text-3xl md:text-5xl mb-6 text-primary">{slides[currentSlide].title}</h2>
                                        <p className="text-lg md:text-xl font-light leading-relaxed whitespace-pre-line">
                                            {slides[currentSlide].content}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Next Button */}
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-0 lg:-right-12 z-20 text-white hover:text-primary transition-colors p-2"
                                >
                                    <span className="material-symbols-outlined text-4xl lg:text-5xl">chevron_right</span>
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* General Article Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 lg:p-12"
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-4 right-4 z-20 bg-white shadow-md text-gray-500 hover:text-gray-900 transition-colors rounded-full p-2"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="overflow-y-auto custom-scrollbar flex-1 pb-12">
                                <div className="w-full h-[30vh] sm:h-[40vh] relative">
                                    <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white rounded-md mb-3 inline-block">
                                            {selectedArticle.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-6 md:px-12 pt-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                        <span>{selectedArticle.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <div className="flex items-center gap-2">
                                            {selectedArticle.doctorImage ? (
                                                <img src={selectedArticle.doctorImage} alt={selectedArticle.doctorName} className="w-6 h-6 rounded-full object-cover" loading="lazy" decoding="async" />
                                            ) : (
                                                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[14px]">local_hospital</span>
                                                </div>
                                            )}
                                            <span className="font-bold text-gray-700">{selectedArticle.doctorName}</span>
                                        </div>
                                    </div>
                                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="w-full max-w-3xl">
                                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light whitespace-pre-line">
                                            {selectedArticle.content || selectedArticle.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
