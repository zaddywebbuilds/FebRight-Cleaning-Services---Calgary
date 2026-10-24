import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  pages: [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/results', label: 'Results' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ],
  services: [
    { to: '/services/residential-cleaning', label: 'Residential Cleaning' },
    { to: '/services/commercial-cleaning', label: 'Commercial Cleaning' },
    { to: '/contact?service=one-time', label: 'One-Time Clean' },
    { to: '/contact?service=recurring', label: 'Recurring Service' },
  ],
  legal: [
    { to: '/privacy', label: 'Privacy Policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <span className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="32" height="32" rx="4" fill="#D9E7DA" fillOpacity="0.15"/>
                  <text x="6" y="23" fontFamily="Georgia,serif" fontSize="18" fontWeight="400" fill="#D9E7DA" letterSpacing="-1">F</text>
                </svg>
              </span>
              <span className="font-display text-xl font-400 text-ivory">
                Feb<span className="font-600">Right</span>
              </span>
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed font-300 mb-6 max-w-xs">
              Professional residential and commercial cleaning in Calgary and surrounding areas. Eco-friendly products. Careful attention.
            </p>
            {/* Contact details */}
            <ul className="space-y-3 text-sm text-ivory/70">
              <li>
                <a
                  href="tel:+14034700416"
                  className="flex items-center gap-2 hover:text-gold transition-colors duration-200"
                >
                  <Phone size={14} className="flex-shrink-0" />
                  +1 403-470-0416
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@febrightcleaningservices.com"
                  className="flex items-start gap-2 hover:text-gold transition-colors duration-200"
                >
                  <Mail size={14} className="flex-shrink-0 mt-0.5" />
                  <span className="min-w-0 break-all">hello@febrightcleaningservices.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>Calgary, Alberta, Canada</span>
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FebRight on Instagram"
                className="text-ivory/50 hover:text-gold transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FebRight on Facebook"
                className="text-ivory/50 hover:text-gold transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-sans text-xs font-600 tracking-widest2 uppercase text-gold mb-5">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-ivory/60 text-sm hover:text-ivory transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-600 tracking-widest2 uppercase text-gold mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-ivory/60 text-sm hover:text-ivory transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote CTA */}
          <div>
            <h3 className="font-sans text-xs font-600 tracking-widest2 uppercase text-gold mb-5">Ready to Start?</h3>
            <p className="text-ivory/60 text-sm leading-relaxed mb-5">
              Get in touch with a free, no-obligation quote request. We'll follow up to discuss your space.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-ivory text-sm font-500 tracking-wide hover:bg-sage hover:text-charcoal transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} FebRight Cleaning Services. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-ivory/70 transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-ivory/30 text-xs">Calgary, AB · (403) 470-0416</p>
        </div>
      </div>
    </footer>
  )
}
