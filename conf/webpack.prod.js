const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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

		// Multi processing for build app: https://survivejs.com/webpack/optimizing/performance/


		// Minify the code

		new UglifyJsPlugin({
			uglifyOptions: {
			  parse: {
				// we want uglify-js to parse ecma 8 code. However we want it to output
				// ecma 5 compliant code, to avoid issues with older browsers, this is
				// whey we put `ecma: 5` to the compress and output section
				// https://github.com/facebook/create-react-app/pull/4234
				ecma: 8,
			  },
			  compress: {
				ecma: 5,
				warnings: false,
				// Disabled because of an issue with Uglify breaking seemingly valid code:
				// https://github.com/facebook/create-react-app/issues/2376
				// Pending further investigation:
				// https://github.com/mishoo/UglifyJS2/issues/2011
				comparisons: false,
			  },
			  mangle: {
				safari10: true,
			  },
			  output: {
				ecma: 5,
				comments: false,
				// Turned on because emoji and regex is not minified properly using default
				// https://github.com/facebook/create-react-app/issues/2488
				ascii_only: true,
			  },
			},
			// Use multi-process parallel running to improve the build speed
			// Default number of concurrent runs: os.cpus().length - 1
			parallel: true,
			// Enable file caching
			cache: true,
			sourceMap: false,
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