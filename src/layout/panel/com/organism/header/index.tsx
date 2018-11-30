import classnames from 'classnames'
import React from 'react'
import { compose } from 'recompose'



type OwnProps = {
	title?: string,
	onClose?: () => void,
}
type Props = OwnProps

const Header = ({ onClose, title }: Props) => (
	<div className={classnames('u-flex--row', 'u-flex-1', 'p-h-sm', 'p-v-sm', 't-background')} style={{ justifyContent: 'space-between' }}>
		<div>
			{title ? <h4 className={classnames('m-b-none')}>{title} </h4> : null}
		</div>
		{onClose ? <h4 onClick={onClose}>Close</h4> : null}
	</div>
)

export default compose<Props, OwnProps>()(Header)
