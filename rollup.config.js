import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const isProd = process.env.NODE_ENV === 'production';

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
		input: 'src/index.ts',
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
		input: 'src/index.ts',
		output: {
			name: 'protoCanvas',
			file: pkg.browser,
			format: 'umd',
			sourcemap,
		},
		plugins,
	});
}

export default outputs;
