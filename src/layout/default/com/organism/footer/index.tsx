import classnames from 'classnames'
import React, { memo } from 'react'
import setting from 'conf/setting'
import { compose, pure } from 'recompose'
import './index.scss'



const date = new Date()
const year = date.getFullYear()
const FooterView = () => {
 	return (
		<div className="footer">
			<div className={classnames('t-background3', 'footer__copy', 'p-v-sm', 'p-h-sm')}>
				{`Copyright © ${year} ${setting.appName.toLocaleUpperCase()}`}
			</div>
		</div>
	)
}

export default compose(memo)(FooterView)
