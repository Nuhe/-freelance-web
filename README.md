# FoxOps — Landing Page Freelance

Sitio web profesional para presentar servicios freelance de automatización, bots con IA y desarrollo web.

**🌐 Demo en vivo:** [https://nuhe.github.io/freelance-web](https://nuhe.github.io/freelance-web)

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3**
- Deploy en **GitHub Pages** con `gh-pages`

## Secciones

| Sección | Descripción |
|---|---|
| Hero | Propuesta de valor + mockup terminal |
| Servicios | Automatización, Bots IA, Web, Integraciones |
| Problemas | Pain points del cliente |
| Beneficios | Resultados concretos |
| Proceso | 4 pasos de trabajo |
| Proyectos | Portfolio con casos demo |
| Sobre mí | About con skills |
| CTA | Llamada a la acción |
| Contacto | Formulario → WhatsApp |

## Estructura del proyecto

```
freelance-web/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Problems.jsx
│   │   ├── Benefits.jsx
│   │   ├── Process.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── CTASection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Instalación y desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/Nuhe/freelance-web.git
cd freelance-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Build de producción

```bash
npm run build
```

Los archivos compilados quedan en la carpeta `dist/`.

Para previsualizar el build localmente:

```bash
npm run preview
```

## Deploy en GitHub Pages

### Primera vez

1. Asegurate de tener el repositorio en GitHub con la rama `main`
2. Ejecutar:

```bash
npm run deploy
```

Esto hace el build y sube la rama `gh-pages` automáticamente.

3. En GitHub → Settings → Pages → Source: seleccionar rama `gh-pages` / root

### Deploys posteriores

```bash
npm run deploy
```

## Personalización

### Cambiar datos de contacto

En `src/components/ContactForm.jsx` y `src/components/WhatsAppButton.jsx`:

```js
const WHATSAPP_NUMBER = '541134287724' // Reemplazar con tu número
```

En `src/components/Footer.jsx`:

```js
// Actualizar links de GitHub, LinkedIn y email
```

### Cambiar nombre/marca

Buscar `FoxOps` en todos los componentes y reemplazar por tu nombre o marca.

### Agregar casos reales al portfolio

En `src/components/Portfolio.jsx`, reemplazar los objetos del array `projects` con tus proyectos reales.

### Cambiar email de contacto

Buscar `contacto@foxops.dev` y reemplazar con tu email real.

## Configuración GitHub Pages (base path)

El `vite.config.js` ya está configurado con:

```js
base: '/freelance-web/'
```

Si cambiás el nombre del repositorio, actualizá este valor.

## Licencia

MIT
