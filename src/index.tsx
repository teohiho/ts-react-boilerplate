// Force to override first
import './scss/style.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppRedux } from './appRedux'

const rootEl = document.getElementById('root')
ReactDOM.render(<AppRedux />, rootEl)

// Read this first https://survivejs.com/webpack/appendices/hmr/
if (module.hot) {
	module.hot.accept('./appRedux', () => {
		// hot reload
		const NextApp = require('./appRedux').default
		console.log('HOT RELOAD')
		ReactDOM.render(
			<NextApp />,
			rootEl,
		)
	})
}
