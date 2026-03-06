# Local storage vs. Session storage

## Local storage
* *Duración*
    * Los datos se guardan de forma **permanente** hasta que se borren manualmente mediante `localStorage.clear()` o desde la configuración. Incluso sobreviven a reinicios del navegador y cierre de la pestaña.
* *Alcance*
    * Se comparte entre todas las pestañas y/o ventanas del mismo dominio/puerto/protocolo.
* *Uso Típico*
    * Se usa usualmente para preferencias de usuario (tema, idioma), tokens de autenticación, carritos de compra persistentes y que son cosas que no cambian cada sesión.

## Session storage
* *Duración*
    * Los datos se guardan solo durante la sesión actual de la pestaña. Se borran cuando se cierra la pestaña, aunque el navegador original siga abierto.
* *Alcance*
    * Es unico de la pestaña/ventana actual, incluyendo iframes del mismo origen.
* *Uso Típico*
    * Se usa usualmente para el progreso en un formulario, los datos de un carrito de compras en una sola sesión, o información de una transacción que no debe guardarse.

## Similitudes
* *Capacidad*
    * Ambos tienen una capacidad aproximada de entre 5 y 10 MB por origen, pero depende del navegador.
* *Seguridad*
    * Ninguna se envían al servidor en cada petición, a diferencia de las cookies.