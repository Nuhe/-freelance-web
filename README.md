# FoxOps

Sitio comercial de FoxOps para presentar sus servicios de landing pages, e-commerce y automatizaciones.

**Sitio principal:** https://foxops.digital/
**Contacto:** contacto@foxops.digital

## Stack

- React 19
- Vite 8
- CSS

Soluciones, Enfoque, Casos y Contacto usan la misma animación de entrada al hacer scroll (`src/hooks/useInView.js` más las clases `reveal-item` y `reveal-mask`, sin dependencias). El hero tiene su propia entrada en CSS, descrita abajo. Con movimiento reducido, o si el navegador no soporta `IntersectionObserver`, el contenido se muestra sin animación. El sitio se renderiza con React, así que necesita JavaScript para mostrarse.

## Hero y el zorro

El hero es un pergamino washi de escenario completo. El titular “Las reglas nunca fueron para nosotros.”, en Shippori Mincho, vive en el espacio negativo de un zorro en salto; aparece desde el primer render y no se anima. La bajada es “Diseño y desarrollo web hecho a mano. Sin plantillas, sin fábrica.” y hay una sola llamada: “Hablemos”.

El dibujo original (`src/components/FoxInk.jsx` y `scrollArt.js`) usa cuerpo blanco cálido, cuello largo, orejas puntiagudas, patas finas con corvejones angulares y cola que termina en cintas caligráficas. Los contornos son polígonos de ancho variable calculados sobre las normales de curvas Bézier. Las máscaras de turbulencia, el pincel seco y un leve sangrado dan textura a la tinta; rizos, marcas carmesí, llamas naranja/dorado, nubes y un sello 狐 completan el pergamino. Las referencias sumi-e y ukiyo-e inspiran el lenguaje, no reproducen personajes ni marcas de un videojuego.

- La pintura entra en 1,65 s. Nubes y plumas tienen movimiento sutil, pausado fuera de pantalla mediante `useFoxLife`. Con movimiento reducido se muestra terminada y quieta.
- En móvil el dibujo se recompone con un giro y recorte vertical; la tipografía conserva su espacio dentro de las líneas. Un borde irregular conecta el papel con las secciones oscuras.
- La cabecera fija usa tinta oscura sobre el papel y cambia al estilo oscuro cuando el hero sale de pantalla. El menú móvil conserva el contraste en ambos estados.
- La ilustración es decorativa (`aria-hidden`) y no intercepta clics. La interacción de tinta del cursor se implementa como una unidad posterior; esta fase solo entrega arte y composición.
- Se preservan la marca kitsune (`FoxMark.jsx`, `public/favicon.svg`), la cabeza en Casos (`FoxInkHead.jsx`, que conserva los datos originales de `inkArt.js`) y el zorro en el footer (`FoxResting.jsx`).

## Sección Casos

La sección `#casos` (03 / Casos) muestra proyectos reales con captura, etiquetas, descripción y enlace externo.

Para sumar un caso:

1. Guardá una captura de la portada en `public/cases/<slug>.webp` (1200×750, idealmente menos de 150 KB).
2. Agregá un objeto al arreglo `cases` en `src/App.jsx` con `slug`, `title`, `description`, `tags`, `url`, `image` y `alt`. Usá `badge` y `note` para aclarar cuando el proyecto es un concepto y no el sitio oficial.
3. Completá `detail` con `challenge` (Desafío), `solution` (Solución), `result` (Resultado) y `stack` (arreglo de tecnologías). Es opcional: si falta, la tarjeta se muestra sin “Ver detalle”. Se muestra en un `<details>` nativo que funciona con teclado. Escribí solo lo que se ve en el sitio: sin métricas, testimonios ni resultados inventados.

## Franja de herramientas

Entre Soluciones y Enfoque, una franja en CSS puro muestra las herramientas con las que trabaja FoxOps (arreglo `tools` en `src/App.jsx`). La lista se duplica con `aria-hidden="true"` para que el loop sea continuo, se pausa con hover o foco y, con movimiento reducido, se muestra como una lista estática.

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

## Formulario y n8n

El formulario solicita nombre, correo, teléfono opcional, tipo de solución y una descripción del proyecto. El desplegable ofrece Landing page, E-commerce, Automatización y Otros. El workflow importable está en [`n8n/foxops-contacto.json`](n8n/foxops-contacto.json).

1. Importá el JSON en n8n y conectá la credencial **Gmail OAuth2** de `notificaciones@foxops.digital` al nodo **Enviar correo a FoxOps**. El nodo envía las consultas a `contacto@foxops.digital`. Los secretos de la credencial no van en el JSON.
2. Publicá/activá el workflow y copiá la **Production URL** del nodo **Formulario FoxOps**. La URL de prueba solo funciona mientras n8n escucha un evento de prueba.
3. En el VPS actual, Traefik recibe HTTPS y envía FoxOps al contenedor `foxops-web`. Este contenedor usa [`deploy/nginx-foxops-webhook.conf`](deploy/nginx-foxops-webhook.conf) como `/etc/nginx/conf.d/default.conf` y reenvía el POST a n8n por la red Docker `foxops_default`. El contenedor `n8n` debe estar unido a esa red con el alias `n8n`. La URL pública es `https://foxops.digital/webhook/foxops-contacto`, y el sitio la usa por defecto sin variables de entorno.
4. Si n8n está en otro dominio, definí `VITE_N8N_WEBHOOK_URL` con su Production URL HTTPS antes del build. `.env.example` muestra el formato. En el sitio público, configurá la variable en el entorno del job de Jenkins y ejecutá un nuevo build.
5. Enviá una consulta de prueba desde foxops.digital y comprobá que llegue a `contacto@foxops.digital`. El correo configura `Reply-To` con la dirección del cliente.

La ruta pública del webhook recibe un POST de formulario a través de Nginx. El workflow valida los campos y descarta envíos con el campo señuelo completado. Si la ruta todavía devuelve 404, el formulario abre un correo precargado en la aplicación de correo del visitante; en ese modo el envío no es automático.
