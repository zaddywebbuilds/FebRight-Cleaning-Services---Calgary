import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { img } from '../content/imageMap'

export default function Hero() {
  return (
    <section className="bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-14 lg:pt-32 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Text column */}
          <div className="lg:col-span-6">
            <motion.p
              className="section-label mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Calgary's Trusted Cleaning Professionals
            </motion.p>

            <motion.h1
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-300 text-charcoal leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              A beautiful space{' '}
              <em className="italic text-forest">begins</em> with a careful clean.
            </motion.h1>

            <motion.p
              className="font-sans text-lg text-charcoal/65 font-300 leading-relaxed max-w-md mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
            >
              Thoughtful, eco-friendly residential and commercial cleaning across Calgary and surrounding areas.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-ivory font-sans font-500 text-sm tracking-wide hover:bg-charcoal transition-colors duration-300"
              >
                Get a Free Quote
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-charcoal/25 text-charcoal font-sans font-500 text-sm tracking-wide hover:border-forest hover:text-forest transition-colors duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2.5 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              {['Eco-Friendly', 'Residential', 'Commercial', 'Calgary & Area'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 border border-sage text-[11px] font-sans font-500 tracking-wide text-charcoal/55">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image column — surface elements, tightly composed */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-5 grid-rows-5 gap-3 aspect-[5/5]">
              {/* Primary image fills most of the composition */}
              <div className="col-span-5 row-span-4 overflow-hidden rounded-lg shadow-xl">
                <img
                  src={img.homeHero.src}
                  alt={img.homeHero.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={640}
                  height={512}
                />
              </div>
              {/* Secondary image fills the lower band */}
              <div className="col-span-3 row-span-1 overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.homeHeroFloat.src}
                  alt={img.homeHeroFloat.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={384}
                  height={128}
                />
              </div>
              {/* Stat tile fills the remaining cell — no empty space */}
              <div className="col-span-2 row-span-1 rounded-lg bg-forest text-ivory flex flex-col items-center justify-center px-3">
                <p className="font-display text-3xl font-400 leading-none">100%</p>
                <p className="font-sans text-[10px] font-300 text-ivory/75 mt-1 text-center leading-tight">Eco-Friendly Products</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
