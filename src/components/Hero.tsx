import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Pause, Play } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { video } from '../content/imageMap'

const trust = ['Eco-Friendly Products', 'Residential & Commercial', 'Calgary & Area']

/**
 * The reel is vertical phone footage, so it is never stretched across a wide
 * viewport: it fills the screen edge-to-edge on phones (where 9:16 matches
 * almost exactly) and sits in a portrait card beside the copy on desktop.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReduced = useReducedMotion()
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (prefersReduced) {
      el.pause()
      setPlaying(false)
      return
    }
    // iOS low-power mode and some data-saver modes ignore the autoplay
    // attribute, so the poster has to stay with a working play control.
    el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [prefersReduced])

  const toggle = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="relative bg-forest text-ivory pt-[var(--header-h)]">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 items-end min-h-[calc(100svh-var(--header-h))] lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-10 lg:py-16 lg:min-h-0">

        {/* Reel — behind the copy on phones, a framed card from lg up */}
        <div className="absolute inset-0 lg:relative lg:row-start-1 lg:col-start-8 lg:col-span-5 lg:flex lg:flex-col lg:items-center">
          {/* The frame is driven by height on desktop so a 9:16 clip cannot
              grow taller than the screen it is being watched on. */}
          <div className="relative w-full h-full lg:w-auto lg:h-[70vh] lg:max-h-[660px] lg:aspect-[9/16] lg:rounded-2xl lg:overflow-hidden lg:shadow-2xl lg:ring-1 lg:ring-gold/25">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={video.beforeAfterReel}
              poster={video.beforeAfterPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Before and after footage of Calgary homes cleaned by FebRight"
            />
            {/* Scrim — only on phones, where the copy sits over the footage */}
            <div
              className="absolute inset-0 hero-scrim lg:hidden"
              aria-hidden="true"
            />

            {/* Moving content that plays for more than five seconds needs a way
                to stop it (WCAG 2.2.2). */}
            <button
              type="button"
              onClick={toggle}
              className="absolute z-20 top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/40 text-ivory backdrop-blur-sm hover:bg-charcoal/70 transition-colors duration-300"
              aria-label={playing ? "Pause the before and after video" : "Play the before and after video"}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
          <p className="hidden lg:block font-sans text-[11px] tracking-widest2 uppercase text-ivory/45 mt-4 text-center">
            A real FebRight before &amp; after
          </p>
        </div>

        {/* Copy */}
        <div className="relative z-10 px-6 pb-12 pt-12 lg:px-0 lg:py-0 lg:row-start-1 lg:col-start-1 lg:col-span-6">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Calgary Cleaning, Done with Care
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-300 leading-[1.02] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Walk in.{' '}
            <em className="italic text-gold">Exhale.</em>
          </motion.h1>

          <motion.p
            className="font-sans text-base sm:text-lg text-ivory/70 font-300 leading-relaxed max-w-md mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            Eco-friendly home and office cleaning across Calgary. The kind of clean
            you can feel.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-charcoal font-sans font-500 text-sm tracking-wide hover:bg-ivory transition-colors duration-300"
            >
              Get a Free Quote
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/results"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/30 text-ivory font-sans font-500 text-sm tracking-wide hover:bg-ivory/10 transition-colors duration-300"
            >
              See the Difference
            </Link>
          </motion.div>

          <motion.ul
            className="hidden sm:flex flex-wrap gap-x-5 gap-y-2 mt-8 font-sans text-[11px] font-500 tracking-widest2 uppercase text-ivory/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  )
}
