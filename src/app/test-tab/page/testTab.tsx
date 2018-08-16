import * as React from 'react'
import { compose, pure } from 'recompose'

const TestTabView = () => (
	<>
		<h1>Hello I'm TestTab</h1>
	</>
)
export const TestTabPage = compose(pure)(TestTabView)
