import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { confirmedServices } from '../content/services'
import { img } from '../content/imageMap'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'

export default function Services() {
  return (
    <main className="pt-24">

      {/* Header — paired with the first detail image so nothing sits empty */}
      <section className="py-12 lg:py-16 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <ScrollReveal className="lg:col-span-7">
              <p className="section-label mb-3">What We Offer</p>
              <h1 className="section-heading mb-5">
                Professional cleaning<br />
                <em className="italic text-forest">for Calgary homes and offices.</em>
              </h1>
              <p className="font-sans text-charcoal/65 font-300 text-lg leading-relaxed max-w-xl">
                FebRight delivers thoughtful, eco-friendly cleaning across residential and commercial spaces using non-toxic products and careful attention to detail.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img
                  src={img.svcDetail1.src}
                  alt={img.svcDetail1.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={560}
                  height={420}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service sections — alternating, tight */}
      <div className="bg-cream">
        {confirmedServices.map((service, i) => (
          <section key={service.id} className={`py-12 lg:py-16 ${i > 0 ? 'border-t border-sage' : ''}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <ScrollReveal
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  className={i % 2 === 1 ? 'lg:order-last' : ''}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={640}
                      height={480}
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0.08}>
                  <p className="section-label mb-3">Available Now</p>
                  <h2 className="font-display text-4xl md:text-5xl font-300 text-charcoal mb-3">{service.title}</h2>
                  <p className="font-display text-xl italic text-forest mb-4">{service.tagline}</p>
                  <p className="font-sans text-charcoal/65 font-300 leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-charcoal/70 font-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3.5">
                    <Link to={`/contact?service=${service.id}`} className="btn-primary">
                      Get a Free Quote
                      <ArrowRight size={14} />
                    </Link>
                    <Link to={`/services/${service.slug}`} className="btn-outline">
                      Full Service Details
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Detail band — image plus copy filling the row */}
      <section className="py-12 lg:py-16 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img
                  src={img.svcDetail2.src}
                  alt={img.svcDetail2.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={560}
                  height={420}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.08} className="lg:col-span-7">
              <p className="section-label mb-3">In Every Space</p>
              <h2 className="font-display text-4xl font-300 text-charcoal leading-tight mb-4">
                The detail that<br />
                <em className="italic text-forest">makes the difference.</em>
              </h2>
              <p className="font-sans text-charcoal/65 font-300 leading-relaxed mb-6">
                Whether it's a family home or a working office, the standard is the same: surfaces properly cleaned, corners not skipped, and products chosen with care for the people who use the space every day.
              </p>
              <Link to="/contact" className="btn-primary">
                Request a Quote
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
