import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import clsx from 'clsx'
import type { FAQ } from '../content/faqs'

interface FAQAccordionProps {
  items: FAQ[]
  className?: string
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <dl className={clsx('divide-y divide-sage', className)}>
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <dt>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-start justify-between gap-4 text-left group"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-display text-xl font-400 text-charcoal group-hover:text-forest transition-colors duration-200">
                {item.q}
              </span>
              <span className="flex-shrink-0 mt-1 text-forest transition-transform duration-300">
                {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
          </dt>
          <dd
            id={`faq-answer-${i}`}
            className={clsx(
              'overflow-hidden transition-all duration-400 ease-smooth',
              openIndex === i ? 'max-h-80 pt-4 opacity-100' : 'max-h-0 opacity-0',
            )}
            aria-hidden={openIndex !== i}
          >
            <p className="font-sans text-base text-charcoal/70 font-300 leading-relaxed">
              {item.a}
            </p>
          </dd>
        </div>
      ))}
    </dl>
  )
}
