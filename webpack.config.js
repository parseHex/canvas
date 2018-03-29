const path = require('path');
const { TSDeclerationsPlugin } = require('ts-loader-decleration');

module.exports = (env, argv) => ({
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'canvas.js',
		library: 'canvas',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				query: {
					compilerOptions: {
						declaration: argv.mode === 'production',
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
	watch: argv.mode === 'development',
	mode: argv.mode,
	devtool: argv.mode === 'development' ? 'source-map' : false,
});
