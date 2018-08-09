import * as React from 'react'
import { compose, pure } from 'recompose'
import { createTab } from 'tpl/tab'
const SampleNoTabView = () => (
	<>
		<h1>Sample</h1>
	</>
)

const withTab = createTab({
	breadcrumbItems: [
		{
			href: '#',
			text: 'Grand',
		},
		{
			href: '#',
			text: 'Parent',
		},
		{
			text: 'Sample',
		},
	],
	RenderComponent: SampleNoTabView,
})

export const SampleNoTab = compose(pure)(withTab)
