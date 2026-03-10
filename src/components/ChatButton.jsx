import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BOOKING_URL = 'https://my-stree.com/booking';
const WHATSAPP_URL = 'https://wa.me/916366573772?text=Hi%20My%20Stree%2C%20I%20need%20help%20with%20my%20health%20query.';
const CONTACT_PHONE = '+916366573772';
const CONTACT_EMAIL = 'info@mystree.org';
const INTRO_SEEN_KEY = 'mystree_chat_intro_seen_v2';
const INTRO_SHOW_DELAY_MS = 1400;
const INTRO_VISIBLE_MS = 9000;

const services = [
    {
        key: 'obgyn',
        label: 'Periods & PCOS',
        route: '/services/obgyn',
        summary: 'For irregular periods, painful/heavy periods, discharge, pelvic pain, sexual wellness, and general gyne concerns.',
        keywords: [
            'period', 'periods', 'irregular period', 'irregular periods', 'irregular cycle', 'irregular cycles',
            'pcos', 'pcod', 'menstruation', 'heavy bleeding', 'bleeding', 'painful periods', 'cramps', 'severe cramps',
            'pelvic pain', 'vaginal discharge', 'vaginal itching', 'breast pain', 'sexual dysfunction', 'sexual health',
            'urinary issues', 'gyne', 'gyn', 'gynec', 'gynaec', 'gynecologist', 'gynaecologist', "women's doctor",
            "women's health", 'womens health', 'hormonal imbalance'
        ]
    },
    {
        key: 'fertility',
        label: 'Fertility Support',
        route: '/services/fertility',
        summary: 'For trying to conceive, infertility, IVF/IUI planning, ovulation tracking, and fertility counselling.',
        keywords: [
            'fertility', 'infertility', 'trying to conceive', 'conceive', "can't get pregnant", 'cant get pregnant',
            'ttc', 'ivf', 'iui', 'egg', 'amh', 'ovulation', 'fertility doctor', 'miscarriage', 'recurrent miscarriage',
            'low sperm count', 'reproductive endocrinology', 'endometriosis fertility'
        ]
    },
    {
        key: 'prenatal',
        label: 'Pregnancy Care',
        route: '/services/prenatal',
        summary: 'For trimester guidance, prenatal checkups, high-risk pregnancy care, scans, and delivery planning.',
        keywords: [
            'pregnan', 'pregnant', 'pregnancy', 'prenatal', 'antenatal', 'trimester', 'scan', 'delivery', 'maternity',
            'postpartum', 'postnatal', 'after delivery', 'baby doctor', 'high-risk pregnancy', 'bleeding in pregnancy'
        ]
    },
    {
        key: 'adolescent',
        label: 'Teen Health',
        route: '/services/adolescent-health',
        summary: 'For puberty concerns, first periods, adolescent PCOS, and confidential guidance.',
        keywords: ['teen', 'adolescent', 'puberty', 'first period', 'young', 'teen pcos', 'school stress']
    },
    {
        key: 'menopause',
        label: 'Menopause Care',
        route: '/services/menopause',
        summary: 'For hot flashes, sleep changes, mood shifts, and hormone transition support.',
        keywords: ['menopause', 'perimenopause', 'hot flash', 'hot flush', 'night sweats', 'hrt', 'mood swings', 'vaginal dryness']
    },
    {
        key: 'nutrition',
        label: 'Nutrition',
        route: '/services/nutrition',
        summary: 'For PCOS diet plans, hormone-friendly nutrition, and healthy weight support.',
        keywords: [
            'nutrition', 'diet', 'dietician', 'dietitian', 'weight', 'weight gain', 'weight loss', 'meal', 'food',
            'hormonal acne', 'insulin resistance', 'pcos diet', 'healthy eating'
        ]
    },
    {
        key: 'physio',
        label: 'Pelvic Physio',
        route: '/services/physiotherapy',
        summary: 'For pelvic floor therapy, postnatal recovery, incontinence, and rehabilitation.',
        keywords: [
            'physio', 'physiotherapy', 'pelvic floor', 'pelvic pain', 'painful intercourse', 'incontinence', 'rehab',
            'recovery', 'diastasis', 'postnatal recovery', 'vaginismus'
        ]
    },
    {
        key: 'dermatology',
        label: 'Skin & Hair',
        route: '/services/dermatology',
        summary: 'For acne, pigmentation, melasma, and skin/hair wellness protocols.',
        keywords: [
            'skin', 'skin problem', 'acne', 'pimple', 'pimples', 'rash', 'rashes', 'eczema', 'psoriasis', 'pigmentation',
            'melasma', 'hair', 'hair fall', 'hair loss', 'facial hair', 'scalp', 'dermatology', 'skin doctor'
        ]
    },
    {
        key: 'psychology',
        label: 'Mental Wellness',
        route: '/services/psychology',
        summary: 'For stress, anxiety, mood support, counselling, and psychiatry care.',
        keywords: [
            'mental', 'mental health', 'anxiety', 'stress', 'depression', 'therapy', 'counselling', 'counseling',
            'psychiatry', 'panic attack', 'panic attacks', 'postpartum depression', 'burnout'
        ]
    }
];

