
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const { getConfiguration } = require('../conf/helper/variable')
const configGlobal = getConfiguration()

module.exports = (proxy, allowedHost) => ({
	// WebpackDevServer 2.4.3 introduced a security fix that prevents remote
    // websites from potentially accessing local content through DNS rebinding:
    // https://github.com/webpack/webpack-dev-server/issues/887
    // https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
    // However, it made several existing use cases such as development in cloud
    // environment or subdomains in development significantly more complicated:
    // https://github.com/facebookincubator/create-react-app/issues/2271
    // https://github.com/facebookincubator/create-react-app/issues/2233
    // While we're investigating better solutions, for now we will take a
    // compromise. Since our WDS configuration only serves files in the `public`
    // folder we won't consider accessing them a vulnerability. However, if you
    // use the `proxy` feature, it gets more dangerous because it can expose
    // remote code execution vulnerabilities in backends like Django and Rails.
    // So we will disable the host check normally, but enable it if you have
    // specified the `proxy` setting. Finally, we let you override it if you
    // really know what you're doing with a special environment variable.
	disableHostCheck: !proxy ||
	 	process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
	// Enable gzip compression of generated files.
	compress: true,
	// Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
	hot: true,
	https: configGlobal.https,
	host: configGlobal.host,
	// WDS provides an overlay for capturing compilation related warnings and errors:
	// Read at this artical: https://survivejs.com/webpack/developing/webpack-dev-server/#enabling-error-overlay
	overlay: false,
	historyApiFallback: {
		// Paths with dots should still use the history fallback.
		// See https://github.com/facebookincubator/create-react-app/issues/387.
		disableDotRule: true,
	},
	public: allowedHost,
	proxy,
	before(app) {
		// This lets us open files from the runtime error overlay.
		app.use(errorOverlayMiddleware());
		// This service worker file is effectively a 'no-op' that will reset any
		// previous service worker registered for the same host:port combination.
		// We do this in development to avoid hitting the production cache if
		// it used the same host and port.
		// https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
		app.use(noopServiceWorkerMiddleware());
	  },
})
