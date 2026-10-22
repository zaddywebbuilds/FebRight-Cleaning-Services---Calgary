import { useState, type FormEvent } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// Replace with your Formspree endpoint after creating a form at formspree.io
// Set VITE_FORMSPREE_ENDPOINT env variable to activate real submissions
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

interface QuoteFormProps {
  preselectedService?: string
  className?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function QuoteForm({ preselectedService = '', className = '' }: QuoteFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!FORMSPREE_ENDPOINT) {
      // Fallback: open mailto
      const data = new FormData(form)
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
      window.location.href = `mailto:hello@febrightcleaningservices.com?subject=Quote Request&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg((json as { error?: string }).error ?? 'Something went wrong. Please try again or call us.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
        <CheckCircle size={48} className="text-forest mb-4" />
        <h3 className="font-display text-3xl font-400 text-charcoal mb-3">Quote Request Sent!</h3>
        <p className="text-charcoal/65 font-300 max-w-sm">
          Thank you! We'll review your details and follow up with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      noValidate
      aria-label="Free quote request form"
    >
      {!FORMSPREE_ENDPOINT && (
        <div className="bg-gold/15 border border-gold/40 text-charcoal text-sm px-4 py-3 flex items-start gap-2">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5 text-gold" />
          <span>
            <strong>Form not yet configured.</strong> Submissions will open your email client. To enable direct
            submissions, add your Formspree endpoint as{' '}
            <code className="text-xs font-mono bg-white/60 px-1 py-0.5">VITE_FORMSPREE_ENDPOINT</code> in{' '}
            <code className="text-xs font-mono bg-white/60 px-1 py-0.5">.env</code>.
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" type="text" required />
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" hint="Canadian format, e.g. 403-555-0100" />
        <div>
          <label className="field-label">Property type</label>
          <select
            name="property_type"
            className="field-input"
            required
            aria-required="true"
          >
            <option value="">Select one…</option>
            <option value="residential">Residential Home</option>
            <option value="commercial">Commercial / Office</option>
            <option value="other">Other</option>
          </select>
        </div>
        <Field label="Approximate size (optional)" name="size" placeholder="e.g. 3 bed / 2 bath / 1400 sq ft" />
        <div>
          <label className="field-label">Frequency</label>
          <select name="frequency" className="field-input" aria-label="Cleaning frequency">
            <option value="">Select…</option>
            <option value="one-time">One-time</option>
            <option value="recurring">Recurring</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <Field label="Preferred date (optional)" name="preferred_date" type="date" />
        <Field label="Postal code" name="postal_code" required pattern="[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d" hint="Calgary, AB postal code" />
      </div>

      <div>
        <label className="field-label">
          Service requested
          {preselectedService && <span className="ml-2 text-xs text-gold">(pre-selected)</span>}
        </label>
        <select name="service" className="field-input" defaultValue={preselectedService} aria-label="Requested service">
          <option value="">Select a service…</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="not-sure">Not sure — need advice</option>
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="details">Additional details</label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="field-input resize-none"
          placeholder="Anything specific about your space, access details, or questions for us…"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          aria-required="true"
          className="mt-1 w-4 h-4 accent-forest flex-shrink-0 focus-visible:outline-2 focus-visible:outline-forest"
        />
        <label htmlFor="consent" className="text-sm text-charcoal/70 font-300 leading-relaxed">
          I consent to FebRight Cleaning Services using the information provided to respond to this quote request.
          View our <a href="/privacy" className="text-forest underline underline-offset-2">Privacy Policy</a>.
        </label>
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-2 text-red-700 bg-red-50 border border-red-200 px-4 py-3 text-sm">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Quote Request'
        )}
      </button>

      <p className="text-xs text-charcoal/45 text-center font-300">
        No spam. We'll only use your info to follow up on this request.
      </p>
    </form>
  )
}

/* Reusable field */
function Field({
  label,
  name,
  type = 'text',
  required = false,
  hint,
  placeholder,
  pattern,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  hint?: string
  placeholder?: string
  pattern?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
        {required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        placeholder={placeholder}
        pattern={pattern}
        className="field-input"
        aria-describedby={hint ? `${name}-hint` : undefined}
      />
      {hint && (
        <p id={`${name}-hint`} className="mt-1 text-xs text-charcoal/50 font-300">{hint}</p>
      )}
    </div>
  )
}
