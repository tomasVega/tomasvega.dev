'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ dict, locale, isLegalPage = false }) {
  const pathname = usePathname();

  const getRedirectedPathname = (targetLocale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-slate-950/70 backdrop-blur-md border-b border-white/5">
      {/* Skip Link to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
      >
        {locale === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href={`/${locale}`} 
          className="text-2xl font-extrabold text-white tracking-tighter hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-lg"
        >
          tomasvega<span className="text-cyan-400">.</span>dev
        </Link>

        {!isLegalPage ? (
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-400">
            <a href="#experience" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-lg px-2.5 py-1">{dict.nav.experience}</a>
            <a href="#education" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-lg px-2.5 py-1">{dict.nav.education}</a>
            <a href="#skills" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-lg px-2.5 py-1">{dict.nav.skills}</a>
          </div>
        ) : ('')}

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
            <Link 
              href={getRedirectedPathname('es')} 
              className={`relative flex items-center justify-center w-5 h-5 rounded-full overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${locale === 'es' ? 'ring-2 ring-cyan-400 scale-110 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
              title="Español"
              aria-label="Cambiar idioma a Español"
            >
              <svg className="w-full h-full object-cover" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="128" fill="#c60b1e"/>
                <rect y="128" width="512" height="256" fill="#fecb00"/>
                <rect y="384" width="512" height="128" fill="#c60b1e"/>
              </svg>
            </Link>
            <Link 
              href={getRedirectedPathname('en')} 
              className={`relative flex items-center justify-center w-5 h-5 rounded-full overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${locale === 'en' ? 'ring-2 ring-cyan-400 scale-110 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
              title="English"
              aria-label="Change language to English"
            >
              <svg className="w-full h-full object-cover" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" fill="#012169"/>
                <path d="M0 0 L512 512 M512 0 L0 512" stroke="#fff" strokeWidth="60"/>
                <path d="M0 0 L512 512 M512 0 L0 512" stroke="#C8102E" strokeWidth="36"/>
                <path d="M256 0 V512 M0 256 H512" stroke="#fff" strokeWidth="100"/>
                <path d="M256 0 V512 M0 256 H512" stroke="#C8102E" strokeWidth="60"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
