# Mitología Colombiana – Raíces Indígenas 🌿

**Atlas interactivo de la mitología indígena colombiana.**  
Explora dioses, criaturas y lugares sagrados de más de 100 pueblos originarios.

[![Astro](https://img.shields.io/badge/Astro-7.x-FF5A03?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-8BC0D0?logo=alpine.js)](https://alpinejs.dev)
[![License](https://img.shields.io/badge/licencia-CC%20BY--NC--ND%204.0-lightgrey)](LICENSE)

---

## ✨ Características

- 🏛️ **Panteón de Dioses** – 226 deidades organizadas por región y cultura.
- 🐉 **Bestiario de Criaturas** – 75 seres míticos y espectros.
- 🏔️ **Lugares Sagrados** – 50 montañas, lagunas y ríos con geolocalización.
- 🔍 **Búsqueda global** con filtros por tipo (deidad, criatura, lugar).
- 🗺️ **Mapa interactivo** con Leaflet y geocodificación automática.
- 📱 **Diseño responsive** adaptado a cualquier dispositivo.
- ⚡ **Rendimiento excelente** – Puntuaciones Lighthouse > 90 en todas las categorías.
- ♿ **Accesibilidad** – Skip-link, roles ARIA, contraste mejorado.
- 📦 **PWA** – Instalable como app y con soporte offline básico.
- 🧩 **Arquitectura de componentes** – Fácil de mantener y escalar.

---

## 🚀 Democrático en vivo.

https://mitologia-colombiana.netlify.app/

---

## 🛠️ Stack tecnológico

| Herramienta | Uso |
|-------------|-----|
| [Astro 7](https://astro.build) | Generador de sitios estáticos |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos utilitarios |
| [Alpine.js](https://alpinejs.dev) | Interactividad (búsqueda, filtros) |
| [Fuse.js](https://fusejs.io) | Búsqueda difusa en cliente |
| [Leaflet](https://leafletjs.com) | Mapa interactivo |
| [Vite-PWA](https://vite-pwa.netlify.app) | Service Worker y manifiesto |

---

## 📥 Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mitologia-colombiana.git
cd mitologia-colombiana

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
El sitio estará disponible en http://localhost:4321.

Para generar la versión de producción:
bash

npm run build

La carpeta dist/ contendrá los archivos listos para desplegar en cualquier hosting estático.
📁 Estructura del proyecto
text

├── public/               # Archivos estáticos (imágenes, fuentes, datos públicos)
│   ├── img/              # Imágenes organizadas por categoría
│   └── data/             # Copias de JSON para fetch en cliente
├── src/
│   ├── components/       # Componentes reutilizables (.astro)
│   ├── data/             # Datos en JSON (dioses, criaturas, lugares)
│   ├── layouts/          # Layout principal
│   ├── pages/            # Páginas del sitio (enrutamiento basado en archivos)
│   └── styles/           # Estilos globales
├── scripts/              # Scripts auxiliares (geocodificación, etc.)
└── astro.config.mjs      # Configuración de Astro, Tailwind y PWA

➕ Cómo añadir nuevo contenido

El proyecto está diseñado para crecer. Consulta la Guía de Introducción de Contenido para aprender a agregar:

    Nuevas deidades a una cultura existente

    Una cultura completamente nueva con sus deidades

    Criaturas y lugares sagrados

Cada nueva ficha se agrega como un objeto JSON, sin necesidad de tocar código HTML.
🤝 Contribuir

¿Encontraste un error, quieres sugerir una mejora o añadir una nueva cultura?
Escribe a panteoncolombia@gmail.com o abre un issue en este repositorio.
👤 Autor

Jose Aureliano Lozano Mojica
Licenciado en Producción Agropecuaria
Tecnólogo en Análisis y Desarrollo de Software

📄 Licencia

Este proyecto está licenciado bajo la Licencia .Creative Commons BY-NC-ND 4.0 Consulta el archivo LICENSE para más detalles.

🙏 Agradecimientos

A los pueblos indígenas de Colombia, guardianes de una sabiduría que trasciende el tiempo. A los gestores culturales, investigadores y narradores orales que han mantenido vivas estas historias.
