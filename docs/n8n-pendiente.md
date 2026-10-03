# Estado de la conexión del formulario con n8n

- El formulario y el workflow Gmail ya están publicados en `main` (commit `59d423b`).
- El workflow de n8n está configurado por el usuario. Su URL interna es `http://localhost:5678/webhook/foxops-contacto` y n8n corre en el mismo servidor que FoxOps.
- El servidor público de `foxops.digital` usa Nginx. La ruta `https://foxops.digital/webhook/foxops-contacto` devolvía 404 antes de configurar el proxy.
- No hay acceso SSH no interactivo desde este entorno al servidor. Los intentos como `root` con las claves locales devolvieron `Permission denied`.
- En esta rama local se preparó `deploy/nginx-foxops-webhook.conf` para incluir dentro del bloque HTTPS de `foxops.digital`. El frontend usa por defecto `/webhook/foxops-contacto` y abre un correo precargado si recibe 404.
- Falta revisar el bloque Nginx real, incluir la ruta, ejecutar `nginx -t`, recargar Nginx y probar el formulario de extremo a extremo sin enviar datos de prueba a terceros.
- El usuario pidió pausar y retomar mañana. No se subieron estos cambios pendientes.
