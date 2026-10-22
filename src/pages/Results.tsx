import { useState } from 'react'
import { Columns2, SplitSquareHorizontal } from 'lucide-react'
import clsx from 'clsx'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import { beforeAfterSets } from '../content/imageMap'

type ViewMode = 'slider' | 'sideBySide'

export default function Results() {
  const [mode, setMode] = useState<ViewMode>('slider')

  return (
    <main className="pt-24 bg-ivory">
      <Seo
        title="Before & After Results"
        description="Compare kitchen, bathroom, living room and office spaces before and after a careful clean. Drag the slider or view them side by side."
        path="/results"
      />

      {/* Header + view toggle share the row */}
      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <ScrollReveal>
              <p className="section-label mb-3">Results</p>
              <h1 className="section-heading mb-4">
                See the <em className="italic text-forest">difference</em><br />
                a careful clean makes.
              </h1>
              <p className="font-sans text-charcoal/65 font-300 leading-relaxed max-w-xl">
                Four room types, shown before and after. Drag the handle on each image, or switch to the side-by-side view.
              </p>
            </ScrollReveal>

            {/* View mode toggle */}
            <ScrollReveal delay={0.1} className="flex-shrink-0">
              <div className="inline-flex border border-sage rounded-lg overflow-hidden bg-white" role="group" aria-label="Comparison view mode">
                <button
                  type="button"
                  onClick={() => setMode('slider')}
                  aria-pressed={mode === 'slider'}
                  className={clsx(
                    'inline-flex items-center gap-2 px-5 py-3 text-xs font-500 tracking-wide transition-colors duration-200',
                    mode === 'slider' ? 'bg-forest text-ivory' : 'text-charcoal/60 hover:text-forest',
                  )}
                >
                  <SplitSquareHorizontal size={14} />
                  Slider
                </button>
                <button
                  type="button"
                  onClick={() => setMode('sideBySide')}
                  aria-pressed={mode === 'sideBySide'}
                  className={clsx(
                    'inline-flex items-center gap-2 px-5 py-3 text-xs font-500 tracking-wide transition-colors duration-200',
                    mode === 'sideBySide' ? 'bg-forest text-ivory' : 'text-charcoal/60 hover:text-forest',
                  )}
                >
                  <Columns2 size={14} />
                  Side by Side
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Disclosure kept, styled as a quiet caption rather than a banner.
              The scenes are concept photography, so some disclosure has to stay. */}
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-xs text-charcoal/40 font-300 italic">
              Illustrative examples, not actual customer jobs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison grid */}
      <section className="pb-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfterSets.map((set, i) => (
              <ScrollReveal key={set.id} delay={i * 0.08}>
                {mode === 'slider' ? (
                  <BeforeAfterSlider
                    beforeSrc={set.before.src}
                    afterSrc={set.after.src}
                    beforeAlt={set.before.alt}
                    afterAlt={set.after.alt}
                    label={set.label}
                  />
                ) : (
                  <figure>
                    <div className="overflow-hidden rounded-lg shadow-md aspect-[16/9]">
                      <img
                        src={set.comparison.src}
                        alt={set.comparison.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={450}
                      />
                    </div>
                    <figcaption className="text-center mt-3 text-sm text-charcoal/50 font-300">
                      {set.label} — before and after
                    </figcaption>
                  </figure>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Want results like these in your space?"
        body="Send a quote request and we'll follow up to discuss what your home or office needs."
      />
    </main>
  )
}
