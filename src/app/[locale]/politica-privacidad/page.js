import { getDictionary } from '@/get-dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
            {isEs ? (
              <>Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Privacidad</span></>
            ) : (
              <>Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Policy</span></>
            )}
          </h1>
          <p className="text-slate-400">
            {isEs ? 'Última actualización: 24 de mayo de 2026' : 'Last updated: May 24, 2026'}
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
          
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '1. ¿Quién es el Responsable del Tratamiento?' : '1. Who is the Data Controller?'}
            </h2>
            <p className="mb-4">
              {isEs 
                ? 'De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), el interesado queda informado de que los datos recogidos en esta web (si los hubiera) serán tratados por:'
                : 'In accordance with the General Data Protection Regulation (GDPR) and Organic Law 3/2018 (LOPDGDD), the user is informed that any data collected on this website (if any) will be processed by:'
              }
            </p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <strong className="text-white">{isEs ? 'Responsable:' : 'Controller:'}</strong> Tomás Vega Castro
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Ubicación:' : 'Location:'}</strong> Ourense, España
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Email de contacto:' : 'Contact Email:'}</strong>{' '}
                <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  tomas.vega.castro@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '2. ¿Qué datos personales se recopilan en esta web?' : '2. What personal data is collected on this website?'}
            </h2>
            <p>
              <strong className="text-white font-semibold">
                {isEs ? 'Ninguno de forma directa.' : 'None directly.'}
              </strong>{' '}
              {isEs
                ? 'Este sitio web es estrictamente informativo e institucional. No cuenta con formularios de contacto, boletines de noticias (newsletters), registros de usuarios ni sistemas de comentarios.'
                : 'This website is strictly informational and institutional. It does not feature contact forms, newsletters, user registrations, or commenting systems.'
              }
            </p>
            <p>
              {isEs
                ? 'Por lo tanto, no te pediremos ni almacenaremos ningún dato de carácter personal como tu nombre, dirección, teléfono o correo electrónico, a menos que tú decidas voluntariamente escribirnos por correo electrónico externo.'
                : 'Therefore, we will not ask for or store any personal data such as your name, physical address, phone number, or email address, unless you voluntarily choose to contact us via external email.'
              }
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '3. Herramientas de Análisis de Terceros (Vercel)' : '3. Third-Party Analytics Tools (Vercel)'}
            </h2>
            <p>
              {isEs
                ? 'Para garantizar la calidad técnica y analizar la procedencia agregada de las visitas, este sitio web utiliza dos servicios provistos por Vercel Inc. en su modalidad más respetuosa con la privacidad:'
                : 'To ensure technical quality and analyze the aggregated traffic sources, this website uses two services provided by Vercel Inc. in their most privacy-respectful configuration:'
              }
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-cyan-500/30 mt-4">
              <p>
                <strong className="text-white block mb-1">Vercel Web Analytics</strong>
                {isEs
                  ? 'Esta herramienta mide métricas básicas (páginas visitadas, tipo de dispositivo, país de origen). Funciona de manera completamente anónima y libre de cookies. No recoge información que permita identificar al usuario de forma individual ni hace seguimiento entre distintas webs.'
                  : 'This tool measures basic metrics (visited pages, device type, country of origin). It operates in a completely anonymous, cookieless manner. It does not collect any personally identifiable information (PII) or track users across different websites.'
                }
              </p>
              <p>
                <strong className="text-white block mb-1">Vercel Speed Insights</strong>
                {isEs
                  ? 'Mide exclusivamente tiempos de carga de la web (Core Web Vitals) para optimizar el rendimiento técnico del código y ofrecer una navegación fluida. Tampoco recopila datos personales ni almacena cookies.'
                  : 'It exclusively measures website load times (Core Web Vitals) to optimize code technical performance and offer fluid browsing. It does not collect personal data or store cookies.'
                }
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '4. Enlaces Externos' : '4. External Links'}
            </h2>
            <p>
              {isEs
                ? 'Este sitio web contiene enlaces a redes sociales y perfiles externos como LinkedIn y GitHub. Si haces clic en alguno de estos enlaces, estarás accediendo a plataformas de terceros que tienen sus propias políticas de privacidad independientes y sus propios sistemas de seguimiento/cookies de los cuales esta web no es responsable.'
                : 'This website contains links to social media networks and external profiles such as LinkedIn and GitHub. If you click on any of these links, you will access third-party platforms that have their own independent privacy policies and tracking/cookie systems, for which this website is not responsible.'
              }
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '5. ¿Cuáles son tus derechos?' : '5. What are your rights?'}
            </h2>
            <p>
              {isEs
                ? 'Aunque no recopilamos ni almacenamos datos en este sitio web, la normativa te otorga los siguientes derechos sobre tu información personal (por ejemplo, si nos envías un correo electrónico para contactar con nosotros):'
                : 'Even though we do not collect or store data on this website, the law grants you the following rights regarding your personal information (for example, if you send us an email to contact us):'
              }
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-white">{isEs ? 'Acceso:' : 'Access:'}</strong>{' '}
                {isEs ? 'Saber qué datos tuyos tenemos.' : 'Know what data of yours we possess.'}
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Rectificación:' : 'Rectification:'}</strong>{' '}
                {isEs ? 'Corregir información inexacta.' : 'Correct inaccurate information.'}
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Supresión (Olvido):' : 'Erasure (Forgetfulness):'}</strong>{' '}
                {isEs ? 'Solicitar que eliminemos tu correo o historial de contacto.' : 'Request that we delete your email or contact history.'}
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Oposición o Limitación:' : 'Objection or Restriction:'}</strong>{' '}
                {isEs ? 'Oponerte al tratamiento o solicitar limitaciones en el uso de los mismos.' : 'Object to the processing or request restrictions on their usage.'}
              </li>
            </ul>
            <p className="mt-4">
              {isEs ? (
                <>
                  Puedes ejercer cualquiera de estos derechos enviando un correo electrónico a{' '}
                  <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    tomas.vega.castro@gmail.com
                  </a>
                  . Adicionalmente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en{' '}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    aepd.es
                  </a>{' '}
                  si consideras vulnerados tus derechos.
                </>
              ) : (
                <>
                  You can exercise any of these rights by sending an email to{' '}
                  <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    tomas.vega.castro@gmail.com
                  </a>
                  . Additionally, you have the right to file a complaint with the Spanish Data Protection Agency (AEPD) at{' '}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    aepd.es
                  </a>{' '}
                  if you consider your rights have been infringed.
                </>
              )}
            </p>
          </section>

        </article>

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
