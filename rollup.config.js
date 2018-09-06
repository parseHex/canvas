import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// Note: I tried uglify plugin and it wouldn't do anything, so I'm using babel-minify instead
import minify from 'rollup-plugin-babel-minify';

const isProd = process.env.NODE_ENV === 'production';

const input = './src/index.ts';
const tsConfig = {
	useTsconfigDeclarationDir: true,
};
const sourcemap = !isProd;
const plugins = [
	resolve(),
	typescript(tsConfig),
];

const outputs = [
	{
		input,
		output: {
			file: pkg.module,
			format: 'es',
			sourcemap,
		},
		plugins,
	},
];

if (isProd) {
	outputs.push({
		input,
		output: {
			name: 'protoCanvas',
			file: pkg.browser,
			format: 'umd',
			sourcemap,
		},
		plugins,
	});
	outputs.push({
		input,
		output: {
			name: 'protoCanvas',
			file: pkg.browser.replace('.js', '.min.js'),
			format: 'umd',
		},
		plugins: [
			...plugins,
			minify({
				comments: false,
				sourceMap: false,
			}),
		],
	});
}

export default outputs;
