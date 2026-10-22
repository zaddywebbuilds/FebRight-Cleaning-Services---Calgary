import { Link } from 'react-router-dom'
import { Leaf, Shield, Clock, ArrowRight, MapPin, Phone } from 'lucide-react'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import FAQAccordion from '../components/FAQAccordion'
import CTA from '../components/CTA'
import ScrollReveal from '../components/ScrollReveal'
import { faqs } from '../content/faqs'
import { img } from '../content/imageMap'

const values = [
  { icon: Leaf,   title: 'Eco-Friendly Products', body: 'Effective non-toxic solutions — safer for your home, your family and the environment.', image: img.homeValue1 },
  { icon: Shield, title: 'Detail-Focused',        body: 'Every surface, every corner — the details that elevate a clean space.',                  image: img.homeValue2 },
  { icon: Clock,  title: 'Reliable Service',      body: 'We show up when we say and deliver the standard you expect, every time.',                image: img.homeValue3 },
]

const steps = [
  { num: '01', title: 'Inquire',          body: 'Fill in our quote form — it takes under two minutes.' },
  { num: '02', title: 'Customize',        body: "We follow up to discuss your space and tailor the service." },
  { num: '03', title: 'Enjoy the Clean',  body: 'Our team arrives, cares for your space, and leaves it beautiful.' },
]

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Category strip */}
      <div className="bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3.5 flex flex-wrap gap-x-10 gap-y-2 items-center justify-center md:justify-between">
          {['Residential Cleaning', 'Commercial Cleaning', 'Eco-Friendly', 'Calgary & Surrounding Area'].map((item) => (
            <span key={item} className="font-sans text-[11px] font-600 tracking-widest2 uppercase text-ivory/60">{item}</span>
          ))}
        </div>
      </div>

      <ServicesGrid />

      {/* Approach — image cards, no empty cells */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mb-10 flex flex-col md:flex-row md:items-end gap-5">
            <div className="flex-1">
              <p className="section-label mb-3">Our Approach</p>
              <h2 className="section-heading">
                Cleaning done with care,<br />
                <em className="italic text-forest">not corners cut.</em>
              </h2>
            </div>
            <p className="font-sans text-sm text-charcoal/55 font-300 leading-relaxed max-w-xs md:text-right">
              A careful, eco-conscious approach to every home and office in the Calgary area.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, body, image }, i) => (
              <ScrollReveal key={title} delay={i * 0.09}>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-sage/60 group hover:shadow-lg transition-shadow duration-400 h-full">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={440}
                      height={275}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Icon size={16} className="text-forest flex-shrink-0" />
                      <h3 className="font-display text-xl font-500 text-charcoal">{title}</h3>
                    </div>
                    <p className="font-sans text-sm text-charcoal/60 font-300 leading-relaxed">{body}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio band — text and images share the row, nothing empty */}
      <section className="py-14 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <ScrollReveal direction="left" className="lg:col-span-4 flex flex-col justify-center">
              <p className="section-label mb-3">From Our Portfolio</p>
              <h2 className="font-display text-4xl font-300 text-charcoal leading-tight mb-4">
                Spaces that speak<br />
                <em className="italic text-forest">for themselves.</em>
              </h2>
              <p className="font-sans text-sm text-charcoal/60 font-300 leading-relaxed mb-6">
                Photos from FebRight's Google Business listing — real Calgary spaces, real results.
              </p>
              <Link to="/results" className="inline-flex items-center gap-2 text-forest font-500 text-sm hover:gap-3 transition-all duration-200 self-start">
                View Full Gallery <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={img.homeStrip1.src}
                    alt={img.homeStrip1.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={480}
                    height={360}
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={img.homeStrip2.src}
                    alt={img.homeStrip2.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={480}
                    height={360}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before/After teaser — compact band, no image-sized void */}
      <section className="bg-sage">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <p className="section-label mb-2">Before &amp; After</p>
            <h2 className="font-display text-3xl font-300 text-charcoal">
              See the <em className="italic text-forest">difference</em> side by side.
            </h2>
          </div>
          <Link to="/results" className="btn-primary self-start md:self-auto flex-shrink-0">
            Open Comparison Gallery
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mb-10">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="section-heading">Three simple steps.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 0.1} className="bg-white rounded-lg border border-sage p-7 hover:border-forest/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-forest text-ivory flex items-center justify-center font-sans font-600 text-xs mb-4">
                  {num}
                </div>
                <h3 className="font-display text-xl font-400 text-charcoal mb-2">{title}</h3>
                <p className="font-sans text-charcoal/60 text-sm font-300 leading-relaxed">{body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + contact rail side by side — fills the row */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <ScrollReveal className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="section-label mb-3">FAQ</p>
                  <h2 className="font-display text-4xl font-300 text-charcoal">Common questions.</h2>
                </div>
                <Link to="/faq" className="inline-flex items-center gap-2 text-forest font-500 text-sm hover:gap-3 transition-all duration-200 flex-shrink-0">
                  All FAQs <ArrowRight size={14} />
                </Link>
              </ScrollReveal>
              <ScrollReveal>
                <FAQAccordion items={faqs.slice(0, 4)} />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12} className="lg:col-span-5">
              <div className="bg-forest text-ivory rounded-lg p-8 h-full flex flex-col justify-center">
                <p className="section-label text-gold mb-3">Get In Touch</p>
                <h3 className="font-display text-3xl font-300 text-ivory mb-4 leading-tight">
                  Still have a question?
                </h3>
                <p className="font-sans text-sm text-ivory/65 font-300 leading-relaxed mb-7">
                  Call us directly or send a quote request and we'll get back to you with answers specific to your space.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+14034700416"
                    className="flex items-center gap-3 px-5 py-3.5 bg-gold text-charcoal font-500 text-sm hover:bg-ivory transition-colors duration-300"
                  >
                    <Phone size={15} />
                    +1 403-470-0416
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 px-5 py-3.5 border border-ivory/30 text-ivory font-500 text-sm hover:bg-ivory/10 transition-colors duration-300"
                  >
                    <ArrowRight size={15} />
                    Request a Free Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service area band */}
      <section className="py-8 bg-ivory border-y border-sage">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
            <div className="flex items-center gap-3 text-charcoal/65">
              <MapPin size={17} className="text-forest flex-shrink-0" />
              <p className="font-sans text-sm font-300">
                Serving <strong className="font-500 text-charcoal">Calgary</strong> and surrounding areas, Alberta.{' '}
                <Link to="/contact" className="text-forest underline underline-offset-2 hover:text-charcoal transition-colors duration-200">
                  Confirm your area
                </Link>
              </p>
            </div>
            <a href="tel:+14034700416" className="font-sans text-sm font-500 text-forest hover:text-charcoal transition-colors duration-200">
              +1 403-470-0416
            </a>
          </div>
        </div>
      </section>

      <CTA dark />
    </main>
  )
}
