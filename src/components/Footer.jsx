import { Link } from 'react-router-dom';
import './Footer.css';

const mystreelogo = '/mystreelogo.svg';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Doctors', to: '/team' },
  { label: 'Resources', to: '/showcase/events' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  { label: 'OBGYN Consults', to: '/services/obgyn', icon: 'female' },
  { label: 'Adolescent Health', to: '/services/adolescent-health', icon: 'child_care' },
  { label: 'Prenatal Care', to: '/services/prenatal', icon: 'pregnant_woman' },
  { label: 'Fertility Treatments', to: '/services/fertility', icon: 'biotech' },
  { label: 'Menopause Support', to: '/services/menopause', icon: 'self_improvement' },
  { label: 'Mental Wellness', to: '/services/psychology', icon: 'psychology' },
];

export default function Footer() {
  return (
    <footer data-no-booking-intercept="true" className="ms-footer">
      <div className="ms-footer__container">
        <div className="ms-footer__grid">
          <section className="ms-footer__col ms-footer__col--about">
            <img src={mystreelogo} alt="My Stree logo" className="ms-footer__logo" />
            <h3 className="ms-footer__title">About My Stree</h3>
            <p className="ms-footer__description">
              Compassionate, personalized healthcare for every stage of a woman&apos;s life. We blend modern expertise with gentle, evidence-based care.
            </p>
            <ul className="ms-footer__mini-links">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/blog">Community Impact</Link></li>
            </ul>
          </section>

          <section className="ms-footer__col">
            <h3 className="ms-footer__title">Quick Care</h3>
            <ul className="ms-footer__menu-list">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link className="ms-footer__menu-link" to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="ms-footer__col">
            <h3 className="ms-footer__title">Specialized Services</h3>
            <ul className="ms-footer__menu-list">
              {services.map((item) => (
                <li key={item.label}>
                  <Link className="ms-footer__menu-link ms-footer__menu-link--service" to={item.to}>
                    <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="ms-footer__col">
            <h3 className="ms-footer__title">Contact Hub</h3>
            <div className="ms-footer__contact-panel">
              <div className="ms-footer__contact-block">
                <p className="ms-footer__meta">CALL US 24/7</p>
                <a className="ms-footer__contact-main" href="tel:+916366573772">
                  <span className="material-symbols-outlined" aria-hidden="true">call</span>
                  <span>+91 63665 73772</span>
                </a>
              </div>
              <div className="ms-footer__contact-block">
                <p className="ms-footer__meta">EMAIL US</p>
                <a className="ms-footer__contact-secondary" href="mailto:info@mystree.org">
                  <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                  <span>info@mystree.org</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="ms-footer__bottom">
          <div className="ms-footer__newsletter">
            <label htmlFor="ms-newsletter">Sign up for updates</label>
            <form className="ms-footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input id="ms-newsletter" type="email" placeholder="Email address" aria-label="Email address" />
              <button type="submit">Join</button>
            </form>
          </div>

          <div className="ms-footer__social-legal">
            <div className="ms-footer__socials">
              <a className="ms-footer__social" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="https://www.youtube.com/@MyStreeForYou" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="https://www.instagram.com/mystreeforyou?igsh=MXhhOXY0aWxidGtwbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="ms-footer__social" href="https://www.linkedin.com/company/my-stree-for-you" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
            <div className="ms-footer__legal">
              <span>&copy; 2026 My Stree. All rights reserved.</span>
              <span className="ms-footer__pipe">|</span>
              <a href="#">Privacy Policy</a>
              <span className="ms-footer__pipe">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
