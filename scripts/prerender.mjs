import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))

export async function prerender({ year = new Date().getUTCFullYear() } = {}) {
  if (!Number.isInteger(year) || year < 1000 || year > 9999) {
    throw new TypeError('The build year must be a four-digit integer')
  }
  await build({ root })
  await build({
    root,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
    },
  })
  const { render } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url))
  const output = resolve(root, 'dist/index.html')
  const template = await readFile(output, 'utf8')
  const placeholder = '<div id="root"></div>'
  if (template.split(placeholder).length !== 2) {
    throw new Error('Expected exactly one empty React root in the built HTML')
  }
  await writeFile(output, template.replace(placeholder, () => `<div id="root" data-build-year="${year}">${render(year)}</div>`))
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await prerender()
}
