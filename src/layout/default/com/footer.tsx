import classnames from 'classnames'
import React, { memo } from 'react'
import { compose, pure } from 'recompose'
import './footer.scss'



const FooterView = () => {
 	return (
		<div className="footer">
			<div className={classnames('t-background3', 'footer__copy', 'p-v-sm', 'p-h-sm')}>
				Copyright © 2018 Track It For Life.
			</div>
		</div>
	)
}

export const Footer = compose(memo)(FooterView)
