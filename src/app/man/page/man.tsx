import { Alignment, AnchorButton, Button, ButtonGroup, FormGroup, InputGroup, Navbar , Tabs } from '@blueprintjs/core'
import { createTab } from 'com/index'
import * as React from 'react'
import { Motion, spring, TransitionMotion } from 'react-motion'
import { compose, pure, withStateHandlers } from 'recompose'
const style = require('../scss/man.scss')

const SettingPageView = () => (
	<>
		<div className={style.nav}>
			<div className={`${style.nav}__left`}>
				<FormGroup
					helperText="Helper text with details..."
					label="Label A"
					labelFor="text-input"
					labelInfo="(required)"
				>
					<InputGroup id="text-input" className={`${style.nav}__input`} placeholder="Placeholder text" />
				</FormGroup>
			</div>
		</div>
		<br/>
		<ButtonGroup minimal={true} >
			<Button icon="database">Queries</Button>
			<Button icon="function">Functions</Button>
			<AnchorButton rightIcon="caret-down">Options</AnchorButton>
		</ButtonGroup>
	</>
)
// <=====================================================================================>

const styleById = (id: number) => {
	switch (id) {
		case 1: return 0
		default: return id * 100
	}
}

// <=====================================================================================>


interface ITabsState {
	idSelected: number
}
interface ITabsStateHandler {
	changeId: (id: string) => void
}
const idStateHandler = withStateHandlers(
	{
		idSelected: 1,
	},
	{
		changeId: () => (id: number) => ({ idSelected: id }),
	},
)

interface ITab {
	id: number
	title: string
}

interface ITabsPropsOut {
	tabs: ITab[]
}
interface ITabsPropsIn extends ITabsStateHandler, ITabsPropsOut, ITabsState {}

const TabView = ({ changeId, tabs, idSelected }: ITabsPropsIn) => (
	<>
		{tabs.map(({ title, id }) => (
			<button className="demo0-button" key={id} onClick={() => changeId(`${id}`)}>{title}</button>
		))}
		<Motion style={{ x: spring(styleById(idSelected)) }}>
			{({ x }) =>
			// children is a callback which should accept the current value of
			// `style`
			<div className="demo0">
				<div className="demo0-block" style={{
				WebkitTransform: `translate3d(${x}px, 0, 0)`,
				transform: `translate3d(${x}px, 0, 0)`,
				}} />
			</div>
			}
		</Motion>
	</>
)

const Tab = compose<ITabsPropsIn, ITabsPropsOut>(idStateHandler)(TabView)

const DemoAView = () => (
	<>
		<Tab
			tabs={
				[
					{
						id: 0,
						title: 'Tab1',
					},
					{
						id: 1,
						title: 'Tab2',
					},
					{
						id: 2,
						title: 'Tab3',
					},
					{
						id: 3,
						title: 'Tab4',
					},
					{
						id: 4,
						title: 'Tab5',
					},
					{
						id: 5,
						title: 'Tab6',
					},
					{
						id: 6,
						title: 'Tab7',
					},
				]
			}
		/>
	</>
)


const DemoA = compose()(DemoAView)
// <=====================================================================================>
const Special4 = () => (<h1>Abc</h1>)
// <=====================================================================================>
const Special5 = () => (<h1>Abc</h1>)
// <=====================================================================================>

const AddTab = createTab({
	breadcrumbItems: [
		{
			text: 'Grand',
			href: '#',
		},
		{
			text: 'Parent',
			href: '#',
		},
	],
	tabs: [
		{
			id: 'Become a host',
			panel: <DemoA />,
			title: 'Become a host',
		},
		// {
		// 	id: 'Earn credit',
		// 	panel: <Demo />,
		// 	title: 'Earn credit',
		// },
		{
			id: 'Help',
			panel: <SettingPageView />,
			title: 'Help',
		},
		{
			id: 'Sign up',
			panel: <Special4 />,
			title: 'Sign up',
		},
		{
			id: 'Log in',
			panel: <Special5 />,
			title: 'Log in',
		},
	],
})

export const ManPage = compose(pure)(AddTab)
