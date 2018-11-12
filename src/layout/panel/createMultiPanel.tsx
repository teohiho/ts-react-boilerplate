import { compose, nest } from 'recompose'

import React from 'react'
import { addContainerClassName } from '../default/createContainer'
import { curry } from 'ramda'

const makeGetLayoutFlex = (lengthOfPanel: number) => (index: number) => {
	return lengthOfPanel === 2
				&& (((index === 0) && 10)
					|| 16)
			|| (lengthOfPanel === 3)
				&& 1
			|| 1
}
interface IPanelOptions {
	render: React.ComponentType,
	path: string,

}
export const createMultiPanel = (panelOptions: IPanelOptions[]) => {
	const getLayoutFlex = makeGetLayoutFlex(panelOptions.length)
	const MultiPanelViewList = panelOptions.map(({ render, path }, index) => {
		const BaseComponent = render
		const Layout = (
			<div style={{ flex: getLayoutFlex(index) }}>
				<BaseComponent />
			</div>
		)
		return Layout
	})
	const MultiPanelView = () => <>{MultiPanelViewList}</>
	return compose(addContainerClassName('u-flex--row'))(MultiPanelView)
}
interface ITwoPanelPropsIn {
	children: any,
	panel1: any,
	panel2: any,
}
export const TwoPanel = ({ children, panel1, panel2 }: ITwoPanelPropsIn) => (
	<div className="u-flex--row u-flex--1">
		<div className="u-flex--1 " style={{ flex: 10 }}>
			{panel1}
		</div>
		<div className="u-flex--1" style={{ flex: 16 }}>
			{panel2}
		</div>
	</div>
)
