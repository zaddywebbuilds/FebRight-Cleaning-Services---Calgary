import { Link } from 'react-router-dom'
import { ArrowRight, Home as HomeIcon, Building2 } from 'lucide-react'
import { confirmedServices } from '../content/services'
import ScrollReveal from './ScrollReveal'

const icons: Record<string, typeof HomeIcon> = {
  residential: HomeIcon,
  commercial: Building2,
}

export default function ServicesGrid() {
  return (
    <section className="py-14 lg:py-20 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <ScrollReveal className="mb-10 flex flex-col md:flex-row md:items-end gap-5">
          <div className="flex-1">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="section-heading">
              Cleaning services<br />
              <em className="italic text-forest">thoughtfully delivered.</em>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-forest font-500 text-sm hover:gap-3 transition-all duration-200 flex-shrink-0">
            All Services <ArrowRight size={14} />
          </Link>
        </ScrollReveal>

        {/* Text-forward service cards — photography lives on the Services page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {confirmedServices.map((service, i) => {
            const Icon = icons[service.id] ?? HomeIcon
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <article className="relative h-full bg-white border border-sage rounded-lg p-8 group hover:border-forest/40 hover:shadow-lg transition-all duration-400">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="w-11 h-11 flex-shrink-0 rounded bg-sage flex items-center justify-center group-hover:bg-forest transition-colors duration-300">
                      <Icon size={18} className="text-forest group-hover:text-ivory transition-colors duration-300" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-400 text-charcoal leading-tight">{service.title}</h3>
                      <p className="font-display text-base italic text-forest mt-1">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-charcoal/60 font-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/65 font-300">
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Link to={`/contact?service=${service.id}`} className="btn-primary text-xs px-5 py-3">
                      Get a Quote
                    </Link>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 text-forest font-500 text-xs tracking-wide hover:gap-3 transition-all duration-200"
                    >
                      Details <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
