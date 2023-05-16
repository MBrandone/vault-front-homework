import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	test: {
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.js'
	},
})