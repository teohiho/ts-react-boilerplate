const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { commonConfig } = require('./webpack.common')
const parts = require("./webpack.parts");

const pruductionMainConfig = merge([
	{

	}
])

const productionConfig = merge([
	// parts.extractCSS({
	// 	use: "css-loader",
	// }),
]);

module.exports = () => merge(commonConfig, productionConfig)