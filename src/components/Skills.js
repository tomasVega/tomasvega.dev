export default function Skills({ dict }) {
  return (
    <section id="skills" className="scroll-mt-24 mb-32 animate-fade-up delay-300 opacity-0">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-2xl font-bold text-white">{dict.skills.title}</h3>
        <div className="h-px bg-white/10 flex-grow" aria-hidden="true"></div>
      </div>
      
      <div className="space-y-10">
        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            {dict.skills.categories.backend}
          </h4>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">Java EE</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">Spring Framework</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">PHP</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">JSF / Magento / GLPI</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">Oracle</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">MySQL</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            {dict.skills.categories.frontend}
          </h4>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">TypeScript</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">HTML5</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">JQuery</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">MEAN FullStack</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">Desarrollo Web HTML5 & CSS</span>
            
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            {dict.skills.categories.methodologies}
          </h4>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">CI / CD</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">GIT</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">Scrum Manager</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            {dict.skills.categories.languages}
          </h4>
          <div className="flex flex-wrap gap-4">
            <span className="text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              {dict.skills.langs.spanish} <span className="text-slate-400 text-sm ml-1">| {dict.skills.langs.spanish_level}</span>
            </span>
            <span className="text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              {dict.skills.langs.english} <span className="text-slate-400 text-sm ml-1">| {dict.skills.langs.english_level}</span>
            </span>
            <span className="text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              {dict.skills.langs.galego} <span className="text-slate-400 text-sm ml-1">| {dict.skills.langs.galego_level}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
