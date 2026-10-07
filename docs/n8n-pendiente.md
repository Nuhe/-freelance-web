# Estado de la conexión del formulario con n8n

Actualizado el 7 de octubre de 2026.

- Jenkins publica `main` en `/opt/foxops/site/dist`. El sitio activo ya contiene el formulario de FoxOps, pero el build de `main` todavía no incluye la ruta predeterminada del webhook. La rama local `wip/n8n-webhook-proxy` sí la incluye.
- Traefik atiende HTTPS en el host y envía `foxops.digital` al contenedor `foxops-web-1`. Nginx dentro de ese contenedor sirve `dist/`.
- Se instaló `/opt/foxops/nginx/default.conf` en el VPS y se montó en `/opt/foxops/compose.yaml`. El POST a `/webhook/foxops-contacto` llega desde Traefik, pasa por Nginx y alcanza el contenedor n8n por la red Docker `foxops_default`. El contenedor `n8n` se conectó a esa red con el alias `n8n`. Si n8n se recrea, habrá que volver a conectarlo a esa red.
- Se importó el workflow `FoxOps | Formulario de contacto a Gmail` en n8n con ID `oQ6xFaRSbOFEEmIZ`. Está inactivo hasta que se configure la credencial Gmail OAuth2 en el nodo **Enviar correo a FoxOps**.
- La prueba pública con `website=diagnostico` llega a n8n y recibe su 404 de workflow inactivo. Esa carga no envía correo. El sitio principal responde 200.
- Falta asociar la credencial Gmail, activar/publicar el workflow, publicar la ruta predeterminada del frontend desde esta rama y probar un envío real a `contacto@foxops.digital`.
