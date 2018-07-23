const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const path = require('path');

const webpack = require('webpack');

const part = require("./webpack.part");
const { appPath } = require('./path')
const { commonConfig } = require('./webpack.common')
const { getConfiguration } = require('./helper/variable')
const developmentMainConfig = merge([
	{
		entry: [
			// We ship a few polyfills by default:
			require.resolve('./polyfills'),
			// Include an alternative client for WebpackDevServer. A client's job is to
			// connect to WebpackDevServer by a socket and get notified about changes.
			// When you save a file, the client will either apply hot updates (in case
			// of CSS changes), or refresh the page (in case of JS changes). When you
			// make a syntax error, this client will display a syntax error overlay.
			// Note: instead of the default WebpackDevServer client, we use a custom one
			// to bring better experience for Create React App users. You can replace
			// the line below with these two lines if you prefer the stock client:
			// require.resolve('webpack-dev-server/client') + '?/',
			// require.resolve('webpack/hot/dev-server'),
			require.resolve('react-dev-utils/webpackHotDevClient'),
			// Finally, this is your app's code:
			appPath.appIndexJs,
			// We include the app code last so that if there is a runtime error during
			// initialization, it doesn't blow up the WebpackDevServer client, and
			// changing JS code would still trigger a refresh.
		  ],
		output: {
			// Add /* filename */ comments to generated require()s in the output.
			pathinfo: true,
			// This does not produce a real file. It's just the virtual path that is
			// served by WebpackDevServer in development. This is the JS bundle
			// containing code from all our entry points, and the Webpack runtime.
			filename: 'static/js/bundle.js',
			// There are also additional JS chunk files if you use code splitting.
			chunkFilename: 'static/js/[name].chunk.js',
			// This is the URL that app is served from. We use "/" in development.
			publicPath: '/',
			// Point sourcemap entries to original disk location (format as URL on Windows)
			devtoolModuleFilenameTemplate: info =>
				path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
		  },
		// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
		// See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
		devtool: 'cheap-module-source-map',
		resolve: {
			// This allows you to set a fallback for where Webpack should look for modules.
			// We placed these paths second because we want `node_modules` to "win"
			// if there are any conflicts. This matches Node resolution mechanism.
			// https://github.com/facebookincubator/create-react-app/issues/253
			modules: ['node_modules', appPath.appNodeModules].concat(
			  // It is guaranteed to exist because we tweak it in `env.js`
			  process.env.NODE_PATH.split(appPath.delimiter).filter(Boolean)
			),
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
			  new ModuleScopePlugin(appPath.appSrc, [appPath.appPackageJson]),
			  new TsconfigPathsPlugin({ configFile: appPath.appTsConfig }),
			],
		},
		module: {
			strictExportPresence: true,
		},	
		plugins: [
			// Makes some environment variables available in index.html.
			// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
			// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
			// In development, this will be an empty string.
			// new InterpolateHtmlPlugin(env.raw),
			// Generates an `index.html` file with the <script> injected.
			new HtmlWebpackPlugin({
			  inject: true,
			  template: appPath.appHtml,
			}),
			// Add module names to factory functions so they appear in browser profiler.
			new webpack.NamedModulesPlugin(),
			// Makes some environment variables available to the JS code, for example:
			// if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
			// new webpack.DefinePlugin(env.stringified),
			// This is necessary to emit hot updates (currently CSS only):
			new webpack.HotModuleReplacementPlugin(),
			// Watcher doesn't work well if you mistype casing in a path so we use
			// a plugin that prints an error when you attempt to do this.
			// See https://github.com/facebookincubator/create-react-app/issues/240
			new CaseSensitivePathsPlugin(),
			// If you require a missing module and then `npm install` it, you still have
			// to restart the development server for Webpack to discover it. This plugin
			// makes the discovery automatic so you don't have to restart.
			// See https://github.com/facebookincubator/create-react-app/issues/186
			new WatchMissingNodeModulesPlugin(appPath.appNodeModules),
			// Moment.js is an extremely popular library that bundles large locale files
			// by default due to how Webpack interprets its code. This is a practical
			// solution that requires the user to opt into importing specific locales.
			// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
			// You can remove this if you don't use Moment.js:
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			// Perform type checking and linting in a separate process to speed up 
			new ForkTsCheckerWebpackPlugin({
				async: false,
				watch: appPath.appSrc,
				tsconfig: appPath.appTsConfig,
				tslint: appPath.appTsLint,
			  }),
		],
		// Some libraries import Node modules but don't use them in the browser.
		// Tell Webpack to provide empty mocks for them so importing them works.
		node: {
			dgram: 'empty',
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
			child_process: 'empty',
		},
		// Turn off performance hints during development because we don't do any
		// splitting or minification in interest of speed. These warnings become
		// cumbersome.
		performance: {
			hints: false,
		},
	}
])
const { host, port } = getConfiguration()
const developmentConfig = merge([
	part.devServer({
		// Customize host/port here if needed
		host,
		port,
	}),
]);

exports.config = () => merge([
		commonConfig, 
		developmentMainConfig, 
		// developmentConfig
	]
)
