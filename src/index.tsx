import React from 'react'
import ReactDOM from 'react-dom'
import { AppRedux } from './appRedux'
import './scss/style.scss'

// Force to override first

const rootEl = document.getElementById('root')
ReactDOM.render(<AppRedux />, rootEl)

// Read this first https://survivejs.com/webpack/appendices/hmr/
if (module.hot) {
	module.hot.accept('./appRedux', () => {
		// hot reload
		const NextApp = require('./appRedux').default
		ReactDOM.render(
			<NextApp />,
			rootEl,
		)
	})
}
