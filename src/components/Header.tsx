import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/results', label: 'Results' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-ivory border-b border-sage shadow-sm'
          : 'bg-ivory',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-[var(--header-h)]">
        {/* Logo wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="FebRight Cleaning Services — home"
        >
          {/* SVG logo mark */}
          <span className="w-8 h-8 flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="4" fill="#153D35"/>
              <text x="6" y="23" fontFamily="Georgia,serif" fontSize="18" fontWeight="400" fill="#D9E7DA" letterSpacing="-1">F</text>
            </svg>
          </span>
          <span className="font-display text-xl font-400 text-charcoal transition-colors duration-300">
            Feb<span className="font-600">Right</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => clsx(
                'font-sans text-sm font-500 tracking-wide transition-colors duration-200',
                isActive
                  ? 'text-forest underline underline-offset-4 decoration-gold'
                  : 'text-charcoal/75 hover:text-forest',
              )}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-500 tracking-wide transition-all duration-300 border border-forest text-forest hover:bg-forest hover:text-ivory"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded text-charcoal hover:text-forest transition-colors duration-200"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 bg-ivory border-b border-sage',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
      >
        <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => clsx(
                'py-3 font-sans text-base font-500 border-b border-sage last:border-0 transition-colors duration-200',
                isActive ? 'text-forest' : 'text-charcoal hover:text-forest',
              )}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-4 btn-primary justify-center"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
