import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { services } from '../content/services'
import QuoteForm from '../components/QuoteForm'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug && !s.hidden)

  if (!service) {
    return (
      <main className="pt-32 pb-24 bg-ivory">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="font-display text-4xl font-300 text-charcoal mb-4">Service not found</h1>
          <p className="text-charcoal/60 font-300 mb-8">
            That page isn't available. Browse our current services instead.
          </p>
          <Link to="/services" className="btn-primary inline-flex">Back to Services</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 bg-ivory">
      <Seo
        title={`${service.title} in Calgary`}
        description={`${service.tagline} ${service.description}`.slice(0, 155)}
        path={`/services/${service.slug}`}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 pb-2">
        <Link to="/services" className="inline-flex items-center gap-1.5 text-xs text-charcoal/50 hover:text-forest font-500 transition-colors duration-200">
          <ArrowLeft size={13} />
          All Services
        </Link>
      </div>

      {/* Hero */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src={service.detailImage.src}
                  alt={service.detailImage.alt}
                  className="w-full h-auto"
                  loading="eager"
                  width={788}
                  height={550}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.08}>
              <p className="section-label mb-3">Service Detail</p>
              <h1 className="font-display text-4xl md:text-5xl font-300 text-charcoal mb-3">{service.title}</h1>
              <p className="font-display text-xl italic text-forest mb-5">{service.tagline}</p>
              <p className="font-sans text-charcoal/65 font-300 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-charcoal/70 font-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#quote" className="btn-primary inline-flex">
                Request a Quote
                <ArrowRight size={14} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-12 lg:py-16 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal className="mb-8 text-center">
            <p className="section-label mb-3">Get Started</p>
            <h2 className="font-display text-3xl md:text-4xl font-300 text-charcoal mb-3">
              Request a free quote for{' '}
              <em className="italic text-forest">{service.title}.</em>
            </h2>
            <p className="text-charcoal/55 font-300 text-sm">
              Fill in your details and we'll follow up to confirm availability and discuss your space.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <QuoteForm preselectedService={service.id} />
          </ScrollReveal>
        </div>
      </section>

      {/* Compact closing band */}
      <section className="bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <h2 className="font-display text-3xl font-300 text-ivory mb-1">Prefer to talk first?</h2>
            <p className="font-sans text-sm text-ivory/60 font-300">We're happy to answer questions before you book.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+14034700416"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-500 text-sm tracking-wide hover:bg-ivory transition-colors duration-300"
            >
              Call +1 403-470-0416
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-ivory/35 text-ivory font-500 text-sm tracking-wide hover:bg-ivory/10 transition-colors duration-300"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
