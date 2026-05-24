import { getDictionary } from '@/get-dictionary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'es';
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-40 pb-20">
        <Hero dict={dict} />
        <Experience dict={dict} />
        <Education dict={dict} />
        <Skills dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
