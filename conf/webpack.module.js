const { CheckerPlugin } = require('awesome-typescript-loader')
const autoprefixer = require('autoprefixer')
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { appPath } = require('./helper/path')

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
				include: /(node_modules)/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
});

const loadSCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				// include: /src/,
				// exclude: /(node_modules)/,
				use: [
					{ 
						loader: 'style-loader',
						options: {
							sourceMap: true,
							
						}
					},
					{
						// Handle import/ require css
						// It help to css for each component
						// https://github.com/webpack-contrib/css-loader#scope
						loader: 'css-loader', 
						options: {
							sourceMap: true ,
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
						} 
					},
					{ loader: 'sass-loader', options: { sourceMap: true } },
					{ 
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								// Help to generate specific css for each component
								// require('postcss-modules'),
								autoprefixer({
									browsers: [
									'>1%',
									'last 4 versions',
									'Firefox ESR',
									'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
							],	
						}
					},
				],
			},
		],
	},
});
exports.loadSCSS = loadSCSS
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

exports.autoprefix = () => ({
	loader: "postcss-loader",
	options: {
	 	plugins: () => [require("autoprefixer")()],
	},
});

exports.extractCSS = ({ include, exclude, use = [] }) => {
	// Output extracted CSS to a file
	// const plugin = new MiniCssExtractPlugin({
	// 	filename: "static/css/[name].css",
	// 	chunkFilename: "[id].css"
	// });
	return {
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					// include,
					// exclude: /(src|node_modules)/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
							  // you can specify a publicPath here
							  // by default it use publicPath in webpackOptions.output
							//   publicPath: '../'
							}
						  },
						{
							// Handle import/ require css
							// It help to css for each component
							// https://github.com/webpack-contrib/css-loader#scope
							loader: 'css-loader', 
							options: {
								sourceMap: true ,
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
							} 
						},
						{ 
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								minimize: true,
								plugins: () => [
									require('postcss-flexbugs-fixes'),
									// Help to generate specific css for each component
									// require('postcss-modules'),
									autoprefixer({
									  browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									  ],
									  flexbox: 'no-2009',
									}),
								],	
							}
						},
						{ loader: 'sass-loader', options: { sourceMap: true } }
					],
				},
			],
		},
		// plugins: [plugin],
	};
};
