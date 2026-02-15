export const VIEWPORT_CONFIG = { once: true, margin: '-100px' as const }

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: { duration: 0.6 },
}

export const fadeInUpWithDelay = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: { duration: 0.5, delay },
})

export const staggerContainer = (staggerDelay = 0.1) => ({
  initial: {},
  whileInView: {},
  viewport: VIEWPORT_CONFIG,
  transition: { staggerChildren: staggerDelay },
})

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.3 },
}

export const DRAWER_TRANSITION = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
}
