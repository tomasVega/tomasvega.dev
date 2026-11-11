export default function Projects({ dict }) {
  const project = dict.projects.niblio;

  return (
    <section id="projects" className="scroll-mt-24 mb-32 animate-fade-up animate-delay-200">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-2xl font-bold text-white">{dict.projects.title}</h3>
        <div className="h-px bg-white/10 flex-grow" aria-hidden="true"></div>
      </div>

      <article className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-cyan-400/30 transition-colors">
        <div className="flex items-start gap-4 mb-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400" aria-hidden="true">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c-2.5-2-6-2.5-9-1.5v14c3-1 6.5-.5 9 1.5m0-14c2.5-2 6-2.5 9-1.5v14c-3-1-6.5-.5-9 1.5m0-14v14" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{project.name}</h4>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-md text-lg font-medium text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              {project.link}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed">{project.desc}</p>

        <p className="mt-4 text-sm text-slate-400">{project.platforms}</p>
      </article>
    </section>
  );
}
