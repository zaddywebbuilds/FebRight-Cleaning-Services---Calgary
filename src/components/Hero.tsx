import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Pause, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { video } from '../content/imageMap'

const trust = ['Eco-Friendly Products', 'Residential & Commercial', 'Calgary & Area']

/**
 * The reel is the proof, so it is presented as its own framed surface at every
 * width — never a backdrop behind the copy. Being vertical phone footage, it
 * keeps its 9:16 shape throughout: full width on phones, and driven by height
 * on desktop so it cannot grow taller than the screen it is watched on.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    // Muted has to be set on the element too: some browsers gate autoplay on
    // the property rather than the attribute.
    el.muted = true

    const tryPlay = () => {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
    tryPlay()

    // iOS low-power mode, data-saver modes and a cold cache can all refuse the
    // first attempt, so retry once there are frames and again on the first
    // interaction anywhere on the page.
    el.addEventListener('canplay', tryPlay)
    const onFirstInput = () => tryPlay()
    document.addEventListener('touchstart', onFirstInput, { once: true, passive: true })
    document.addEventListener('click', onFirstInput, { once: true })

    // Coming back to a backgrounded tab should pick the reel up again.
    const onVisible = () => { if (!document.hidden) tryPlay() }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      el.removeEventListener('canplay', tryPlay)
      document.removeEventListener('touchstart', onFirstInput)
      document.removeEventListener('click', onFirstInput)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

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
    <section className="bg-forest text-ivory pt-[var(--header-h)]">
      {/* Two tracks on desktop: the copy capped at a comfortable measure and
          the reel exactly as wide as it needs to be, centred as a pair. A
          twelve-column grid left a dead column between them on wide screens.
          Row 1 hugs the headline and row 2 takes the slack, so the tall reel
          spanning both cannot stretch a gap under the headline. */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 lg:py-16 flex flex-col lg:grid lg:grid-cols-[minmax(0,32rem)_auto] lg:grid-rows-[auto_1fr] lg:justify-center lg:gap-x-14">

        {/* Copy */}
        <div className="lg:row-start-1 lg:col-start-1">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Calgary Cleaning, Done with Care
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-300 leading-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Walk in.{' '}
            <em className="italic text-gold">Exhale.</em>
          </motion.h1>
        </div>

        {/* The reel */}
        <motion.div
          className="mt-8 lg:mt-0 lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:self-center flex flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full aspect-[9/16] lg:w-auto lg:h-[70vh] lg:max-h-[680px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gold/25">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={video.beforeAfterReel}
              poster={video.beforeAfterPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Before and after footage of Calgary homes cleaned by FebRight"
            />

            {/* Moving content that plays for more than five seconds needs a way
                to stop it (WCAG 2.2.2). */}
            <button
              type="button"
              onClick={toggle}
              className="absolute z-20 top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/40 text-ivory backdrop-blur-sm hover:bg-charcoal/70 transition-colors duration-300"
              aria-label={playing ? 'Pause the before and after video' : 'Play the before and after video'}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
          <p className="font-sans text-[11px] tracking-widest2 uppercase text-ivory/45 mt-4 text-center">
            A real FebRight before &amp; after
          </p>
        </motion.div>

        {/* Supporting line and actions — below the reel on phones, and back
            directly under the headline once the grid takes over at lg. */}
        <motion.div
          className="mt-8 lg:mt-6 lg:row-start-2 lg:col-start-1 lg:self-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
        >
          <p className="font-sans text-base sm:text-lg text-ivory/70 font-300 leading-relaxed max-w-md mb-7">
            Eco-friendly home and office cleaning across Calgary. The kind of clean
            you can feel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
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
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-7 font-sans text-[11px] font-500 tracking-widest2 uppercase text-ivory/45">
            {trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
