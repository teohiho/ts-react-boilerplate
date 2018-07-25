'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const { settingEnv } = require('../conf/helper/env')
settingEnv()

const webpack = require('webpack');
const config = require('../conf/webpack.prod');

function build() {
  let compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
	  console.log('Build successfully!')
    });
  });
}

build()
