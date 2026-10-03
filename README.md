# FoxOps

Sitio comercial de FoxOps para presentar sus servicios de landing pages, e-commerce y automatizaciones.

**Sitio principal:** https://foxops.digital/
**Contacto:** contacto@foxops.digital

## Stack

- React 19
- Vite 8
- CSS

El zorro del hero tiene una franja de escaneo SVG con puntos y luz, y nodos que se mueven suavemente. Estas animaciones respetan la preferencia de movimiento reducido.

## Desarrollo

```bash
npm ci
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

Vite 8 requiere Node.js 20.19+ o 22.12+. Jenkins usa Node 22.12.0 para la instalación y compilación.

## Publicación

`Jenkinsfile` ejecuta lint y build, y publica `dist/` en el servidor que sirve foxops.digital. El sitio usa `/` como base.

La URL canónica, el sitemap y el contacto están configurados para foxops.digital.
