export default function Education({ dict }) {
  const universityText = dict.education.university;
  const lastSpaceIndex = universityText.lastIndexOf(' ');
  const firstPart = lastSpaceIndex !== -1 ? universityText.substring(0, lastSpaceIndex) : '';
  const lastWord = lastSpaceIndex !== -1 ? universityText.substring(lastSpaceIndex + 1) : universityText;

  return (
    <section id="education" className="scroll-mt-24 mb-32 animate-fade-up animate-delay-200">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-2xl font-bold text-white">{dict.education.title}</h3>
        <div className="h-px bg-white/10 flex-grow" aria-hidden="true"></div>
      </div>
      
      <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 sm:p-8 mb-6 hover:border-white/20 transition-all">
        <div className="flex flex-row justify-between items-baseline mb-2">
          <h4 className="text-xl font-bold text-white">{dict.education.degree}</h4>
          <span className="text-sm font-medium text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full ml-4 whitespace-nowrap">2006 — 2012</span>
        </div>
        <div className="text-cyan-400 font-medium mb-6">
          <a 
            href="https://www.linkedin.com/school/universidad-de-santiago-de-compostela/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-md"
          >
            {firstPart && `${firstPart} `}
            <span className="whitespace-nowrap">
              {lastWord}
              <svg className="w-4 h-4 ml-1 inline-block align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </a>
        </div>
        
        <div className="bg-slate-950/50 rounded-xl p-5 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h5 className="font-bold text-white">{dict.education.tfg_title}</h5>
          </div>
          <p className="text-sm text-slate-300 mb-4">
            {dict.education.tfg_desc}
          </p>
          <a 
            href="https://github.com/tomasVega/trobador" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-md"
          >
            {dict.education.tfg_repo}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:border-white/20 transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20" aria-hidden="true">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-white">{dict.education.scrum_title}</h4>
            <p className="text-sm text-slate-400">{dict.education.scrum_id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
