"use strict";
exports.__esModule = true;
function checkLocalhost(host) {
	return host === '0.0.0.0' || 'localhost'
}
var DOMAIN = process.env.HOST ? process.env.HOST : '0.0.0.0';
var PORT = process.env.PORT ? process.env.PORT : 7000;
var SERVER_BASE = checkLocalhost(DOMAIN) ? undefined : "https://" + DOMAIN + "/";

module.exports = {
    DOMAIN: DOMAIN,
    SERVER_BASE: SERVER_BASE,
    PORT: PORT
};
