import { Link } from 'react-router-dom';
import mystreelogo from '../assets/logo.png';
import './Footer.css';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Doctors', to: '/team' },
  { label: 'Resources', to: '/showcase/events' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  { label: 'OBGYN Consults', to: '/services/obgyn' },
  { label: 'Adolescent Health', to: '/services/adolescent-health' },
  { label: 'Prenatal Care', to: '/services/prenatal' },
  { label: 'Fertility Treatments', to: '/services/fertility' },
  { label: 'Menopause Support', to: '/services/menopause' },
  { label: 'Mental Wellness', to: '/services/psychology' },
];

export default function Footer() {
  return (
    <footer data-no-booking-intercept="true" className="ms-footer">
      <div className="ms-footer__container">
        <div className="ms-footer__grid">
          <section className="ms-footer__col ms-footer__col--brand">
            <img src={mystreelogo} alt="Mystree Logo" className="ms-footer__logo" />
            <p className="ms-footer__tagline">
              Compassionate, personalized healthcare for every stage of a woman&apos;s life.
            </p>
            <div className="ms-footer__socials">
              <a className="ms-footer__social" href="https://www.linkedin.com/company/my-stree-for-you/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="https://www.instagram.com/mystreeforyou?igsh=MXhhOXY0aWxidGtwbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="https://wa.me/+916366573772" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="mailto:info@mystree.org" aria-label="Email">
                <span className="material-symbols-outlined" aria-hidden="true">mail</span>
              </a>
            </div>
          </section>

          <section className="ms-footer__col">
            <h4 className="ms-footer__heading">Quick Links</h4>
            <ul className="ms-footer__list">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link className="ms-footer__link ms-footer__link--with-icon" to={item.to}>
                    <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="ms-footer__col">
            <h4 className="ms-footer__heading">Our Services</h4>
            <ul className="ms-footer__list">
              {services.map((item) => (
                <li key={item.label}>
                  <Link className="ms-footer__link" to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="ms-footer__col">
            <h4 className="ms-footer__heading">Get in Touch</h4>
            <div className="ms-footer__contact-card">
              <div className="ms-footer__contact-item">
                <span className="material-symbols-outlined ms-footer__contact-icon" aria-hidden="true">call</span>
                <div>
                  <p className="ms-footer__contact-label">CALL US</p>
                  <a href="tel:+916366573772" className="ms-footer__contact-value ms-footer__contact-value--strong">+91 63665 73772</a>
                </div>
              </div>
              <div className="ms-footer__contact-item">
                <span className="material-symbols-outlined ms-footer__contact-icon" aria-hidden="true">mail</span>
                <div>
                  <p className="ms-footer__contact-label">EMAIL US</p>
                  <a href="mailto:info@mystree.org" className="ms-footer__contact-value">info@mystree.org</a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="ms-footer__bottom">
          <p className="ms-footer__copyright">(c) My Stree - All Rights Reserved</p>
          <div className="ms-footer__legal">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
