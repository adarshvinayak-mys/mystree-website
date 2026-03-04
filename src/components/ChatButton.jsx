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
        summary: 'For irregular periods, PCOS/PCOD, pelvic pain, discharge, and general gyne concerns.',
        keywords: ['period', 'pcos', 'pcod', 'menstruation', 'bleeding', 'pelvic', 'gyn', 'gynec', 'gynaec']
    },
    {
        key: 'fertility',
        label: 'Fertility Support',
        route: '/services/fertility',
        summary: 'For trying to conceive, IVF/IUI planning, ovulation tracking, and fertility counselling.',
        keywords: ['fertility', 'conceive', 'infertility', 'ivf', 'iui', 'egg', 'amh', 'ovulation']
    },
    {
        key: 'prenatal',
        label: 'Pregnancy Care',
        route: '/services/prenatal',
        summary: 'For trimester guidance, high-risk pregnancy care, scans, and delivery planning.',
        keywords: ['pregnan', 'prenatal', 'antenatal', 'trimester', 'scan', 'delivery', 'maternity']
    },
    {
        key: 'adolescent',
        label: 'Teen Health',
        route: '/services/adolescent-health',
        summary: 'For puberty concerns, first periods, adolescent PCOS, and confidential guidance.',
        keywords: ['teen', 'adolescent', 'puberty', 'first period', 'young']
    },
    {
        key: 'menopause',
        label: 'Menopause Care',
        route: '/services/menopause',
        summary: 'For hot flashes, sleep changes, mood shifts, and hormone transition support.',
        keywords: ['menopause', 'perimenopause', 'hot flash', 'hot flush', 'night sweats', 'hrt']
    },
    {
        key: 'nutrition',
        label: 'Nutrition',
        route: '/services/nutrition',
        summary: 'For PCOS diet plans, hormone-friendly nutrition, and healthy weight support.',
        keywords: ['nutrition', 'diet', 'weight', 'meal', 'food']
    },
    {
        key: 'physio',
        label: 'Pelvic Physio',
        route: '/services/physiotherapy',
        summary: 'For pelvic floor therapy, postnatal recovery, incontinence, and rehabilitation.',
        keywords: ['physio', 'physiotherapy', 'pelvic floor', 'incontinence', 'rehab', 'recovery']
    },
    {
        key: 'dermatology',
        label: 'Skin & Hair',
        route: '/services/dermatology',
        summary: 'For acne, pigmentation, melasma, and skin/hair wellness protocols.',
        keywords: ['skin', 'acne', 'pimple', 'pigmentation', 'melasma', 'hair', 'scalp', 'dermatology']
    },
    {
        key: 'psychology',
        label: 'Mental Wellness',
        route: '/services/psychology',
        summary: 'For stress, anxiety, mood support, counselling, and psychiatry care.',
        keywords: ['mental', 'anxiety', 'stress', 'depression', 'therapy', 'counselling', 'psychiatry']
    }
];

const BASE_ACTIONS = {
    book: { label: 'Book Appointment', kind: 'external', value: BOOKING_URL, ack: 'Opening booking for you now.' },
    whatsapp: { label: 'WhatsApp Care', kind: 'external', value: WHATSAPP_URL, ack: 'Opening WhatsApp support now.' },
    service: { label: 'Find My Service', kind: 'reply', value: 'service-menu' },
    call: { label: 'Call Clinic', kind: 'phone', value: CONTACT_PHONE, ack: 'Connecting your call to My Stree.' },
    doctors: { label: 'Meet Doctors', kind: 'navigate', value: '/team', ack: 'Opening our doctors page.' }
};

const PRIMARY_ACTION_ORDER = ['book', 'whatsapp', 'service', 'call', 'doctors'];
const getPrimaryQuickActions = () => PRIMARY_ACTION_ORDER.map((key) => ({ ...BASE_ACTIONS[key] }));
const getMainMenuActions = () => [...getPrimaryQuickActions(), { label: 'Common Questions', kind: 'reply', value: 'common-questions' }];

const COMMON_PATIENT_QUESTIONS = [
    { label: 'I have irregular periods', serviceKey: 'obgyn' },
    { label: 'I am trying to conceive', serviceKey: 'fertility' },
    { label: 'I need pregnancy guidance', serviceKey: 'prenatal' },
    { label: 'I have menopause symptoms', serviceKey: 'menopause' },
    { label: 'I need skin/acne support', serviceKey: 'dermatology' },
    { label: 'I feel stressed/anxious', serviceKey: 'psychology' }
];

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const makeMessage = (role, text, actions = []) => ({ id: createId(), role, text, actions });

