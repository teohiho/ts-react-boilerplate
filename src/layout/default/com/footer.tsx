import * as classnames from 'classnames'
import * as React from 'react'
import { compose } from 'recompose'
const styles = require('./footer.scss')

const FooterView = () => (
	<div className="footer">
		<div className={classnames('t-background3', 'footer__copy', 'p-v-sm', 'p-h-sm')}>
			Copyright © 2018 Track It For Life.
		</div>
	</div>
)

export const Footer = compose()(FooterView)
