const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { commonConfig } = require('./webpack.common')
const parts = require("./webpack.module");
const { appPath } = require('./helper/path')



const pruductionMainConfig = {
	bail: true,
	devtool: 'source-map',
	// entry: [require.resolve('./polyfills'), appPath.appIndexJs],
	output: {
		path: appPath.appBuild,
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
		use: "css-loader",
	}),
])
module.exports = merge(
	[
		commonConfig,
		pruductionMainConfig,
		productionConfig
	]
)