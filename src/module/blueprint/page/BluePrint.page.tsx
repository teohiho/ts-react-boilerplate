import * as React from 'react'
import { compose, pure } from 'recompose'

const BluePrint = () => (
	<>
		<h1>Hello I'm Blue Print </h1>

	</>
)
export const BluePrintPage = compose(pure)(BluePrint)
