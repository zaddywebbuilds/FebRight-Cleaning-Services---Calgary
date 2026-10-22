import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'

const sections = [
  {
    h: 'What we collect',
    p: 'When you submit a quote request we collect the details you enter in the form: your name, email address, optional phone number, property type, approximate size, preferred frequency and date, postal code, requested service, and any additional details you choose to share.',
  },
  {
    h: 'How we use it',
    p: 'We use this information solely to respond to your enquiry, prepare a quote, and arrange service if you decide to proceed. We do not sell your information, and we do not use it for marketing unless you separately ask us to.',
  },
  {
    h: 'How it is transmitted',
    p: 'Form submissions are delivered to us by email through a third-party form provider. If the form provider has not yet been configured, the form instead opens your own email client so the message is sent directly by you.',
  },
  {
    h: 'Cookies and analytics',
    p: 'This website does not set tracking cookies and does not run third-party analytics or advertising scripts. If that changes, this policy and a cookie notice will be updated before any tracking is introduced.',
  },
  {
    h: 'Retention',
    p: 'We keep quote enquiries only as long as needed to respond and, where service proceeds, to maintain ordinary business records.',
  },
  {
    h: 'Your choices',
    p: 'You can ask us at any time to confirm what information we hold about you, correct it, or delete it. Contact us using the details below and we will action your request.',
  },
  {
    h: 'Contact',
    p: 'FebRight Cleaning Services, Calgary, Alberta, Canada. Phone +1 403-470-0416. Email hello@febrightcleaningservices.com.',
  },
]

export default function Privacy() {
  return (
    <main className="pt-24 bg-ivory">
      <Seo
        title="Privacy Policy"
        description="How FebRight Cleaning Services handles information submitted through this website, including quote requests, retention and your choices."
        path="/privacy"
      />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal className="mb-10">
            <p className="section-label mb-3">Legal</p>
            <h1 className="section-heading mb-4">Privacy Policy</h1>
            <p className="font-sans text-charcoal/60 font-300 leading-relaxed">
              This template describes how FebRight Cleaning Services handles information submitted through this website.
              It should be reviewed and approved by the business owner before launch.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-8">
            {sections.map(({ h, p }) => (
              <div key={h}>
                <h2 className="font-display text-2xl font-400 text-charcoal mb-2.5">{h}</h2>
                <p className="font-sans text-charcoal/65 font-300 leading-relaxed">{p}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="mt-10 text-xs text-charcoal/40 italic font-300 border-t border-sage pt-5">
              Template content pending owner review. Last updated when this site was built.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
