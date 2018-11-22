import classnames from 'classnames'
import React, { memo } from 'react'
import tiflRedux from '../redux/index'
import { addContainer } from 'layout/default/createContainer'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'


const style = require('../scss/authentication.scss')
const authRedux = tiflRedux.part.auth
console.log('>', authRedux)
type ActionProps = {
	login: typeof authRedux.actionCollection.login,
}
type Props = ActionProps

const LoginView = ({ login }: Props) => {
	return (
		<div className={classnames(style.card, `${style.card}__image`, 't-background3', 'u-flex--1', 'u-flex--center')}>
			<button
				type="submit"
				className={classnames(`${style.card}__btn`, 'm-t-md', 'u-flex--center')}
				onClick={() => login('/')}
			>
				SIGN IN
			</button>
		</div>
	)
}


export default compose<Props, {}>(
	memo,
	addContainer(
		{
			breadcrumbItems: ['Login'],
		},
	),
	connect(undefined, { login: authRedux.actionCollection.login }),
)(LoginView)
