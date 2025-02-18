import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteGitHubPages from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteGitHubPages()],
  assetsInclude: ['**/*.mp3'],
  base:'/LoLWAR/',
})
