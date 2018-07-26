import * as React from 'react'
import { compose, pure } from 'recompose'

const DashBoard = () => (
	<div>
		<h1> Hello World </h1>
	</div>
)

export const DashBoardBluePrint = compose(pure)(DashBoard)
