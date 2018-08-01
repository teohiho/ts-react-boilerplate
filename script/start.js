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
	// compiler.plugin will run when file changed
	// compiler.plugin('invalid', () => {
		// 	console.log('Compiling...and generating language');
		// 	// generateData().then(() => {
			// 	//   console.log('Generate done')
			// 	// })
			// });
	const link = `http://${configGlobal.host}:${configGlobal.port}`
	const options = {
		hot: true,
		host: configGlobal.host,
		inline: true,
		historyApiFallback: {
			disableDotRule: true,
		},
		open: true,
	}

	WebpackDevServer.addDevServerEntrypoints(config, options)
	const compiler = webpack(config);
	const devServer = new WebpackDevServer(compiler, options);
	devServer.listen(configGlobal.port, configGlobal.host, err => {
		if (err) {
			return console.log(err);
		}
		console.log(chalk.cyan('Starting the development server...\n'));
		console.log(chalk.cyan(`${link}\n`));
	});
}

start()