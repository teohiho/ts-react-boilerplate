import { Motion, TransitionMotion, spring } from 'react-motion'
import { compose, pure, withStateHandlers } from 'recompose'

import React from 'react'
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
export const TabsDemo = compose()(TabsDemoView)
