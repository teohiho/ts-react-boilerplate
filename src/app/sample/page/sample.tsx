import * as React from 'react'
import { compose, pure } from 'recompose'

export const SampleView = () => (
	<>
		<h1>Sample</h1>
	</>
)

export const SamplePage = compose(pure)(SampleView)
