// Configuration of both dev and prod
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const part = require("./webpack.part");


exports.commonConfig = merge([
	part.loadJs(),
	part.loadTypescript(),
	part.loadCSS(),
	part.loadSCSS(),
	part.loadFile(),
]);