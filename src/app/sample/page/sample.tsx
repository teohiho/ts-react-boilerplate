import { compose, pure } from 'recompose'

import React from 'react'

export const SampleView = () => (
	<>
		<h1>Sample abc</h1>
	</>
)

export const SamplePage = compose(pure)(SampleView)
