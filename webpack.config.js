const path = require('path');

module.exports = (env, argv) => ({
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'canvas.js',
		library: 'canvas',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				include: /src/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
	watch: argv.mode === 'development',
	mode: argv.mode,
	devtool: 'source-map',
});
