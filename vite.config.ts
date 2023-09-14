import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$img: mode === "production" ? "./static" : "./",
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}));
