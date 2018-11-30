import classnames from 'classnames'
import React from 'react'
import { compose } from 'recompose'
import {
	H3,
	H4,
	H6,
	Icon,
} from '@blueprintjs/core'


type OwnProps = {
	title?: string,
	onClose?: () => void,
}
type Props = OwnProps

const Header = ({ onClose, title }: Props) => (
	<div className={classnames('u-flex--row', 'u-flex-1', 'p-h-sm', 'p-v-sm', 't-background')} style={{ justifyContent: 'space-between' }}>
		<div>
			{title ? <H4 className={classnames('m-b-none')}>{title}</H4> : null}
		</div>
		{onClose ? <Icon onClick={onClose} icon="cross" className={'icon--close'}/> : null}
	</div>
)

export default compose<Props, OwnProps>()(Header)
