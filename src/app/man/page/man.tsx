import { Alignment, AnchorButton, Button, ButtonGroup, FormGroup, InputGroup, Navbar, Tab , Tabs } from '@blueprintjs/core'
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
			<div className={`${style.nav}__right`}>
				<Tabs id="a">
					<Tab id="b" title="Become a host" panel={<h1>Become a host</h1>} />
					<Tab id="c" title="Earn credit" panel={<h1>Earn credit</h1>} />
					<Tab id="e" title="Help" panel={<h1>Help</h1>} />
					<Tab id="f" title="Sign up" panel={<h1>Sign up</h1>} />
					<Tab id="d" title="Log in" panel={<h1>Log in</h1>} />
					<Tabs.Expander />
				</Tabs>
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

const Special3 = () => (<h1>Abc</h1>)

const openStateHandler = withStateHandlers(
	{
		idSelected: '1',
	},
	{
		changeId: () => (id: string) => ({ idSelected: id }),
		// handleMouseDown: ({ id }) => () => ({ id: !id }),
		// handleTouchStart: ({ id }) => (e: React.TouchEvent<HTMLButtonElement>) => {
		// 	e.preventDefault()
		// 	return { id: !id }
		// },
	},
)
interface IDemoViewPropsOut {}
interface IDemoState {
	idSelected: string
}
interface IDemoHandler {
	changeId: (id: string) => void
	// handleMouseDown: () => void
	// handleTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => void
}
interface IDemoViewPropsIn extends IDemoViewPropsOut, IDemoState, IDemoHandler {}
const DemoView = ({ idSelected, changeId }: IDemoViewPropsIn) => (
	<div>
		<button className="demo0-button"
			onClick={() => changeId('1')}
		>
			Tab1
		</button>
		<button className="demo0-button"
			onClick={() => changeId('2')}
		>
			Tab2
		</button>
		<button className="demo0-button"
			onClick={() => changeId('3')}
		>
			Tab3
		</button>
		<button className="demo0-button"
			onClick={() => changeId('4')}
		>
			Tab4
		</button>

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
	</div>
)
const styleById = (id: string) => {
	switch (id) {
		case '1': return 0
		case '2': return 100
		case '3': return 200
		default: return 300
	}
}
// <=====================================================================================>
const idStateHandler = withStateHandlers(
	([{
			idSelect:'1',
			title:'Tab1',
		},
		{
			idSelect:'2',
			title:'Tab2',
	}]
	),
	{
		changeId: () => (id: string) => ({ idSelect: id }),
	},
)
interface IDemoViewPropsOut {}
interface IDemoState {
	idSelect: string,
	title: string,
}
interface IDemoHandler {
	changeId: (id: string) => void
}
interface IDemoViewPropsIn extends IDemoViewPropsOut, IDemoState, IDemoHandler {}

const DemoViewA = ({ idSelect, changeId }: IDemoViewPropsIn) => (
	<div>
		<button className="demo0-button"
			onClick={() => changeId('1')}
		>
			Tab1
		</button>


		<Motion style={{ x: spring(styleById(idSelect)) }}>
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
	</div>
)

const Demo = compose<IDemoViewPropsIn, IDemoViewPropsOut>(openStateHandler)(DemoView)
const DemoA = compose<IDemoViewPropsIn, IDemoViewPropsOut>(openStateHandler)(DemoViewA)

const Special4 = () => (<h1>Abc</h1>)
const Special5 = () => (<h1>Abc</h1>)

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
		{
			id: 'Earn credit',
			panel: <Demo />,
			title: 'Earn credit',
		},
		{
			id: 'Help',
			panel: <Special3 />,
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
