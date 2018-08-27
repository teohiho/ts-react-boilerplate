import { Button, Card, Elevation, H2, H3, IInputGroupProps, InputGroup, Intent } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
const style = require('../scss/registration.scss')
const PortraitView = () => (
	<MediaQuery orientation="portrait">
			<div className={classnames(`${style.card}__content`, 't-background3', 'u-flex--center', 'p-h-md', 'p-v-md')}>
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
					inputRef={a = () => console.log(a)}
				/>
				<Input
					leftIcon="user"
					placeholder="User name"
				/>
				<Input
					leftIcon="lock"
					placeholder="Password"
				/>
				<Button intent={Intent.SUCCESS} className={style.btn}>Register Now</Button>
			</div>
		</MediaQuery>
)
const LandscapeView = () => (
	<MediaQuery orientation="landscape">
		<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
			<div className={`${style.card}__image`} />
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
				<div className={classnames(`${style.card}__rule`)}>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
				</div>
				<Button intent={Intent.SUCCESS} className={`${style.card}__btn`}>Register Now</Button>
				<Link to="/auth/login">Do you have an account?</Link>
			</div>
		</div>
	</MediaQuery>
)
const Registration = () => (
	<>
		<PortraitView />
		<LandscapeView />
	</>
)
const Input = (props: IInputGroupProps) => (
	<InputGroup
		className={classnames(`${style.card}__input`, 'm-b-sm')}
		large
		{...props}
	/>
)
export const RegistrationLayout = compose()(Registration)
