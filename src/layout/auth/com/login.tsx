import { Button, Card, Checkbox, Elevation, H2, H3, IInputGroupProps, InputGroup, Intent } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
const style = require('../scss/authentication.scss')
const LandscapeView = () => (
	<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
		<div className={`${style.card}__image`} />
		<div className={classnames(`${style.card}__content`, 'u-flex--center', 'p-h-md', 'p-v-md')}>
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
			<Checkbox className={'m-t-md'} checked label="Remember password" />
			<Button intent={Intent.SUCCESS} className={`${style.card}__btn`}>LOG IN</Button>
			<Link to="/auth/register">Create an account</Link>
		</div>
	</div>
)
const PortraitView = () => (
	<div className={classnames(`${style.card}__content`, 't-background3', 'u-flex--center', 'p-h-md', 'p-v-md')}>
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
		<Checkbox className={'m-t-md'} checked label="Remember password" />
		<Button intent={Intent.SUCCESS} className={`${style.card}__btn`}>LOG IN</Button>
		<Link to="/auth/register">Create an account</Link>
	</div>
)
const Input = (props: IInputGroupProps) => (
	<InputGroup
		className={classnames(`${style.card}__input`, 'm-b-sm')}
		large
		{...props}
	/>
)
const LoginView = () => (
		<div>
			<MediaQuery orientation="portrait">
				<PortraitView />
			</MediaQuery>
			<MediaQuery orientation="landscape">
				<LandscapeView />
			</MediaQuery>
		</div>
)

export const Login = compose()(LoginView)
