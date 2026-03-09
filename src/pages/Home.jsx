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

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
