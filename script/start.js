'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
	throw err;
});

const { settingEnv } = require('../conf/helper/env')

// Load env by default
settingEnv()

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { config } = require('../conf/webpack.dev.js')
const chalk = require('chalk');

const { getConfiguration } = require('../conf/helper/variable')
const configGlobal = getConfiguration()
		
const compiler = webpack(config());
compiler.plugin('invalid', () => {
	console.log('Compiling...and generating language');
	// generateData().then(() => {
	//   console.log('Generate done')
	// })
  });
// Load proxy config
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
