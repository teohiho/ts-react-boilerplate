// Configuration of both dev and prod
const merge = require("webpack-merge");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const part = require("./webpack.module");
const { appPath } = require('./helper/path')
const resloveConfig = {
	resolve: {
		// These are the reasonable defaults supported by the Node ecosystem.
		// We also include JSX as a common component filename extension to support
		// some tools, although we do not recommend using it, see:
		// https://github.com/facebookincubator/create-react-app/issues/290
		// `web` extension prefixes have been added for better support
		// for React Native Web.
		extensions: [
			'.mjs',
			'.web.ts',
			'.ts',
			'.web.tsx',
			'.tsx',
			'.web.js',
			'.js',
			'.json',
			'.web.jsx',
			'.jsx',
		],
		plugins: [
			// Prevents users from importing files from outside of src/ (or node_modules/).
			// This often causes confusion because we only process files within src/ with babel.
			// To fix this, we prevent you from importing files out of src/ -- if you'd like to,
			// please link the files into your node_modules/ and let module-resolution kick in.
			// Make sure your source files are compiled, as they will not be processed in any way.
			new TsconfigPathsPlugin({ configFile: appPath.appTsConfig }),
		],
	},
}

const nodeConfig = {
	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
}
const entry = {
	entry: appPath.appIndexJs,
}
exports.commonConfig = merge([
	part.loadJs(),
	part.loadAwesomeTypescript(),
	// part.loadCSS(),
	part.loadFile(),
	nodeConfig,
	resloveConfig,
	entry
]);