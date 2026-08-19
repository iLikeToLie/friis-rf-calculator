import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/friis-rf-calculator/',
  plugins: [react()],
});
