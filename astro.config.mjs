// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://magbanua-pauljhon.website' ,
  integrations: [react(),],
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});

