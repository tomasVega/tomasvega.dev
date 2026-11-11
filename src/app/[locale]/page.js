import { getDictionary } from '@/get-dictionary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { getPageMetadata, getProfileJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale);
}

export async function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'es';
  const dict = await getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProfileJsonLd(locale)).replace(/</g, '\\u003c'),
        }}
      />
      <Header dict={dict} locale={locale} />
      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-24 sm:pt-40 pb-20">
        <Hero dict={dict} />
        <Experience dict={dict} />
        <Projects dict={dict} />
        <Education dict={dict} />
        <Skills dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
