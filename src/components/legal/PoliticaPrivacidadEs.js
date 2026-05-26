export default function PoliticaPrivacidadEs() {
  return (
    <article className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
      
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          1. ¿Quién es el Responsable del Tratamiento?
        </h2>
        <p className="mb-4">
          De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), el interesado queda informado de que los datos recogidos en esta web (si los hubiera) serán tratados por:
        </p>
        <ul className="space-y-2 text-slate-400">
          <li>
            <strong className="text-white">Responsable:</strong> Tomás Vega Castro
          </li>
          <li>
            <strong className="text-white">Ubicación:</strong> Ourense, España
          </li>
          <li>
            <strong className="text-white">Email de contacto:</strong>{' '}
            <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              tomas.vega.castro@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          2. ¿Qué datos personales se recopilan en esta web?
        </h2>
        <p>
          <strong className="text-white font-semibold">
            Ninguno de forma directa.
          </strong>{' '}
          Este sitio web es estrictamente informativo e institucional. No cuenta con formularios de contacto, boletines de noticias (newsletters), registros de usuarios ni sistemas de comentarios.
        </p>
        <p>
          Por lo tanto, no te pediremos ni almacenaremos ningún dato de carácter personal como tu nombre, dirección, teléfono o correo electrónico, a menos que tú decidas voluntariamente escribirnos por correo electrónico externo.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          3. Herramientas de Análisis de Terceros (Vercel)
        </h2>
        <p>
          Para garantizar la calidad técnica y analizar la procedencia agregada de las visitas, este sitio web utiliza dos servicios provistos por Vercel Inc. en su modalidad más respetuosa con la privacidad:
        </p>
        <div className="space-y-3 pl-4 border-l-2 border-cyan-500/30 mt-4">
          <p>
            <strong className="text-white block mb-1">Vercel Web Analytics</strong>
            Esta herramienta mide métricas básicas (páginas visitadas, tipo de dispositivo, país de origen). Funciona de manera completamente anónima y libre de cookies. No recoge información que permita identificar al usuario de forma individual ni hace seguimiento entre distintas webs.
          </p>
          <p>
            <strong className="text-white block mb-1">Vercel Speed Insights</strong>
            Mide exclusivamente tiempos de carga de la web (Core Web Vitals) para optimizar el rendimiento técnico del código y ofrecer una navegación fluida. Tampoco recopila datos personales ni almacena cookies.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          4. Enlaces Externos
        </h2>
        <p>
          Este sitio web contiene enlaces a redes sociales y perfiles externos como LinkedIn y GitHub. Si haces clic en alguno de estos enlaces, estarás accediendo a plataformas de terceros que tienen sus propias políticas de privacidad independientes y sus propios sistemas de seguimiento/cookies de los cuales esta web no es responsable.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
          5. ¿Cuáles son tus derechos?
        </h2>
        <p>
          Aunque no recopilamos ni almacenamos datos en este sitio web, la normativa te otorga los siguientes derechos sobre tu información personal (por ejemplo, si nos envías un correo electrónico para contactar con nosotros):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400">
          <li>
            <strong className="text-white">Acceso:</strong>{' '}
            Saber qué datos tuyos tenemos.
          </li>
          <li>
            <strong className="text-white">Rectificación:</strong>{' '}
            Corregir información inexacta.
          </li>
          <li>
            <strong className="text-white">Supresión (Olvido):</strong>{' '}
            Solicitar que eliminemos tu correo o historial de contacto.
          </li>
          <li>
            <strong className="text-white">Oposición o Limitación:</strong>{' '}
            Oponerte al tratamiento o solicitar limitaciones en el uso de los mismos.
          </li>
        </ul>
        <p className="mt-4">
          Puedes ejercer cualquiera de estos derechos enviando un correo electrónico a{' '}
          <a href="mailto:tomas.vega.castro@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            tomas.vega.castro@gmail.com
          </a>
          . Adicionalmente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            aepd.es
          </a>{' '}
          si consideras vulnerados tus derechos.
        </p>
      </section>

    </article>
  );
}
