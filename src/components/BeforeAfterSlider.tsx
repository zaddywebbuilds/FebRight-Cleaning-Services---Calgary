import { useState, useRef, useCallback } from 'react'
import { GripVertical } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  label: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const { left, width } = container.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100))
    setPosition(pct)
  }, [])

  /* Mouse */
  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }

  /* Touch */
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX) }

  /* Keyboard on slider handle */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2))
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none aspect-[2/3] cursor-col-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        aria-label={`Before and after comparison of ${label}. Use left/right arrow keys to reveal.`}
        role="img"
      >
        {/* AFTER image — full width, underneath */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
          loading="lazy"
          width={724}
          height={1086}
        />

        {/* BEFORE image — clipped to left side by position% */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${10000 / position}%`, maxWidth: 'none' }}
            draggable="false"
            loading="lazy"
            width={724}
            height={1086}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-ivory/80 shadow-lg"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ivory shadow-xl flex items-center justify-center cursor-col-resize focus-visible:outline-2 focus-visible:outline-forest"
          style={{ left: `${position}%` }}
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Reveal slider for ${label}. Currently showing ${Math.round(position)}% before.`}
          onKeyDown={onKeyDown}
          aria-hidden="true"
        >
          <GripVertical size={16} className="text-charcoal/60" />
        </div>

        {/* Labels */}
        <span className="absolute bottom-3 left-3 bg-charcoal/60 text-ivory text-xs font-500 px-2 py-1 backdrop-blur-sm">
          Before
        </span>
        <span className="absolute bottom-3 right-3 bg-forest/80 text-ivory text-xs font-500 px-2 py-1 backdrop-blur-sm">
          After
        </span>
      </div>

      <p className="text-center mt-3 text-sm text-charcoal/50 font-300">{label}</p>
    </div>
  )
}
