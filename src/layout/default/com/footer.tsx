import './footer.scss'

import { compose, pure } from 'recompose'

import React from 'react'
import classnames from 'classnames'

const FooterView = () => {
	console.log('Footer')
 	return (
		<div className="footer">
			<div className={classnames('t-background3', 'footer__copy', 'p-v-sm', 'p-h-sm')}>
				Copyright © 2018 Track It For Life.
			</div>
		</div>
	)
}

export const Footer = compose(pure)(FooterView)
