const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { commonConfig } = require('./webpack.common')
const parts = require("./webpack.module");
const { appPath } = require('./helper/path')



const pruductionMainConfig = {
	bail: true,
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: appPath.appBuild,
		publicPath: '/',
		filename: 'static/js/[name].[chunkhash:8].js',
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: appPath.appHtml,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
	],
}
const productionConfig = merge([
	parts.extractCSS({
		// use: "sass-loader",
		use: [
			'css-loader',
			// 'postcss-loader',
			'sass-loader',
		],
	}),
])
module.exports = merge(
	[
		commonConfig,
		pruductionMainConfig,
		productionConfig
	]
)