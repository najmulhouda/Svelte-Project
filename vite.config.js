import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ['svelte-icons'], // Include the svelte-icons package
  },
  ssr: {
    noExternal: ['svelte-icons'], // Process svelte-icons during SSR
  },
});
