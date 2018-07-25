const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');

const webpack = require('webpack');

const part = require("./webpack.module");
const { appPath } = require('./helper/path')
const { commonConfig } = require('./webpack.common')


const developmentMainConfig = {
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
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	// See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
	devtool: 'cheap-module-source-map',
	
	plugins: [
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: true,
			template: appPath.appHtml,
		}),
		// Perform type checking and linting in a separate process to speed up 
		new ForkTsCheckerWebpackPlugin({
			async: false,
			watch: appPath.appSrc,
			tsconfig: appPath.appTsConfig,
			tslint: appPath.appTsLint,
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
	part.loadCSS(),

])
exports.config = () => merge([
		commonConfig, 
		developmentMainConfig, 
		developmentConfig
	]
)
