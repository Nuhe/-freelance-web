import assert from 'node:assert/strict'
import { access, readFile, readdir } from 'node:fs/promises'
import test, { before } from 'node:test'
import { prerender } from './prerender.mjs'

let html
let render
before(async () => {
  await prerender({ year: 2031 })
  html = await readFile('dist/index.html', 'utf8')
  ;({ render } = await import('../dist-ssr/entry-server.js'))
})

test('production HTML contains primary landing content and native case details', () => {
  for (const id of ['inicio', 'soluciones', 'casos', 'enfoque', 'contacto']) {
    assert.match(html, new RegExp(`id="${id}"`))
  }
  for (const copy of ['Soluciones tecnológicas,', 'Landing pages', 'E-commerce', 'Automatizaciones', 'Plan Paracaídas', 'Rossi Almacén', 'INFOLAPLATA', 'Un proceso claro.', 'Tu próximo paso']) {
    assert.ok(html.includes(copy), `Missing primary copy: ${copy}`)
  }
  assert.equal((html.match(/<details class="case-detail">/g) || []).length, 3)
  assert.doesNotMatch(html, /<!--app-html-->/)
})

test('no-JavaScript output has native mobile navigation and safe direct contact', () => {
  const fallback = html.match(/<details class="nav-fallback">([\s\S]*?)<\/details>/)?.[1]
  assert.ok(fallback, 'A native details menu must work without event handlers')
  assert.match(fallback, /<summary>Menú<\/summary>/)
  for (const id of ['soluciones', 'enfoque', 'casos', 'contacto']) {
    assert.ok(fallback.includes(`href="#${id}"`))
  }
  assert.match(html, /href="mailto:contacto@foxops.digital"/)
  assert.doesNotMatch(html, /<(?:form|input|select|textarea|button)\b/)
  assert.doesNotMatch(html, /reveal-ready/)
})

test('rendering is deterministic with an explicit shared build year and SVG IDs', () => {
  assert.equal(typeof render, 'function', 'A server renderer must be built')
  const first = render(2031)
  assert.equal(first, render(2031))
  assert.match(html, /id="root" data-build-year="2031"/)
  assert.match(first, /© <!-- -->2031<!-- --> FoxOps/)
  assert.equal(first.replace('>2031<', '>2042<'), render(2042))
  assert.ok(html.includes(first), 'Production root must contain the exact hydration tree')
  const ids = [...first.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  assert.equal(new Set(ids).size, ids.length, 'SVG and navigation IDs must be unique')
  for (const [, id] of first.matchAll(/url\(#([^)]*)\)/g)) assert.ok(ids.includes(id))
})

test('static output references existing hashed assets and excludes server intermediates', async () => {
  const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((match) => match[1])
  assert.ok(assets.some((asset) => /-[\w-]+\.js$/.test(asset)))
  assert.ok(assets.some((asset) => /-[\w-]+\.css$/.test(asset)))
  for (const asset of assets) await access(`dist${asset}`)
  for (const [, asset] of html.matchAll(/<img\b[^>]*\bsrc="(\/[^"?#]+)"/g)) await access(`dist${asset}`)
  assert.doesNotMatch(html, /\/src\/main\.jsx|entry-server|dist-ssr/)
  assert.ok(!(await readdir('dist', { recursive: true })).some((path) => /entry-server|dist-ssr/.test(path)))
})
