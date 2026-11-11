# Portfolio Personal - Tomás Vega Castro

Este es el repositorio de mi sitio web personal y portfolio profesional, accesible en [tomasvega.dev](https://tomasvega.dev).

## 📚 Propósito del Proyecto
Este proyecto ha sido desarrollado y estructurado con **fines de aprendizaje, práctica y experimentación tecnológica**. Ha servido como entorno de pruebas para la migración de un sitio web estático tradicional (HTML/CSS) a una arquitectura de componentes React moderna basada en **Next.js**. Siéntete libre de usarlo.

---

## 🛠️ Tecnologías y Características
* **Core:** [Next.js 16 (App Router)](https://nextjs.org/) y [React 19](https://react.dev/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)

---

## SEO y Google Search Console

Cada página tiene título, descripción, URL canónica y alternativas de idioma propias. Las portadas incluyen datos estructurados `ProfilePage` y `Person`. Los metadatos Open Graph y Twitter utilizan `public/img/social.png`; su fuente editable es `public/img/social.svg`.

La compilación genera `out/sitemap.xml` con las seis páginas en español e inglés y `out/robots.txt` con la ubicación del sitemap. Cloudflare puede añadir sus reglas de robots gestionadas al archivo publicado.

Para compilar y comprobar el HTML que se publicará:

```sh
npm run build
npm run check:seo
```

Publica el directorio `out` mediante el alojamiento existente. El archivo `_redirects` aplica una redirección permanente de `/` a `/es`; en desarrollo Next.js realiza esa redirección.

Para completar el alta en [Google Search Console](https://search.google.com/search-console):

1. Añade una propiedad de dominio para `tomasvega.dev` y verifica el registro DNS que proporcione Google. No hace falta modificar el código para este método.
2. Tras publicar, comprueba que `https://tomasvega.dev/sitemap.xml` responde correctamente y envía esa URL en la sección **Sitemaps**.
3. Inspecciona las URLs `/es` y `/en` y solicita su indexación si procede.

Como alternativa, una propiedad con prefijo de URL permite verificar mediante una etiqueta HTML. Copia **solo el valor `content`** de la etiqueta de Google a `GOOGLE_SITE_VERIFICATION` en el entorno de compilación del alojamiento o en `.env.local` (ver `.env.example`), y vuelve a compilar y publicar. Sin ese valor no se emite una etiqueta de verificación vacía.

La verificación confirma la propiedad del sitio; Google decide cuándo rastrear e indexar las páginas. Las comprobaciones locales validan el HTML exportado y no sustituyen los informes de Search Console o Core Web Vitals.

---

## 📄 Licencia

Este repositorio se distribuye bajo dos esquemas de derechos bien diferenciados:

### 1. Código Fuente y Plantilla
El código de software de este proyecto (la estructura de Next.js, los componentes de React, los scripts y la configuración de estilos de Tailwind CSS) está licenciado bajo la **Licencia Apache 2.0**.
Siéntete libre de clonar este repositorio, modificar el código o utilizar la plantilla para tu propio aprendizaje y proyectos. Según los términos de la licencia Apache 2.0, cualquier derivado debe mantener los créditos de atribución correspondientes.

### 2. Contenido e Identidad Personal
Toda la información personal, datos del currículum, textos redactados sobre la trayectoria profesional, marcas e identidad de **Tomás Vega Castro** están protegidos por **Copyright tradicional y derechos de autor exclusivos**.
No está permitida la copia directa, duplicado o redistribución de la información personal contenida en los diccionarios (`es.json`/`en.json`) ni el uso de las marcas e identidad asociadas para fines comerciales o de presentación personal de terceros.
