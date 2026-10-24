import { Link } from 'react-router-dom'
import { Leaf, Shield, Clock, ArrowRight, Phone } from 'lucide-react'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import FAQAccordion from '../components/FAQAccordion'
import CTA from '../components/CTA'
import ScrollReveal from '../components/ScrollReveal'
import { faqs } from '../content/faqs'
import { img } from '../content/imageMap'

const values = [
  { icon: Leaf,   title: 'Eco-Friendly Products', body: 'Non-toxic solutions that are safer for your family, your pets and the environment.', image: img.homeValue1 },
  { icon: Shield, title: 'Detail-Focused',        body: 'Every surface, every corner — the details that make a space feel genuinely new.',   image: img.homeValue2 },
  { icon: Clock,  title: 'Reliable Service',      body: 'We arrive when we say we will, and leave the same standard behind every time.',     image: img.homeValue3 },
]

const steps = [
  { num: '01', title: 'Inquire',         body: 'Send the quote form — under two minutes.' },
  { num: '02', title: 'Customize',       body: 'We call to tailor the service to your space.' },
  { num: '03', title: 'Enjoy the Clean', body: 'Our team arrives and leaves it beautiful.' },
]

export default function Home() {
  return (
    <main>
      <Seo
        brandOnly
        title="FebRight Cleaning Services | Calgary Home & Office Cleaning"
        description="Eco-friendly residential and commercial cleaning in Calgary and surrounding areas. Careful, detail-focused work. Request a free quote today."
        path="/"
      />

      <Hero />

      {/* Approach */}
      <section className="py-14 lg:py-20 bg-ivory">
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
                  <div className="overflow-hidden aspect-[3/2]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={512}
                      height={341}
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

      {/* Proof — the portfolio and the before/after gallery share one band */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <ScrollReveal direction="left" className="lg:col-span-4 flex flex-col justify-center">
              <p className="section-label mb-3">The Difference</p>
              <h2 className="font-display text-4xl font-300 text-charcoal leading-tight mb-4">
                Spaces that speak<br />
                <em className="italic text-forest">for themselves.</em>
              </h2>
              <p className="font-sans text-sm text-charcoal/60 font-300 leading-relaxed mb-6">
                Real Calgary homes and offices from FebRight&rsquo;s own portfolio — with
                every before and after side by side.
              </p>
              <Link to="/results" className="btn-primary self-start">
                See Before &amp; After
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md aspect-[3/2]">
                  <img
                    src={img.homeStrip1.src}
                    alt={img.homeStrip1.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={844}
                    height={568}
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md aspect-[3/2]">
                  <img
                    src={img.homeStrip2.src}
                    alt={img.homeStrip2.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={850}
                    height={556}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works — a thin strip rather than a row of cards */}
      <section className="py-14 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mb-8">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="font-display text-4xl font-300 text-charcoal">Three simple steps.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-7 border-t border-sage pt-8">
            {steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 0.08}>
                <p className="font-sans text-xs font-600 tracking-widest2 text-gold mb-3">{num}</p>
                <h3 className="font-display text-xl font-400 text-charcoal mb-1.5">{title}</h3>
                <p className="font-sans text-charcoal/60 text-sm font-300 leading-relaxed">{body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + contact rail */}
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
                  Call us directly, or send a quote request and we&rsquo;ll come back with
                  answers specific to your space in Calgary.
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

      <CTA dark />
    </main>
  )
}
