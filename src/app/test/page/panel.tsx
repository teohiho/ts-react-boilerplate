import { createMultiPanel } from 'layout/default/createMultiPanel'
import * as React from 'react'

const Panel1View = () => <h1>Panel1</h1>
const Panel2View = () => <h1>Panel2</h1>

export const TestPanel = createMultiPanel([
	{
		render: Panel1View,
		path: '/panel1',
	},
	{
		render: Panel2View,
		path: '/panel2',
	},
])
