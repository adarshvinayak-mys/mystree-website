import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Philosophy from '../components/Philosophy';
import Conditions from '../components/Conditions';
import Facts from '../components/Facts';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Quote from '../components/Quote';

export default function Home() {
    return (
        <>
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
