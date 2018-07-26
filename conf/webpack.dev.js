const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const part = require("./webpack.module");
const { appPath } = require('./helper/path')
const { commonConfig } = require('./webpack.common')


const developmentMainConfig = {
	mode: 'development',
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
	devtool: 'eval',
	plugins: [
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: true,
			template: appPath.appHtml,
		}),

	],
	// Turn off performance hints during development because we don't do any
	// splitting or minification in interest of speed. These warnings become
	// cumbersome.
	performance: {
		hints: false,
	},
}
const developmentConfig = merge([
	part.loadSCSS(),
])
exports.config = merge([
		commonConfig, 
		developmentMainConfig, 
		developmentConfig
	]
)
