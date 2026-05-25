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
              <>Aviso Legal</>
            ) : (
              <>Legal Notice</>
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
              {isEs ? '1. Datos Identificativos' : '1. Identification Data'}
            </h2>
            <p className="mb-4">
              {isEs 
                ? 'En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:'
                : 'In compliance with the disclosure obligations set forth in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the following data is provided below:'
              }
            </p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <strong className="text-white">{isEs ? 'Titular del sitio web:' : 'Website Owner:'}</strong> Tomás Vega Castro
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Residencia:' : 'Residence:'}</strong> Ourense, Galicia, España
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Contacto:' : 'Contact:'}</strong>{' '}
                <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  tomas.vega.castro@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">{isEs ? 'Actividad:' : 'Activity:'}</strong>{' '}
                {isEs ? 'Portfolio profesional y sitio web personal.' : 'Professional portfolio and personal website.'}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '2. Condiciones Generales de Uso' : '2. General Terms of Use'}
            </h2>
            <p>
              {isEs
                ? 'El acceso y/o uso de este portal le atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.'
                : 'Accessing and/or using this portal makes you a USER, who accepts, from such access and/or use, the General Terms of Use set forth herein.'
              }
            </p>
            <p>
              {isEs
                ? 'Este sitio web proporciona el acceso a información, servicios o datos en Internet pertenecientes a Tomás Vega Castro. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro o comunicación que fuese necesario para acceder a determinados servicios o contenidos.'
                : 'This website provides access to information, services, or data on the Internet belonging to Tomás Vega Castro. The USER assumes responsibility for the use of this portal. This responsibility extends to any registration or communication necessary to access specific services or content.'
              }
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '3. Propiedad Intelectual e Industrial' : '3. Intellectual and Industrial Property'}
            </h2>
            <p>
              {isEs
                ? 'Tomás Vega Castro por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).'
                : 'Tomás Vega Castro, by himself or as an assignee, is the owner of all intellectual and industrial property rights of this website, as well as the elements contained therein (by way of example: images, sound, audio, video, software, or texts; trademarks or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access, and use, etc.).'
              }
            </p>
            <p>
              {isEs
                ? 'Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa del titular.'
                : 'The reproduction, distribution, and public communication, including its making available mode, of all or part of the contents of this website for commercial purposes, in any medium and by any technical means, without the express written authorization of the owner, are strictly prohibited.'
              }
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '4. Exclusión de Garantías y Responsabilidad' : '4. Exclusion of Warranties and Liability'}
            </h2>
            <p>
              {isEs
                ? 'El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.'
                : 'The website owner is not responsible, under any circumstances, for damages and losses of any nature that may occur, including but not limited to: errors or omissions in the content, lack of availability of the portal, or the transmission of viruses or malicious or harmful programs in the content, despite having adopted all necessary technological measures to prevent it.'
              }
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '5. Modificaciones y Enlaces' : '5. Modifications and Links'}
            </h2>
            <p>
              {isEs
                ? 'El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.'
                : 'The owner reserves the right to make any modifications deemed appropriate to the portal without prior notice, with the capability to change, delete, or add both the content and services provided, as well as the way they are presented or located.'
              }
            </p>
            <p>
              {isEs
                ? 'En el caso de que en este sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.'
                : 'In the event that this website provides links or hyperlinks to other Internet sites, the owner shall not exercise any control over such sites and content. Under no circumstances will the owner assume any responsibility for the contents of any link belonging to an external website.'
              }
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
              {isEs ? '6. Derecho de Exclusión y Legislación Aplicable' : '6. Right of Exclusion and Applicable Law'}
            </h2>
            <p>
              {isEs
                ? 'El titular se reserva el derecho a denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.'
                : 'The owner reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, at his own initiative or that of a third party, to users who violate these General Terms of Use.'
              }
            </p>
            <p>
              {isEs
                ? 'La relación entre el titular y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Ourense, España.'
                : 'The relationship between the owner and the USER shall be governed by current Spanish regulations, and any dispute shall be submitted to the courts and tribunals of the city of Ourense, Spain.'
              }
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
