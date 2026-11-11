import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const output = new URL('../out/', import.meta.url);
const origin = 'https://tomasvega.dev';
const locales = ['es', 'en'];
const paths = ['', '/aviso-legal', '/politica-privacidad'];
const titles = new Set();
const descriptions = new Set();

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map((match) => [
      match[1].toLowerCase(),
      match[3],
    ])
  );
}

let pageCount = 0;
for (const locale of locales) {
  for (const path of paths) {
    const route = `${locale}${path}`;
    const url = `${origin}/${route}`;
    const html = await readFile(new URL(`${route}.html`, output), 'utf8');
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => attributes(tag));
    const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => attributes(tag));
    const meta = (key) => metas.find((tag) => tag.name === key || tag.property === key)?.content;

    assert.equal(attributes(html.match(/<html\b[^>]*>/i)[0]).lang, locale, `${route}: html lang`);
    const canonical = links.filter((tag) => tag.rel === 'canonical');
    assert.equal(canonical.length, 1, `${route}: exactly one canonical`);
    assert.equal(canonical[0].href, url, `${route}: self-referencing canonical`);

    const alternates = links.filter((tag) => tag.rel === 'alternate' && tag.hreflang);
    assert.equal(alternates.length, 3, `${route}: complete language alternatives`);
    for (const language of [...locales, 'x-default']) {
      const targetLocale = language === 'x-default' ? 'es' : language;
      assert.equal(
        alternates.find((tag) => tag.hreflang === language)?.href,
        `${origin}/${targetLocale}${path}`,
        `${route}: ${language} must link to the equivalent page`
      );
    }

    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    assert.ok(title?.includes('Tomás Vega Castro'), `${route}: descriptive page title`);
    assert.ok(!titles.has(title), `${route}: unique title`);
    titles.add(title);
    assert.ok(meta('description')?.length > 40, `${route}: page description`);
    assert.ok(!descriptions.has(meta('description')), `${route}: unique description`);
    descriptions.add(meta('description'));
    assert.ok(meta('robots')?.includes('index'), `${route}: indexable`);
    assert.ok(!meta('robots')?.includes('noindex'), `${route}: no accidental noindex`);
    assert.equal(meta('og:url'), url, `${route}: Open Graph URL`);
    assert.equal(meta('og:title'), title, `${route}: Open Graph title`);
    assert.equal(meta('og:image'), `${origin}/img/social.png`, `${route}: share image`);
    assert.equal(meta('twitter:card'), 'summary_large_image', `${route}: Twitter card`);
    assert.equal(meta('twitter:image'), `${origin}/img/social.png`, `${route}: Twitter image`);
    if (process.env.GOOGLE_SITE_VERIFICATION) {
      assert.equal(meta('google-site-verification'), process.env.GOOGLE_SITE_VERIFICATION);
    }

    const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
    assert.equal(headings.filter((level) => level === 1).length, 1, `${route}: one h1`);
    for (let index = 1; index < headings.length; index++) {
      assert.ok(headings[index] <= headings[index - 1] + 1, `${route}: heading levels do not skip`);
    }

    const jsonLd = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
      .map((match) => JSON.parse(match[1]));
    if (!path) {
      const profile = jsonLd.find((item) => item['@type'] === 'ProfilePage');
      assert.ok(profile, `${route}: profile structured data`);
      assert.equal(profile.url, url);
      assert.equal(profile.inLanguage, locale);
      assert.equal(profile.mainEntity['@type'], 'Person');
      assert.equal(profile.mainEntity.name, 'Tomás Vega Castro');
      assert.ok(profile.mainEntity.sameAs.includes('https://github.com/tomasVega'));
      assert.ok(profile.mainEntity.sameAs.includes('https://www.linkedin.com/in/tomas-vega-castro/'));
      const niblio = html.includes(`href="https://niblio.app/${locale === 'en' ? 'en/' : ''}"`);
      assert.ok(niblio, `${route}: localized Niblio link`);
    } else {
      assert.equal(jsonLd.length, 0, `${route}: legal page has no profile markup`);
    }
    pageCount++;
  }
}

const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');
const entries = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map((match) => match[1]);
assert.equal(entries.length, 6, 'Sitemap lists the six canonical pages');
const locations = new Set();
for (const entry of entries) {
  const location = entry.match(/<loc>(.*?)<\/loc>/)?.[1];
  assert.ok(location?.startsWith(`${origin}/`), 'Sitemap uses production URLs');
  assert.ok(!locations.has(location), 'Sitemap URLs are unique');
  locations.add(location);
  const path = new URL(location).pathname.replace(/^\/(es|en)/, '');
  const alternatives = [...entry.matchAll(/<xhtml:link\b[^>]*>/g)].map(([tag]) => attributes(tag));
  assert.equal(alternatives.length, 3, 'Sitemap includes the language alternatives');
  for (const language of [...locales, 'x-default']) {
    assert.equal(
      alternatives.find((tag) => tag.hreflang === language)?.href,
      `${origin}/${language === 'x-default' ? 'es' : language}${path}`
    );
  }
}
for (const locale of locales) {
  for (const path of paths) assert.ok(locations.has(`${origin}/${locale}${path}`));
}

const robots = await readFile(new URL('robots.txt', output), 'utf8');
assert.match(robots, /User-Agent: \*/i);
assert.match(robots, /^Allow: \/$/m);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const redirects = await readFile(new URL('_redirects', output), 'utf8');
assert.match(redirects, /^\/ \/es 301\s*$/m);

const image = await readFile(new URL('img/social.png', output));
assert.equal(image.subarray(1, 4).toString(), 'PNG', 'Share image is a PNG');
assert.equal(image.readUInt32BE(16), 1200, 'Share image width');
assert.equal(image.readUInt32BE(20), 630, 'Share image height');

console.log(`SEO checks passed: ${pageCount} pages, localized sitemap, robots, redirect, structured data, and share image.`);
