import '../globals.css';
import { Inter } from 'next/font/google';
import { LOCALES, SITE_NAME, SITE_URL } from '@/lib/seo';

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: { index: true, follow: true },
  icons: { icon: '/img/favicon.svg' },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'es';

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`scroll-smooth ${inter.variable}`}>
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
