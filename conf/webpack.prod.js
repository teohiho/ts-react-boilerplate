const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const { commonConfig } = require('./webpack.common')
const parts = require("./webpack.module");
const { appPath } = require('./helper/path')


const pruductionMainConfig = {
	bail: true,
	mode: 'production',
	devtool: 'nosources-source-map',
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
		// Check if contain libs different version
		// How can I reslove that warning: Check this https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin#resolving-duplicate-packages-in-your-bundle
		// for ex: yarn install --flat
		new DuplicatePackageCheckerPlugin(),


		// BundleAnalyzerPlugin help you analyze bundle.js size
		// new BundleAnalyzerPlugin()
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