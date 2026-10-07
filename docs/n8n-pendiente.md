# Estado de la conexión del formulario con n8n

Actualizado el 7 de octubre de 2026.

- Jenkins publicó `main` en `/opt/foxops/site/dist`. El bundle activo contiene la ruta predeterminada `/webhook/foxops-contacto`.
- Traefik atiende HTTPS en el host y envía `foxops.digital` al contenedor `foxops-web-1`. Nginx dentro de ese contenedor sirve `dist/`.
- Se instaló `/opt/foxops/nginx/default.conf` en el VPS y se montó en `/opt/foxops/compose.yaml`. El POST a `/webhook/foxops-contacto` llega desde Traefik, pasa por Nginx y alcanza el contenedor n8n por la red Docker `foxops_default`. El contenedor `n8n` se conectó a esa red con el alias `n8n`. Si n8n se recrea, habrá que volver a conectarlo a esa red.
- El ID `poGPlOKp4m3gmXPU` indicado por el usuario pertenecía al n8n local de esta máquina (`demo_aboga-n8n-1`), separado del n8n del VPS. Se importaron ese workflow y su credencial Gmail OAuth al VPS. El workflow `poGPlOKp4m3gmXPU` está publicado y activo allí. La primera copia sin credenciales quedó inactiva y renombrada `FoxOps | Copia temporal inactiva`.
- La prueba pública con `website=diagnostico` devuelve `400` y `{"ok":false,"message":"Datos inválidos"}` desde n8n. Esa carga no envía correo. El sitio principal responde 200.
- Desde el VPS se comprobó que el token de renovación de Gmail devuelve un token de acceso y tiene permisos de Gmail. No se envió un correo de prueba.
- Una consulta de prueba autorizada devolvió `200` y `{"ok":true}`. La ejecución `3` del workflow `poGPlOKp4m3gmXPU` terminó con estado `success`; el nodo Gmail precede a la confirmación. Falta confirmar visualmente la recepción en la bandeja de `contacto@foxops.digital`.
