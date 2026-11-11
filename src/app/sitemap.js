import { getLanguageAlternates, LOCALES, PAGE_PATHS, SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  return PAGE_PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: { languages: getLanguageAlternates(path) },
    }))
  );
}
