import { getDictionary } from '@/get-dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AvisoLegalEs from '@/components/legal/AvisoLegalEs';
import AvisoLegalEn from '@/components/legal/AvisoLegalEn';

export async function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'es';
  const dict = await getDictionary(locale);

  const isEs = locale === 'es';

  return (
    <>
      <Header dict={dict} locale={locale} isLegalPage={true} />
      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-36 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            {isEs ? 'Aviso Legal' : 'Legal Notice'}
          </h1>
          <p className="text-slate-400">
            {isEs ? 'Última actualización: 24 de mayo de 2026' : 'Last updated: May 24, 2026'}
          </p>
        </header>

        {isEs ? <AvisoLegalEs /> : <AvisoLegalEn />}

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <Link href={`/${locale}`} className="inline-flex items-center justify-center px-6 py-3 border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-medium rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all gap-2 group">
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            {isEs ? 'Volver a la Página Principal' : 'Back to Home'}
          </Link>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
