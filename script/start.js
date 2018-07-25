'use strict';
// Load env by default
const { settingEnv } = require('../conf/helper/env')
settingEnv('development')


const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');

const { config } = require('../conf/webpack.dev.js')
const { getConfiguration } = require('../conf/helper/variable')

const start = () => {
	const configGlobal = getConfiguration()
	const compiler = webpack(config());
	// compiler.plugin will run when file changed
	// compiler.plugin('invalid', () => {
	// 	console.log('Compiling...and generating language');
	// 	// generateData().then(() => {
	// 	//   console.log('Generate done')
	// 	// })
	// });
	const devServer = new WebpackDevServer(compiler, {
		historyApiFallback: {
			disableDotRule: true,
		},
	});
	
	devServer.listen(configGlobal.port, configGlobal.host, err => {
		if (err) {
			return console.log(err);
		}
		console.log(chalk.cyan('Starting the development server...\n'));
	});
}

start()