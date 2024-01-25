import { defineConfig } from 'cypress';

export default defineConfig({
	component: {
		devServer: {
			framework: 'svelte',
			bundler: 'vite'
		}
	},

	e2e: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
});
