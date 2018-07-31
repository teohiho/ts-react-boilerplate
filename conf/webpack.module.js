const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')
const autoprefixer = require('autoprefixer')
const merge = require("webpack-merge");

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
				include,
				exclude,
		
				use: ["style-loader", "css-loader"],
			},
		],
	},
});

const loadSCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{ 
			// 			loader: 'style-loader',
			// 			options: {
			// 				sourceMap: true,
							
			// 			}
			// 		},
			// 		{ loader: 'css-loader', options: { sourceMap: true } },
			// 		{ 
			// 			loader: 'postcss-loader',
			// 			options: {
			// 				sourceMap: true,
			// 				plugins: () => [
			// 					require('postcss-flexbugs-fixes'),
			// 					// Help to generate specific css for each component
			// 					require('postcss-modules'),
			// 					autoprefixer({
			// 					  browsers: [
			// 						'>1%',
			// 						'last 4 versions',
			// 						'Firefox ESR',
			// 						'not ie < 9', // React doesn't support IE8 anyway
			// 					  ],
			// 					  flexbox: 'no-2009',
			// 					}),
			// 				],	
			// 			}
			// 		},
			// 	]
			// },
			{
				test: /\.(sa|sc|c)ss$/,
				include,
				exclude,
				use: [
					{ 
						loader: 'style-loader',
						options: {
							sourceMap: true,
							
						}
					},
					{ loader: 'css-loader', options: { sourceMap: true } },
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
					{ loader: 'sass-loader', options: { sourceMap: true } }
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
	const plugin = new MiniCssExtractPlugin({
		filename: "static/css/[name].css",
		chunkFilename: "[id].css"
	});
	const loadSCSSRule = loadSCSS({ include, exclude }).module.rules[0]
	return {
		module: {
			rules: [
				{
					...loadSCSSRule,
					use: [
						{ 
							loader: 'style-loader',
							options: {
								sourceMap: true,
								
							}
						},
						MiniCssExtractPlugin.loader,
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ 
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: () => [
									require('postcss-flexbugs-fixes'),
									require('postcss-modules'),
									autoprefixer({
									  browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									  ],
									  flexbox: 'no-2009',
									}),
									// Help to generate specific css for each component
								],	
							}
						},
						{ loader: 'sass-loader', options: { sourceMap: true } }
					],
				},
			],
		},
		plugins: [plugin],
	};
};
