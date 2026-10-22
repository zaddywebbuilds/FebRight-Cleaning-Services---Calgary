import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="pt-24 bg-ivory">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="section-label mb-4">404</p>
          <h1 className="section-heading mb-5">
            This page isn't <em className="italic text-forest">here.</em>
          </h1>
          <p className="font-sans text-charcoal/60 font-300 leading-relaxed mb-9">
            The page you were looking for doesn't exist or may have moved. Head back to the homepage or browse our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link to="/" className="btn-primary">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <Link to="/services" className="btn-outline">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
