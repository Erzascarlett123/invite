import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __WS_TOKEN__: '""' // Tetapkan __WS_TOKEN__ sebagai string kosong
  }
});
