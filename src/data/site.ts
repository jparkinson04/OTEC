// Central site details. Replace the bracketed placeholders once Paul sends them.
export const site = {
  name: 'OTEC',
  legalName: 'OTEC Services Ltd',
  tagline: 'Innovation in electrical engineering',
  description:
    'OTEC is an electrical engineering company working UK wide on industrial, commercial and domestic projects, from design through to installation, commissioning and maintenance.',
  phone: '[PHONE NUMBER]',
  phoneHref: '', // e.g. 'tel:+441234567890'. Leave empty until we have the number.
  email: '[EMAIL ADDRESS]',
  emailHref: '', // e.g. 'mailto:info@otecltd.com'
  address: 'Sutchs Farm, Southport Road, Scarisbrick, Ormskirk L40 9RH',
  // Location, taken from the client's Google Maps listing (Otec Services Ltd, Scarisbrick).
  location: {
    lat: 53.602332,
    lng: -2.929403,
    // Keyless Google Maps embed and directions links. No API key, no billing account.
    mapEmbedSrc:
      'https://www.google.com/maps?q=Otec+Services+Ltd,+Sutchs+Farm,+Southport+Rd,+Scarisbrick,+Ormskirk+L40+9RH&z=14&hl=en-GB&output=embed',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=Otec+Services+Ltd,+Sutchs+Farm,+Southport+Rd,+Scarisbrick,+Ormskirk+L40+9RH',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
