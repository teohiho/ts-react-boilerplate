const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const webpack = require('webpack');

const part = require("./webpack.module");
const { appPath } = require('./helper/path')
const { commonConfig } = require('./webpack.common')


const developmentMainConfig = {
	mode: 'development',
	devServer: {
		watchOptions: {
		  // Delay the rebuild after the first change
		  aggregateTimeout: 300,
		},
		hot: true,
		overlay: false,
		open: true,
		port: 3000,
		host: '0.0.0.0',
		compress: true,
		historyApiFallback: true,
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// This does not produce a real file. It's just the virtual path that is
		// served by WebpackDevServer in development. This is the JS bundle
		// containing code from all our entry points, and the Webpack runtime.
		filename: 'static/js/bundle.js',
		// There are also additional JS chunk files if you use code splitting.
		chunkFilename: 'static/js/[name].chunk.js',
	},
	// devtool: 'eval', //generated code
	devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',
	plugins: [
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: true,
			template: appPath.appHtml,
		}),
		new webpack.HotModuleReplacementPlugin(),
		// display error clearly
		// new ErrorOverlayPlugin(),
	],
	// Turn off performance hints during development because we don't do any
	// splitting or minification in interest of speed. These warnings become
	// cumbersome.
	performance: {
		hints: "warning",
	},
}
const developmentConfig = merge([
	part.loadSCSS(),
])
const config = merge([
		commonConfig, 
		developmentConfig,
		developmentMainConfig, 
	]
)
console.log('config', config.module.rules)
exports.config = config
module.exports = config
