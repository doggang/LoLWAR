import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages처럼 서브폴더가 아니므로 base는 '/' (또는 생략) 상태면 OK
  base: '/',
  plugins: [react()],
})