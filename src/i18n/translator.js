"use strict";
exports.__esModule = true;
var fs = require("fs");
var glob_1 = require("glob");
var ramda_1 = require("ramda");
var filePattern = './src/**/*.lang.json';
var outputLanguageDataDir = './';
var defaultMessages = glob_1.sync(filePattern)
    .map(function (filename) { return fs.readFileSync(filename, 'utf8'); })
    .map(function (file) { return JSON.parse(file); })
    .reduce(function (collection, descriptors) {
    return ramda_1.mergeDeepRight(collection, descriptors);
}, {});
fs.writeFileSync(outputLanguageDataDir + 'build2.json', "" + JSON.stringify(defaultMessages, null, 2));
