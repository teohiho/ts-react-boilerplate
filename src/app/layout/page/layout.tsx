import * as React from 'react'
import { compose, pure } from 'recompose'

const LayoutView = () => (
	<>
		<h1>Hello I'm Layout</h1>
	</>
)
export const LayoutPage = compose(pure)(LayoutView)
