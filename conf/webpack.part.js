// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')
const { appPath } = require('./path')

exports.devServer = ({ host, port } = {}) => ({
	devServer: {
	  stats: "errors-only",
	  host, // Defaults to `localhost`
	  port, // Defaults to 8080
	  open: true,
	  overlay: true,
	},
});


exports.loadCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,
		
				use: ["style-loader", "css-loader"],
			},
		],
	},
});

exports.loadSCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.scss$/,
				include,
				exclude,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
});

exports.loadTypescript = ({ include, exclude } = {} ) => ({
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				include: appPath.appSrc,
				use: [
					{
						loader: require.resolve('ts-loader'),
						options: {
							// disable type checker - we will use it in fork plugin
							transpileOnly: true,
						},
					},
				],
			}
		]
	}
})
exports.loadAwesomeTypescript = ({ include, exclude } = {} ) => ({
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				include,
				exclude,
				loader: 'awesome-typescript-loader'
			}
		]
	}
})

exports.loadJs = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				loader: 'source-map-loader',
				enforce: 'pre',
				include: appPath.appSrc || include,
				exclude
			}
		]
	}
	
})

exports.loadFile = ({ include, exclude } = {}) => ({
	module: {
		// rules: [
		// 	{
		// 		// test: /\.(jpg|eot|woff|ttf)$/,
		// 		exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
		// 		loader: require.resolve('file-loader'),
		// 		options: {
		// 			name: 'static/media/[name].[hash:8].[ext]',
		// 		}
		// 	}
		// ]
		rules: [
			{
				test: /\.(jpg|png)$/,
				include,
				exclude,
				use: {
					loader: "file-loader",
					options: {
						// limit: 25000,
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
			},
			{
				test:  /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
							limit: 50000,
							name: 'static/media/[name].[hash:8].[ext]',
					},
				},
			},
		]
	}
})

// exports.extractCSS = ({ include, exclude, use = [] }) => {
// 	// Output extracted CSS to a file
// 	const plugin = new MiniCssExtractPlugin({
// 	  	filename: "[name].css",
// 	});
  
// 	return {
// 		module: {
// 			rules: [
// 				{
// 					test: /\.css$/,
// 					include,
// 					exclude,
		
// 					use: [
// 					MiniCssExtractPlugin.loader,
// 					].concat(use),
// 				},
// 			],
// 		},
// 		plugins: [plugin],
// 	};
// };
