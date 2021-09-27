const path = require('path')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/ts/index.ts'
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					miniCss.loader,
					'css-loader',
					'sass-loader',
				],
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.sass', '.scss', '.css'],
	},
	plugins: [
		new miniCss({
			filename: 'style.css'
		}),
	]
}
