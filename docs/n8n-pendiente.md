# Estado de la conexión del formulario con n8n

Actualizado el 7 de octubre de 2026.

- Jenkins publicó `main` (commit `ef6fcbe`) en `/opt/foxops/site/dist`. El bundle activo contiene la ruta predeterminada `/webhook/foxops-contacto`.
- Traefik atiende HTTPS en el host y envía `foxops.digital` al contenedor `foxops-web-1`. Nginx dentro de ese contenedor sirve `dist/`.
- Se instaló `/opt/foxops/nginx/default.conf` en el VPS y se montó en `/opt/foxops/compose.yaml`. El POST a `/webhook/foxops-contacto` llega desde Traefik, pasa por Nginx y alcanza el contenedor n8n por la red Docker `foxops_default`. El contenedor `n8n` se conectó a esa red con el alias `n8n`. Si n8n se recrea, habrá que volver a conectarlo a esa red.
- Se importó el workflow `FoxOps | Formulario de contacto a Gmail` en n8n con ID `oQ6xFaRSbOFEEmIZ`. Está inactivo y el nodo **Enviar correo a FoxOps** no tiene una credencial asociada en esta instancia. El ID `poGPlOKp4m3gmXPU` indicado por el usuario no aparece en la base de datos del contenedor n8n del VPS.
- La prueba pública con `website=diagnostico` llega a n8n y recibe su 404 de workflow inactivo. Esa carga no envía correo. El sitio principal responde 200.
- Falta asociar la credencial Gmail en el n8n del VPS, activar/publicar el workflow y probar un envío real a `contacto@foxops.digital`.
