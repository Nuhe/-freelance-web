# FoxOps — Páginas web gestionadas

Sitio comercial de FoxOps para presentar el servicio de diseño, publicación y mantenimiento de páginas web.

**Demo en vivo:** https://nuhe.github.io/-freelance-web/

## Propuesta

- Diseño y desarrollo responsive.
- Configuración de dominio y publicación.
- Formularios y contacto por WhatsApp.
- SEO técnico.
- Analytics y medición de eventos.
- Mantenimiento y acompañamiento mensual.

## Stack

- React 19
- Vite 8
- Tailwind CSS 3
- GitHub Pages

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

## Publicación

```bash
npm run deploy
```

El despliegue se publica desde la rama `gh-pages`. El `base` configurado en Vite corresponde a `/-freelance-web/`.

## Datos a revisar

El número de WhatsApp se encuentra en `ContactForm.jsx` y `WhatsAppButton.jsx`. Los precios son valores de referencia y deben revisarse antes de cada actualización comercial.
