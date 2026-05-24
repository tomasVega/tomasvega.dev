import Link from 'next/link';

export default function Footer({ dict, locale }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/5 py-12 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-slate-400 text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p>© {currentYear} Tomás Vega Castro</p>
          <span className="hidden sm:inline text-slate-800" aria-hidden="true">|</span>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <Link 
              href={`/${locale}/aviso-legal`} 
              className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-md px-1"
            >
              {dict.footer.legal}
            </Link>
            <span className="text-slate-800" aria-hidden="true">|</span>
            <Link 
              href={`/${locale}/politica-privacidad`} 
              className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-md px-1"
            >
              {dict.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
