import { img } from './imageMap'

export interface Service {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  features: string[]
  /** Photo shown on the Services overview page */
  image: { src: string; alt: string }
  /** Distinct photo shown on this service's own detail page */
  detailImage: { src: string; alt: string }
  confirmed: boolean
  hidden?: boolean
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    slug: 'residential-cleaning',
    tagline: 'Your home, impeccably cared for.',
    description:
      'We bring careful, thorough attention to every room in your home — from kitchen surfaces and bathroom fixtures to living areas and bedrooms. We use eco-friendly products that are effective without being harsh.',
    features: [
      'Eco-friendly, non-toxic cleaning products',
      'Kitchens, bathrooms, bedrooms and living spaces',
      'Detail-focused approach throughout',
      'Serving Calgary and surrounding areas',
    ],
    image: img.svcResidential,
    detailImage: img.detailResidential,
    confirmed: true,
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    tagline: 'Professional spaces deserve professional care.',
    description:
      'A clean workplace reflects your standards. FebRight provides reliable, professional cleaning for offices, retail and commercial environments in the Calgary area — making a strong impression on clients and team alike.',
    features: [
      'Office, retail and commercial environments',
      'Flexible scheduling options',
      'Eco-conscious product selection',
      'Calgary commercial properties',
    ],
    image: img.svcCommercial,
    detailImage: img.detailCommercial,
    confirmed: true,
  },
  // CONFIRM WITH OWNER before enabling — hidden from all public output.
  {
    id: 'deep-clean',
    title: 'Deep Cleaning',
    slug: 'deep-cleaning',
    tagline: 'A thorough reset for your space.',
    description: 'A comprehensive top-to-bottom clean. Contact us to confirm availability and scope.',
    features: ['Contact us to confirm scope and availability'],
    image: img.svcResidential,
    detailImage: img.detailResidential,
    confirmed: false,
    hidden: true,
  },
  {
    id: 'move-in-out',
    title: 'Move-In / Move-Out Cleaning',
    slug: 'move-in-out-cleaning',
    tagline: 'Start fresh. Leave spotless.',
    description: 'Preparing to move in or out? Contact us to confirm service availability and details.',
    features: ['Contact us to confirm scope and availability'],
    image: img.svcResidential,
    detailImage: img.detailResidential,
    confirmed: false,
    hidden: true,
  },
]

export const confirmedServices = services.filter((s) => s.confirmed && !s.hidden)
