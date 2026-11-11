export const SITE_URL = 'https://tomasvega.dev';
export const SITE_NAME = 'Tomás Vega Castro';
export const LOCALES = ['es', 'en'];
export const PAGE_PATHS = ['', '/aviso-legal', '/politica-privacidad'];

const pages = {
  es: {
    '': {
      title: `${SITE_NAME} | Desarrollador de software`,
      description: 'Desarrollador de software en Ourense con más de 15 años de experiencia en Java, Spring y PHP. Experiencia profesional, desarrollo con IA y proyectos como Niblio.',
    },
    '/aviso-legal': {
      title: `Aviso legal | ${SITE_NAME}`,
      description: 'Información legal, titularidad y condiciones de uso del sitio web personal de Tomás Vega Castro.',
    },
    '/politica-privacidad': {
      title: `Política de privacidad | ${SITE_NAME}`,
      description: 'Información sobre privacidad y tratamiento de datos personales en el sitio web de Tomás Vega Castro.',
    },
  },
  en: {
    '': {
      title: `${SITE_NAME} | Software Engineer`,
      description: 'Software engineer in Ourense, Spain, with over 15 years of experience in Java, Spring, and PHP. Explore my work, AI-assisted development, and projects like Niblio.',
    },
    '/aviso-legal': {
      title: `Legal notice | ${SITE_NAME}`,
      description: 'Legal information, website ownership, and terms of use for the personal website of Tomás Vega Castro.',
    },
    '/politica-privacidad': {
      title: `Privacy policy | ${SITE_NAME}`,
      description: 'Information about privacy and the handling of personal data on the website of Tomás Vega Castro.',
    },
  },
};

export function getLanguageAlternates(path = '') {
  return {
    es: `${SITE_URL}/es${path}`,
    en: `${SITE_URL}/en${path}`,
    'x-default': `${SITE_URL}/es${path}`,
  };
}

export function getPageMetadata(locale, path = '') {
  const language = LOCALES.includes(locale) ? locale : 'es';
  const { title, description } = pages[language][path];
  const url = `${SITE_URL}/${language}${path}`;
  const image = {
    url: `${SITE_URL}/img/social.png`,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} — Software Engineer`,
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: language === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: language === 'es' ? ['en_US'] : ['es_ES'],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function getProfileJsonLd(locale) {
  const language = LOCALES.includes(locale) ? locale : 'es';
  const { title, description } = pages[language][''];
  const url = `${SITE_URL}/${language}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    url,
    name: title,
    description,
    inLanguage: language,
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url,
      jobTitle: 'Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Plexus Tech',
      },
      sameAs: [
        'https://github.com/tomasVega',
        'https://www.linkedin.com/in/tomas-vega-castro/',
      ],
    },
  };
}
