// rollup.config.mjs
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/cookiebanner.js',
	output: [
		{
			file: 'dist/cookiebanner.js',
			format: 'cjs'
		},
		{
			file: 'dist/cookiebanner.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [json()]
};
