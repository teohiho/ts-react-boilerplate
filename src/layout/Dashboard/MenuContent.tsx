import { Button } from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure } from 'recompose'

const SlideBar = () => (
	<>
		<div>
			NAVIGATION
		</div>

		<Button icon={'refresh'}>
			Dashboard
		</Button>
	</>
)

const MenuContentView = () => (
	<>
		<SlideBar />
	</>
)

export const MenuContent = compose(pure)(MenuContentView)
