import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Philosophy from '../components/Philosophy';
import Conditions from '../components/Conditions';
import Facts from '../components/Facts';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Quote from '../components/Quote';

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "My Stree",
    "logo": "https://my-stree.com/mystreelogo.svg",
    "image": "https://my-stree.com/mystreelogo.svg",
    "description": "Best Women's Healthcare Clinic & OBGYN in Indiranagar, Bangalore. Trusted by 10,000+ women. 4.9/5 Google Rating. 15+ senior specialists.",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Indiranagar",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
    },
    "telephone": "+916366573772",
    "url": "https://my-stree.com",
    "medicalSpecialty": ["ObstetricsGynecology", "ReproductiveMedicine", "Nutrition", "Psychiatry", "Dermatology"],
    "employee": [
        { "@type": "Physician", "name": "Dr. Smitha A.P.", "hasCredential": "MBBS, MS (OBG), DNB" },
        { "@type": "Physician", "name": "Dr. Surbhi Sinha", "hasCredential": "MRCOG (UK), OBGYN" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why do heart attack symptoms differ in women?",
            "acceptedAnswer": { "@type": "Answer", "text": "Women often experience subtler heart attack signs such as extreme fatigue, breathlessness, jaw pain, or nausea, rather than classic chest pain. Understanding these unique physiological differences and prioritizing cardiovascular screening is critical for women to prevent life-threatening delays in diagnosis." }
        },
        {
            "@type": "Question",
            "name": "Why is early autoimmune screening a priority for women?",
            "acceptedAnswer": { "@type": "Answer", "text": "Women have a significantly higher risk of developing autoimmune and thyroid disorders due to complex hormonal fluctuations. Timely clinical screening detects these issues early, preventing delayed diagnosis, controlling inflammatory flares, and managing long-term health complications effectively." }
        },
        {
            "@type": "Question",
            "name": "How do hormonal shifts affect a woman's mood and sleep?",
            "acceptedAnswer": { "@type": "Answer", "text": "Major hormonal transitions during postpartum and menopause strongly influence emotional resilience, often causing mood swings, severe anxiety, and sleep disruptions. Because a woman's body requires slightly more rest during these phases, personalized medical care is essential to restore hormonal and mental balance." }
        },
        {
            "@type": "Question",
            "name": "Does the menstrual cycle affect hydration and pain perception?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, natural hormonal shifts throughout the menstrual cycle directly affect water retention, thirst, and nerve-related pain perception. Because women experience pain and hydration needs differently throughout the month, we provide customized, empathetic care tailored to your specific biological timeline." }
        }
    ]
};

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Hero />
            <HowItWorks />
            <Philosophy />
            <Conditions />
            <Facts />
            <Services />
            <Testimonials />
            <Quote />
        </>
    );
}
