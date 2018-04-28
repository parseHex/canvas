import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const tsConfig = {
	useTsconfigDeclarationDir: true,
};

export default [
	{
		input: 'src/index.ts',
		output: {
			name: 'protoCanvas',
			file: pkg.browser,
			format: 'umd',
			sourcemap: true,
		},
		plugins: [
			resolve(),
			typescript(tsConfig),
		],
	},
	{
		input: 'src/index.ts',
		output: {
			file: pkg.module,
			format: 'es',
			sourcemap: true,
		},
		plugins: [
			resolve(),
			typescript(tsConfig),
		],
	},
];