const doctors = [
    {
        key: 'dr-smitha',
        name: 'Dr. Smitha A.P.',
        role: 'Founder & High Risk Obstetrician',
        profileRoute: '/team#dr-smitha',
        bookingUrl: 'https://my-stree.com/booking/appointment/2',
        keywords: ['dr smitha', 'smitha', 'high risk obstetrician', 'high risk pregnancy']
    },
    {
        key: 'dr-surbhi',
        name: 'Dr. Surbhi Sinha',
        role: 'Co-Founder & Fertility Specialist',
        profileRoute: '/team#dr-surbhi',
        bookingUrl: 'https://my-stree.com/booking/appointment/1',
        keywords: ['dr surbhi', 'surbhi', 'surbhi sinha', 'fertility specialist']
    },
    {
        key: 'dr-chaitra',
        name: 'Dr. Chaitra Nayak',
        role: 'Infertility Specialist & Reproductive Endocrinologist',
        profileRoute: '/team#dr-chaitra',
        bookingUrl: 'https://my-stree.com/booking/appointment/4',
        keywords: ['dr chaitra', 'chaitra', 'nayak', 'infertility specialist', 'reproductive endocrinologist']
    },
    {
        key: 'dr-jasmine',
        name: 'Dr. Jasmine Flora',
        role: "Women's Health & Pelvic Floor Specialist",
        profileRoute: '/team#dr-jasmine',
        bookingUrl: BOOKING_URL,
        keywords: ['dr jasmine', 'jasmine', 'pelvic floor specialist', 'vaginismus']
    },
    {
        key: 'priyanka-savina',
        name: 'Priyanka Savina',
        role: 'Nutritionist & Wellness Consultant',
        profileRoute: '/team#priyanka-savina',
        bookingUrl: 'https://my-stree.com/booking/appointment/3',
        keywords: ['priyanka', 'savina', 'nutritionist']
    }
];

const SYMPTOM_ROUTING_RULES = [
    {
        all: [
            ['heavy bleeding', 'bleeding heavily'],
            ['cramps', 'painful periods', 'severe pain']
        ],
        serviceKeys: ['obgyn', 'physio'],
        suggestion: 'This symptom pattern can overlap with endometriosis or fibroid-related pain and needs a timely review.',
        doctorKey: 'dr-surbhi'
    },
    {
        all: [
            ['trying to conceive', "can't get pregnant", 'cant get pregnant', 'infertility'],
            ['irregular periods', 'irregular cycle', 'pcos', 'pcod']
        ],
        serviceKeys: ['fertility', 'obgyn'],
        suggestion: 'This may be an ovulation or PCOS-linked fertility concern. Early fertility workup can help.',
        doctorKey: 'dr-chaitra'
    },
    {
        all: [
            ['postpartum', 'after pregnancy', 'after delivery'],
            ['depression', 'anxiety', 'panic attack', 'panic attacks']
        ],
        serviceKeys: ['psychology', 'prenatal'],
        suggestion: 'Postpartum emotional symptoms are common and treatable. You deserve dedicated support.',
        doctorKey: 'dr-smitha'
    }
];

