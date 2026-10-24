import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface CTAProps {
  heading?: string
  body?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  dark?: boolean
}

export default function CTA({
  heading = 'Ready for a beautifully clean space?',
  body = 'Get in touch for a free, no-obligation quote. We\'ll discuss your space and find the right fit.',
  primaryLabel = 'Get a Free Quote',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryTo = '/services',
  dark = false,
}: CTAProps) {
  return (
    <section className={dark ? 'bg-forest text-ivory' : 'bg-sage'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <ScrollReveal>
            <h2 className={`font-display text-4xl md:text-5xl font-300 leading-tight mb-4 ${dark ? 'text-ivory' : 'text-charcoal'}`}>
              {heading}
            </h2>
            <p className={`font-sans font-300 text-base leading-relaxed ${dark ? 'text-ivory/70' : 'text-charcoal/65'}`}>
              {body}
            </p>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal delay={0.15} className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <Link
              to={primaryTo}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-sans font-500 text-sm tracking-wide transition-all duration-300 ${
                dark
                  ? 'bg-gold text-charcoal hover:bg-ivory'
                  : 'bg-forest text-ivory hover:bg-charcoal'
              }`}
            >
              {primaryLabel}
              <ArrowRight size={15} />
            </Link>
            {secondaryLabel && (
              <Link
                to={secondaryTo}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 border font-sans font-500 text-sm tracking-wide transition-all duration-300 ${
                  dark
                    ? 'border-ivory/40 text-ivory hover:bg-ivory/10'
                    : 'border-forest text-forest hover:bg-forest hover:text-ivory'
                }`}
              >
                {secondaryLabel}
              </Link>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
