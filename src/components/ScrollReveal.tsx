import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion, type MotionProps } from 'framer-motion'

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Generous rootMargin so content is already revealed by the time it
    // scrolls into view — prevents visible empty gaps where an image belongs.
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0, rootMargin: '0px 0px 25% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const initial = prefersReduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === 'up' ? 32 : 0,
        x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
      }

  const animate = visible
    ? { opacity: 1, y: 0, x: 0 }
    : initial

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: prefersReduced ? 0.01 : 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
