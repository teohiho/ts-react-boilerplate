import { compose, nest } from 'recompose'

import { curry } from 'ramda'
import React from 'react'
import { addContainerClassName } from './createContainer'

// TYPE 1ST
interface IPanelOptions {
	render: React.ComponentType,
	path: string,

}

// RUNTIME CODE
const makeGetLayoutFlex = (lengthOfPanel: number) => (index: number) => {
	return lengthOfPanel === 2
				&& (((index === 0) && 10)
					|| 16)
			|| (lengthOfPanel === 3)
				&& 1
			|| 1
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
