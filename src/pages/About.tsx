import { Link } from 'react-router-dom'
import { Leaf, Heart, Users, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import { img } from '../content/imageMap'

const principles = [
  { icon: Leaf,  title: 'Eco-First',             body: 'Non-toxic, eco-friendly products on every job — better for your home and the planet.' },
  { icon: Heart, title: 'Care in Every Detail',  body: 'Corners cleaned, surfaces gleaming, details noticed. We treat your space as our own.' },
  { icon: Users, title: 'Professional & Reliable', body: 'We show up when we say, communicate clearly, and deliver consistent results.' },
]

export default function About() {
  return (
    <main className="pt-24 bg-ivory">
      <Seo
        title="About Us"
        description="FebRight Cleaning Services brings thoughtful, eco-conscious cleaning to homes and offices across Calgary. Learn how we work and what guides us."
        path="/about"
      />

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="section-label mb-3">About FebRight</p>
              <h1 className="font-display text-5xl md:text-6xl font-300 text-charcoal leading-[1.08] mb-5">
                A Calgary cleaning service<br />
                <em className="italic text-forest">built on care.</em>
              </h1>
              <p className="font-sans text-charcoal/65 font-300 leading-relaxed mb-5">
                FebRight Cleaning Services brings thoughtful, professional cleaning to homes and offices across Calgary and surrounding areas. We combine careful technique with eco-friendly products to deliver a result that feels genuinely fresh — not just clean on the surface.
              </p>
              <p className="font-sans text-charcoal/65 font-300 leading-relaxed mb-6">
                Whether it's a family home, a rental property or a professional office, we approach every space with the same standard: details matter, trust matters, and your comfort comes first.
              </p>
              <p className="text-xs text-charcoal/40 italic font-300">
                Team photos and a founder introduction will be added once confirmed with the business owner.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src={img.aboutPortrait.src}
                  alt={img.aboutPortrait.alt}
                  className="w-full h-auto"
                  loading="eager"
                  width={512}
                  height={341}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mb-9">
            <p className="section-label mb-3">What Guides Us</p>
            <h2 className="section-heading">
              Our principles <em className="italic text-forest">in practice.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.09}>
                <div className="bg-white rounded-lg border border-sage/60 p-7 h-full hover:shadow-md transition-shadow duration-400">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 flex-shrink-0 rounded bg-sage flex items-center justify-center">
                      <Icon size={17} className="text-forest" />
                    </span>
                    <h3 className="font-display text-xl font-500 text-charcoal">{title}</h3>
                  </div>
                  <p className="font-sans text-sm text-charcoal/60 font-300 leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eco commitment — image left, copy right */}
      <section className="py-12 lg:py-16 bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src={img.aboutEco.src}
                  alt={img.aboutEco.alt}
                  className="w-full h-auto"
                  loading="lazy"
                  width={512}
                  height={341}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.08} className="lg:col-span-7">
              <p className="section-label text-gold mb-3">Our Commitment</p>
              <h2 className="font-display text-4xl md:text-5xl font-300 text-ivory leading-tight mb-5">
                Eco-friendly products.<br />
                <em className="italic text-sage">Always.</em>
              </h2>
              <p className="font-sans text-ivory/65 font-300 leading-relaxed mb-7 max-w-xl">
                Every product we choose goes through careful selection — effective for the clean, safe for your household, and kind to the environment. We don't compromise on this, and we're happy to talk through exactly what we use in your space.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-500 text-sm tracking-wide hover:bg-ivory transition-colors duration-300"
              >
                Ask About Our Products
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio note — copy and photo share the row */}
      <section className="py-12 lg:py-16 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="section-label mb-3">Our Work</p>
              <h2 className="font-display text-4xl font-300 text-charcoal leading-tight mb-4">
                Spaces we've<br />
                <em className="italic text-forest">helped transform.</em>
              </h2>
              <p className="font-sans text-charcoal/65 font-300 leading-relaxed mb-6 max-w-lg">
                Our portfolio photography comes from FebRight's own Google Business listing — real Calgary spaces we've cleaned. The results gallery also includes illustrative before-and-after comparisons created for this website.
              </p>
              <Link to="/results" className="btn-primary">
                View Results Gallery
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.08} className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img.aboutAccent.src}
                  alt={img.aboutAccent.alt}
                  className="w-full h-auto"
                  loading="lazy"
                  width={810}
                  height={558}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA heading="Ready to experience the FebRight difference?" />
    </main>
  )
}