const EMERGENCY_TERMS = [
    'emergency', 'urgent', 'bleeding heavily', 'heavy bleeding', 'severe pain', 'fainting', 'loss of consciousness',
    'chest pain', 'breathlessness', 'bleeding during pregnancy', 'pregnant and bleeding', 'very high fever'
];

const MENTAL_HEALTH_CRISIS_TERMS = [
    'suicide', 'suicidal', 'self harm', 'self-harm', 'kill myself', 'hurt myself'
];

const BASE_ACTIONS = {
    book: { id: 'book', label: 'Book Appointment', kind: 'external', value: BOOKING_URL, ack: 'Opening booking for you now.' },
    whatsapp: { id: 'whatsapp', label: 'WhatsApp Support', kind: 'external', value: WHATSAPP_URL, ack: 'Opening WhatsApp support now.' },
    service: { id: 'service-discovery', label: 'Find Services', kind: 'reply', value: 'service-discovery' },
    call: { id: 'call', label: 'Call Clinic', kind: 'phone', value: CONTACT_PHONE, ack: 'Connecting your call to My Stree.' },
    doctors: { id: 'doctors', label: 'Our Specialists', kind: 'navigate', value: '/team', ack: 'Opening our specialists page.' }
};

const PRIMARY_ACTION_ORDER = ['book', 'whatsapp', 'service', 'call', 'doctors'];
const getPrimaryQuickActions = () => PRIMARY_ACTION_ORDER.map((key) => ({ ...BASE_ACTIONS[key] }));
const getMainMenuActions = () => [...getPrimaryQuickActions(), { label: 'Common Questions', kind: 'reply', value: 'common-questions' }];

const COMMON_PATIENT_QUESTIONS = [
    { label: 'I have irregular periods', query: 'my periods are irregular' },
    { label: 'I have painful periods and heavy bleeding', query: 'i have heavy bleeding and painful periods' },
    { label: 'I am trying to conceive', query: 'i am trying to conceive and cannot get pregnant' },
    { label: 'I need pregnancy guidance', query: 'i am pregnant and need prenatal guidance' },
    { label: 'I have skin/acne or hair fall issues', query: 'i have severe acne and hair fall' },
    { label: 'I feel stressed or anxious', query: 'i am stressed and anxious' },
    { label: 'I need pelvic floor support', query: 'i have pelvic pain and painful intercourse' }
];

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const makeMessage = (role, text, actions = []) => ({ id: createId(), role, text, actions });

const welcomeMessage = () =>
    makeMessage(
        'bot',
        'Hello, I am your MyStree Care Assistant. I can guide you by symptoms, services, or doctor name. This chat is guidance-only and not a diagnosis. How can I help you today?',
        getMainMenuActions()
    );

