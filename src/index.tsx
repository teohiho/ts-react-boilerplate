import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ReduxRoot from 'ReduxRoot'

const rootEl = document.getElementById('root')
ReactDOM.render(<ReduxRoot />, rootEl)
// Read this first https://survivejs.com/webpack/appendices/hmr/
if (module.hot) {
	module.hot.accept('./ReduxRoot', () => {
		// hot reload
		const NextApp = require('./ReduxRoot').default
		ReactDOM.render(
			<NextApp />,
			rootEl,
		)
	})
}
