// rollup.config.mjs
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.min.js',
		format: 'iife',
		name: 'ckbnr',
	},
	plugins: [terser()],
};
