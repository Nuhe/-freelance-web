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

## Formulario y n8n

El formulario solicita nombre, correo, teléfono opcional, tipo de solución y una descripción del proyecto. El desplegable ofrece Landing page, E-commerce, Automatización y Otros. El workflow importable está en [`n8n/foxops-contacto.json`](n8n/foxops-contacto.json).

1. Importá el JSON en n8n y conectá la credencial **Gmail OAuth2** de `contacto@foxops.digital` al nodo **Enviar correo a FoxOps**. Las credenciales no van en el JSON.
2. Publicá/activá el workflow y copiá la **Production URL** del nodo **Formulario FoxOps**. La URL de prueba solo funciona mientras n8n escucha un evento de prueba.
3. Si n8n corre en el mismo servidor que FoxOps, incluí [`deploy/nginx-foxops-webhook.conf`](deploy/nginx-foxops-webhook.conf) dentro del bloque HTTPS de Nginx para `foxops.digital`. Probá la configuración con `nginx -t` antes de recargar Nginx. La URL pública será `https://foxops.digital/webhook/foxops-contacto`, y el sitio la usa por defecto sin variables de entorno.
4. Si n8n está en otro dominio, definí `VITE_N8N_WEBHOOK_URL` con su Production URL HTTPS antes del build. `.env.example` muestra el formato. En el sitio público, configurá la variable en el entorno del job de Jenkins y ejecutá un nuevo build.
5. Enviá una consulta de prueba desde foxops.digital y comprobá que llegue a `contacto@foxops.digital`. El correo configura `Reply-To` con la dirección del cliente.

La ruta pública del webhook recibe un POST de formulario a través de Nginx. El workflow valida los campos y descarta envíos con el campo señuelo completado. Si la ruta todavía devuelve 404, el formulario abre un correo precargado en la aplicación de correo del visitante; en ese modo el envío no es automático.
