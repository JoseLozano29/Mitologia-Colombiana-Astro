import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'img/logo.webp'],
        manifest: {
          name: 'Mitología Colombiana – Raíces Indígenas',
          short_name: 'MitoCol',
          description: 'Atlas interactivo de la mitología indígena colombiana',
          theme_color: '#071A1C',
          background_color: '#071A1C',
          display: 'standalone',
          icons: [
            {
              src: '/img/logo.webp',
              sizes: '192x192',
              type: 'image/webp',
            },
            {
              src: '/img/logo.webp',
              sizes: '512x512',
              type: 'image/webp',
            },
          ],
        },
      }),
    ],
  },
});