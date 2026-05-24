export default function Experience({ dict }) {
  const pList = dict.experience.plexus.projects;

  return (
    <section id="experience" className="scroll-mt-24 mb-32 animate-fade-up delay-100 opacity-0">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-2xl font-bold text-white">{dict.experience.title}</h3>
        <div className="h-px bg-white/10 flex-grow" aria-hidden="true"></div>
      </div>
      
      <div className="relative border-l border-white/10 ml-3 pl-8 space-y-16">
        
        {/* Plexus Tech */}
        <div className="relative group">
          <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300" aria-hidden="true"></div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <div>
              <h4 className="text-xl font-bold text-white">{dict.experience.plexus.role}</h4>
              <div className="text-lg font-medium text-slate-400 mt-1">
                <a 
                  href="https://www.linkedin.com/company/plexus-tech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-md"
                >
                  Plexus Tech
                </a>
              </div>
            </div>
            <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full mt-3 sm:mt-0 w-max">
              {dict.experience.plexus.duration}
            </span>
          </div>
          
          <p className="text-slate-300 leading-relaxed mb-6">
            {dict.experience.plexus.desc}
          </p>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              {dict.experience.projects_header}
            </p>
            <div className="grid gap-3">
              {Object.keys(pList).map((key) => (
                <div key={key} className="bg-white/5 border border-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <strong className="text-white block mb-1">{pList[key].title}</strong>
                  <span className="text-sm text-slate-400">{pList[key].desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Globant */}
        <div className="relative group">
          <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300" aria-hidden="true"></div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <div>
              <h4 className="text-xl font-bold text-white">{dict.experience.globant.role}</h4>
              <div className="text-lg font-medium text-slate-400 mt-1">
                <a 
                  href="https://www.linkedin.com/company/globant/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-md"
                >
                  Globant
                </a>
                <span className="text-sm text-slate-500"> | Buenos Aires</span>
              </div>
            </div>
            <span className="text-sm font-medium text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full mt-3 sm:mt-0 w-max">
              {dict.experience.globant.duration}
            </span>
          </div>
          
          <p className="text-slate-300 leading-relaxed mb-4">
            {dict.experience.globant.desc}
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full tracking-wide">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            {dict.experience.globant.collab}
          </div>
        </div>
      </div>
    </section>
  );
}
