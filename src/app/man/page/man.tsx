import { Alignment, AnchorButton, Button, ButtonGroup, FormGroup, H1, InputGroup , Navbar, Tabs } from '@blueprintjs/core'
import { createTab } from 'com/index'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { Motion, spring, TransitionMotion } from 'react-motion'
import { compose, pure, withStateHandlers } from 'recompose'
const style = require('../scss/man.scss')

// <=====================================================================================>

const BlueprintView = () => (
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

const styleById = (id: number) => {
	switch (id) {
		case 1: return 0
		default: return id * 100
	}
}

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

const TabsDemoView = () => (
	<div className ="demo0">
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
	</div>
)
const TabsDemo = compose()(TabsDemoView)
// <=====================================================================================>
const Test = () => (
	<h1>Hello WOrld</h1>
)
const addTabView = createTabContainer({
	tabs: [
		{
			path: '',
			component: TabsDemo,
			title: 'TabsDemo',
			exact: true,
		},
		{
			path: '/abc',
			component: Test,
			title: 'TabsDemoTest',
		},
	],
	classes: {
		tab: 'transparent',
		tabs: 'transparent',
		body: 'transparent',
	},
})
export const AddTab = compose()(addTabView)
const Body = () => (
	<div className={style.body} >
		<AddTab />
	</div>
)

export const ManPage = compose()(Body)
