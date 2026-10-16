import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-vercel@3 only picks a default runtime for Node 16/18/20, so derive it from the build's Node version.
		adapter: adapter({ runtime: `nodejs${process.versions.node.split('.')[0]}.x` })
	}
};

export default config;
