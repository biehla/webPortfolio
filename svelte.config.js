import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  extensions: ['.svelte', '.svx'],
  preprocess: [mdsvex(), vitePreprocess()],

  kit: {
    adapter: adapter()
  },

};

export default config;