const welcomeMessage = () =>
    makeMessage(
        'bot',
        'Hello, I am your MyStree Care Assistant. How can I help you today?',
        getMainMenuActions()
    );

function getServiceFromText(text) {
    const lower = text.toLowerCase();
    return services.find((service) => service.keywords.some((keyword) => lower.includes(keyword)));
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
        ...COMMON_PATIENT_QUESTIONS.map((item) => ({
            label: item.label,
            kind: 'reply',
            value: `common-question:${item.serviceKey}`
        })),
        { label: 'Main Menu', kind: 'menu' }
    ];
}

function inferReply(query) {
    const lower = query.toLowerCase();
    const match = getServiceFromText(query);
    const isGreeting = /^(hi|hii|hello|hey|good morning|good afternoon|good evening)\b/i.test(query.trim());

    if (isGreeting) {
        return {
            text: 'Hello. I can guide you to the right service, booking, doctors, or contact support. Choose a quick option or open common questions:',
            actions: getMainMenuActions()
        };
    }

    if (match) {
        return {
            text: `The best starting point is ${match.label}. ${match.summary}`,
            actions: [
                { label: `Open ${match.label}`, kind: 'navigate', value: match.route, ack: `Opening ${match.label}.` },
                ...getPrimaryQuickActions(),
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (lower.includes('book') || lower.includes('appointment') || lower.includes('consult')) {
        return {
            text: 'You can book immediately or speak to us on WhatsApp for guided support.',
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
                ...getPrimaryQuickActions(),
                { label: 'Open Contact Page', kind: 'navigate', value: '/contact', ack: 'Opening Contact page.' },
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (lower.includes('doctor') || lower.includes('team') || lower.includes('specialist')) {
        return {
            text: 'You can explore profiles, specialities, and consultation details on our doctors page.',
            actions: [
                ...getPrimaryQuickActions(),
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    if (lower.includes('urgent') || lower.includes('emergency') || lower.includes('heavy bleeding') || lower.includes('severe pain')) {
        return {
            text: 'If this feels urgent, please call emergency services immediately. You can also call our clinic now for rapid support.',
            actions: [
                ...getPrimaryQuickActions(),
                { label: 'Main Menu', kind: 'menu' }
            ]
        };
    }

    return {
        text: 'I can help you find the right service quickly. Please choose one of the quick options below.',
        actions: [
            ...getMainMenuActions(),
            ...COMMON_PATIENT_QUESTIONS.slice(0, 1).map((item) => ({
                label: item.label,
                kind: 'reply',
                value: `common-question:${item.serviceKey}`
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
        setIsOpen(false);
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

            if (action.value === 'service-menu') {
                addBot('Choose your concern. I will route you to the right care page:', getServiceActionList());
                return;
            }

            if (action.value === 'service-more') {
                addBot('Here are more service options:', getServiceMoreActionList());
                return;
            }

            if (action.value.startsWith('service:')) {
                const key = action.value.replace('service:', '');
                const service = services.find((item) => item.key === key);
                if (!service) {
                    addBot('I could not identify that service. Please choose again:', getServiceActionList());
                    return;
                }

                addBot(
                    `${service.label} is the right fit. ${service.summary}`,
                    [
                        { label: `Open ${service.label}`, kind: 'navigate', value: service.route, ack: `Opening ${service.label}.` },
                        ...getPrimaryQuickActions(),
                        { label: 'Main Menu', kind: 'menu' }
                    ]
                );
                return;
            }

            if (action.value.startsWith('common-question:')) {
                const key = action.value.replace('common-question:', '');
                const service = services.find((item) => item.key === key);
                if (!service) {
                    addBot('I could not map that query. Please choose again:', getCommonQuestionActions());
                    return;
                }

                addBot(
                    `Thanks for sharing. ${service.label} is the right path for this concern. ${service.summary}`,
                    [
                        { label: `Open ${service.label}`, kind: 'navigate', value: service.route, ack: `Opening ${service.label}.` },
                        ...getPrimaryQuickActions(),
                        { label: 'Main Menu', kind: 'menu' }
                    ]
                );
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
            window.location.href = `tel:${action.value}`;
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
            className={`fixed right-3 sm:right-5 md:right-6 isolate z-[2147483000] transition-all duration-300 ${isFooterVisible ? 'bottom-28 md:bottom-28' : 'bottom-4 md:bottom-6'}`}
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
                <div className="mb-2 w-[calc(100vw-1.5rem)] sm:w-[23rem] rounded-3xl border border-[#8BA4BF]/30 bg-white shadow-[0_18px_40px_rgba(47,62,70,0.2)] overflow-hidden">
                    <div className="px-3.5 py-3 bg-white border-b border-[#8BA4BF]/30 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-[#ED5B2D] text-white inline-flex items-center justify-center">
                                <span className="material-symbols-outlined text-[17px]">support_agent</span>
                            </span>
                            <div>
                                <p className="text-[12px] font-extrabold text-[#2F3E46] leading-tight">MyStree Care Assistant</p>
                                <p className="text-[10px] text-[#2F3E46]/75 leading-tight">Quick care guidance</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                onClick={resetChat}
                                className="w-7 h-7 rounded-full bg-white hover:bg-[#F8FCFF] text-[#2F3E46] inline-flex items-center justify-center transition-colors"
                                aria-label="Reset chat"
                            >
                                <span className="material-symbols-outlined text-[16px]">refresh</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-full bg-white hover:bg-[#F8FCFF] text-[#2F3E46] inline-flex items-center justify-center transition-colors"
                                aria-label="Close chat"
                            >
                                <span className="material-symbols-outlined text-[16px]">close</span>
                            </button>
                        </div>
                    </div>

                    <div className="px-3 py-2.5 bg-white border-b border-[#8BA4BF]/20">
                        <p className="text-[11px] font-semibold text-[#2F3E46]/90 mb-1">Quick access</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                            {getPrimaryQuickActions().map((action) => (
                                <button
                                    key={`quick-${action.label}`}
                                    type="button"
                                    onClick={() => handleAction(action)}
                                    className={`px-2.5 py-1.5 rounded-full text-[10.5px] leading-none font-semibold text-center transition-all ${action.label === 'Book Appointment'
                                        ? 'bg-[#ED5B2D] text-white font-bold hover:brightness-95'
                                        : action.label === 'WhatsApp Care'
                                            ? 'bg-[#25D366] text-white font-bold hover:brightness-95'
                                            : 'bg-white border border-[#8BA4BF]/35 text-[#2F3E46] hover:bg-[#BFE2FE]/45'
                                        }`}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-h-[46vh] overflow-y-auto px-3 py-3 bg-white">
                        <div className="space-y-2.5">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[90%] px-3 py-2 rounded-2xl shadow-sm ${message.role === 'user'
                                            ? 'bg-[#ED5B2D] text-white rounded-br-md'
                                            : 'bg-white border border-[#8BA4BF]/25 text-[#2F3E46] rounded-bl-md'
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
                                                        className="px-2.5 py-1.5 rounded-full border border-[#8BA4BF]/35 bg-[#BFE2FE]/35 text-[#2F3E46] text-[10.5px] font-semibold hover:bg-[#BFE2FE]/65 transition-colors"
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

                    <form onSubmit={handleSend} className="px-3 py-3 border-t border-[#8BA4BF]/30 bg-white">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                placeholder="Ask about symptoms, services, booking..."
                                className="flex-1 rounded-full border border-[#8BA4BF]/35 bg-white px-3 py-2 text-[12.5px] text-[#2F3E46] placeholder:text-[#8BA4BF] focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]"
                            />
                            <button
                                type="submit"
                                className="w-9 h-9 rounded-full bg-gradient-to-r from-[#ED5B2D] to-[#FF833C] text-white inline-flex items-center justify-center shadow-md hover:brightness-95 transition-all"
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
                className={`group w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_8px_30px_rgb(16,185,129,0.35)] inline-flex items-center justify-center hover:scale-105 transition-all duration-300 ${!isOpen && showWelcomeNudge ? 'ring-4 ring-[#BFE2FE]/70 ring-offset-2 ring-offset-white' : ''}`}
                aria-label={isOpen ? 'Close care assistant chat' : 'Open care assistant chat'}
            >
                <span className={`w-10 h-10 rounded-full bg-white/20 inline-flex items-center justify-center backdrop-blur-sm ${!isOpen && showWelcomeNudge ? 'animate-pulse' : ''}`}>
                    <span className="material-symbols-outlined text-[20px]">{isOpen ? 'close' : 'chat'}</span>
                </span>
            </button>
        </div>
    );
}
