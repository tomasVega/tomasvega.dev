export default function PoliticaPrivacidadEn() {
  return (
    <article className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
      
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          1. Who is the Data Controller?
        </h2>
        <p className="mb-4">
          In accordance with the General Data Protection Regulation (GDPR) and Organic Law 3/2018 (LOPDGDD), the user is informed that any data collected on this website (if any) will be processed by:
        </p>
        <ul className="space-y-2 text-slate-400">
          <li>
            <strong className="text-white">Controller:</strong> Tomás Vega Castro
          </li>
          <li>
            <strong className="text-white">Location:</strong> Ourense, Spain
          </li>
          <li>
            <strong className="text-white">Contact Email:</strong>{' '}
            <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              tomas.vega.castro@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          2. What personal data is collected on this website?
        </h2>
        <p>
          <strong className="text-white font-semibold">
            None directly.
          </strong>{' '}
          This website is strictly informational and institutional. It does not feature contact forms, newsletters, user registrations, or commenting systems.
        </p>
        <p>
          Therefore, we will not ask for or store any personal data such as your name, physical address, phone number, or email address, unless you voluntarily choose to contact us via external email.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          3. Third-Party Analytics Tools (Vercel)
        </h2>
        <p>
          To ensure technical quality and analyze the aggregated traffic sources, this website uses two services provided by Vercel Inc. in their most privacy-respectful configuration:
        </p>
        <div className="space-y-3 pl-4 border-l-2 border-cyan-500/30 mt-4">
          <p>
            <strong className="text-white block mb-1">Vercel Web Analytics</strong>
            This tool measures basic metrics (visited pages, device type, country of origin). It operates in a completely anonymous, cookieless manner. It does not collect any personally identifiable information (PII) or track users across different websites.
          </p>
          <p>
            <strong className="text-white block mb-1">Vercel Speed Insights</strong>
            It exclusively measures website load times (Core Web Vitals) to optimize code technical performance and offer fluid browsing. It does not collect personal data or store cookies.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          4. External Links
        </h2>
        <p>
          This website contains links to social media networks and external profiles such as LinkedIn and GitHub. If you click on any of these links, you will access third-party platforms that have their own independent privacy policies and tracking/cookie systems, for which this website is not responsible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          5. What are your rights?
        </h2>
        <p>
          Even though we do not collect or store data on this website, the law grants you the following rights regarding your personal information (for example, if you send us an email to contact us):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400">
          <li>
            <strong className="text-white">Access:</strong>{' '}
            Know what data of yours we possess.
          </li>
          <li>
            <strong className="text-white">Rectification:</strong>{' '}
            Correct inaccurate information.
          </li>
          <li>
            <strong className="text-white">Erasure (Forgetfulness):</strong>{' '}
            Request that we delete your email or contact history.
          </li>
          <li>
            <strong className="text-white">Objection or Restriction:</strong>{' '}
            Object to the processing or request restrictions on their usage.
          </li>
        </ul>
        <p className="mt-4">
          You can exercise any of these rights by sending an email to{' '}
          <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            tomas.vega.castro@gmail.com
          </a>
          . Additionally, you have the right to file a complaint with the Spanish Data Protection Agency (AEPD) at{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            aepd.es
          </a>{' '}
          if you consider your rights have been infringed.
        </p>
      </section>

    </article>
  );
}
