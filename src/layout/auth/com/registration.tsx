import { Button, Card, Elevation, H2, H3, IInputGroupProps, InputGroup, Intent } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { compose, withStateHandlers } from 'recompose'
const style = require('../scss/registration.scss')
const PortraitView = () => (
	<MediaQuery orientation="portrait">
		<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
			<ContentView />
		</div>
	</MediaQuery>
)
const LandscapeView = () => (
	<MediaQuery orientation="landscape">
		<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
			<div className={`${style.card}__image`} />
			<ContentView />
		</div>
	</MediaQuery>
)
const ContentView = () => (
	<div className={classnames(`${style.card}__content`, 'u-flex--center', 'p-h-md', 'p-v-md')}>
		<H2 className={classnames(`${style.card}__title`)}>
			SIGN IN
		</H2>
		<Input
			leftIcon="people"
			placeholder="Name"
		/>
		<Input
			leftIcon="box"
			placeholder="Email"
		/>
		<Input
			leftIcon="user"
			placeholder="User name"
		/>
		<Input
			leftIcon="lock"
			placeholder="Password"
		/>
		<div className={classnames(`${style.card}__rule`, 'm-b-md')}>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
		</div>
		<Button intent={Intent.SUCCESS} className={classnames(`${style.card}__btn`, 'm-b-md')}>Register Now</Button>
		<Link to="/auth/login">Do you have an account?</Link>
	</div>
)
const Input = (props: IInputGroupProps) => {

	return (
		<InputGroup
			className={classnames(`${style.card}__input`, 'm-b-sm')}
			large
			{...props}
		/>
	)
}
const Registration = () => (
	<>
		<PortraitView />
		<LandscapeView />
	</>
)
export const RegistrationLayout = compose()(Registration)
