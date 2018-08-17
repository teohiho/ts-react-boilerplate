import { Button } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'

const styles = require('../scss/style.scss')

interface ITab {
	id: string
	title: string
}
interface ITabPropsOut {
	tabs: ITab[]
}
interface ITabState {
	selectedId: string
}
interface ITabStateHandler {
	changeId: (id: string) => void
}
interface ITabPropsIn extends ITabPropsOut, ITabState, ITabStateHandler {}
const TabView = ({ selectedId, changeId, tabs }: ITabPropsIn) => (
	<>
		{tabs.map(({ title, id }) => (
			<Button key={id} onClick={() => changeId(id)} className={classnames('tab', { 'tab--selected': selectedId === id })} >{title}</Button>
		))}
	</>
)

const addLeftHandler = withStateHandlers(
	{
		selectedId: '1',
	},
	{
		changeId: () => (id: string) => ({ selectedId: id }),
	},
)
const Tab = compose<ITabPropsIn, ITabPropsOut>(addLeftHandler)(TabView)



const AnimationSampleView = () => (
	<Tab
		tabs={
			[
				{
					id: '1',
					title: 'Tab1',
				},
				{
					id: '2',
					title: 'Tab2',
				},
				{
					id: '3',
					title: 'Tab3',
				},
				{
					id: '4',
					title: 'Tab3',
				},
				{
					id: '5',
					title: 'Tab3',
				},
				{
					id: '66',
					title: 'Tab34214214234324324',
				},
			]
		}
	/>
)
export const AnimationSamplePage = compose(pure)(AnimationSampleView)
