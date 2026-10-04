// Edit these values to update details across the whole site.
export const site = {
  name: 'Oliver Glozik',
  url: 'https://oliverglozik.com',
  tagline: 'Hypnosis, Breathwork & Coaching',
  // TODO: replace with Oliver's city once known. Keep it short ("Lisbon", "Austin, TX").
  city: '',
  email: 'hello@oliverglozik.com',
  bookingUrl: '/contact/',
  stats: [
    { value: '1,000+', label: 'lives transformed' },
    { value: '100+', label: 'retreats hosted' },
    { value: 'Online', label: 'and in person' },
  ],
};

// "in Lisbon & Online" when a city is set, otherwise "Online & In Person".
export const where = site.city ? `in ${site.city} & Online` : 'Online & In Person';

export const services = [
  {
    href: '/coaching/',
    title: 'Personal coaching',
    blurb: '1:1 programmes for change that lasts.',
  },
  {
    href: '/breathwork/',
    title: 'Breathwork',
    blurb: 'Somatic and conscious connected sessions.',
  },
  {
    href: '/hypnosis/',
    title: 'Hypnosis',
    blurb: 'Hypnosis in person or online.',
  },
  {
    href: '/retreats/',
    title: 'Retreats',
    blurb: 'Multi-day immersions combining all of it.',
  },
];