function normalizeText(text) {
    return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

function getServiceByKey(serviceKey) {
    return services.find((service) => service.key === serviceKey);
}

function getDoctorByKey(doctorKey) {
    return doctors.find((doctor) => doctor.key === doctorKey);
}

function createServiceAction(service, prefix = 'Open') {
    return {
        label: `${prefix} ${service.label}`,
        kind: 'navigate',
        value: service.route,
        ack: `Opening ${service.label}.`
    };
}

function createDoctorActions(doctor) {
    return [
        {
            label: `View ${doctor.name} Profile`,
            kind: 'navigate',
            value: doctor.profileRoute,
            ack: `Opening ${doctor.name}'s profile.`
        },
        {
            label: `Book with ${doctor.name}`,
            kind: 'external',
            value: doctor.bookingUrl,
            ack: `Opening booking for ${doctor.name}.`
        }
    ];
}

function getServiceMatches(text) {
    const lower = normalizeText(text);
    const scored = services
        .map((service) => {
            const score = service.keywords.reduce((sum, keyword) => {
                if (!lower.includes(keyword)) return sum;
                return sum + (keyword.includes(' ') ? 2 : 1);
            }, 0);
            return { service, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);
    return scored.map((item) => item.service);
}

function getServiceFromText(text) {
    return getServiceMatches(text)[0] || null;
}

function getDoctorFromText(text) {
    const lower = normalizeText(text);
    return doctors.find((doctor) => doctor.keywords.some((keyword) => lower.includes(keyword)));
}

function getSymptomRoutingMatch(text) {
    const lower = normalizeText(text);
    return SYMPTOM_ROUTING_RULES.find((rule) =>
        rule.all.every((keywordGroup) => keywordGroup.some((keyword) => lower.includes(keyword)))
    );
}

function getUrgentActions() {
    return [
        { ...BASE_ACTIONS.call },
        { ...BASE_ACTIONS.whatsapp },
        { label: 'Open Contact Page', kind: 'navigate', value: '/contact', ack: 'Opening Contact page.' },
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function getRecommendedServiceActions(serviceKeys = []) {
    const suggestedServices = serviceKeys
        .map((serviceKey) => getServiceByKey(serviceKey))
        .filter(Boolean)
        .map((service) => createServiceAction(service));

    return [
        ...suggestedServices,
        { ...BASE_ACTIONS.book },
        { ...BASE_ACTIONS.whatsapp },
        { ...BASE_ACTIONS.call },
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function getServiceActionList() {
    return [
        ...services.slice(0, 6).map((service) => ({ label: service.label, kind: 'reply', value: `service:${service.key}` })),
        { label: 'More Services', kind: 'reply', value: 'service-more' },
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function getServiceMoreActionList() {
    return [
        ...services.slice(6).map((service) => ({ label: service.label, kind: 'reply', value: `service:${service.key}` })),
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function getCommonQuestionActions() {
    return [
        ...COMMON_PATIENT_QUESTIONS.map((item, index) => ({
            label: item.label,
            kind: 'reply',
            value: `common-question:${index}`
        })),
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function getDoctorActionList() {
    return [
        ...doctors.map((doctor) => ({ label: doctor.name, kind: 'reply', value: `doctor:${doctor.key}` })),
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function inferReply(query) {
    const lower = normalizeText(query);
    const match = getServiceFromText(query);
    const doctorMatch = getDoctorFromText(query);
    const symptomMatch = getSymptomRoutingMatch(query);
    const serviceMatches = getServiceMatches(query);
    const isGreeting = /^(hi|hii|hello|hey|good morning|good afternoon|good evening)\b/i.test(query.trim());
    const hasCrisisLanguage = MENTAL_HEALTH_CRISIS_TERMS.some((term) => lower.includes(term));
    const hasEmergencyLanguage = EMERGENCY_TERMS.some((term) => lower.includes(term));

    if (isGreeting) {
        return {
            text: 'Hello. I can guide you to the right service, doctor, booking, or urgent contact. Choose a quick option or open common questions:',
            actions: getMainMenuActions()
        };
    }

    if (hasCrisisLanguage) {
        return {
            text: 'I am really sorry you are feeling this way. Please seek immediate in-person help now. If you are in immediate danger, call emergency services right away (112 in India). I can also connect you to our clinic now.',
            actions: getUrgentActions()
        };
    }

    if (hasEmergencyLanguage) {
        return {
            text: 'Your message may need urgent medical attention. Please call emergency services immediately if symptoms are severe. You can also call our clinic now for rapid guidance.',
            actions: getUrgentActions()
        };
    }

    if (symptomMatch) {
        const recommendedDoctor = getDoctorByKey(symptomMatch.doctorKey);
        return {
            text: `${symptomMatch.suggestion}${recommendedDoctor ? ` I suggest starting with ${recommendedDoctor.name} (${recommendedDoctor.role}).` : ''}`,
            actions: [
                ...getRecommendedServiceActions(symptomMatch.serviceKeys),
                ...(recommendedDoctor ? createDoctorActions(recommendedDoctor) : [])
            ]
        };
    }

    if (doctorMatch) {
        return {
            text: `I found ${doctorMatch.name} - ${doctorMatch.role}. I can open the profile or direct booking for you.`,
            actions: [
                ...createDoctorActions(doctorMatch),
                ...getPrimaryQuickActions(),
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (serviceMatches.length > 1) {
        const topTwo = serviceMatches.slice(0, 2);
        return {
            text: `I found two likely care paths: ${topTwo[0].label} and ${topTwo[1].label}. Start with either and we can refine from there.`,
            actions: getRecommendedServiceActions(topTwo.map((service) => service.key))
        };
    }

    if (match) {
        return {
            text: `The best starting point is ${match.label}. ${match.summary}`,
            actions: [
                createServiceAction(match),
                ...getPrimaryQuickActions(),
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (lower.includes('book') || lower.includes('appointment') || lower.includes('consult') || lower.includes('slot')) {
        return {
            text: 'You can book right away or chat with our care team on WhatsApp for guided support.',
            actions: [
                ...getPrimaryQuickActions(),
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (lower.includes('contact') || lower.includes('call') || lower.includes('phone') || lower.includes('email') || lower.includes('address') || lower.includes('location')) {
        return {
            text: `You can call us at +91 63665 73772 or email ${CONTACT_EMAIL}. We are also available on WhatsApp for quick support.`,
            actions: [
                { ...BASE_ACTIONS.call },
                { ...BASE_ACTIONS.whatsapp },
                { label: 'Open Contact Page', kind: 'navigate', value: '/contact', ack: 'Opening Contact page.' },
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (lower.includes('doctor') || lower.includes('team') || lower.includes('specialist') || lower.includes('dr ')) {
        return {
            text: 'You can search doctors by name or open the full specialists page.',
            actions: [
                { ...BASE_ACTIONS.doctors },
                { label: 'Search by Doctor Name', kind: 'reply', value: 'doctor-menu' },
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    return {
        text: 'I can help you search by symptom, service, or doctor name. Tell me your concern in plain language, or pick a quick option below.',
        actions: [
            ...getMainMenuActions(),
            ...COMMON_PATIENT_QUESTIONS.slice(0, 1).map((item) => ({
                label: item.label,
                kind: 'reply',
                value: 'common-question:0'
            }))
        ]
    };
}

export default function ChatButton() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showWelcomeNudge, setShowWelcomeNudge] = useState(false);
    const [input, setInput] = useState('');
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [messages, setMessages] = useState([welcomeMessage()]);
    const endRef = useRef(null);

    const hiddenOnRoute = useMemo(
        () => location.pathname === '/booking-gateway' || location.pathname === '/mystree-soul',
        [location.pathname]
    );

    useEffect(() => {
        if (hiddenOnRoute || isOpen) return undefined;

        let showTimer;
        let hideTimer;
        let introAlreadySeen = false;

        try {
            introAlreadySeen = window.sessionStorage.getItem(INTRO_SEEN_KEY) === '1';
        } catch {
            introAlreadySeen = false;
        }

        if (introAlreadySeen) return undefined;

        showTimer = window.setTimeout(() => {
            setShowWelcomeNudge(true);
            try {
                window.sessionStorage.setItem(INTRO_SEEN_KEY, '1');
            } catch {
                // Ignore storage failures silently
            }
            hideTimer = window.setTimeout(() => setShowWelcomeNudge(false), INTRO_VISIBLE_MS);
        }, INTRO_SHOW_DELAY_MS);

        return () => {
            window.clearTimeout(showTimer);
            if (hideTimer) window.clearTimeout(hideTimer);
        };
    }, [hiddenOnRoute, isOpen, location.pathname]);

    useEffect(() => {
        const footer = document.querySelector('.ms-footer');
        if (!footer) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setIsFooterVisible(entry.isIntersecting),
            { threshold: 0.08 }
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, [location.pathname]);

    useEffect(() => {
        if (!isOpen) return;
        endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [messages, isOpen]);

    useEffect(() => {
        const closeTimer = window.setTimeout(() => setIsOpen(false), 0);
        return () => window.clearTimeout(closeTimer);
    }, [location.pathname]);

    useEffect(() => {
        const chatOpen = isOpen && !hiddenOnRoute;
        document.body.classList.toggle('mystree-chat-open', chatOpen);
        window.dispatchEvent(new CustomEvent('mystree-chat-toggle', { detail: { open: chatOpen } }));
    }, [isOpen, hiddenOnRoute]);

    useEffect(
        () => () => {
            document.body.classList.remove('mystree-chat-open');
            window.dispatchEvent(new CustomEvent('mystree-chat-toggle', { detail: { open: false } }));
        },
        []
    );

    if (hiddenOnRoute) return null;

    const addUser = (text) => setMessages((prev) => [...prev, makeMessage('user', text)]);
    const addBot = (text, actions = []) => setMessages((prev) => [...prev, makeMessage('bot', text, actions)]);

    const resetChat = () => {
        setMessages([welcomeMessage()]);
        setInput('');
    };

    const handleAction = (action) => {
        addUser(action.label);

        if (action.kind === 'menu') {
            addBot('Sure. Here are your quick actions:', getMainMenuActions());
            return;
        }

        if (action.kind === 'reply') {
            if (action.value === 'common-questions') {
                addBot('These are common patient questions. Tap one and I will route you correctly:', getCommonQuestionActions());
                return;
            }

            if (action.value === 'service-discovery') {
                addBot(
                    'Choose how you want to search. You can browse by concern/service or by doctor name:',
                    [
                        { label: 'Search by Symptoms or Service', kind: 'reply', value: 'service-menu' },
                        { label: 'Search by Doctor Name', kind: 'reply', value: 'doctor-menu' },
                        { label: 'Main Menu', kind: 'menu' }
                    ]
                );
                return;
            }

            if (action.value === 'service-menu') {
                addBot('Choose your concern. I will route you to the right care page:', getServiceActionList());
                return;
            }

            if (action.value === 'doctor-menu') {
                addBot('Choose a specialist to view profile or booking options:', getDoctorActionList());
                return;
            }

            if (action.value === 'service-more') {
                addBot('Here are more service options:', getServiceMoreActionList());
                return;
            }

            if (action.value.startsWith('service:')) {
                const key = action.value.replace('service:', '');
                const service = getServiceByKey(key);
                if (!service) {
                    addBot('I could not identify that service. Please choose again:', getServiceActionList());
                    return;
                }

                addBot(
                    `${service.label} is the right fit. ${service.summary}`,
                    [
                        createServiceAction(service),
                        ...getPrimaryQuickActions(),
                        { label: 'Main Menu', kind: 'menu' }
                    ]
                );
                return;
            }

            if (action.value.startsWith('doctor:')) {
                const key = action.value.replace('doctor:', '');
                const doctor = getDoctorByKey(key);
                if (!doctor) {
                    addBot('I could not identify that doctor. Please choose again:', getDoctorActionList());
                    return;
                }

                addBot(
                    `${doctor.name} - ${doctor.role}. I can open profile details or booking.`,
                    [
                        ...createDoctorActions(doctor),
                        ...getPrimaryQuickActions(),
                        { label: 'Main Menu', kind: 'menu' }
                    ]
                );
                return;
            }

            if (action.value.startsWith('common-question:')) {
                const questionIndex = Number(action.value.replace('common-question:', ''));
                const selectedQuestion = COMMON_PATIENT_QUESTIONS[questionIndex];
                if (!selectedQuestion) {
                    addBot('I could not map that query. Please choose again:', getCommonQuestionActions());
                    return;
                }

                const reply = inferReply(selectedQuestion.query);
                addBot(reply.text, reply.actions);
                return;
            }
        }

        if (action.kind === 'navigate') {
            addBot(action.ack || 'Opening this page.');
            navigate(action.value);
            return;
        }

        if (action.kind === 'external') {
            addBot(action.ack || 'Opening this now.');
            window.open(action.value, '_blank', 'noopener,noreferrer');
            return;
        }

        if (action.kind === 'phone') {
            addBot(action.ack || 'Opening your dialer.');
            window.open(`tel:${action.value}`, '_self');
        }
    };

    const handleSend = (event) => {
        event.preventDefault();
        const query = input.trim();
        if (!query) return;
        addUser(query);
        setInput('');

        const reply = inferReply(query);
        addBot(reply.text, reply.actions);
    };

    return (
        <div
            data-no-booking-intercept="true"
            className={`fixed right-3 sm:right-6 md:right-8 isolate z-[2147483000] flex flex-col items-end transition-all duration-300 px-1 sm:px-0 ${isFooterVisible ? 'bottom-24 sm:bottom-28' : 'bottom-3 sm:bottom-6 md:bottom-8'}`}
        >
            {!isOpen && showWelcomeNudge && (
                <div className="mb-2 w-[min(17rem,calc(100vw-2rem))] rounded-2xl border border-[#BFE2FE]/75 bg-white/95 backdrop-blur-sm shadow-[0_10px_24px_rgba(47,62,70,0.14)] p-2.5">
                    <div className="flex items-start gap-2">
                        <span className="mt-0.5 w-7 h-7 rounded-full bg-[#ED5B2D]/12 text-[#ED5B2D] inline-flex items-center justify-center">
                            <span className="material-symbols-outlined text-[15px]">support_agent</span>
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="text-[12px] font-semibold text-[#2F3E46] leading-snug">
                                Need help finding the right care
                            </p>
                            <p className="mt-0.5 text-[10px] text-[#2F3E46]/75 leading-snug">
                                Tap chat for booking, WhatsApp support, services, and doctor guidance
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpen(true);
                                    setShowWelcomeNudge(false);
                                }}
                                className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#ED5B2D] hover:text-[#FF833C] transition-colors"
                            >
                                Open Assistant
                                <span className="material-symbols-outlined text-[14px] leading-none">arrow_forward</span>
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowWelcomeNudge(false)}
                            aria-label="Dismiss assistant intro"
                            className="mt-0.5 w-6 h-6 rounded-full text-[#2F3E46]/60 hover:text-[#2F3E46] hover:bg-[#BFE2FE]/45 transition-colors inline-flex items-center justify-center"
                        >
                            <span className="material-symbols-outlined text-[14px] leading-none">close</span>
                        </button>
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="mb-2 sm:mb-4 w-[min(23rem,calc(100vw-0.75rem))] max-h-[82vh] rounded-2xl border border-[#D6E0EA] bg-[#FCFEFF] shadow-[0_20px_45px_rgba(15,23,42,0.16)] overflow-hidden flex flex-col pointer-events-auto">
                    <div className="px-4 py-3.5 bg-[#FCFEFF] border-b border-[#DCE5EE] flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-[#ED5B2D] text-white inline-flex items-center justify-center">
                                <span className="material-symbols-outlined text-[17px]">support_agent</span>
                            </span>
                            <div>
                                <p className="text-[13px] font-extrabold text-[#1E293B] leading-tight tracking-tight">MyStree Care Assistant</p>
                                <p className="text-[10.5px] text-[#475569] leading-tight">Quick care guidance</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                onClick={resetChat}
                                className="w-7 h-7 rounded-full bg-transparent hover:bg-[#F1F5F9] text-[#334155] inline-flex items-center justify-center transition-colors"
                                aria-label="Reset chat"
                            >
                                <span className="material-symbols-outlined text-[16px]">refresh</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-full bg-transparent hover:bg-[#F1F5F9] text-[#334155] inline-flex items-center justify-center transition-colors"
                                aria-label="Close chat"
                            >
                                <span className="material-symbols-outlined text-[16px]">close</span>
                            </button>
                        </div>
                    </div>

                    <div className="px-3.5 py-3 bg-[#F8FBFF] border-b border-[#DCE5EE]">
                        <p className="text-[11px] font-semibold text-[#334155] mb-2">Quick access</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {getPrimaryQuickActions().map((action) => (
                                <button
                                    key={`quick-${action.label}`}
                                    type="button"
                                    onClick={() => handleAction(action)}
                                    className={`min-h-[38px] px-3 py-2 rounded-xl text-[10.5px] leading-tight font-semibold text-center transition-all ${action.id === 'book'
                                        ? 'bg-[#ED5B2D] text-white font-bold shadow-[0_6px_14px_rgba(237,91,45,0.24)] hover:brightness-95'
                                        : action.id === 'whatsapp'
                                            ? 'bg-[#25D366] text-white font-bold shadow-[0_6px_14px_rgba(37,211,102,0.2)] hover:brightness-95'
                                            : 'bg-white border border-[#C9D7E5] text-[#334155] hover:bg-[#EEF5FC]'
                                        }`}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto px-3.5 py-3 bg-[#F6F9FC]">
                        <div className="space-y-2.5">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[92%] sm:max-w-[90%] px-3 py-2 rounded-2xl shadow-sm ${message.role === 'user'
                                            ? 'bg-[#ED5B2D] text-white rounded-br-md'
                                            : 'bg-white border border-[#D4DEE8] text-[#334155] rounded-bl-md'
                                            }`}
                                    >
                                        <p className="text-[12.5px] leading-relaxed">{message.text}</p>
                                        {message.actions?.length > 0 && (
                                            <div className="mt-2 flex flex-wrap gap-1.5">
                                                {message.actions.map((action, index) => (
                                                    <button
                                                        key={`${message.id}-${index}-${action.label}`}
                                                        type="button"
                                                        onClick={() => handleAction(action)}
                                                        className="px-2.5 py-1.5 rounded-lg border border-[#C9D7E5] bg-[#EDF4FB] text-[#334155] text-[10.5px] font-semibold hover:bg-[#E3EEF9] transition-colors"
                                                    >
                                                        {action.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={endRef} />
                        </div>
                    </div>

                    <form onSubmit={handleSend} className="px-3.5 py-3 border-t border-[#DCE5EE] bg-[#FCFEFF]">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                placeholder="Ask about symptoms, services, booking..."
                                className="flex-1 rounded-full border border-[#C9D7E5] bg-white px-3 py-2 text-[12px] sm:text-[12.5px] text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#BFD4EA]"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 rounded-full bg-[#ED5B2D] text-white inline-flex items-center justify-center shadow-[0_8px_18px_rgba(237,91,45,0.3)] hover:bg-[#db542a] transition-all"
                                aria-label="Send message"
                            >
                                <span className="material-symbols-outlined text-[17px]">send</span>
                            </button>
                        </div>
                        <p className="mt-1 text-[10px] text-[#2F3E46]/70">
                            For emergencies, call local emergency services immediately.
                        </p>
                    </form>
                </div>
            )}

            <button
                type="button"
                onClick={() => {
                    setIsOpen((prev) => !prev);
                    setShowWelcomeNudge(false);
                }}
                className={`group ${isOpen ? 'hidden sm:inline-flex' : 'inline-flex'} w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#ED5B2D] to-[#FF833C] text-white shadow-[0_8px_28px_rgba(237,91,45,0.34)] items-center justify-center hover:scale-105 transition-all duration-300 ${!isOpen && showWelcomeNudge ? 'ring-4 ring-[#FFD8C8]/80 ring-offset-2 ring-offset-white' : ''}`}
                aria-label={isOpen ? 'Close care assistant chat' : 'Open care assistant chat'}
            >
                <span className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 inline-flex items-center justify-center backdrop-blur-sm ${!isOpen && showWelcomeNudge ? 'animate-pulse' : ''}`}>
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{isOpen ? 'close' : 'chat'}</span>
                </span>
            </button>
        </div>
    );
}
