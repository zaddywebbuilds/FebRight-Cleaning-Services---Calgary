import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'

export default function Contact() {
  const [params] = useSearchParams()
  const preselected = params.get('service') ?? ''

  return (
    <main className="pt-24 bg-ivory">
      <Seo
        title="Contact & Free Quote"
        description="Request a free, no-obligation cleaning quote for your Calgary home or office. Tell us about your space and we'll follow up to confirm details."
        path="/contact"
      />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Form column */}
            <div className="lg:col-span-7">
              <ScrollReveal className="mb-8">
                <p className="section-label mb-3">Contact &amp; Quote</p>
                <h1 className="section-heading mb-4">
                  Request a<br />
                  <em className="italic text-forest">free quote.</em>
                </h1>
                <p className="font-sans text-charcoal/65 font-300 leading-relaxed">
                  Tell us about your space and we'll follow up to discuss what you need, confirm availability and talk through pricing.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <QuoteForm preselectedService={preselected} />
              </ScrollReveal>
            </div>

            {/* Contact rail */}
            <ScrollReveal delay={0.12} className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-5">

                <div className="bg-forest text-ivory rounded-lg p-8">
                  <p className="section-label text-gold mb-5">Get In Touch</p>
                  <ul className="space-y-5">
                    <li>
                      <a href="tel:+14034700416" className="flex items-start gap-3.5 group">
                        <span className="w-9 h-9 flex-shrink-0 rounded bg-ivory/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                          <Phone size={15} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-600 tracking-widest2 uppercase text-ivory/45 mb-0.5">Phone</span>
                          <span className="block font-sans text-sm text-ivory group-hover:text-gold transition-colors duration-200">+1 403-470-0416</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@febrightcleaningservices.com" className="flex items-start gap-3.5 group">
                        <span className="w-9 h-9 flex-shrink-0 rounded bg-ivory/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                          <Mail size={15} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] font-600 tracking-widest2 uppercase text-ivory/45 mb-0.5">Email</span>
                          <span className="block font-sans text-sm text-ivory group-hover:text-gold transition-colors duration-200 break-all">hello@febrightcleaningservices.com</span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <span className="w-9 h-9 flex-shrink-0 rounded bg-ivory/10 flex items-center justify-center">
                        <MapPin size={15} className="text-gold" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-600 tracking-widest2 uppercase text-ivory/45 mb-0.5">Service Area</span>
                        <span className="block font-sans text-sm text-ivory/80">Calgary and surrounding areas, Alberta</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <span className="w-9 h-9 flex-shrink-0 rounded bg-ivory/10 flex items-center justify-center">
                        <Clock size={15} className="text-gold" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-600 tracking-widest2 uppercase text-ivory/45 mb-0.5">Hours</span>
                        <span className="block font-sans text-sm text-ivory/80">Contact us to confirm current availability</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cream border border-sage rounded-lg p-7">
                  <h2 className="font-display text-xl font-500 text-charcoal mb-2.5">What happens next</h2>
                  <ol className="space-y-3">
                    {[
                      'We review your request and the details of your space.',
                      'We reach out to confirm scope, availability and pricing.',
                      'Once you are happy, we schedule your clean.',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3 font-sans text-sm text-charcoal/65 font-300 leading-relaxed">
                        <span className="w-5 h-5 flex-shrink-0 rounded-full bg-forest text-ivory text-[10px] font-600 flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {text}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
