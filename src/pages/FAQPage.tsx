import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import FAQAccordion from '../components/FAQAccordion'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import { faqs } from '../content/faqs'

export default function FAQPage() {
  return (
    <main className="pt-24 bg-ivory">
      <Seo
        title="Frequently Asked Questions"
        description="Answers about our Calgary service area, eco-friendly products, preparing your home, scheduling and how to get a quote from FebRight Cleaning Services."
        path="/faq"
      />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Accordion column */}
            <div className="lg:col-span-7">
              <ScrollReveal className="mb-8">
                <p className="section-label mb-3">FAQ</p>
                <h1 className="section-heading mb-4">
                  Questions,<br />
                  <em className="italic text-forest">answered honestly.</em>
                </h1>
                <p className="font-sans text-charcoal/65 font-300 leading-relaxed">
                  Where a detail depends on your specific space or our current availability, we'll say so rather than guess. Get in touch and we'll confirm.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <FAQAccordion items={faqs} />
              </ScrollReveal>
            </div>

            {/* Sticky contact rail — fills the column, no void */}
            <ScrollReveal delay={0.12} className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="bg-forest text-ivory rounded-lg p-8">
                  <p className="section-label text-gold mb-3">Still Unsure?</p>
                  <h2 className="font-display text-3xl font-300 text-ivory mb-4 leading-tight">
                    Ask us directly.
                  </h2>
                  <p className="font-sans text-sm text-ivory/65 font-300 leading-relaxed mb-7">
                    The fastest way to get a specific answer about your home or office is to talk to us. No obligation.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+14034700416"
                      className="flex items-center gap-3 px-5 py-3.5 bg-gold text-charcoal font-500 text-sm hover:bg-ivory transition-colors duration-300"
                    >
                      <Phone size={15} />
                      +1 403-470-0416
                    </a>
                    <a
                      href="mailto:hello@febrightcleaningservices.com"
                      className="flex items-center gap-3 px-5 py-3.5 border border-ivory/30 text-ivory font-500 text-sm hover:bg-ivory/10 transition-colors duration-300 break-all"
                    >
                      <Mail size={15} className="flex-shrink-0" />
                      Email Us
                    </a>
                  </div>
                </div>

                <div className="bg-cream border border-sage rounded-lg p-7">
                  <h3 className="font-display text-xl font-500 text-charcoal mb-2.5">Ready for a quote?</h3>
                  <p className="font-sans text-sm text-charcoal/60 font-300 leading-relaxed mb-5">
                    Tell us about your space and we'll come back with specifics.
                  </p>
                  <Link to="/contact" className="btn-primary text-xs px-5 py-3">
                    Request a Free Quote
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
