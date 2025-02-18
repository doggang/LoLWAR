import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteGitHubPages from 'vite-plugin-gh-pages'; // 플러그인 import

export default defineConfig({
  plugins: [react()],
  base: '/LoLWAR/', // 리포지토리 이름에 맞게 수정
  build: {
    outDir: 'dist',
  },
  // ViteGitHubPages가 자동으로 배포를 처리하도록 설정
});