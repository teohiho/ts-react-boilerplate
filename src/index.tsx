import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppRedux } from './AppRedux'
import './index.scss'

const rootEl = document.getElementById('root')
ReactDOM.render(<AppRedux />, rootEl)
// Read this first https://survivejs.com/webpack/appendices/hmr/
if (module.hot) {
	module.hot.accept('./AppRedux', () => {
		// hot reload
		const NextApp = require('./AppRedux').default
		console.log('HOT RELOAD')
		ReactDOM.render(
			<NextApp />,
			rootEl,
		)
	})
}
