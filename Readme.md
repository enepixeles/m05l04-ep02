# Proyecto M05L04-EP02
Diseñado por Andrés Díaz / 2026

## Descripción del Proyecto 📌
Este proyecto consiste en la resolución de una guía práctica sobre el uso de **Promesas en JavaScript**. El objetivo es entender cómo manejar procesos asíncronos, cómo utilizar el objeto `Promise`, y observar el comportamiento del navegador ante procesos que consumen muchos recursos.

## Tecnologías Utilizadas ⚙️
- HTML5
- CSS3
- Bootstrap 5.3.2 (vía CDN)
- jQuery 3.7.1 (vía CDN)
- JavaScript (ES6+)

## Instrucciones de Uso 🚀
1. Descarga o clona los archivos en tu computador.
2. Abre el archivo `index.html` en tu navegador favorito.
3. Abre las herramientas de desarrollador (F12) y dirígete a la pestaña **Consola**.
4. Observa el orden de aparición de los mensajes y cómo el ejercicio 3 genera una pequeña pausa en el sistema debido a la carga de procesamiento.

## Estructura de Archivos 🧩
- `index.html`: Estructura principal del sitio.
- `styles.css`: Estilos visuales básicos.
- `app.js`: Lógica de las tres promesas solicitadas.
- `Readme.md`: Documentación del ejercicio.

## Notas importantes 💡
El ejercicio 3 está diseñado a propósito para bloquear el hilo de ejecución de JavaScript. Esto explica por qué el mensaje "Listo" tarda en aparecer y por qué la página podría no responder por un breve instante mientras el ciclo `for` está corriendo.

Se entrega en un diseño tipo e-learning para otorgar más valor a la entrega pensando en futuras maneras de generar contenido de aprendizaje/autoaprendizaje.