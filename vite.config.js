import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/nombre-del-repo/',
  plugins: [react()],
	// server: {
	// 	port: 3000,
	// }
})