'use strict';
// Load env by default
const { settingEnv } = require('../conf/helper/env')
settingEnv('production')

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../conf/webpack.prod');

function build() {
  let compiler = webpack(config);
  compiler.run((err, stats) => {
	if (err) {
	  return reject(err);
	}
	console.log('Build successfully!')
  });
}

build()
