import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'es';
  const description = locale === 'es'
    ? 'Portfolio de Tomás Vega Castro, Desarrollador de Software con más de 15 años de experiencia especialista en Java, Spring y PHP. Basado en Ourense, Galicia.'
    : 'Portfolio of Tomás Vega Castro, Software Engineer with over 15 years of experience specializing in Java, Spring, and PHP. Based in Ourense, Galicia.';
  
  return {
    title: 'Tomás Vega Castro',
    description,
    robots: 'index, follow',
    icons: {
      icon: '/img/favicon.svg',
    },
    alternates: {
      canonical: 'https://tomasvega.dev',
      languages: {
        'es': 'https://tomasvega.dev/es',
        'en': 'https://tomasvega.dev/en',
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'es';

  return (
    <html lang={locale} className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-slate-950 text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
