// <======================Import========================>
import { Button, Card, Checkbox, Elevation, H2, H3, IInputGroupProps, InputGroup, Intent } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { compose, withStateHandlers } from 'recompose'
const style = require('../scss/authentication.scss')
// <======================Content========================>
const Input = (props: IInputGroupProps) => (
	<InputGroup
		className={classnames(`${style.card}__input`, 'm-b-sm')}
		large
		{...props}
	/>
)
interface ICheckPoint {
	isChecked: boolean
}
interface IChangeChecked {
	isChanged: () => void
}
const addCheckboxStateHandlers = withStateHandlers(
	{
		isChecked: true,
	},
	{
		isChanged: ({ isChecked }) => () => ({ isChecked: !isChecked }),
	},
)
interface ICheckPointIn extends ICheckPoint, IChangeChecked {}
const LandscapeView = () => (
	<MediaQuery orientation="landscape">
			<div className={`${style.card}__image`} />
	</MediaQuery>
)
const PortraitView = () => (
	<MediaQuery orientation="portrait">
	</MediaQuery>
)
const LoginView = ({ isChecked, isChanged }: ICheckPointIn) => (
	<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
		<LandscapeView />
		<PortraitView />
		<div className={classnames('u-flex--center', 'p-h-sm', 'p-v-sm')}>
			<H2 className={classnames(`${style.card}__title`)}>
				LOG IN
			</H2>
			<Input
				leftIcon="user"
				placeholder="User name"
			/>
			<Input
				leftIcon="lock"
				placeholder="Password"
			/>
			<Checkbox className={'m-t-md'} checked={isChecked} onClick={isChanged} label="Remember password" />
			<Button intent={Intent.SUCCESS} className={`${style.card}__btn`}>LOG IN</Button>
			<Link to="/auth/register">Create an account</Link>
		</div>
	</div>
)
// <======================Export========================>
export const Login = compose<ICheckPoint, {}>(addCheckboxStateHandlers)(LoginView)
