import { Button, Card, Elevation, H2, H3, IInputGroupProps, InputGroup, Intent } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import MediaQuery from 'react-responsive'
import { compose } from 'recompose'
const style = require('../scss/registration.scss')

const Registration = () => (
	<>
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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</div>
					<Button intent={Intent.SUCCESS} className={style.btn}>Register Now</Button>
				</div>
			</div>
		</MediaQuery>
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
